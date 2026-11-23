import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 81 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_81: CambridgeTest = {
  id: "preliminary-81",
  level: "preliminary",
  no: 81,
  title: "B1 Preliminary · Practice Test 81",
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
                    "Lost property will be given to charity at the end of the month.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost property is kept forever.",
                  "Collect lost things before the end of the month.",
                  "Lost property is sold.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ben, the concert starts at 8, not 7. See you at 7.30! Tom",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the place",
                  "the day",
                  "the start time",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Store in a cool, dark place.",
                  ],
                },
                question: "Where should you keep this?",
                options: [
                  "somewhere cool and dark",
                  "in the sun",
                  "in a warm place",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Can you bring some cakes to the school fair on Saturday? Mrs Hill",
                  ],
                },
                question: "What does Mrs Hill want?",
                options: [
                  "help with the fair",
                  "cakes for the fair",
                  "money",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Card payments only.",
                  ],
                },
                question: "How can you pay?",
                options: [
                  "by card",
                  "with cash",
                  "by cheque",
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
            instruction: "The young people below all want to join a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Pottery Club",
                text: "Make bowls and plates from clay.",
              },
              {
                title: "Astronomy Club",
                text: "Look at stars and planets.",
              },
              {
                title: "Hiking Club",
                text: "Walk in the mountains every weekend.",
              },
              {
                title: "Dance Club",
                text: "Learn salsa and hip hop.",
              },
              {
                title: "Writing Club",
                text: "Write stories and poems.",
              },
              {
                title: "Gaming Club",
                text: "Play video games together.",
              },
              {
                title: "Sewing Club",
                text: "Make your own clothes.",
              },
              {
                title: "Swimming Club",
                text: "Swim and enter competitions.",
              },
            ],
            items: [
              {
                text: "Elif wants to make her own clothes.",
                answer: 6,
              },
              {
                text: "Can loves looking at the stars.",
                answer: 1,
              },
              {
                text: "Zeynep wants to write stories.",
                answer: 4,
              },
              {
                text: "Mert loves walking in the mountains.",
                answer: 2,
              },
              {
                text: "Asya wants to make things from clay.",
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
              title: "Learning to dance",
              paragraphs: [
                "When I was fourteen, I started taking salsa lessons. I'd always wanted to dance, but I was too shy.",
                "My first lesson was very difficult. I didn't know the steps, and I kept stepping on my partner's feet! I felt very embarrassed and wanted to leave.",
                "But the teacher was very encouraging. She told me that everyone finds it difficult at first. I decided to keep going. I practised at home every evening, watching videos online.",
                "After six months, I could dance quite well. Last month, I performed in a show with my dance class. My family came to watch, and they were very proud. Dancing has made me more confident, and I've made lots of new friends.",
              ],
            },
            items: [
              {
                question: "Why didn't the writer dance before?",
                options: [
                  "She didn't like music.",
                  "She was too shy.",
                  "She was too busy.",
                  "She didn't know about salsa.",
                ],
                answer: 1,
              },
              {
                question: "What happened in the first lesson?",
                options: [
                  "She stepped on her partner's feet.",
                  "She danced perfectly.",
                  "She left early.",
                  "She won a prize.",
                ],
                answer: 0,
              },
              {
                question: "How did the writer practise at home?",
                options: [
                  "with her family",
                  "with a teacher",
                  "by watching videos",
                  "she didn't practise",
                ],
                answer: 2,
              },
              {
                question: "What happened last month?",
                options: [
                  "She stopped dancing.",
                  "She performed in a show.",
                  "She became a teacher.",
                  "She hurt herself.",
                ],
                answer: 1,
              },
              {
                question: "How has dancing changed the writer?",
                options: [
                  "She is more shy.",
                  "She doesn't like dancing.",
                  "She has no friends.",
                  "She is more confident.",
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
            title: "An island of rabbits",
            text: [
              "In Japan, there's a small island where hundreds of wild rabbits live. {1} It's called Okunoshima, but people call it 'Rabbit Island'.",
              "Nobody knows exactly how the rabbits got there. {2} Some people think a group of children released eight rabbits in the 1970s.",
              "There are no dogs or cats on the island. {3} This means the rabbits are safe and their numbers have grown.",
              "The rabbits are very friendly. {4} When visitors arrive, the rabbits run towards them, hoping to get food.",
              "Rabbit Island has become a popular tourist attraction. {5} Visitors can stay at a hotel on the island.",
            ],
            sentences: [
              "Hunting is also not allowed.",
              "Dogs live on the island.",
              "There are now more than 1,000 rabbits.",
              "Thousands of people visit every year.",
              "Nobody visits the island.",
              "There are several different stories.",
              "The rabbits are dangerous.",
              "They aren't afraid of people.",
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
            title: "Music",
            text: [
              "Music is an important part of every {1} in the world. People have been making music for thousands of years.",
              "The oldest musical instrument ever found is a flute made from bird bone. It's about 40,000 years old!",
              "Music can affect how we feel. Fast, happy music can make us feel energetic, while slow music can help us relax. Scientists have discovered that listening to music can reduce stress and improve our {2}. Learning to play a musical instrument is also good for the brain. It can help children {3} better at school. Today, we can listen to music anywhere, thanks to smartphones and the internet. There are many different types of music, like pop, rock, jazz and classical. Everyone has their own {4} taste. Music also brings people together. At concerts and festivals, thousands of people {5} the same songs. For many people, music is an {6} part of their lives.",
            ],
            gaps: [
              {
                options: [
                  "culture",
                  "cultural",
                  "culturally",
                  "cultured",
                ],
                answer: 0,
              },
              {
                options: [
                  "moody",
                  "moods up",
                  "moodily",
                  "mood",
                ],
                answer: 3,
              },
              {
                options: [
                  "concentration",
                  "concentrate",
                  "concentrated",
                  "concentrating",
                ],
                answer: 1,
              },
              {
                options: [
                  "musical",
                  "music",
                  "musician",
                  "musically",
                ],
                answer: 0,
              },
              {
                options: [
                  "singer",
                  "singing",
                  "sing",
                  "sang",
                ],
                answer: 2,
              },
              {
                options: [
                  "essence",
                  "essential",
                  "essentially",
                  "essentials",
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
            title: "A weekend in Paris",
            text: [
              "Last weekend, I went to Paris {1} my parents. It was my first time in France, and I was very excited.",
              "We travelled by train from London. The journey took only two and a half hours! When we arrived, we went to our hotel, which was near the Eiffel Tower.",
              "On the first day, we climbed the Eiffel Tower. The view from the top was amazing. We could see the whole city! Then we had lunch at a small café. I tried French onion soup {2} the first time. It was delicious! In the afternoon, we visited the Louvre Museum. We saw the Mona Lisa, but there were so many people {3} I could hardly see it! On the second day, we went on a boat trip along the River Seine. We saw lots of beautiful buildings, {4} Notre-Dame. In the evening, we ate in a restaurant and tried snails. They were {5} than I expected! I'd love to go back to Paris {6} day.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "for",
              ],
              [
                "that",
              ],
              [
                "like",
                "including",
              ],
              [
                "better",
                "nicer",
                "tastier",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "A pet",
              lines: [
                "My family is thinking of getting a pet. [Exciting!]",
                "What pet do you think we should get? [Give advice]",
                "Do you have a pet? [Tell Kim]",
                "How should we look after it? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat's so exciting! Pets are wonderful.\n\nI think you should get a dog. Dogs are very loyal and friendly, and they're great for families. But they need lots of exercise, so you'll have to walk them every day. If you don't have much time, a cat might be better.\n\nYes, I have a cat called Luna. She's three years old and very playful. She loves sleeping on my bed!\n\nTo look after your pet, you need to give it food and water every day. You should also take it to the vet regularly. Most importantly, give it lots of love and attention.\n\nBye,\nBeren",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My dream holiday",
              lines: [
                "Where would you go on your dream holiday?",
                "Who would you go with?",
                "What would you do?",
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
            sample: "Exploring Australia\n\nMy dream holiday would be a trip to Australia with my best friends. I've always wanted to go there, because it has amazing nature and unique animals.\n\nFirst, we'd visit Sydney and see the famous Opera House. Then we'd travel to the Great Barrier Reef to go snorkelling and see colourful fish and coral. After that, we'd go to the outback to see kangaroos and koalas.\n\nWe'd also go surfing on the beautiful beaches and try Australian food. In the evenings, we'd watch the sunset and look at the stars. It would be the trip of a lifetime, and I hope I can do it one day!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The letter arrived on a rainy Monday morning.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The letter arrived on a rainy Monday morning. Lily opened it nervously. It was from the national writing competition.\n\n'Dear Lily,' it said. 'We are delighted to tell you that your story has won first prize.' Lily couldn't believe it! She read the letter again and again.\n\nShe had written a story about a girl who could talk to animals. She'd spent months writing it, and she'd almost not entered the competition because she didn't think she was good enough.\n\nThe prize was a trip to London to meet famous writers. Lily's story was also published in a book. She was so proud. Now she wants to become a writer.",
          },
        },
      ],
    },
  ],
};
