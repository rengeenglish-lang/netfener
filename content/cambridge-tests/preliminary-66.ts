import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 66 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_66: CambridgeTest = {
  id: "preliminary-66",
  level: "preliminary",
  no: 66,
  title: "B1 Preliminary · Practice Test 66",
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
                    "The water fountains on the first floor are not working. Please use the ones in the canteen.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students should get water from a different place.",
                  "The canteen is closed.",
                  "There's no water in school.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Tom, the football match has been cancelled because of the rain. See you next week. Coach",
                  ],
                },
                question: "Why was the match cancelled?",
                options: [
                  "because the coach is ill",
                  "because the pitch is closed",
                  "because of the weather",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not leave in direct sunlight.",
                    "May melt in hot temperatures.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Put it in the sun.",
                  "Keep it out of the sun.",
                  "It won't melt.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "Can you bring your guitar to the party on Saturday? Everyone wants to hear you play! Emma",
                  ],
                },
                question: "What does Emma want Lucy to do?",
                options: [
                  "buy a guitar",
                  "bring her guitar",
                  "teach guitar",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Large bags are not allowed in the galleries. Please use the lockers.",
                  ],
                },
                question: "What should visitors do with large bags?",
                options: [
                  "carry them",
                  "leave them outside",
                  "put them in lockers",
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
            instruction: "The young people below all want to visit a website. Read the descriptions of eight websites. Decide which website would be the most suitable for each person.",
            options: [
              {
                title: "Travel Tips",
                text: "Advice for young travellers on a budget.",
              },
              {
                title: "Learn to Code",
                text: "Free coding courses for beginners.",
              },
              {
                title: "Healthy Living",
                text: "Tips on fitness, food and sleep.",
              },
              {
                title: "Music World",
                text: "Reviews and news about music.",
              },
              {
                title: "Book Lovers",
                text: "Book reviews and recommendations.",
              },
              {
                title: "Pet Care",
                text: "Advice on looking after pets.",
              },
              {
                title: "Art Studio",
                text: "Online drawing and painting lessons.",
              },
              {
                title: "Science Facts",
                text: "Interesting facts about science and nature.",
              },
            ],
            items: [
              {
                text: "Can wants to learn to make apps.",
                answer: 1,
              },
              {
                text: "Selin is planning a cheap holiday.",
                answer: 0,
              },
              {
                text: "Mert wants to learn to draw.",
                answer: 6,
              },
              {
                text: "Elif has a new puppy.",
                answer: 5,
              },
              {
                text: "Burak wants to get fitter and eat better.",
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
              title: "A month without social media",
              paragraphs: [
                "Last month, I decided to stop using social media for thirty days. I'd noticed that I was spending more than four hours a day on my phone, and I wasn't happy.",
                "The first week was very difficult. I kept reaching for my phone without thinking. I felt bored and worried that I was missing important news from my friends.",
                "In the second week, things started to change. I had more free time, so I started reading books again. I also went for walks and spent more time with my family. I was sleeping better too.",
                "By the end of the month, I felt much happier and more relaxed. I've started using social media again, but only for thirty minutes a day. I've realised that real life is much more interesting than life on a screen.",
              ],
            },
            items: [
              {
                question: "Why did the writer stop using social media?",
                options: [
                  "Her parents told her to.",
                  "Her phone broke.",
                  "She was spending too much time on it.",
                  "She was bored of it.",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel in the first week?",
                options: [
                  "bored and worried",
                  "happy",
                  "relaxed",
                  "excited",
                ],
                answer: 0,
              },
              {
                question: "What did the writer start doing in the second week?",
                options: [
                  "playing games",
                  "watching TV",
                  "shopping",
                  "reading books",
                ],
                answer: 3,
              },
              {
                question: "How does the writer use social media now?",
                options: [
                  "as much as before",
                  "for a short time each day",
                  "not at all",
                  "only at weekends",
                ],
                answer: 1,
              },
              {
                question: "What has the writer realised?",
                options: [
                  "Real life is more interesting.",
                  "Social media is very useful.",
                  "She needs a new phone.",
                  "She should use social media more.",
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
            title: "A church made of glass",
            text: [
              "In the USA, there's a church made almost entirely of glass. {1} It's called the Crystal Cathedral.",
              "The church was designed by an architect called Philip Johnson. {2} It took four years to build and was finished in 1980.",
              "The walls and roof are made from more than 10,000 pieces of glass. {3} When the sun shines, the inside is filled with light.",
              "The church can hold almost 3,000 people. {4} It also has a huge organ with more than 16,000 pipes.",
              "Today, the building is used for concerts and special events. {5} Visitors come from all over the world to see it.",
            ],
            sentences: [
              "The church is very small.",
              "It's one of the largest churches in America.",
              "The church is very dark inside.",
              "He wanted to create a building full of natural light.",
              "It's one of the most unusual churches in the world.",
              "It's become a famous tourist attraction.",
              "The church is made of wood.",
              "They are held together by a white steel frame.",
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
            title: "Recycling",
            text: [
              "Recycling means turning waste into new products. It's an important way to {1} the amount of rubbish we produce.",
              "Many things can be recycled, like paper, glass, plastic and metal. When we recycle, we save energy and natural {2}. For example, making a can from recycled metal uses much less energy than making a new one.",
              "However, not everything can be recycled. Some plastics are very difficult to recycle, and they often end up in the ocean. Every year, millions of tonnes of plastic {3} the sea, harming fish and other marine animals. To reduce plastic waste, we can use {4} bags and bottles. We can also buy products with less packaging. Some countries have introduced laws to {5} single-use plastics. If we all make small changes, we can help {6} our planet for future generations.",
            ],
            gaps: [
              {
                options: [
                  "reduce",
                  "reduction",
                  "reduced",
                  "reducing",
                ],
                answer: 0,
              },
              {
                options: [
                  "resourceful",
                  "resourced",
                  "resources",
                  "resourcing",
                ],
                answer: 2,
              },
              {
                options: [
                  "entrance",
                  "entry",
                  "enter",
                  "entered",
                ],
                answer: 2,
              },
              {
                options: [
                  "reusable",
                  "reuse",
                  "reusing",
                  "reused",
                ],
                answer: 0,
              },
              {
                options: [
                  "banned",
                  "banning",
                  "bans",
                  "ban",
                ],
                answer: 3,
              },
              {
                options: [
                  "protection",
                  "protect",
                  "protective",
                  "protected",
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
            title: "A visit to a farm",
            text: [
              "Last weekend, my class went {1} a school trip to a farm. It was my first time on a real farm, and it was very interesting.",
              "The farmer, Mr Jones, showed us around. He had cows, sheep, pigs and chickens. We watched him milk the cows, and then we tried it ourselves. It was much harder {2} it looked!",
              "Then we fed the baby lambs with bottles of milk. They were so cute! We also collected eggs from the chickens. Some of the eggs were still warm. After lunch, we went for a ride on a tractor around the farm. We saw fields of wheat and corn. Mr Jones explained how food is grown. I learned a lot {3} the trip. Before, I didn't think {4} where my food came from. Now I understand how hard farmers work. I'd love to visit the farm again {5} my family. It was one of the {6} school trips ever.",
            ],
            answers: [
              [
                "on",
              ],
              [
                "than",
              ],
              [
                "on",
                "during",
                "from",
              ],
              [
                "about",
              ],
              [
                "with",
              ],
              [
                "best",
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
              subject: "A charity event",
              lines: [
                "My school is organising a charity event next month. [Great!]",
                "What kind of event should we organise? [Suggest one]",
                "Which charity should we support? [Give your opinion]",
                "Could you help us? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat's a great idea! It's important to help people who need it.\n\nI think you should organise a sponsored run. Students could ask their families and friends to give money for every lap they run. It's easy to organise, and it's good exercise too!\n\nI think you should support a charity that helps homeless people. In winter, it's very cold, and many homeless people need warm clothes and food. The money could help them.\n\nOf course I'll help! I could make posters to advertise the event and help collect money on the day. Just tell me what you need.\n\nBye,\nBerk",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My favourite hobby",
              lines: [
                "What's your favourite hobby?",
                "How did you start it?",
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
            sample: "Why I love skateboarding\n\nMy favourite hobby is skateboarding. I started when I was ten, when my cousin gave me his old skateboard. At first, I fell over all the time, but I didn't give up.\n\nNow I go to the skate park every day after school. I've learned lots of tricks, like the ollie and the kickflip. I also have lots of friends at the skate park. We help each other learn new tricks.\n\nI enjoy skateboarding because it's exciting and challenging. Every time I learn a new trick, I feel proud of myself. It's also a great way to stay fit and spend time outside. I hope I'll always be able to skateboard.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The cat had been missing for three days.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The cat had been missing for three days. Emma had looked everywhere: in the garden, in the street and at the neighbours' houses. But she couldn't find him.\n\nShe made posters with a photo of her cat and put them on trees and lamp posts. She also asked her friends to help her look.\n\nOn the fourth day, the phone rang. It was an old woman who lived at the end of the street. 'I think your cat is in my garage,' she said. Emma ran there immediately.\n\nHer cat was sitting on a box, looking hungry but happy. Emma hugged him tightly. She was so relieved to have him back.",
          },
        },
      ],
    },
  ],
};
