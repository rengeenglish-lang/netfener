import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 15 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_15: CambridgeTest = {
  id: "preliminary-15",
  level: "preliminary",
  no: 15,
  title: "B1 Preliminary · Practice Test 15",
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
                    "TRAIN STATION",
                    "Ticket machines accept cards only. For cash payments, please go to the ticket office.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The ticket office only accepts cards.",
                  "You can't buy tickets with cash.",
                  "You can pay with cash at the ticket office.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, the bus has broken down, so I'm going to be late. Start the meeting without me. Ella",
                  ],
                },
                question: "What does Ella want Lucy to do?",
                options: [
                  "begin without her",
                  "wait for her",
                  "cancel the meeting",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Dry clean only.",
                    "Do not wash in a machine.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can wash this at home.",
                  "You shouldn't put this in a washing machine.",
                  "You should wash this by hand.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi everyone,",
                    "The school's summer fair needs volunteers. If you can help for an hour on Saturday, please tell me by Wednesday. Mrs Brown",
                  ],
                },
                question: "What does Mrs Brown want?",
                options: [
                  "people to help at an event",
                  "money for the fair",
                  "students to come on Wednesday",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Barbecues allowed only in the marked area near the lake.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Barbecues aren't allowed in the park.",
                  "You can have a barbecue anywhere.",
                  "You can only have a barbecue in one part of the park.",
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
            instruction: "The young people below all want to watch a TV programme. Read the descriptions of eight programmes. Decide which programme would be the most suitable for each person.",
            options: [
              {
                title: "Wild Planet",
                text: "A documentary series about animals in the world's most extreme places.",
              },
              {
                title: "Bake Off Junior",
                text: "Young bakers compete to make the best cakes and pastries.",
              },
              {
                title: "History Detectives",
                text: "Experts investigate mysteries from the past, such as lost treasures.",
              },
              {
                title: "Space Explorers",
                text: "The latest news about space missions and discoveries, with interviews with astronauts.",
              },
              {
                title: "Fashion Week",
                text: "Behind the scenes at the world's biggest fashion shows.",
              },
              {
                title: "Game On",
                text: "Reviews of the newest video games and interviews with game designers.",
              },
              {
                title: "Funny Families",
                text: "A comedy series about two very different families who live next door to each other.",
              },
              {
                title: "Speak Up",
                text: "Teenagers discuss important topics like the environment and education.",
              },
            ],
            items: [
              {
                text: "Emir wants to know more about the newest games before buying them.",
                answer: 5,
              },
              {
                text: "Deniz loves animals and is interested in how they survive in difficult conditions.",
                answer: 0,
              },
              {
                text: "Lara wants to relax and laugh after a busy day.",
                answer: 6,
              },
              {
                text: "Kaan dreams of travelling to Mars one day.",
                answer: 3,
              },
              {
                text: "Ece enjoys baking and likes watching competitions.",
                answer: 1,
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
                "I ran my first marathon last spring, just after my eighteenth birthday. I'd only started running a year before, after my doctor told me I needed more exercise.",
                "At first, I could only run for five minutes without stopping. But I joined a running club, and the other members encouraged me. Slowly, I ran further and further.",
                "Training for the marathon took six months. I ran four or five times a week, in all kinds of weather. Some days, I really didn't want to go out, especially when it was raining. But I kept going because I'd promised to raise money for a cancer charity.",
                "On the day of the race, the crowds were amazing. People shouted my name and gave me sweets. The last five kilometres were the hardest thing I've ever done, but when I crossed the finish line, I felt fantastic. I raised £1,500 and I'm already planning my next marathon.",
              ],
            },
            items: [
              {
                question: "Why did the writer start running?",
                options: [
                  "Her friends ran.",
                  "She wanted to win a race.",
                  "She had a new job.",
                  "Her doctor advised her to exercise.",
                ],
                answer: 3,
              },
              {
                question: "What helped the writer at first?",
                options: [
                  "support from a running club",
                  "a personal trainer",
                  "her family",
                  "running videos",
                ],
                answer: 0,
              },
              {
                question: "Why did the writer keep training when it was difficult?",
                options: [
                  "She wanted to be famous.",
                  "Her coach told her to.",
                  "She had promised to raise money.",
                  "She enjoyed the rain.",
                ],
                answer: 2,
              },
              {
                question: "What does the writer say about the crowds?",
                options: [
                  "They were too noisy.",
                  "There weren't many people.",
                  "They supported her.",
                  "They didn't notice her.",
                ],
                answer: 2,
              },
              {
                question: "What is the writer planning?",
                options: [
                  "another marathon",
                  "to stop running",
                  "to become a coach",
                  "to start a charity",
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
            title: "The night-time zoo",
            text: [
              "In Singapore, there's a zoo that only opens at night. {1} It was the first one of its kind in the world.",
              "Many animals are nocturnal, which means they are active at night. {2} At the night zoo, visitors can see them hunting, eating and playing.",
              "The zoo uses special lighting that looks like moonlight. {3} This means the animals behave naturally and aren't disturbed.",
              "Visitors can explore the zoo on foot or take a tram ride. {4} There are also shows where people can learn about the animals.",
              "More than a million people visit the night zoo every year. {5} It has also helped scientists learn more about how nocturnal animals live.",
            ],
            sentences: [
              "Several other cities have now opened their own night zoos.",
              "In normal zoos, people usually see them sleeping.",
              "Most of the animals are dangerous.",
              "It opened in 1994 and has more than 900 animals.",
              "A guide on the tram explains interesting facts about each animal.",
              "Visitors must bring their own torches.",
              "It's bright enough for people to see, but not too bright for the animals.",
              "The zoo closes at sunset.",
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
            title: "Bamboo",
            text: [
              "Bamboo is one of the fastest-growing plants in the world. Some kinds can grow nearly a metre in a {1} day!",
              "Bamboo is actually a type of grass. It grows in many warm parts of the world, especially in Asia. It is very strong and {2}, so it bends rather than breaks in strong winds.",
              "For thousands of years, people have used bamboo for building houses, making furniture and even as food. Young bamboo shoots are a popular {3} in Chinese and Japanese cooking. Today, bamboo is becoming more popular because it is good for the environment. It grows quickly without needing much water or chemicals. Companies use it to make {4} products like toothbrushes, cups and even clothes. These can {5} plastic products. Giant pandas, of course, {6} on bamboo. It makes up almost all of their diet.",
            ],
            gaps: [
              {
                options: [
                  "one up",
                  "alone",
                  "only",
                  "single",
                ],
                answer: 3,
              },
              {
                options: [
                  "soft up",
                  "flexible",
                  "weak",
                  "easy",
                ],
                answer: 1,
              },
              {
                options: [
                  "material",
                  "part up",
                  "piece",
                  "ingredient",
                ],
                answer: 3,
              },
              {
                options: [
                  "eco-friendly",
                  "natural up",
                  "green up",
                  "nature",
                ],
                answer: 0,
              },
              {
                options: [
                  "change",
                  "exchange",
                  "replace",
                  "switch up",
                ],
                answer: 2,
              },
              {
                options: [
                  "rely up",
                  "stand",
                  "depend",
                  "count up",
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
            title: "A special day",
            text: [
              "Last Saturday was my sister's wedding. It was one of the {1} days of my life.",
              "The wedding took place in a beautiful old hotel by the sea. More than two hundred guests came, and everyone was dressed in their best clothes. My sister looked amazing {2} her white dress.",
              "I had an important job: I had to give a speech. I was very nervous {3} I'd never spoken in front of so many people before. But when I started, I felt better. I told some funny stories about my sister, and everyone laughed. After the meal, there was dancing {4} midnight. I danced with my grandmother, who is eighty years old! I was so tired the next day, {5} it was worth it. I'll never forget {6} special day.",
            ],
            answers: [
              [
                "best",
                "happiest",
              ],
              [
                "in",
              ],
              [
                "because",
                "as",
                "since",
              ],
              [
                "until",
                "till",
              ],
              [
                "but",
              ],
              [
                "that",
                "such",
                "this",
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
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "A new hobby",
              lines: [
                "I'm thinking about starting a new hobby. [Good idea]",
                "What hobbies do you have? [Tell Pat]",
                "Which hobby do you think I should try? [Suggest one]",
                "Could we do a hobby together? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nThat's a really good idea! Hobbies are a great way to relax and meet new people.\n\nI have quite a few hobbies. I play tennis twice a week, and I also love painting. At the weekend, I often go cycling with my dad in the countryside.\n\nI think you should try photography. You're very creative, and you don't need expensive equipment; you can start with your phone. There are lots of free videos online to help you.\n\nIt would be great to do a hobby together! Maybe we could join a tennis club? That way, we'd see each other every week.\n\nBye,\nElif",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Should teenagers have part-time jobs?",
              lines: [
                "Do you think teenagers should have part-time jobs?",
                "What are the advantages?",
                "Are there any disadvantages?",
                "Write and tell us what you think!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "Working while studying\n\nI think part-time jobs can be very good for teenagers. When you work, you learn to be responsible and to manage your time. You also earn your own money, which teaches you how to use it carefully.\n\nI work in a café on Saturday mornings, and I've learned a lot about talking to people. It's given me more confidence.\n\nHowever, there are some disadvantages. If teenagers work too many hours, they might not have enough time for homework or sleep. I think a few hours a week is fine, but school should always come first.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The train suddenly stopped in the middle of nowhere.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The train suddenly stopped in the middle of nowhere. Lily looked out of the window. There were only fields and a few cows.\n\nAfter twenty minutes, a voice said there was a problem with the engine. The passengers started to complain, but Lily noticed an old woman who looked very worried.\n\n'I'm going to my grandson's wedding,' the woman explained. 'It starts in two hours.' Lily had an idea. She called her uncle, who lived nearby, and he came to collect them both in his car.\n\nThey arrived just in time. The old woman hugged Lily and invited her to stay for the party.",
          },
        },
      ],
    },
  ],
};
