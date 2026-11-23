import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 95 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_95: CambridgeTest = {
  id: "preliminary-95",
  level: "preliminary",
  no: 95,
  title: "B1 Preliminary · Practice Test 95",
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
                    "SHOP",
                    "We will be closed on 1st May for a national holiday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop opens late on 1st May.",
                  "There's a sale on 1st May.",
                  "The shop won't open on 1st May.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Irem, I've finished painting your bedroom. It's dry now, so you can put your things back. Dad",
                  ],
                },
                question: "What can Irem do now?",
                options: [
                  "help her dad paint",
                  "move her things back into her room",
                  "choose a colour",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for children under 3. Contains small parts.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It's for babies.",
                  "Very young children shouldn't play with it.",
                  "It has no small parts.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ozan,",
                    "My computer is broken, so I'll send you the project tomorrow from school. Eren",
                  ],
                },
                question: "Why will Eren send the project tomorrow?",
                options: [
                  "He hasn't started it.",
                  "He's on holiday.",
                  "His computer isn't working.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BEACH",
                    "Lifeguards are on duty from 9 a.m. to 6 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are lifeguards during the day.",
                  "There are no lifeguards.",
                  "Lifeguards work at night.",
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
            instruction: "The young people below all want to go to a restaurant. Read the descriptions of eight restaurants. Decide which restaurant would be the most suitable for each person.",
            options: [
              {
                title: "Pasta Palace",
                text: "Fresh Italian pasta.",
              },
              {
                title: "Green Leaf",
                text: "Only vegetarian food.",
              },
              {
                title: "Sushi Bar",
                text: "Japanese sushi and noodles.",
              },
              {
                title: "Burger Shack",
                text: "Big burgers and chips.",
              },
              {
                title: "Taco Town",
                text: "Mexican food with spicy sauces.",
              },
              {
                title: "The Fish House",
                text: "Fresh fish by the harbour.",
              },
              {
                title: "Sweet Dreams",
                text: "Cakes, desserts and ice cream.",
              },
              {
                title: "Kebab Corner",
                text: "Traditional Turkish kebabs.",
              },
            ],
            items: [
              {
                text: "Ali loves spicy Mexican food.",
                answer: 4,
              },
              {
                text: "Beren doesn't eat meat.",
                answer: 1,
              },
              {
                text: "Cem wants to eat sushi.",
                answer: 2,
              },
              {
                text: "Derin only wants dessert.",
                answer: 6,
              },
              {
                text: "Elçin wants fresh fish.",
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
              title: "Running my first marathon",
              paragraphs: [
                "Two years ago, I couldn't run more than one kilometre without stopping. Last month, I finished my first marathon: forty-two kilometres!",
                "I started running because I wanted to get fitter. At first, I ran three times a week for twenty minutes. Slowly, I increased the distance. A friend told me about a running club, and I joined it.",
                "The club members gave me lots of advice about training, food and shoes. They also kept me going when I wanted to give up. Training for the marathon took six months.",
                "On the day of the race, I was very nervous. The last ten kilometres were extremely hard, and my legs hurt a lot. But when I crossed the finish line, I felt incredible. My time wasn't fast, but I didn't care. I'd done it!",
              ],
            },
            items: [
              {
                question: "What could the writer do two years ago?",
                options: [
                  "run one kilometre",
                  "run a marathon",
                  "run ten kilometres",
                  "nothing",
                ],
                answer: 0,
              },
              {
                question: "Why did the writer start running?",
                options: [
                  "to win races",
                  "to make friends",
                  "to lose a bet",
                  "to get fitter",
                ],
                answer: 3,
              },
              {
                question: "How did the club help?",
                options: [
                  "They paid for the race.",
                  "They gave advice and encouragement.",
                  "They ran the race for him.",
                  "They sold him shoes.",
                ],
                answer: 1,
              },
              {
                question: "How long did the training take?",
                options: [
                  "six months",
                  "two years",
                  "one month",
                  "six weeks",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel at the end?",
                options: [
                  "disappointed",
                  "bored",
                  "incredible",
                  "angry",
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
            title: "A hotel for bees",
            text: [
              "In some cities, people are building small 'hotels' for wild bees. {1} They are made from wood, bamboo and old bricks.",
              "Most people think of honey bees when they think of bees. {2} But there are hundreds of other kinds of wild bees.",
              "Many wild bees don't live in big groups. {3} They need small holes to lay their eggs in.",
              "In cities, it's hard for them to find these places. {4} Bee hotels give them somewhere safe to live.",
              "Bee hotels are easy to make at home. {5} You just need to put them in a sunny place near some flowers.",
            ],
            sentences: [
              "Many schools have made them as projects.",
              "These bees live together and make honey.",
              "Bee hotels are very expensive.",
              "They look like small wooden boxes full of tubes.",
              "There are too many buildings and roads.",
              "Bees prefer cold, dark places.",
              "They live alone instead.",
              "Wild bees don't need homes.",
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
            title: "The Great Wall of China",
            text: [
              "The Great Wall of China is one of the most famous buildings in the world. It is actually not one wall, but many walls that were built over more than two thousand years.",
              "The first walls were built to {1} China from enemies in the north. Later, emperors joined the walls together and made them longer and stronger.",
              "The wall is more than 20,000 kilometres long, if you include all its parts. It crosses mountains, deserts and grasslands. Millions of people helped to build it, and many of them died during the {2}. The wall had towers where soldiers could watch for enemies. If they saw danger, they lit fires to send {3} to other towers. Today, the Great Wall is a popular tourist {4}. More than ten million people visit it every year. Some parts are in very good condition, but others are {5} because of the weather and visitors. The Chinese government is now working to {6} the most damaged parts.",
            ],
            gaps: [
              {
                options: [
                  "protection",
                  "protective",
                  "protect",
                  "protector",
                ],
                answer: 2,
              },
              {
                options: [
                  "construct",
                  "constructive",
                  "construction",
                  "constructed",
                ],
                answer: 2,
              },
              {
                options: [
                  "messages",
                  "message",
                  "messaging",
                  "messaged",
                ],
                answer: 0,
              },
              {
                options: [
                  "attract",
                  "attractive",
                  "attracted",
                  "attraction",
                ],
                answer: 3,
              },
              {
                options: [
                  "disappear",
                  "disappearing",
                  "disappeared",
                  "disappearance",
                ],
                answer: 1,
              },
              {
                options: [
                  "repair",
                  "repaired",
                  "repairing",
                  "repairable",
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
            title: "Our class newspaper",
            text: [
              "This year, our class started a newspaper. It comes {1} once a month, and every student in the class writes something for it.",
              "There are sections on school news, sport, film reviews and jokes. My job is to interview teachers. Last month, I interviewed our PE teacher, {2} told me she used to be a professional volleyball player!",
              "At first, only our parents read the newspaper. But now, students in other classes are asking {3} copies too. We print fifty copies each month and put them in the library. Making the newspaper is a lot of work. We have to check every article for mistakes {4} we print it. Sometimes we argue about which stories to include. But it's also great fun, and I've learned a lot about writing. Next month, we're going to interview the head teacher. I'm a {5} nervous about it! I've already prepared all my questions, so I hope it {6} go well.",
            ],
            answers: [
              [
                "out",
              ],
              [
                "who",
              ],
              [
                "for",
              ],
              [
                "before",
              ],
              [
                "bit",
                "little",
              ],
              [
                "will",
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
              subject: "Moving house",
              lines: [
                "We're moving to a new house next month. [Reply]",
                "Have you ever moved house? [Tell Chris]",
                "How can I make my new room nice? [Give ideas]",
                "Can you help on moving day? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nWow, that's big news! I hope the new house is lovely.\n\nI moved house when I was nine. I was sad to leave my old friends, but our new house was bigger, and I got my own bedroom for the first time. I made new friends very quickly.\n\nTo make your new room nice, you could put up posters of your favourite bands and add some plants. Fairy lights look great too. You could also choose a new colour for the walls if your parents agree.\n\nOf course I'll help on moving day. I'm quite strong, so I can carry boxes! Just tell me the date and time.\n\nBest wishes,\nAybars",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A festival in my country",
              lines: [
                "Describe a festival that's celebrated in your country.",
                "What do people do?",
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
            sample: "Children's Day in Turkey\n\nEvery year on 23rd April, Turkey celebrates National Sovereignty and Children's Day. It's a very special day for young people, and schools are closed.\n\nOn this day, children take part in parades, dance shows and concerts. Many towns put up flags and decorations. In some cities, children even take the places of politicians and the mayor for a day. Children from other countries are also invited to stay with Turkish families and perform traditional dances.\n\nI enjoy this festival because it celebrates children and peace. When I was younger, I danced in a show at my school, and my whole family came to watch. It's a day full of music, colour and happiness, and everyone is in a good mood.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'I had never seen so much snow in my life.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "I had never seen so much snow in my life. When I opened the curtains that morning, the whole street was white, and the cars had disappeared under the snow.\n\nThe radio said that all the schools were closed. My brother and I cheered and quickly put on our coats, hats and gloves. Outside, the snow came up to our knees.\n\nWe built the biggest snowman in the street and had a snowball fight with the neighbours' children. Then our dad brought out an old sledge, and we spent hours sliding down the hill in the park.\n\nWhen we got home, our faces were red and our feet were frozen. Mum made us hot soup, and we sat by the fire. It was the best day of the winter.",
          },
        },
      ],
    },
  ],
};
