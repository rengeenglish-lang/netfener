import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 31 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_31: CambridgeTest = {
  id: "preliminary-31",
  level: "preliminary",
  no: 31,
  title: "B1 Preliminary · Practice Test 31",
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
                    "Students are reminded that the school field is out of bounds during wet weather.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can't go on the field when it's raining.",
                  "The field is closed all week.",
                  "Students must play on the field.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I'm running a bit late. Can you order me a coffee? I'll be there in ten minutes. Kate",
                  ],
                },
                question: "What does Kate want Lucy to do?",
                options: [
                  "wait outside",
                  "get her a drink",
                  "cancel the meeting",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Hand wash only.",
                    "Do not iron.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You shouldn't put this in a washing machine.",
                  "You can iron this.",
                  "You can wash this in a machine.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The trip to the science museum is on Thursday, not Wednesday. We'll leave school at nine. Mr Black",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the time of the trip",
                  "the place",
                  "the day of the trip",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Children under 12 must be accompanied by an adult for films after 8 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't watch films after 8.",
                  "Adults can't watch children's films.",
                  "Young children need an adult for late films.",
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
            instruction: "The young people below all want to go on a summer camp. Read the descriptions of eight camps. Decide which camp would be the most suitable for each person.",
            options: [
              {
                title: "Sports Camp",
                text: "Football, tennis, swimming and basketball every day with professional coaches.",
              },
              {
                title: "Art Camp",
                text: "Painting, sculpture and photography workshops in a beautiful village.",
              },
              {
                title: "Science Camp",
                text: "Experiments, robotics and trips to science museums.",
              },
              {
                title: "Language Camp",
                text: "English lessons in the morning and activities with international students in the afternoon.",
              },
              {
                title: "Nature Camp",
                text: "Learn about plants and animals while camping in a national park.",
              },
              {
                title: "Music Camp",
                text: "Practise your instrument and perform in a concert at the end.",
              },
              {
                title: "Drama Camp",
                text: "Acting and singing classes, with a show for parents on the last day.",
              },
              {
                title: "Adventure Camp",
                text: "Rock climbing, kayaking and zip lines for brave teenagers.",
              },
            ],
            items: [
              {
                text: "Mert wants to improve his English and make friends from other countries.",
                answer: 3,
              },
              {
                text: "Selin plays the violin and wants to perform.",
                answer: 5,
              },
              {
                text: "Kerem loves exciting activities and isn't afraid of anything.",
                answer: 7,
              },
              {
                text: "Defne is interested in wildlife and wants to sleep outdoors.",
                answer: 4,
              },
              {
                text: "Can wants to build robots.",
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
              title: "How I learned to love reading",
              paragraphs: [
                "When I was younger, I hated reading. My parents bought me lots of books, but I never finished any of them. I thought reading was boring, and I'd much rather play video games.",
                "Everything changed when I was thirteen and broke my leg. I had to stay at home for six weeks, and I got very bored. My grandmother brought me a book about a boy who goes on an adventure in the jungle.",
                "I didn't want to read it, but I had nothing else to do. To my surprise, I couldn't stop reading. I finished it in two days and asked my grandmother if there were more books in the series. There were five!",
                "Since then, I've read more than a hundred books. I now prefer reading to video games, and I've even started writing my own stories. My grandmother says she's very proud that she helped me discover reading.",
              ],
            },
            items: [
              {
                question: "What did the writer think about reading when he was younger?",
                options: [
                  "It was exciting.",
                  "It was difficult.",
                  "It was boring.",
                  "It was useful.",
                ],
                answer: 2,
              },
              {
                question: "Why did the writer have to stay at home?",
                options: [
                  "He was ill.",
                  "He was injured.",
                  "School was closed.",
                  "He was on holiday.",
                ],
                answer: 1,
              },
              {
                question: "Who gave the writer the book?",
                options: [
                  "his parents",
                  "his teacher",
                  "a friend",
                  "his grandmother",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel about the book?",
                options: [
                  "He didn't like it.",
                  "He loved it.",
                  "He found it too long.",
                  "He didn't finish it.",
                ],
                answer: 1,
              },
              {
                question: "What has the writer started doing?",
                options: [
                  "playing more games",
                  "working in a library",
                  "teaching reading",
                  "writing stories",
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
            title: "A bridge made of living roots",
            text: [
              "In the north-east of India, there are bridges that have been grown, not built. {1} They are made from the roots of rubber trees.",
              "The local people began growing these bridges hundreds of years ago. {2} During the rainy season, the rivers become very wide and dangerous.",
              "To make a bridge, people guide the roots across the river using bamboo. {3} It can take fifteen to thirty years for a bridge to become strong enough to use.",
              "Unlike normal bridges, living root bridges get stronger as they get older. {4} Some of them are more than 500 years old.",
              "Today, the bridges attract tourists from all over the world. {5} Scientists are also studying them to learn how to build in a more natural way.",
            ],
            sentences: [
              "Local people now earn money by working as guides.",
              "They needed a way to cross the rivers in the forest.",
              "The bridges were built last year.",
              "They are called living root bridges.",
              "Some can hold the weight of fifty people at once.",
              "Tourists are not allowed to visit.",
              "Over time, the roots grow and become thicker.",
              "The bridges are made of metal.",
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
            title: "The Northern Lights",
            text: [
              "The Northern Lights are one of the most beautiful natural sights in the world. They are bright, colourful lights that {1} in the night sky near the North Pole.",
              "The lights are caused by tiny pieces of energy from the Sun that hit gases in the Earth's atmosphere. This makes the gases {2} light. The most common colour is green, but they can also be pink, red or purple.",
              "The best places to see the Northern Lights are Norway, Sweden, Finland, Iceland and Canada. The best time to see them is between September and March, when the nights are long and {3}. You also need a clear sky without clouds. Many tourists travel to these countries {4} to see the lights. Some hotels have glass roofs so that guests can watch the lights from their beds! But the lights are not always visible, so you need to be {5}. Seeing them is an experience you will never {6}.",
            ],
            gaps: [
              {
                options: [
                  "show up",
                  "appear",
                  "come up",
                  "arrive",
                ],
                answer: 1,
              },
              {
                options: [
                  "give off",
                  "give up",
                  "make up",
                  "put up",
                ],
                answer: 0,
              },
              {
                options: [
                  "darkness",
                  "darken",
                  "dark",
                  "darkly",
                ],
                answer: 2,
              },
              {
                options: [
                  "special",
                  "especially",
                  "specially up",
                  "specialist",
                ],
                answer: 1,
              },
              {
                options: [
                  "patience",
                  "patiently",
                  "patients",
                  "patient",
                ],
                answer: 3,
              },
              {
                options: [
                  "remember",
                  "forget",
                  "lose",
                  "miss",
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
            title: "An exciting week",
            text: [
              "Last week was very exciting {1} me. On Monday, I found out that I'd passed all my exams. I was so relieved!",
              "On Wednesday, my older sister came home from university for the holidays. I hadn't seen her {2} three months, so we had lots to talk about. She told me all about her new friends and her life in the city.",
              "On Friday, it was my birthday. My parents took me to a restaurant {3} I'd always wanted to go to. The food was delicious. Then on Saturday, I had a party with my friends. We went bowling and then had pizza at my house. My sister made me a beautiful cake {4} chocolate and strawberries on top. It was the best week I've had {5} a long time. I hope next week will be just {6} good!",
            ],
            answers: [
              [
                "for",
              ],
              [
                "for",
              ],
              [
                "that",
                "which",
              ],
              [
                "with",
              ],
              [
                "in",
                "for",
              ],
              [
                "as",
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
              subject: "A trip to the beach",
              lines: [
                "My family is going to the beach next weekend. Do you want to come? [Answer]",
                "What do you like doing at the beach? [Tell Kim]",
                "What should I bring? [Ask]",
                "How long will we stay? [Ask]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThank you so much for inviting me! I'd love to come to the beach with your family. I'll ask my parents tonight, but I'm sure they'll say yes.\n\nI love swimming in the sea and building sandcastles. I also enjoy playing volleyball and looking for shells. Maybe we could have a picnic on the beach too!\n\nWhat should I bring? I'll bring my swimming costume, a towel and sun cream, of course. Should I bring some food or drinks?\n\nAlso, how long will we stay? Will we come back on Saturday evening, or will we stay the night?\n\nSee you soon,\nDuru",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Social media: good or bad?",
              lines: [
                "Do you think social media is good or bad for teenagers?",
                "How do you use social media?",
                "What advice would you give to other teenagers?",
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
            sample: "Social media: friend or enemy?\n\nSocial media has both advantages and disadvantages for teenagers. On the positive side, it helps us stay in touch with friends and family, especially those who live far away. We can also learn about the world and share our interests.\n\nHowever, social media can also be harmful. Some teenagers spend too much time online and feel bad about themselves when they compare their lives to others. There's also the problem of cyberbullying.\n\nI use social media for about an hour a day to chat with friends. My advice to other teenagers is to limit your time online and remember that people only show the best parts of their lives.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Leo knew he shouldn't have opened the box.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Leo knew he shouldn't have opened the box. His grandfather had told him never to touch it. But one afternoon, when everyone was out, he couldn't resist.\n\nInside, there was an old map and a letter. The letter said that there was treasure hidden somewhere in the garden. Leo's heart started beating fast.\n\nHe followed the map to the old oak tree at the bottom of the garden and started digging. After an hour, his spade hit something hard. It was a small metal box full of old coins and photos.\n\nWhen his grandfather came home, Leo showed him. His grandfather smiled. 'I hid that when I was your age,' he said.",
          },
        },
      ],
    },
  ],
};
