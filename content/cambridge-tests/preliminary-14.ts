import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 14 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_14: CambridgeTest = {
  id: "preliminary-14",
  level: "preliminary",
  no: 14,
  title: "B1 Preliminary · Practice Test 14",
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
                    "SPORTS HALL",
                    "Basketball practice is cancelled this week. Please check the notice board for next week's times.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Practice times are on the website.",
                  "Basketball practice is every day this week.",
                  "There's no basketball practice this week.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, I'm at the supermarket. Do we need anything for dinner tonight? Text me back quickly! Mum",
                  ],
                },
                question: "Why has Mum written this message?",
                options: [
                  "to ask what she should buy",
                  "to ask Jo to cook dinner",
                  "to tell Jo she will be late",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep refrigerated.",
                    "Consume within 2 days of opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It can be kept for two weeks.",
                  "You should finish it soon after opening.",
                  "It doesn't need to be cold.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "I'm afraid I can't come to your party on Saturday. My grandparents are visiting. I hope you have a great time! Jack",
                  ],
                },
                question: "Why can't Jack go to the party?",
                options: [
                  "He has family visiting.",
                  "He's ill.",
                  "He has to work.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Tuesday is Student Day: show your student card and get half-price tickets.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "All tickets are half price on Tuesdays.",
                  "Students can only come on Tuesdays.",
                  "Students pay less on one day of the week.",
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
            instruction: "The young people below all want to buy a book as a present. Read the descriptions of eight books. Decide which book would be the most suitable for each person to buy.",
            options: [
              {
                title: "Garden Wonders",
                text: "A beautiful guide to growing flowers and vegetables in small spaces, with lots of photos.",
              },
              {
                title: "World Football Stars",
                text: "The life stories of twenty of the world's greatest footballers.",
              },
              {
                title: "Easy Baking",
                text: "Simple recipes for cakes, cookies and bread. Perfect for beginners.",
              },
              {
                title: "Mysteries of the Ocean",
                text: "Amazing facts about the deep sea and the strange creatures that live there.",
              },
              {
                title: "The Time Machine Diaries",
                text: "A funny adventure story about a boy who travels back in time. Ages 8–12.",
              },
              {
                title: "Travel Europe",
                text: "A practical guide to the best places to visit in Europe, with maps and tips.",
              },
              {
                title: "Puzzles for Everyone",
                text: "Hundreds of crosswords, word searches and logic puzzles for all ages.",
              },
              {
                title: "Learn to Knit",
                text: "Step-by-step instructions to make scarves, hats and blankets.",
              },
            ],
            items: [
              {
                text: "Elif's grandmother loves her garden but lives in a flat with a balcony.",
                answer: 0,
              },
              {
                text: "Can's little brother, who is ten, loves funny stories.",
                answer: 4,
              },
              {
                text: "Selin's dad is planning a holiday and wants to visit several countries.",
                answer: 5,
              },
              {
                text: "Burak's uncle is a big football fan.",
                answer: 1,
              },
              {
                text: "Asya's mum wants to start making her own cakes.",
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
              title: "A year abroad",
              paragraphs: [
                "When I was sixteen, I spent a year at a school in Japan as an exchange student. I lived with a Japanese family who had a daughter my age, Yuki.",
                "The first month was really difficult. I could only speak a few words of Japanese, and everything felt strange: the food, the school rules and even the way people said hello. I often felt homesick and cried at night.",
                "Yuki helped me a lot. She taught me Japanese every evening and introduced me to her friends. Slowly, I started to understand more and to feel at home.",
                "By the end of the year, I could speak Japanese quite well, and I had made friends for life. Yuki came to stay with my family last summer. The experience taught me to be more independent and open to new things. I'd recommend an exchange year to anyone.",
              ],
            },
            items: [
              {
                question: "Who did the writer live with in Japan?",
                options: [
                  "a Japanese family",
                  "other exchange students",
                  "a teacher",
                  "alone",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel in the first month?",
                options: [
                  "excited",
                  "bored",
                  "homesick",
                  "confident",
                ],
                answer: 2,
              },
              {
                question: "How did Yuki help the writer?",
                options: [
                  "by doing her homework",
                  "by teaching her Japanese",
                  "by cooking for her",
                  "by taking her home",
                ],
                answer: 1,
              },
              {
                question: "What happened last summer?",
                options: [
                  "The writer went back to Japan.",
                  "The writer started a new school.",
                  "Yuki moved to the writer's country.",
                  "Yuki visited the writer's family.",
                ],
                answer: 3,
              },
              {
                question: "What did the writer learn from the experience?",
                options: [
                  "to stay at home",
                  "to be more independent",
                  "that Japan is too difficult",
                  "to study harder",
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
            title: "The boy who built a windmill",
            text: [
              "William Kamkwamba grew up in a small village in Malawi, in Africa. {1} When he was fourteen, his family couldn't pay his school fees, so he had to leave school.",
              "William didn't want to stop learning. {2} One day, he found a book about energy, with a picture of a windmill on the cover.",
              "He decided to build a windmill to make electricity for his family. {3} He used old bicycle parts, a tractor fan and wood from trees.",
              "When the windmill was finished, it gave power to four lights in his family's house. {4} At first, people thought he was crazy, but soon they came from far away to see it.",
              "William's story became famous around the world. {5} He later studied at a university in the USA and now helps other young people with their inventions.",
            ],
            sentences: [
              "William's teacher built the windmill for him.",
              "Later, he built another one that pumped water for the village.",
              "William's family was very rich.",
              "So he started going to the local library to read science books.",
              "There was no electricity, and his family were farmers.",
              "A book and a film have been made about his life.",
              "The windmill stopped working after a week.",
              "He didn't have any money, so he looked for things in the rubbish.",
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
            title: "Coffee",
            text: [
              "Coffee is one of the world's most popular drinks. More than two billion cups are {1} every day!",
              "Coffee comes from the seeds of a plant that grows in tropical countries. The seeds are {2} beans. They are dried, roasted and then ground into powder.",
              "According to a popular story, coffee was discovered in Ethiopia by a goat farmer. He noticed that his goats became very {3} after eating the berries from a certain plant. Today, Brazil produces more coffee than any other country. Coffee contains caffeine, which can help people feel more awake. However, drinking too much can {4} it difficult to sleep. Doctors {5} that adults have no more than four cups a day. Many cafés now offer different {6} of coffee, from espresso to cappuccino.",
            ],
            gaps: [
              {
                options: [
                  "drank",
                  "drinking",
                  "drink",
                  "drunk",
                ],
                answer: 3,
              },
              {
                options: [
                  "named up",
                  "called",
                  "said",
                  "told",
                ],
                answer: 1,
              },
              {
                options: [
                  "energetic",
                  "energy",
                  "energise",
                  "energetically",
                ],
                answer: 0,
              },
              {
                options: [
                  "do",
                  "let",
                  "make",
                  "cause",
                ],
                answer: 2,
              },
              {
                options: [
                  "say up",
                  "suggest",
                  "tell",
                  "speak",
                ],
                answer: 1,
              },
              {
                options: [
                  "sorts up",
                  "forms up",
                  "ways",
                  "types",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Volunteering abroad",
            text: [
              "Last summer, I spent a month volunteering at a school in Ghana. I'd always wanted to do something useful {1} the holidays, and a friend told me about the project.",
              "I taught English to children aged six to ten. They were so excited to learn and always arrived {2} the morning with big smiles. I also helped paint the classrooms and build a new library.",
              "Life in the village was very different {3} life at home. There was no running water, and electricity was only available for a few hours a day. But the people were incredibly kind. I made friends with a teacher called Ama, {4} showed me around and taught me some of the local language. I've learned so much {5} the experience, and I'm planning to go back {6} year.",
            ],
            answers: [
              [
                "in",
                "during",
              ],
              [
                "in",
              ],
              [
                "from",
              ],
              [
                "who",
              ],
              [
                "from",
              ],
              [
                "next",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "A cooking competition",
              lines: [
                "I've entered a cooking competition at school! [Wow!]",
                "Can you help me choose what to cook? [Suggest a dish]",
                "Would you like to come and taste it? [Answer]",
                "What's your favourite food? [Tell Alex]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nWow, that's amazing! I'm sure you'll do really well, because you're a great cook.\n\nI think you should make a chicken curry with rice. It's not too difficult, but it tastes delicious, and you can add your own spices to make it special.\n\nOf course I'd love to come and taste it! Just tell me the date and time. I'll bring my appetite!\n\nMy favourite food is pizza, especially with lots of vegetables and cheese. My mum makes the best pizza in the world, and she's taught me how to make it.\n\nGood luck!\nAyça",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Living in the city or the countryside?",
              lines: [
                "Would you prefer to live in a city or in the countryside?",
                "What are the advantages and disadvantages?",
                "Where do you live now?",
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
            sample: "City or countryside?\n\nI live in a big city, and I love it. There's always something to do: cinemas, museums, concerts and lots of shops. Public transport is good, so I can go anywhere easily.\n\nHowever, the city can be noisy and polluted, and it's quite expensive. Sometimes I wish I could see more trees and hear birds instead of traffic.\n\nMy grandparents live in the countryside, and I enjoy visiting them. It's peaceful and the air is clean. But I think I'd get bored there after a few weeks. For now, I prefer the city, but maybe I'll move to the countryside when I'm older.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Anna looked at the map again. They were completely lost.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Anna looked at the map again. They were completely lost. She and her brother had been walking in the mountains for three hours, and it was starting to get dark.\n\n'We should have stayed on the main path,' her brother said. Anna felt worried, but she didn't want to show it.\n\nThen they heard a dog barking. A few minutes later, an old farmer appeared with his dog. 'Are you lost?' he asked kindly. He took them back to his farmhouse, where his wife gave them hot soup.\n\nThe farmer drove them back to their hotel. Anna promised herself she would always stay on the main path in future.",
          },
        },
      ],
    },
  ],
};
