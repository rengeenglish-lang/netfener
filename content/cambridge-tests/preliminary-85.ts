import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 85 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_85: CambridgeTest = {
  id: "preliminary-85",
  level: "preliminary",
  no: 85,
  title: "B1 Preliminary · Practice Test 85",
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
                    "The school play will be on Friday evening at 7 p.m. Tickets are £5.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The play is free.",
                  "There's a play on Friday that you must pay for.",
                  "The play is in the afternoon.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I can't find the address of the party. Can you send it to me? Lucy",
                  ],
                },
                question: "What does Lucy need?",
                options: [
                  "the party address",
                  "a lift",
                  "a present",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Wash before first use.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't wash it.",
                  "It's already clean.",
                  "Clean it before you use it.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "I'm going to the cinema on Saturday. Do you want to come with me? Ben",
                  ],
                },
                question: "What is Ben doing?",
                options: [
                  "asking for a ticket",
                  "inviting Tom to the cinema",
                  "telling Tom about a film",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Closed for lunch 1–2 p.m.",
                  ],
                },
                question: "When is the shop closed?",
                options: [
                  "all afternoon",
                  "for an hour at lunchtime",
                  "in the morning",
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
            instruction: "The young people below all want to visit a city. Read the descriptions of eight cities. Decide which city would be the most suitable for each person.",
            options: [
              {
                title: "New York",
                text: "Skyscrapers, Broadway shows and shopping.",
              },
              {
                title: "Tokyo",
                text: "Modern technology and ancient temples.",
              },
              {
                title: "Cairo",
                text: "The pyramids and ancient Egyptian history.",
              },
              {
                title: "Sydney",
                text: "Beaches, surfing and the Opera House.",
              },
              {
                title: "Rio de Janeiro",
                text: "Carnival, beaches and football.",
              },
              {
                title: "Venice",
                text: "Canals, gondolas and beautiful architecture.",
              },
              {
                title: "Istanbul",
                text: "Mosques, markets and history.",
              },
              {
                title: "Reykjavik",
                text: "Northern Lights and hot springs.",
              },
            ],
            items: [
              {
                text: "Elif wants to see the pyramids.",
                answer: 2,
              },
              {
                text: "Can loves surfing.",
                answer: 3,
              },
              {
                text: "Zeynep wants to see Broadway shows.",
                answer: 0,
              },
              {
                text: "Mert wants to see the Northern Lights.",
                answer: 7,
              },
              {
                text: "Asya wants to ride in a gondola.",
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
              title: "A summer job abroad",
              paragraphs: [
                "Last summer, I worked at a hotel in Spain for two months. I wanted to improve my Spanish and earn some money.",
                "My job was to help in the hotel restaurant. I served breakfast to the guests and cleaned the tables. It was hard work, and I had to get up very early.",
                "At first, I found it difficult to speak Spanish. The other staff spoke very quickly, and I didn't understand everything. But they were very patient and helped me.",
                "By the end of the summer, my Spanish had improved a lot. I'd also made friends with people from all over the world. I saved enough money to travel around Spain for a week. It was an amazing experience, and I'm going to do it again next summer.",
              ],
            },
            items: [
              {
                question: "Why did the writer work in Spain?",
                options: [
                  "to have a holiday",
                  "to visit family",
                  "to improve Spanish and earn money",
                  "to study",
                ],
                answer: 2,
              },
              {
                question: "What was the writer's job?",
                options: [
                  "cleaning rooms",
                  "working at reception",
                  "helping in the restaurant",
                  "cooking",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "speaking Spanish",
                  "getting up early",
                  "cleaning",
                  "serving food",
                ],
                answer: 0,
              },
              {
                question: "Who helped the writer?",
                options: [
                  "the guests",
                  "her family",
                  "her teacher",
                  "the other staff",
                ],
                answer: 3,
              },
              {
                question: "What did the writer do with her money?",
                options: [
                  "bought clothes",
                  "travelled around Spain",
                  "saved it",
                  "bought a phone",
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
            title: "A café for book lovers",
            text: [
              "In Paris, there's a café where you can read books while you drink your coffee. {1} It's called the Book Café.",
              "The café has more than 5,000 books on its shelves. {2} Customers can read any book they like.",
              "If you finish a book, you can take it home. {3} The only rule is that you must leave another book in its place.",
              "The café also organises events for book lovers. {4} Famous writers sometimes come to talk about their books.",
              "The Book Café has become very popular. {5} Many people say it's the best place in Paris to relax.",
            ],
            sentences: [
              "This way, there are always new books on the shelves.",
              "The café doesn't serve coffee.",
              "It's a paradise for people who love reading.",
              "It's often difficult to find a seat.",
              "Nobody visits the café.",
              "They're in many different languages.",
              "Books are not allowed in the café.",
              "There are book clubs and poetry readings.",
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
            title: "Climate change",
            text: [
              "Climate change is one of the biggest problems facing our planet. The Earth is getting {1} because of gases like carbon dioxide in the air.",
              "These gases come from burning fuels like coal, oil and gas. When we drive cars, use electricity and fly in planes, we {2} these gases.",
              "Climate change is causing many problems. Ice in the Arctic is melting, and sea levels are rising. Some places are getting more floods and storms, while others are getting {3} droughts. Many animals are losing their homes. To fight climate change, we need to {4} the amount of carbon dioxide we produce. We can use renewable energy, like solar and wind power. We can also walk, cycle or use public transport instead of driving. Young people around the world are {5} action. They're protesting and asking governments to do more. If we all work together, we can {6} our planet.",
            ],
            gaps: [
              {
                options: [
                  "warm",
                  "warmth",
                  "warmly",
                  "warmer",
                ],
                answer: 3,
              },
              {
                options: [
                  "produce",
                  "production",
                  "productive",
                  "producer",
                ],
                answer: 0,
              },
              {
                options: [
                  "long",
                  "length",
                  "longer",
                  "lengthen",
                ],
                answer: 2,
              },
              {
                options: [
                  "reduction",
                  "reduced",
                  "reduce",
                  "reducing",
                ],
                answer: 2,
              },
              {
                options: [
                  "taking",
                  "take",
                  "took",
                  "taken",
                ],
                answer: 0,
              },
              {
                options: [
                  "saving",
                  "saved",
                  "saver",
                  "save",
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
            title: "A wonderful trip",
            text: [
              "Last month, my class went on a school trip {1} London for three days. It was the best trip I've ever been on.",
              "On the first day, we visited the Tower of London. We saw the Crown Jewels and learned about the history of the kings and queens. Then we went on the London Eye. The view {2} the top was amazing!",
              "On the second day, we visited the British Museum. I saw mummies from ancient Egypt and lots of other interesting things. In the evening, we went to the theatre to see a musical. It was fantastic! On the last day, we went shopping {3} Oxford Street. I bought presents for my family. We also had lunch in a traditional English pub. I tried fish and chips {4} the first time. It was delicious! I learned so much {5} the trip. I'd love to go back to London {6} day.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "from",
              ],
              [
                "in",
                "on",
              ],
              [
                "for",
              ],
              [
                "on",
                "during",
                "from",
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "A school exchange",
              lines: [
                "I'm going on a school exchange next month! [Exciting!]",
                "Have you ever been on an exchange? [Tell Jamie]",
                "What should I take with me? [Give advice]",
                "How can I make friends with my exchange partner? [Give tips]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nThat's so exciting! You'll have an amazing time.\n\nYes, I went on an exchange to Germany last year. I stayed with a German family for two weeks. At first, I was nervous, but my exchange partner was very friendly. We're still good friends now.\n\nYou should take a small present for your host family, maybe something typical from your country. Don't forget warm clothes in case it's cold, and bring a camera to take photos.\n\nTo make friends with your exchange partner, ask them about their interests and try to find things you have in common. Be open to trying new things, even if they seem strange at first!\n\nBye,\nLara",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Should students have homework?",
              lines: [
                "Do you think students should have homework?",
                "What are the advantages and disadvantages?",
                "How much homework is too much?",
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
            sample: "Homework: good or bad?\n\nHomework is a topic that many students have strong opinions about. I think homework can be useful, but only if there isn't too much of it.\n\nThe advantages of homework are that it helps students practise what they've learned at school. It also teaches them to work independently and manage their time.\n\nHowever, too much homework can be stressful. Many students have lots of homework every evening and don't have time for hobbies, sport or family. This isn't healthy.\n\nI think students should have about an hour of homework a day. This gives them time to practise, but also time to relax and enjoy other activities.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Sam opened the door, he couldn't believe who was standing there.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Sam opened the door, he couldn't believe who was standing there. It was his best friend, Leo, who had moved to Australia five years ago!\n\n'Surprise!' Leo shouted. 'My family has moved back. We're living in the house next to yours!' Sam was so happy that he couldn't speak.\n\nThey spent the whole afternoon talking. Leo told Sam about his life in Australia: surfing, kangaroos and hot Christmas days on the beach. Sam told Leo about everything that had happened while he was away.\n\nBy the evening, it felt as if Leo had never left. Sam was so glad to have his best friend back.",
          },
        },
      ],
    },
  ],
};
