import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 76 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_76: CambridgeTest = {
  id: "preliminary-76",
  level: "preliminary",
  no: 76,
  title: "B1 Preliminary · Practice Test 76",
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
                    "Students can now pay for school lunches online.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lunches are free.",
                  "Lunches can be paid for on the internet.",
                  "The canteen is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, the shop has run out of milk. I'll get some tomorrow. Mum",
                  ],
                },
                question: "What does Mum tell Jo?",
                options: [
                  "She has bought milk.",
                  "She couldn't buy milk today.",
                  "The shop is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Wear protective glasses when using.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You don't need glasses.",
                  "Use it without protection.",
                  "You should protect your eyes.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "The football tournament has been moved to next month because of the bad weather. Coach",
                  ],
                },
                question: "Why has the tournament been moved?",
                options: [
                  "the weather",
                  "the coach is ill",
                  "the pitch is closed",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Please don't touch the paintings.",
                  ],
                },
                question: "Where would you see this notice?",
                options: [
                  "in a supermarket",
                  "in a gallery shop",
                  "in a park",
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
            instruction: "The young people below all want to watch a sports event. Read the descriptions of eight events. Decide which event would be the most suitable for each person.",
            options: [
              {
                title: "Horse Show",
                text: "Watch horses jump over fences.",
              },
              {
                title: "Rugby Match",
                text: "An exciting match between two local teams.",
              },
              {
                title: "Diving Competition",
                text: "Divers jump from high boards.",
              },
              {
                title: "Boxing Match",
                text: "Two champions fight for a title.",
              },
              {
                title: "Skateboard Contest",
                text: "Young skaters do amazing tricks.",
              },
              {
                title: "Golf Tournament",
                text: "Top players compete on a beautiful course.",
              },
              {
                title: "Rowing Race",
                text: "Teams race boats on the river.",
              },
              {
                title: "Ice Hockey",
                text: "A fast game on ice.",
              },
            ],
            items: [
              {
                text: "Kerem loves horses.",
                answer: 0,
              },
              {
                text: "Lale wants to see skateboarding tricks.",
                answer: 4,
              },
              {
                text: "Ece loves watching boats.",
                answer: 6,
              },
              {
                text: "Mert loves fast games on ice.",
                answer: 7,
              },
              {
                text: "Selin loves watching divers.",
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
              title: "My year as a volunteer",
              paragraphs: [
                "After finishing school, I spent a year volunteering in Nepal. I taught English at a small school in a mountain village.",
                "The village was very remote. There were no roads, so I had to walk for two days to get there. There was no electricity, and water came from a well.",
                "The children were wonderful. They were so excited to learn, and they always arrived at school early. Many of them walked for an hour to get there. I taught them English, and they taught me some Nepali.",
                "Living in the village was a big change for me. I learned to live without many of the things I was used to. But I was very happy there. The people were kind and generous. When I left, the whole village came to say goodbye. I cried. I want to go back one day.",
              ],
            },
            items: [
              {
                question: "What did the writer do in Nepal?",
                options: [
                  "built houses",
                  "worked in a hospital",
                  "studied",
                  "taught English",
                ],
                answer: 3,
              },
              {
                question: "How did the writer get to the village?",
                options: [
                  "by car",
                  "by walking",
                  "by bus",
                  "by plane",
                ],
                answer: 1,
              },
              {
                question: "What does the writer say about the children?",
                options: [
                  "They were excited to learn.",
                  "They didn't like school.",
                  "They were always late.",
                  "They spoke English.",
                ],
                answer: 0,
              },
              {
                question: "What did the writer learn?",
                options: [
                  "to drive",
                  "to cook",
                  "to live without many things",
                  "to speak Spanish",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel when she left?",
                options: [
                  "happy",
                  "sad",
                  "relieved",
                  "bored",
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
            title: "A library of things",
            text: [
              "In some cities, there are libraries where you can borrow things instead of books. {1} You can borrow tools, kitchen equipment, camping gear and even musical instruments.",
              "The idea started because people buy things they only use a few times. {2} For example, many people buy a drill but only use it once or twice.",
              "At a library of things, you pay a small fee to borrow what you need. {3} When you've finished, you return it for someone else to use.",
              "These libraries are good for the environment. {4} They also help people save money.",
              "Libraries of things are becoming more popular around the world. {5} Many of them also run workshops to teach people how to repair things.",
            ],
            sentences: [
              "You can only borrow books.",
              "They're called libraries of things.",
              "Fewer things need to be made, so less waste is produced.",
              "Nobody uses these libraries.",
              "Then the things sit in cupboards for years.",
              "Everything is very expensive.",
              "It's much cheaper than buying something new.",
              "There are now hundreds of them in Europe and North America.",
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
            title: "Penguins",
            text: [
              "Penguins are birds that can't fly. Instead, they are amazing swimmers. They use their wings like {1} to move through the water.",
              "There are eighteen species of penguin. They all live in the Southern Hemisphere. The largest is the Emperor penguin, which can be more than one metre tall.",
              "Emperor penguins live in Antarctica, the coldest place on Earth. To keep warm, they stand very close {2} each other in large groups. The males look after the eggs during the long, dark winter. They don't eat anything for about two months! Penguins communicate with each other using {3}. Each penguin has its own call, so families can find each other in big groups. Sadly, many penguin species are {4} because of climate change. The ice they need is melting, and there are fewer fish in the sea. Scientists are working to {5} penguins and their {6}.",
            ],
            gaps: [
              {
                options: [
                  "flip",
                  "flipping",
                  "flippers",
                  "flipped",
                ],
                answer: 2,
              },
              {
                options: [
                  "to",
                  "with",
                  "at",
                  "for",
                ],
                answer: 0,
              },
              {
                options: [
                  "calling",
                  "called",
                  "caller",
                  "calls",
                ],
                answer: 3,
              },
              {
                options: [
                  "danger",
                  "endangered",
                  "dangerous",
                  "dangerously",
                ],
                answer: 1,
              },
              {
                options: [
                  "protect",
                  "protection",
                  "protective",
                  "protected",
                ],
                answer: 0,
              },
              {
                options: [
                  "habit",
                  "habitat up",
                  "habitats",
                  "inhabit",
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
            title: "My first part-time job",
            text: [
              "When I was sixteen, I got a part-time job at a supermarket. I worked {1} Saturdays and Sundays, stacking shelves and helping customers.",
              "The first day was very tiring. I was on my feet for eight hours, and my back hurt at the end of the day. But the other staff were friendly and helped me learn what to do.",
              "My favourite part of the job was helping customers. Many of them were old people {2} needed help finding things. One old lady came every Saturday and always gave me a sweet! I earned about £100 every weekend. I saved most of it {3} a new laptop. After six months, I had enough money to buy {4}. The job taught me a lot about hard work and responsibility. I also learned how to talk to people {5} different ages. I'd recommend getting a part-time job to {6} teenager.",
            ],
            answers: [
              [
                "on",
                "at",
              ],
              [
                "who",
                "that",
              ],
              [
                "for",
              ],
              [
                "it",
                "one",
              ],
              [
                "of",
              ],
              [
                "any",
                "every",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "A trip to the zoo",
              lines: [
                "My class is going to the zoo next week! [Fun!]",
                "What's your favourite animal? [Tell Kim]",
                "What should I look for at the zoo? [Give advice]",
                "Have you been to a zoo? [Tell Kim]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat sounds like a lot of fun! I love zoos.\n\nMy favourite animal is the tiger. I think they're beautiful and powerful. I also love penguins, because they're so funny when they walk!\n\nAt the zoo, you should look for the feeding times, because it's exciting to watch the animals eat. You should also visit the reptile house to see snakes and crocodiles. Don't forget to take your camera!\n\nYes, I've been to the zoo many times. My favourite was a trip to the city zoo last year, where I saw a baby elephant. It was so cute!\n\nBye,\nYiğit",
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
                "Who do you admire most?",
                "What have they done?",
                "Why do you admire them?",
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
            sample: "My hero, my dad\n\nThe person I admire most is my dad. He works as a firefighter and has saved many people's lives.\n\nMy dad has been a firefighter for twenty years. He works long hours, often at night, and his job can be very dangerous. Once, he rescued a family from a burning house. He was in hospital for a week afterwards, but he said he'd do it again.\n\nI admire him because he's brave and always thinks of others first. Even when he's tired after work, he always has time for me. He's taught me to be kind and to help people whenever I can. I'm very proud of him.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The note was hidden under Tom's pillow.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The note was hidden under Tom's pillow. It said: 'Look in the garden shed.' Tom didn't know who had written it.\n\nHe went outside and opened the shed door. Inside, there was another note: 'Look under the big tree.' Tom ran to the tree at the end of the garden.\n\nUnder the tree, there was a small box. Inside the box, there was a key and a final note: 'Open the garage.' Tom ran to the garage and used the key to open it.\n\nInside the garage, there was a brand new bike! His parents were standing next to it, smiling. 'Happy birthday!' they said. Tom couldn't believe it.",
          },
        },
      ],
    },
  ],
};
