import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 92 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_92: CambridgeTest = {
  id: "preliminary-92",
  level: "preliminary",
  no: 92,
  title: "B1 Preliminary · Practice Test 92",
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
                    "CINEMA",
                    "Tickets for children under 12 are half price on Mondays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Young children pay less on Mondays.",
                  "Children can't come on Mondays.",
                  "All tickets are free on Mondays.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Can, I've left my maths book in your bag. Please bring it tomorrow! Efe",
                  ],
                },
                question: "What does Efe want Can to do?",
                options: [
                  "help him with maths",
                  "bring his book tomorrow",
                  "buy a new bag",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Best before: see top of tin.",
                  ],
                },
                question: "Where can you find the date?",
                options: [
                  "on the top of the tin",
                  "on the bottom of the box",
                  "on the receipt",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Selin,",
                    "The art exhibition starts at 6, but come at 5.30 if you want to help set up. Tuna",
                  ],
                },
                question: "What does Tuna suggest?",
                options: [
                  "coming after 6",
                  "not coming",
                  "arriving early to help",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOTEL",
                    "Breakfast is served in the garden when the weather is good.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Breakfast is always in the garden.",
                  "You may eat breakfast outside if it's sunny.",
                  "There's no breakfast in bad weather.",
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
            instruction: "The young people below all want to go on a summer course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Film Making",
                text: "Write and shoot your own short film.",
              },
              {
                title: "Sailing",
                text: "Learn to sail small boats on the sea.",
              },
              {
                title: "Robotics",
                text: "Build and program a robot.",
              },
              {
                title: "Drama",
                text: "Act in a play at the end of the course.",
              },
              {
                title: "Horse Riding",
                text: "Ride horses in the countryside.",
              },
              {
                title: "Bakery",
                text: "Make bread and pastries.",
              },
              {
                title: "Spanish",
                text: "Speak Spanish from the first day.",
              },
              {
                title: "Wildlife",
                text: "Watch birds and animals with experts.",
              },
            ],
            items: [
              {
                text: "Ilgın wants to act on stage.",
                answer: 3,
              },
              {
                text: "Ozan wants to make a short film.",
                answer: 0,
              },
              {
                text: "Duru loves birds.",
                answer: 7,
              },
              {
                text: "Emir wants to build a robot.",
                answer: 2,
              },
              {
                text: "Lina wants to learn to make bread.",
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
              title: "Growing vegetables on a roof",
              paragraphs: [
                "Our school is in the centre of the city, and there isn't much green space. Two years ago, our science teacher had an idea: why not start a garden on the flat roof of the school?",
                "At first, the head teacher wasn't sure. She was worried about safety. But after the school put up high fences around the roof, she agreed.",
                "A group of twenty students now looks after the garden. We grow tomatoes, beans, lettuce and herbs. We water the plants every morning before lessons, and in summer, parents help during the holidays.",
                "The vegetables are used in the school canteen. Many students who didn't like vegetables before now eat them, because they helped to grow them! Next year, we want to add beehives.",
              ],
            },
            items: [
              {
                question: "Why did the teacher want a roof garden?",
                options: [
                  "There wasn't much green space.",
                  "The roof was broken.",
                  "Students asked for one.",
                  "It was cheaper.",
                ],
                answer: 0,
              },
              {
                question: "Why was the head teacher worried?",
                options: [
                  "about money",
                  "about noise",
                  "about safety",
                  "about the weather",
                ],
                answer: 2,
              },
              {
                question: "When do students water the plants?",
                options: [
                  "after school",
                  "only at weekends",
                  "every morning before lessons",
                  "once a week",
                ],
                answer: 2,
              },
              {
                question: "What has changed for some students?",
                options: [
                  "They now eat vegetables.",
                  "They have stopped eating lunch.",
                  "They don't like gardening.",
                  "They want to be farmers.",
                ],
                answer: 0,
              },
              {
                question: "What is the plan for next year?",
                options: [
                  "building a pool",
                  "selling vegetables",
                  "closing the garden",
                  "adding beehives",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A town without cars",
            text: [
              "On a small island in Croatia, cars aren't allowed at all. {1} Visitors leave their cars on the mainland and take a boat.",
              "Most people get around on foot or by bicycle. {2} Goods are carried by small electric carts.",
              "The rule was introduced to protect the island's old streets. {3} Large vehicles would damage them.",
              "Some visitors find it strange at first. {4} After a day or two, most of them love the peace and quiet.",
              "Local children play safely in the streets. {5} Parents say it's the best place in the world to grow up.",
            ],
            sentences: [
              "The island has a big airport.",
              "It's one of the few places in Europe like this.",
              "They aren't used to hearing no traffic.",
              "Bicycles are not allowed.",
              "The island is small, so you can walk everywhere.",
              "Everyone drives on the island.",
              "They're very narrow and made of stone.",
              "They don't have to worry about cars.",
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
            title: "Chocolate",
            text: [
              "Chocolate is made from the beans of the cacao tree, which grows in hot, wet countries near the equator. Most of the world's cacao comes from West Africa.",
              "The beans grow inside large fruits called pods. Farmers cut the pods open and take out the beans. The beans are then left to {1} for a few days, which gives them their flavour.",
              "Next, the beans are dried in the sun and {2} to factories. There, they are roasted and ground into a thick paste. Sugar and milk are added to make milk chocolate. People in Central America were drinking chocolate more than 3,000 years ago. They thought it was a gift from the gods and sometimes used the beans as {3}. Chocolate became {4} in Europe in the seventeenth century. At first, only rich people could {5} it. Today, chocolate is one of the most popular foods in the world. However, many cacao farmers are very poor. Some companies now pay farmers a {6} price for their beans.",
            ],
            gaps: [
              {
                options: [
                  "restful",
                  "rest",
                  "restless",
                  "rested",
                ],
                answer: 1,
              },
              {
                options: [
                  "send",
                  "sending",
                  "sender",
                  "sent",
                ],
                answer: 3,
              },
              {
                options: [
                  "money",
                  "monetary",
                  "moneyed",
                  "monetise",
                ],
                answer: 0,
              },
              {
                options: [
                  "popularity",
                  "popularly",
                  "popular",
                  "populate",
                ],
                answer: 2,
              },
              {
                options: [
                  "affordable",
                  "affording",
                  "afford",
                  "afforded",
                ],
                answer: 2,
              },
              {
                options: [
                  "fair",
                  "fairly",
                  "fairness",
                  "unfairly",
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
            title: "A surprise for my teacher",
            text: [
              "It was our English teacher's last day before she moved to another city. She had taught our class {1} three years, and everyone loved her.",
              "We decided to organise a surprise. Each student wrote a short message, and my best friend made a big card. Some students baked cakes, and others decorated the classroom {2} balloons.",
              "When the teacher walked in, we all shouted 'Surprise!' She was so shocked that she couldn't say anything {3} a few seconds. Then she started laughing and crying at the same time. We gave her the card and sang a song we had practised. She read every message, {4} took a long time because there were thirty of them! Before she left, she told us that we were the {5} class she'd ever taught. I don't know if that's true, but it made us feel very proud. We still send her emails, and she always writes {6}.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "with",
              ],
              [
                "for",
              ],
              [
                "which",
              ],
              [
                "best",
                "nicest",
                "kindest",
              ],
              [
                "back",
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
              subject: "A birthday party",
              lines: [
                "I'm having a birthday party next Saturday! [Reply]",
                "What kind of party should I have? [Suggest]",
                "What food should I make? [Give ideas]",
                "Will you be able to come? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThanks for telling me! I'd love to celebrate with you.\n\nI think you should have a garden party if the weather is good. You could put lights in the trees and play music. If it rains, a film night at your house would also be fun.\n\nFor food, you could make pizzas and let everyone choose their own toppings. Small sandwiches and a big chocolate cake would be great too. Don't forget some fruit and cold drinks!\n\nI'll definitely be there. I have a football match in the morning, but I'll be free by three. Shall I bring anything?\n\nSee you soon,\nYağmur",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A person I admire",
              lines: [
                "Who do you admire?",
                "What has this person done?",
                "What can we learn from them?",
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
            sample: "My neighbour, Mrs Aydın\n\nThe person I admire most is my neighbour, Mrs Aydın. She is seventy-five years old, but she has more energy than anyone I know.\n\nWhen she retired from her job as a nurse, she didn't stay at home. Instead, she started a reading group for old people who live alone. Every Wednesday, around fifteen people meet in her living room to talk about books and drink tea. She also helps children in our street with their homework.\n\nI think we can learn a lot from Mrs Aydın. She shows that it's never too late to help others, and that small actions can make a big difference to people's lives. I hope I'll be like her when I'm older.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'As soon as I opened the door, I knew someone had been in my room.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "As soon as I opened the door, I knew someone had been in my room. My books were on the floor, and my bed was a mess. The window was wide open.\n\nI was frightened. I checked my desk, but my laptop was still there. Nothing seemed to be missing. Then I heard a strange noise coming from under the bed.\n\nI slowly bent down and looked. Two bright yellow eyes looked back at me. It was a cat! It must have climbed in through the window and knocked everything over while it was exploring.\n\nThe cat was very friendly and started purring. It had no collar, so I gave it some milk. Now it visits me every evening.",
          },
        },
      ],
    },
  ],
};
