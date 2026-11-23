import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 8 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_8: CambridgeTest = {
  id: "preliminary-8",
  level: "preliminary",
  no: 8,
  title: "B1 Preliminary · Practice Test 8",
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
                    "SPORTS CENTRE",
                    "Yoga classes are now on Thursday evenings instead of Tuesdays. Same time, same room.",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the day of the class",
                  "the time of the class",
                  "the room for the class",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ben, I'm running late. Can you order for me when you get to the café? A cheese sandwich and an orange juice, please. Kim",
                  ],
                },
                question: "What does Kim want Ben to do?",
                options: [
                  "wait outside the café",
                  "buy her food",
                  "change the meeting place",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for children over 3 years.",
                    "Contains small parts.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This toy isn't suitable for very young children.",
                  "This toy is for children under 3.",
                  "This toy has no small parts.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sophie,",
                    "The book you ordered has arrived. We'll keep it for you until the end of next week. City Bookshop",
                  ],
                },
                question: "What does the bookshop tell Sophie?",
                options: [
                  "Her order has been cancelled.",
                  "The book will arrive next week.",
                  "She can collect her book for a limited time.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAMPSITE",
                    "Quiet hours 10 p.m.–7 a.m. Please respect other campers.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The campsite closes at 10 p.m.",
                  "Campers should be quiet at night.",
                  "Campers must leave by 7 a.m.",
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
            instruction: "The young people below all want to watch a film this weekend. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              {
                title: "Space Station",
                text: "A tense thriller about astronauts trapped on a space station after an accident. Amazing special effects.",
              },
              {
                title: "Grandma's Kitchen",
                text: "A gentle comedy about a family restaurant in Italy. Lots of laughs and delicious food.",
              },
              {
                title: "The Long Run",
                text: "The true story of a young runner from Kenya who became an Olympic champion.",
              },
              {
                title: "Ocean Giants",
                text: "A documentary about whales, filmed over three years in oceans around the world.",
              },
              {
                title: "School of Spies",
                text: "An action comedy about teenagers who secretly train as spies. Fast and funny.",
              },
              {
                title: "The Silent Forest",
                text: "A scary film about a group of friends who get lost in a forest at night. Not for the nervous!",
              },
              {
                title: "Painted Dreams",
                text: "A biography of a famous painter, showing how she became successful despite many difficulties.",
              },
              {
                title: "Robots Rule",
                text: "An animated film for all ages about a robot who wants to become human.",
              },
            ],
            items: [
              {
                text: "Ella loves sport and enjoys films about real people.",
                answer: 2,
              },
              {
                text: "Mert wants to watch something with his little brother, who is six.",
                answer: 7,
              },
              {
                text: "Nina is interested in nature and the sea.",
                answer: 3,
              },
              {
                text: "Kerem loves feeling frightened when he watches films.",
                answer: 5,
              },
              {
                text: "Leyla is studying art and wants to learn about an artist's life.",
                answer: 6,
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
              title: "Moving to a new country",
              paragraphs: [
                "When I was fifteen, my family moved from Turkey to Canada because of my father's job. I didn't want to go. I had to leave my friends, my school and my grandparents, and I was worried about my English.",
                "The first few months were hard. I understood most of what people said, but I was too shy to speak in class. At lunch, I usually sat alone and pretended to read.",
                "Things changed when I joined the school's football team. I'm a good player, and the other players started to respect me. They invited me to their houses, and my English improved quickly because I had to talk to them.",
                "Now, two years later, I feel at home in Canada. I still miss my grandparents, but we talk every week. I've learned that the hardest situations can teach you the most. If you move to a new country, my advice is to find an activity you love and join a group.",
              ],
            },
            items: [
              {
                question: "Why did the writer's family move?",
                options: [
                  "for her father's work",
                  "for her education",
                  "to be near family",
                  "for a holiday",
                ],
                answer: 0,
              },
              {
                question: "What problem did the writer have at first?",
                options: [
                  "She didn't understand English.",
                  "She didn't like the food.",
                  "She was too shy to speak.",
                  "She had no money.",
                ],
                answer: 2,
              },
              {
                question: "What helped the writer?",
                options: [
                  "having extra English lessons",
                  "moving to a new school",
                  "joining a sports team",
                  "meeting other Turkish students",
                ],
                answer: 2,
              },
              {
                question: "How does she keep in contact with her grandparents?",
                options: [
                  "They talk weekly.",
                  "They visit every month.",
                  "They write letters.",
                  "They don't keep in contact.",
                ],
                answer: 0,
              },
              {
                question: "What advice does the writer give?",
                options: [
                  "Don't move to a new country.",
                  "Only speak your own language.",
                  "Study English before you go.",
                  "Join a group doing something you enjoy.",
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
            title: "The man who planted a forest",
            text: [
              "In 1979, a teenager named Jadav Payeng saw hundreds of snakes dying on a sandbank in the middle of a river in India. {1} He decided to do something about it.",
              "Jadav started planting bamboo on the sandbank. {2} He carried water to the plants every day and slowly added more trees.",
              "For more than thirty years, Jadav kept planting. {3} Today, the forest covers more than 500 hectares.",
              "The forest is now home to tigers, elephants, deer and hundreds of kinds of birds. {4} Scientists from all over the world have come to study it.",
              "Jadav has won many awards, but he says he is not interested in fame. {5} He wants more young people to understand that one person can make a difference.",
            ],
            sentences: [
              "The river is now completely dry.",
              "They had died because there were no trees to give them shade.",
              "Some of these animals had not been seen in the area for many years.",
              "Bamboo is the fastest-growing plant in India.",
              "At first, people thought he was wasting his time.",
              "Tigers are dangerous animals, so the forest is closed to visitors.",
              "He did most of the work alone, without any money from the government.",
              "He still lives near the forest and plants new trees every day.",
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
              "Chocolate is made from the beans of the cacao tree, which grows in hot, wet countries near the equator. The trees can only grow in a {1} area of the world.",
              "The ancient Maya people of Central America were among the first to {2} cacao. They made a bitter drink from it, often with chilli.",
              "When chocolate {3} Europe in the sixteenth century, people added sugar and it became popular with rich people. It wasn't until the nineteenth century that chocolate bars were {4}. Today, the world eats millions of tonnes of chocolate every year. However, many cacao farmers are poor and work very hard for little money. Some companies now {5} farmers a fair price for their beans. When you buy chocolate, look for a 'Fairtrade' label to make sure the farmers have been {6} properly.",
            ],
            gaps: [
              {
                options: [
                  "short",
                  "small",
                  "little",
                  "thin",
                ],
                answer: 1,
              },
              {
                options: [
                  "make",
                  "do",
                  "take",
                  "use",
                ],
                answer: 3,
              },
              {
                options: [
                  "reached",
                  "arrived",
                  "came",
                  "got",
                ],
                answer: 0,
              },
              {
                options: [
                  "discovered",
                  "found",
                  "invented",
                  "made up",
                ],
                answer: 2,
              },
              {
                options: [
                  "spend",
                  "cost",
                  "pay",
                  "charge",
                ],
                answer: 2,
              },
              {
                options: [
                  "paid",
                  "given",
                  "spent",
                  "bought",
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
            title: "My grandfather's garden",
            text: [
              "My grandfather has a large garden behind his house, {1} he grows fruit and vegetables. I've helped him there every summer since I was small.",
              "He taught me how to plant seeds and how to know {2} the tomatoes are ready to pick. My favourite job is collecting strawberries, although I usually eat more {3} I put in the basket!",
              "Last year, Grandpa hurt his back, so I did most of the work myself. It was hard, but I was proud when we had our biggest harvest {4}. We gave lots of vegetables to the neighbours. Grandpa says I'm a better gardener {5} he is now. I don't believe him, but I hope I'll have my own garden {6} day.",
            ],
            answers: [
              [
                "where",
              ],
              [
                "when",
                "if",
                "whether",
              ],
              [
                "than",
              ],
              [
                "ever",
              ],
              [
                "than",
              ],
              [
                "one",
                "some",
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
            instruction: "Read this email from your English-speaking friend Jo and the notes you have made. Write your email to Jo using all the notes. Write about 100 words.",
            input: {
              from: "Jo",
              subject: "Your birthday",
              lines: [
                "It's your birthday next week, isn't it? [Yes]",
                "What are you planning to do to celebrate? [Tell Jo]",
                "What would you like as a present? [Explain]",
                "Shall we meet up at the weekend? [Suggest a place]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nYes, my birthday is next Thursday! I can't believe I'll be sixteen.\n\nI'm planning to have a small party at home with my family on Thursday evening. Then on Saturday, I'm going bowling with some friends from school. You should come too!\n\nThanks for asking about a present. I'd really like a book by my favourite author, because she's just written a new one. But please don't spend too much money.\n\nIt would be great to meet at the weekend. How about the café next to the cinema on Sunday afternoon?\n\nSee you soon,\nZeynep",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My favourite place",
              lines: [
                "Tell us about a place that's special to you.",
                "Where is it, and what's it like?",
                "Why do you love it?",
                "We'll publish the best articles.",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "A beach I'll always love\n\nMy favourite place is a small beach near my grandparents' village. It isn't famous, and there are no hotels or restaurants, which is why I love it.\n\nTo get there, you have to walk down a narrow path through pine trees. Suddenly, you see the clear blue sea and white sand. In summer, the water is warm, and you can see fish swimming around your feet.\n\nI've been going there since I was a baby. It reminds me of happy summers with my family. Whenever I feel stressed, I close my eyes and imagine I'm sitting on that beach.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The phone rang in the middle of the night.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The phone rang in the middle of the night. Ben woke up and looked at the clock. It was three o'clock in the morning. Who could be calling so late?\n\nHe answered nervously. It was his best friend, Tom, who sounded very excited. 'Look out of your window!' Tom said. 'Quickly!'\n\nBen ran to the window and opened the curtains. The sky was full of green and purple lights, dancing above the houses. It was the Northern Lights! He had always wanted to see them.\n\nBen stayed at the window for an hour, watching the beautiful lights. It was a night he would never forget.",
          },
        },
      ],
    },
  ],
};
