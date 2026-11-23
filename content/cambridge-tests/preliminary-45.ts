import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 45 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_45: CambridgeTest = {
  id: "preliminary-45",
  level: "preliminary",
  no: 45,
  title: "B1 Preliminary · Practice Test 45",
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
                    "Students can borrow laptops from the library for one week.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Laptops are only for teachers.",
                  "Students can take laptops for a week.",
                  "Laptops can be borrowed for a day.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've finished painting your bedroom. Come and see it when you get home! Dad",
                  ],
                },
                question: "What has Dad done?",
                options: [
                  "bought new furniture",
                  "cleaned the house",
                  "decorated Max's room",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Remove packaging before cooking.",
                    "Cook for 15 minutes.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Take the food out of its packaging first.",
                  "Cook it in the packaging.",
                  "Eat it without cooking.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I can't come to the meeting tomorrow because I have a doctor's appointment. Can you tell me what happens? Sam",
                  ],
                },
                question: "What does Sam want Lucy to do?",
                options: [
                  "go to the doctor",
                  "tell him about the meeting",
                  "cancel the meeting",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "All cakes half price after 4 p.m.",
                  ],
                },
                question: "When are cakes cheaper?",
                options: [
                  "in the late afternoon",
                  "in the morning",
                  "at lunchtime",
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
            instruction: "The young people below all want to choose a weekend activity. Read the descriptions of eight activities. Decide which activity would be the most suitable for each person.",
            options: [
              {
                title: "Bird-Watching",
                text: "Early morning walk with an expert to spot rare birds.",
              },
              {
                title: "Pottery Class",
                text: "Make your own mug or bowl. Take it home after it's fired.",
              },
              {
                title: "Escape Room",
                text: "Solve puzzles with your friends to escape in an hour.",
              },
              {
                title: "Bowling",
                text: "Fun for groups of all ages. Shoes provided.",
              },
              {
                title: "Climbing Wall",
                text: "Indoor climbing with instructors. Beginners welcome.",
              },
              {
                title: "Cooking Workshop",
                text: "Learn to make Italian pasta with a chef.",
              },
              {
                title: "Karaoke Night",
                text: "Sing your favourite songs with friends.",
              },
              {
                title: "Nature Walk",
                text: "A guided walk through the forest to learn about plants.",
              },
            ],
            items: [
              {
                text: "Emre loves singing and wants to have fun with friends.",
                answer: 6,
              },
              {
                text: "Defne wants to make something she can use at home.",
                answer: 1,
              },
              {
                text: "Can wants to learn to cook a new dish.",
                answer: 5,
              },
              {
                text: "Zeynep wants to try climbing but has never done it before.",
                answer: 4,
              },
              {
                text: "Kaan loves birds and doesn't mind getting up early.",
                answer: 0,
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
              title: "Living on a boat",
              paragraphs: [
                "For the last three years, my family has lived on a boat. We sail around the Mediterranean Sea, stopping at different ports. I'm fifteen now, and it's been an amazing experience.",
                "At first, it was difficult. The boat is very small, and I share a cabin with my younger brother. There's no space for many things, so I had to give away most of my toys and clothes.",
                "I don't go to a normal school. My mum teaches us in the mornings, and I also do online courses. In the afternoons, we explore the places we visit. I've been to Italy, Greece, Croatia and Spain.",
                "Living on a boat has taught me to be independent and adaptable. I've learned to sail, cook and fix things. Sometimes I miss having friends nearby, but I keep in touch with them online. I wouldn't change my life for anything.",
              ],
            },
            items: [
              {
                question: "How long has the writer lived on a boat?",
                options: [
                  "fifteen years",
                  "three years",
                  "one year",
                  "six months",
                ],
                answer: 1,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "The boat had little space.",
                  "She got seasick.",
                  "She had no friends.",
                  "She couldn't swim.",
                ],
                answer: 0,
              },
              {
                question: "Who teaches the writer?",
                options: [
                  "a teacher on the boat",
                  "her brother",
                  "her mother",
                  "nobody",
                ],
                answer: 2,
              },
              {
                question: "What has living on a boat taught the writer?",
                options: [
                  "to be lazy",
                  "to be independent",
                  "to dislike travelling",
                  "to stay in one place",
                ],
                answer: 1,
              },
              {
                question: "How does the writer feel about her life?",
                options: [
                  "She wants to change it.",
                  "She hates it.",
                  "She's bored.",
                  "She loves it.",
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
            title: "The library that lends tools",
            text: [
              "In many cities, you can borrow books from a library. But in some places, you can also borrow tools. {1} These are called tool libraries.",
              "The first tool library opened in the USA in the 1970s. {2} The idea was to help people who couldn't afford to buy expensive tools.",
              "Members can borrow anything from hammers and drills to lawnmowers. {3} They pay a small fee to join, and then they can borrow tools for free.",
              "Tool libraries are good for the environment. {4} Instead of everyone buying their own tools, people can share them.",
              "Many tool libraries also run classes. {5} Members can learn skills like woodwork and bicycle repair.",
            ],
            sentences: [
              "Some libraries even have gardening equipment and camping gear.",
              "Tool libraries are only for professional builders.",
              "They work in the same way as a normal library.",
              "These help people learn how to use the tools safely.",
              "You can't borrow tools for free.",
              "It was started by a group of people in a poor neighbourhood.",
              "Tools are very cheap to buy.",
              "They reduce the number of things that are made and thrown away.",
            ],
            answers: [
              2,
              5,
              0,
              7,
              3,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "The Great Barrier Reef",
            text: [
              "The Great Barrier Reef, off the coast of Australia, is the largest coral reef system in the world. It is so big that it can be seen from {1}.",
              "The reef is home to thousands of species of fish, turtles, sharks and dolphins. It's also a very popular {2} destination, attracting about two million visitors every year.",
              "Sadly, the reef is in serious danger. Rising sea temperatures have caused large areas of coral to die. This is called coral bleaching. Pollution from farms and {3} fishing also damage the reef. Scientists say that more than half of the reef has been {4} since 1995. The Australian government is working to protect the reef. They're reducing pollution and creating areas where fishing is {5}. Scientists are also growing new corals and putting them back on the reef. Everyone can help by {6} their carbon footprint.",
            ],
            gaps: [
              {
                options: [
                  "space",
                  "spacious",
                  "spaced",
                  "spaces up",
                ],
                answer: 0,
              },
              {
                options: [
                  "tour",
                  "touring",
                  "tourism up",
                  "tourist",
                ],
                answer: 3,
              },
              {
                options: [
                  "excess",
                  "excessive",
                  "exceed",
                  "exceeding",
                ],
                answer: 1,
              },
              {
                options: [
                  "damaged",
                  "damage",
                  "damaging",
                  "damages",
                ],
                answer: 0,
              },
              {
                options: [
                  "ban",
                  "banning",
                  "banned",
                  "bans",
                ],
                answer: 2,
              },
              {
                options: [
                  "reduce",
                  "reducing",
                  "reduced",
                  "reduction",
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
            title: "A great adventure",
            text: [
              "Last summer, my best friend and I went on a cycling trip {1} the coast of Portugal. We cycled for ten days and covered more than 500 kilometres.",
              "We carried everything we needed on our bikes, including tents and sleeping bags. Every night, we camped {2} a different place. Sometimes we stayed at campsites, and sometimes we camped on beaches.",
              "The scenery was beautiful. We cycled past cliffs, beaches and small fishing villages. We also met lots of friendly people {3} gave us directions and advice. One family even invited us to their house for dinner! The hardest part was cycling up the hills in the heat. But the view from the top was always worth it. By the end of the trip, we were {4} tired but very happy. It was the best adventure I've ever {5}. Next year, we want to cycle {6} Spain.",
            ],
            answers: [
              [
                "along",
              ],
              [
                "in",
                "at",
              ],
              [
                "who",
              ],
              [
                "very",
                "really",
                "so",
              ],
              [
                "had",
              ],
              [
                "across",
                "around",
                "through",
                "in",
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
              subject: "A birthday present",
              lines: [
                "It's my mum's birthday next week. [Nice!]",
                "What do you think I should buy her? [Give ideas]",
                "What did you buy your mum for her last birthday? [Tell Kim]",
                "Could you come shopping with me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat's nice! I hope your mum has a lovely birthday.\n\nI think you should buy her something personal. Maybe you could get her a photo album and fill it with family photos. Or if she likes cooking, you could buy her a nice cookbook. Flowers are always a good idea too.\n\nFor my mum's last birthday, I bought her a beautiful scarf and made her a card. I also cooked dinner for the whole family, which she really loved.\n\nOf course I'll come shopping with you! How about Saturday afternoon? We could go to the shopping centre in town.\n\nBye,\nCeren",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Living without technology",
              lines: [
                "Could you live without technology for a week?",
                "What would be the hardest thing?",
                "What would you do instead?",
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
            sample: "A week without technology\n\nCould I live without technology for a week? I think it would be very difficult, but possible. I use my phone every day to chat with friends, listen to music and watch videos.\n\nThe hardest thing would be not being able to talk to my friends. I'd also miss watching my favourite series. And I'd find it hard to do my homework without the internet.\n\nInstead, I would spend more time doing things I don't usually have time for. I'd read books, go for walks and spend time with my family. I might even learn a new skill, like painting. I think it would be a good experience.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Ben couldn't believe what he was seeing.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Ben couldn't believe what he was seeing. In the middle of his garden, there was a large brown bear!\n\nHe stood very still at the kitchen window. The bear was eating the apples that had fallen from the tree. Ben quietly called his mum, who phoned the police.\n\nThe bear didn't seem interested in the house. After eating all the apples, it walked slowly back towards the forest. When the police arrived, it had already gone.\n\nThe next day, the local newspaper wrote a story about the bear. Ben's photo of it was on the front page. He became famous in his village!",
          },
        },
      ],
    },
  ],
};
