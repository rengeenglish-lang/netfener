import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 71 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_71: CambridgeTest = {
  id: "preliminary-71",
  level: "preliminary",
  no: 71,
  title: "B1 Preliminary · Practice Test 71",
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
                    "Year 9 students will have their science test in the hall, not their classroom.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The test is cancelled.",
                  "The test is on a different day.",
                  "The test is in a different place.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Dan, I've left my jacket at your house. Can you bring it tomorrow? Sam",
                  ],
                },
                question: "What does Sam want Dan to do?",
                options: [
                  "buy a jacket",
                  "bring his jacket",
                  "keep the jacket",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains sugar.",
                    "Brush your teeth after eating.",
                  ],
                },
                question: "What does the label suggest?",
                options: [
                  "eating it before bed",
                  "cleaning your teeth after eating it",
                  "not eating it",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "The dance class is now on Thursday evenings, not Tuesday. See you there! Miss Brown",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the teacher",
                  "the time",
                  "the day of the class",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Children's corner closed for painting until Friday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Part of the library is closed for a few days.",
                  "The library is closed.",
                  "The children's corner is new.",
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
            instruction: "The young people below all want to choose a day trip. Read the descriptions of eight trips. Decide which trip would be the most suitable for each person.",
            options: [
              {
                title: "Castle Visit",
                text: "Explore an old castle and learn about knights.",
              },
              {
                title: "Beach Day",
                text: "Swim, sunbathe and play volleyball.",
              },
              {
                title: "Zoo Trip",
                text: "See more than 300 animals.",
              },
              {
                title: "Theme Park",
                text: "Rollercoasters and water rides.",
              },
              {
                title: "Mountain Hike",
                text: "A long walk with beautiful views.",
              },
              {
                title: "City Tour",
                text: "Visit shops, museums and cafés.",
              },
              {
                title: "Boat Trip",
                text: "Sail on the lake and see birds.",
              },
              {
                title: "Farm Visit",
                text: "Feed animals and pick fruit.",
              },
            ],
            items: [
              {
                text: "Kerem loves rollercoasters.",
                answer: 3,
              },
              {
                text: "Lale wants to learn about history.",
                answer: 0,
              },
              {
                text: "Ece loves walking in nature.",
                answer: 4,
              },
              {
                text: "Mert wants to swim in the sea.",
                answer: 1,
              },
              {
                text: "Selin wants to see lots of wild animals.",
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
              title: "A life on the road",
              paragraphs: [
                "My parents are musicians, and they travel all over the world giving concerts. Since I was born, I've travelled with them. I've been to more than forty countries!",
                "Because we travel so much, I don't go to a normal school. I study online with teachers from different countries. It's difficult sometimes, because I have to study in hotels, on planes and on buses.",
                "The best thing about my life is that I've seen so many amazing places. I've climbed mountains in Peru, swum with dolphins in Australia and seen the pyramids in Egypt.",
                "The worst thing is that I don't have many friends. I make friends in every country, but then we have to leave. Next year, my parents are going to stop travelling, and we're going to live in one place. I'm excited, but also a bit nervous.",
              ],
            },
            items: [
              {
                question: "Why does the writer travel a lot?",
                options: [
                  "Her parents are musicians.",
                  "Her parents are teachers.",
                  "She likes travelling.",
                  "She's studying abroad.",
                ],
                answer: 0,
              },
              {
                question: "How does the writer study?",
                options: [
                  "at a normal school",
                  "with her parents",
                  "she doesn't study",
                  "online",
                ],
                answer: 3,
              },
              {
                question: "What does the writer like best about her life?",
                options: [
                  "studying online",
                  "seeing amazing places",
                  "living in hotels",
                  "meeting teachers",
                ],
                answer: 1,
              },
              {
                question: "What's the worst thing about the writer's life?",
                options: [
                  "not having many friends",
                  "not seeing her parents",
                  "the food",
                  "being bored",
                ],
                answer: 0,
              },
              {
                question: "How does the writer feel about next year?",
                options: [
                  "only sad",
                  "only happy",
                  "excited and nervous",
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
            title: "A house made of bottles",
            text: [
              "In Canada, there's a house made from thousands of glass bottles. {1} It was built in the 1980s by a man called Édouard Arsenault.",
              "Édouard collected bottles from restaurants and people's homes. {2} He used more than 25,000 bottles to build three houses.",
              "The bottles were joined together with cement. {3} When the sun shines through them, the inside of the houses is filled with beautiful colours.",
              "After Édouard died, his family opened the houses to the public. {4} They have become a popular tourist attraction.",
              "Visitors can walk through the houses and learn about recycling. {5} It shows that waste materials can be used to create something beautiful.",
            ],
            sentences: [
              "Many children visit on school trips.",
              "It took him many years to collect them all.",
              "The house is very dark inside.",
              "It's one of the most unusual houses in the world.",
              "Thousands of people visit every year.",
              "Nobody visits the house.",
              "The bottles are many different colours.",
              "The house is made of wood.",
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
            title: "Space exploration",
            text: [
              "Space exploration began in 1957, when the Soviet Union {1} the first satellite, Sputnik, into space.",
              "In 1961, Yuri Gagarin became the first human to travel into space. Eight years later, Neil Armstrong became the first person to walk on the Moon.",
              "Today, astronauts live and work on the International Space Station. They do {2} to learn about how space affects the human body. Scientists have also sent robots to Mars to {3} the planet. These robots have found evidence that there may once have been water on Mars. In the future, scientists hope to send humans to Mars. However, the {4} is very long; it takes about seven months to get there. Astronauts would face many {5}, like radiation and loneliness. Some private companies are also planning to offer space {6} to tourists.",
            ],
            gaps: [
              {
                options: [
                  "launch",
                  "launching",
                  "launched",
                  "launches",
                ],
                answer: 2,
              },
              {
                options: [
                  "experimental",
                  "experimented",
                  "experiments",
                  "experimenting",
                ],
                answer: 2,
              },
              {
                options: [
                  "explore",
                  "exploration",
                  "explorer",
                  "explored",
                ],
                answer: 0,
              },
              {
                options: [
                  "journeys up",
                  "journeyed",
                  "journeying",
                  "journey",
                ],
                answer: 3,
              },
              {
                options: [
                  "challenging",
                  "challenges",
                  "challenged",
                  "challenger",
                ],
                answer: 1,
              },
              {
                options: [
                  "holidays",
                  "holiday up",
                  "holidaying",
                  "holidayed",
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
            title: "My first camping trip",
            text: [
              "Last summer, I went camping {1} the first time with my best friend's family. We camped in a forest next to a lake.",
              "When we arrived, we had to put up our tents. It was very difficult because none of us knew {2} to do it! It took us two hours.",
              "In the afternoon, we went swimming in the lake. The water was very cold, but it was fun. In the evening, we made a fire and cooked sausages. Then we sat around the fire and told scary stories. I was a bit scared, so I didn't sleep very well that night! The next day, we went hiking in the forest. We saw lots of animals, including deer and squirrels. It was amazing. I loved camping because I felt very close {3} nature. I didn't miss my phone at all. I'd love to go camping again {4} summer. Next time, I'll practise putting {5} the tent {6}!",
            ],
            answers: [
              [
                "for",
              ],
              [
                "how",
              ],
              [
                "to",
              ],
              [
                "next",
                "this",
              ],
              [
                "up",
              ],
              [
                "first",
                "before",
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
              subject: "Your favourite place",
              lines: [
                "What's your favourite place in your town? [Tell Kim]",
                "Why do you like it? [Explain]",
                "What do you do there? [Describe]",
                "Can you take me there when I visit? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nMy favourite place in my town is the park near the river. It's very big and green, with lots of trees and flowers.\n\nI like it because it's peaceful and quiet, even though it's in the middle of the town. It's the perfect place to relax and get away from the noise of the streets.\n\nI go there with my friends at the weekend. We play football, have picnics and sometimes ride our bikes along the river. In summer, there are concerts in the park, which are really fun.\n\nOf course I'll take you there when you visit! We could have a picnic and go for a walk.\n\nBye,\nArda",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A special celebration",
              lines: [
                "Tell us about a special celebration in your family.",
                "What happened?",
                "Why was it special?",
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
            sample: "My grandparents' anniversary\n\nLast summer, my grandparents celebrated their fiftieth wedding anniversary. The whole family came together for a big party in their garden.\n\nMore than fifty people came, including relatives from abroad. We decorated the garden with flowers and lights. My mum and aunts cooked lots of delicious food, and there was a huge cake.\n\nThe best part was when my grandfather gave a speech. He talked about how he met my grandmother and how much he loved her. Everyone cried. Then they danced together to their favourite song.\n\nIt was special because it showed how important family is. I hope I'll have a marriage as happy as theirs.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The ship had been at sea for three weeks when they saw land.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The ship had been at sea for three weeks when they saw land. Captain Rosa looked through her telescope. It was a small island that wasn't on any map.\n\nThe crew rowed to the beach in a small boat. The island was covered in thick forest, and they could hear strange birds singing. They started to explore.\n\nAfter an hour, they found an old wooden hut. Inside, there was a box full of maps and letters. They had been written by a sailor more than two hundred years ago.\n\nRosa took the box back to the ship. When she returned home, she gave it to a museum. The discovery made her famous.",
          },
        },
      ],
    },
  ],
};
