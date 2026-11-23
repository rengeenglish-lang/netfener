import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 90 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_90: CambridgeTest = {
  id: "preliminary-90",
  level: "preliminary",
  no: 90,
  title: "B1 Preliminary · Practice Test 90",
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
                    "Students can now borrow e-books from the school library website.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can borrow books online.",
                  "The library is closed.",
                  "Students can't borrow books.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've lost my phone charger. Can I borrow yours tonight? Lucy",
                  ],
                },
                question: "What does Lucy want?",
                options: [
                  "to buy a charger",
                  "to borrow a phone",
                  "to borrow a charger",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Ready to eat. Keep refrigerated.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You must cook it.",
                  "You can eat it now, but keep it cold.",
                  "Keep it warm.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "The match has been moved to Sunday because of the rain on Saturday. Coach",
                  ],
                },
                question: "Why has the match been moved?",
                options: [
                  "because the coach is ill",
                  "because of the rain",
                  "because the pitch is closed",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "We are now open on Sundays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The café is closed on Sundays.",
                  "The café is closing.",
                  "The café is open on Sundays now.",
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
                title: "Wild Animals",
                text: "A documentary about animals in Africa.",
              },
              {
                title: "Kitchen Stars",
                text: "Young chefs compete.",
              },
              {
                title: "Laugh Factory",
                text: "Comedy sketches.",
              },
              {
                title: "Tech Talk",
                text: "Reviews of new gadgets.",
              },
              {
                title: "Football Focus",
                text: "Football news and highlights.",
              },
              {
                title: "Music Masters",
                text: "Interviews with famous musicians.",
              },
              {
                title: "History Mysteries",
                text: "Unsolved mysteries from the past.",
              },
              {
                title: "Travel Diaries",
                text: "Travel adventures around the world.",
              },
            ],
            items: [
              {
                text: "Elif loves new gadgets.",
                answer: 3,
              },
              {
                text: "Can wants to see football highlights.",
                answer: 4,
              },
              {
                text: "Zeynep loves comedy.",
                answer: 2,
              },
              {
                text: "Mert wants to learn about African animals.",
                answer: 0,
              },
              {
                text: "Asya loves cooking competitions.",
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
              title: "My year in Japan",
              paragraphs: [
                "Last year, I spent a year studying in Japan. I lived with a Japanese family in Tokyo and went to a Japanese high school.",
                "At first, everything was very difficult. I couldn't speak much Japanese, and the school rules were very different. Students had to clean the classrooms themselves!",
                "My host family was wonderful. They taught me Japanese and took me to lots of interesting places. I visited temples, gardens and even climbed Mount Fuji.",
                "By the end of the year, I could speak Japanese quite well. I'd made lots of friends and learned so much about Japanese culture. I still keep in touch with my host family. The experience changed my life, and I hope to work in Japan one day.",
              ],
            },
            items: [
              {
                question: "Where did the writer live?",
                options: [
                  "in a hotel",
                  "in a flat alone",
                  "with a Japanese family",
                  "in a school",
                ],
                answer: 2,
              },
              {
                question: "What surprised the writer about the school?",
                options: [
                  "Students cleaned the classrooms.",
                  "There were no rules.",
                  "There were no lessons.",
                  "It was very small.",
                ],
                answer: 0,
              },
              {
                question: "What did the writer climb?",
                options: [
                  "Mount Everest",
                  "a tower",
                  "a tree",
                  "Mount Fuji",
                ],
                answer: 3,
              },
              {
                question: "What could the writer do by the end?",
                options: [
                  "speak Japanese perfectly",
                  "speak Japanese quite well",
                  "teach Japanese",
                  "write Japanese books",
                ],
                answer: 1,
              },
              {
                question: "What does the writer hope to do?",
                options: [
                  "work in Japan",
                  "live in Tokyo",
                  "teach English",
                  "become a guide",
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
            title: "A park for dogs",
            text: [
              "In New York, there's a special park just for dogs. {1} Dogs can run, play and swim there.",
              "The park has separate areas for big and small dogs. {2} This keeps the small dogs safe.",
              "There's also a swimming pool for dogs. {3} Dogs love jumping in the water on hot summer days.",
              "The park has water fountains and bins for dog waste. {4} Dog owners must clean up after their dogs.",
              "The park is very popular with dog owners in the city. {5} Many people say it's the best park in New York.",
            ],
            sentences: [
              "Nobody uses the park.",
              "There are strict rules about this.",
              "Dogs aren't allowed in the park.",
              "Big dogs can sometimes play too roughly.",
              "It's one of the largest dog parks in the city.",
              "On weekends, hundreds of dogs visit.",
              "The park is very small.",
              "It's open from May to September.",
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
            title: "Space travel",
            text: [
              "Space travel has always fascinated people. In 1957, the first satellite, Sputnik, was {1} into space.",
              "Four years later, in 1961, Yuri Gagarin became the first person to travel into space. In 1969, Neil Armstrong became the first person to walk on the Moon.",
              "Today, astronauts live on the International Space Station. They do {2} to learn about space and how it affects the human body. Living in space is very difficult. There's no gravity, so astronauts float around. They have to {3} exercise every day to keep their muscles strong. In the future, scientists want to send people to Mars. The {4} would take about seven months. Astronauts would face many dangers, like radiation and loneliness. Some companies are also planning space {5} for tourists. However, tickets are very expensive. Maybe one day, space travel will be {6} for everyone.",
            ],
            gaps: [
              {
                options: [
                  "launched",
                  "launch",
                  "launching",
                  "launches",
                ],
                answer: 0,
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
                  "does",
                  "doing",
                  "do",
                  "did",
                ],
                answer: 2,
              },
              {
                options: [
                  "journey",
                  "journalist",
                  "journeyed",
                  "journeying",
                ],
                answer: 0,
              },
              {
                options: [
                  "holidaymaker",
                  "holidaying",
                  "holidayed",
                  "holidays",
                ],
                answer: 3,
              },
              {
                options: [
                  "possibility",
                  "possible",
                  "possibly",
                  "impossible",
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
            title: "A great holiday",
            text: [
              "Last summer, my family went on holiday to Turkey. We stayed in a hotel {1} the beach in Antalya.",
              "The weather was hot and sunny every day. We swam in the sea and relaxed by the pool. The water was so clear that you could see the fish!",
              "We also visited some ancient ruins. My favourite was Ephesus, {2} is an ancient Roman city. It was amazing to walk through the old streets. One day, we went on a boat trip along the coast. We stopped {3} beautiful bays and swam in the turquoise water. The food was delicious. I tried lots of Turkish dishes, like kebabs and baklava. The people were very friendly and welcoming. I didn't want to leave {4} the end of the holiday. I'd love to go back to Turkey {5} day. It's one of the most beautiful countries I've {6} visited.",
            ],
            answers: [
              [
                "by",
                "near",
                "on",
              ],
              [
                "which",
              ],
              [
                "at",
                "in",
              ],
              [
                "at",
              ],
              [
                "one",
                "some",
              ],
              [
                "ever",
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
              subject: "A cooking class",
              lines: [
                "I'm going to start a cooking class! [Great!]",
                "What do you like to cook? [Tell Jo]",
                "What's your favourite dish? [Explain]",
                "Could we cook together sometime? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nThat's great! Cooking is such a useful skill.\n\nI like cooking pasta and rice dishes, because they're easy and delicious. I also enjoy baking cookies and cakes, especially at the weekends. My chocolate chip cookies are very popular with my friends!\n\nMy favourite dish is my grandmother's lentil soup. It's a traditional dish from our country, and it's perfect on cold winter days. She taught me how to make it, and now I make it for my family.\n\nOf course we can cook together! Maybe you could come to my house next weekend, and we could make pizza from scratch.\n\nBye,\nNil",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Why friendship is important",
              lines: [
                "Why are friends important?",
                "Tell us about a good friend.",
                "How do you keep a friendship strong?",
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
            sample: "The power of friendship\n\nFriends are very important because they make life better. They support us when things are difficult and celebrate with us when things are good. Without friends, life would be very lonely.\n\nMy best friend is called Ali. We've known each other since we were four years old. He's very funny and always makes me laugh. When my parents got divorced, Ali was always there for me. He listened to me and helped me feel better.\n\nTo keep a friendship strong, you need to be honest and loyal. You should also spend time together and listen to each other. Small things, like remembering birthdays, also show that you care.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Max heard the noise, he knew something was wrong.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Max heard the noise, he knew something was wrong. It was coming from the river near his house. It sounded like someone shouting for help.\n\nHe ran to the river and saw a little boy in the water. The boy was trying to swim, but the current was too strong. Max didn't think twice. He found a long branch and held it out to the boy.\n\nThe boy grabbed the branch, and Max pulled him to the bank. The boy was cold and frightened, but he was safe. Max called the boy's parents, who came running.\n\nThe boy's parents thanked Max again and again. The next day, his story was in the local newspaper.",
          },
        },
      ],
    },
  ],
};
