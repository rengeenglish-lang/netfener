import type { CambridgeTest } from "./types";

/** A2 Key practice test 56 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_56: CambridgeTest = {
  id: "key-56",
  level: "key",
  no: 56,
  title: "A2 Key · Practice Test 56",
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
                    "SCHOOL BUS",
                    "From Monday, the bus will stop outside the library, not the post office.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The bus stop is moving.",
                  "The bus will not run on Monday.",
                  "The library is closing.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Amy, I've got two tickets for the circus tonight. Mum can't come. Do you want to come with me? Lily",
                  ],
                },
                question: "What is Lily doing?",
                options: [
                  "asking Amy for a ticket",
                  "inviting Amy to go out",
                  "telling Amy her mum is ill",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "ICE CREAM VAN",
                    "Cash only. Sorry, no cards.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can't pay with a card.",
                  "Ice cream is free.",
                  "You must pay by card.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "The school trip has been changed to Thursday because of the weather forecast. Please tell your parents. Mr Grey",
                  ],
                },
                question: "Why has the trip changed?",
                options: [
                  "The bus is broken.",
                  "The teacher is busy.",
                  "The weather may be bad.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "FARM",
                    "Visitors must wash their hands after touching the animals.",
                  ],
                },
                question: "What should visitors do?",
                options: [
                  "not touch the animals",
                  "clean their hands",
                  "wear gloves",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "TRAMPOLINE PARK",
                    "Two hours of jumping for £8!",
                    "Socks must be worn. Special socks for sale.",
                  ],
                },
                question: "What do we know about the trampoline park?",
                options: [
                  "It costs £8 per hour.",
                  "You need to wear socks.",
                  "Shoes must be worn.",
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
                title: "Isaac",
                text: "I'm a keen birdwatcher. I keep a diary of every bird I see. My favourite place is a nature reserve near the coast. Last winter, I saw a rare owl there and reported it to a wildlife group. They were very excited because nobody had seen one in the area for twenty years.",
              },
              {
                title: "Lola",
                text: "I love doing magic tricks. My grandfather was a magician, and he taught me lots of tricks before he died. I perform at my school's talent show every year. My favourite trick is pulling a long scarf out of an empty box. People always gasp!",
              },
              {
                title: "Ben",
                text: "My hobby is basketball. I'm not very tall, but I'm fast and good at passing. I play for my school team and for a club. Last year, I went to a basketball camp in Spain for two weeks. I learned a lot from the coaches there, and I made friends from different countries.",
              },
            ],
            items: [
              {
                text: "saw something unusual?",
                answer: 0,
              },
              {
                text: "writes down what they see?",
                answer: 0,
              },
              {
                text: "learned from a relative?",
                answer: 1,
              },
              {
                text: "performs once a year?",
                answer: 1,
              },
              {
                text: "has a skill that helps them despite a disadvantage?",
                answer: 2,
              },
              {
                text: "met people from other countries?",
                answer: 2,
              },
              {
                text: "gave information to an organisation?",
                answer: 0,
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
              title: "The girl who designs apps",
              paragraphs: [
                "Fifteen-year-old Zara Ahmed has designed an app that helps students organise their homework. More than ten thousand people have downloaded it.",
                "'I always forgot my homework,' laughs Zara. 'So I decided to make something to help me. Then my friends wanted to use it too.'",
                "Zara learned to code at a free online course. 'It was hard at first,' she says. 'But I practised every evening. It took me six months to make the app.'",
                "Last month, Zara won a national technology prize. 'I want to encourage more girls to study computer science,' she says. 'Many girls think it's only for boys. But it's for everyone!'",
              ],
            },
            items: [
              {
                question: "What does Zara's app do?",
                options: [
                  "It teaches students to code.",
                  "It is a game.",
                  "It helps students with their homework plans.",
                ],
                answer: 2,
              },
              {
                question: "Why did Zara make the app?",
                options: [
                  "She had a problem remembering homework.",
                  "Her teacher asked her to.",
                  "She wanted to make money.",
                ],
                answer: 0,
              },
              {
                question: "How did Zara learn to code?",
                options: [
                  "at school",
                  "on an online course",
                  "from her father",
                ],
                answer: 1,
              },
              {
                question: "How long did it take to make the app?",
                options: [
                  "half a year",
                  "one month",
                  "two years",
                ],
                answer: 0,
              },
              {
                question: "What does Zara want to do?",
                options: [
                  "start a big company",
                  "become a teacher",
                  "get more girls interested in computer science",
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
            title: "The Sahara Desert",
            text: [
              "The Sahara is the largest hot desert in the world. It covers most of North Africa and is about the same {1} as the USA.",
              "Most people think the Sahara is just sand, but it also has mountains, rocks and dry lakes. In the day, it can be more than fifty degrees, but at night it can {2} very cold.",
              "Very few people live in the Sahara. Some people, called nomads, travel across the desert with their camels. Camels are perfect for the desert because they can go for a long time {3} water. Animals like snakes, scorpions and foxes also live there. Thousands of years ago, the Sahara wasn't a desert. It was green and had lots of rivers and lakes. Scientists have {4} paintings on rocks that show people swimming! The climate {5} slowly over thousands of years. Today, many tourists visit the Sahara to see the amazing {6}.",
            ],
            gaps: [
              {
                options: [
                  "big",
                  "large",
                  "size",
                ],
                answer: 2,
              },
              {
                options: [
                  "make",
                  "get",
                  "have",
                ],
                answer: 1,
              },
              {
                options: [
                  "except",
                  "without",
                  "with",
                ],
                answer: 1,
              },
              {
                options: [
                  "looked",
                  "watched",
                  "found",
                ],
                answer: 2,
              },
              {
                options: [
                  "changed",
                  "moved",
                  "became",
                ],
                answer: 0,
              },
              {
                options: [
                  "views",
                  "scenery",
                  "sights",
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
              "Hi Megan,",
              "I'm writing to ask you {1} favour. I'm going away for the weekend, and I need someone to feed my rabbit.",
              "Could you come to my house on Saturday and Sunday morning? You just need to give him some food and fresh water. It only takes {2} five minutes.",
              "The food is in a bag {3} the back door. My neighbour has a key, so you can get it from her. I'll bring you a present {4} my trip! Let me know {5} you can help. Thanks {6} much!",
              "Love,",
              "Isla",
            ],
            answers: [
              [
                "a",
              ],
              [
                "about",
              ],
              [
                "by",
                "behind",
                "near",
                "next",
                "at",
              ],
              [
                "from",
              ],
              [
                "if",
                "whether",
              ],
              [
                "very",
                "so",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You lost your bag on the bus. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say what was in your bag.",
              "Say what you did.",
              "Say how you feel now.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nYesterday I left my bag on the bus. My books and my phone were in it. I called the bus company and they found it! I feel really happy and relieved now.\n\nBye,\nNehir",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🚴🌳",
                label: "1",
              },
              {
                e: "🚴⛈️🌧️",
                label: "2",
              },
              {
                e: "👦🏠🍵😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday, Oliver went for a long bike ride in the countryside. The weather was sunny when he left. But after an hour, dark clouds appeared and it started to rain heavily. Oliver got completely wet and cold. He cycled home as fast as he could. His mum made him a hot drink, and he soon felt warm again.",
          },
        },
      ],
    },
  ],
};
