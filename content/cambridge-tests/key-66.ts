import type { CambridgeTest } from "./types";

/** A2 Key practice test 66 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_66: CambridgeTest = {
  id: "key-66",
  level: "key",
  no: 66,
  title: "A2 Key · Practice Test 66",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
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
                    "The school photographer is coming on Tuesday.",
                    "Please wear your full uniform.",
                  ],
                },
                question: "What should students do on Tuesday?",
                options: [
                  "wear all their school clothes",
                  "bring a camera",
                  "stay at home",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ella, your book is ready to collect from the library. They'll keep it until Friday. Mum",
                  ],
                },
                question: "What does Mum tell Ella?",
                options: [
                  "The library is closed until Friday.",
                  "She has to return a book.",
                  "She can get her book before Friday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "GARDEN",
                    "Please don't pick the flowers.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can buy flowers here.",
                  "You should leave the flowers alone.",
                  "The garden is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Leo,",
                    "The basketball match is at our school, not theirs. See you in the sports hall at 4. Coach",
                  ],
                },
                question: "What has the coach told Leo?",
                options: [
                  "what time the match finishes",
                  "where the match will be",
                  "who is in the team",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free refills on hot drinks.",
                    "Ask at the counter.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Hot drinks are free.",
                  "The café only sells cold drinks.",
                  "You can have more coffee or tea for free.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "HOUSE FOR RENT",
                    "3 bedrooms, large garden, near the park.",
                    "Available from September.",
                  ],
                },
                question: "When can you move into the house?",
                options: [
                  "in September",
                  "now",
                  "next year",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Molly",
                text: "I love playing hockey. I play for my school and my town. We train three times a week. Last season, I scored more goals than anyone else in the league. A coach from the national team came to watch me play. I hope I'll be chosen for the national under-16 team.",
              },
              {
                title: "Sam",
                text: "My hobby is gardening. I grow vegetables on a small piece of land near my house. I've grown potatoes, carrots, onions and lettuce. I sell some of them to my neighbours and give the money to a local food bank. My grandfather helps me.",
              },
              {
                title: "Leila",
                text: "I love learning languages. I speak Arabic, English and French, and now I'm learning Spanish. I watch Spanish films with subtitles and talk to a Spanish pen friend online. Next summer, I'm going to a language school in Madrid for a month.",
              },
            ],
            items: [
              {
                text: "was the top scorer?",
                answer: 0,
              },
              {
                text: "is waiting to hear about a team?",
                answer: 0,
              },
              {
                text: "gives money to charity?",
                answer: 1,
              },
              {
                text: "gets help from a grandparent?",
                answer: 1,
              },
              {
                text: "speaks several languages?",
                answer: 2,
              },
              {
                text: "will study abroad soon?",
                answer: 2,
              },
              {
                text: "sells things to people nearby?",
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "A summer with dolphins",
              paragraphs: [
                "Last summer, seventeen-year-old Ella Thomas spent six weeks working with scientists who study dolphins in Scotland. 'It was my dream job,' she says.",
                "Every morning, Ella went out on a small boat with the scientists. 'We looked for dolphins and took photos of their fins,' she explains. 'Every dolphin has a different fin, so we can recognise them.'",
                "Ella also helped on land. 'I typed the information into a computer,' she says. 'It wasn't as exciting as being on the boat, but it was important.'",
                "At the end of the summer, the scientists let Ella give a name to a baby dolphin. 'I called her Luna,' says Ella. 'I hope to see her again next year. I'm going to study marine biology at university.'",
              ],
            },
            items: [
              {
                question: "How long did Ella work with the scientists?",
                options: [
                  "six months",
                  "six weeks",
                  "one week",
                ],
                answer: 1,
              },
              {
                question: "Why did they take photos of dolphins' fins?",
                options: [
                  "to identify each dolphin",
                  "to sell them",
                  "to put them online",
                ],
                answer: 0,
              },
              {
                question: "What does Ella say about the work on land?",
                options: [
                  "It was boring and useless.",
                  "It was more fun than the boat.",
                  "It was less exciting but necessary.",
                ],
                answer: 2,
              },
              {
                question: "What were Ella allowed to do?",
                options: [
                  "swim with dolphins",
                  "name a young dolphin",
                  "drive the boat",
                ],
                answer: 1,
              },
              {
                question: "What is Ella going to study?",
                options: [
                  "computer science",
                  "sea life",
                  "photography",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "The Moon landing",
            text: [
              "On 20 July 1969, the American astronaut Neil Armstrong became the first person to walk on the Moon. About 600 million people {1} it on TV.",
              "Armstrong and his partner Buzz Aldrin spent about two and a half hours walking on the Moon's surface. They {2} rocks to bring back to Earth and put an American flag on the Moon.",
              "The journey to the Moon took about three days. The astronauts travelled in a small spaceship called Apollo 11. When Armstrong stepped onto the Moon, he said the famous {3}: 'That's one small step for man, one giant leap for mankind.' Since then, only ten more people have walked on the Moon. The last time was in 1972. Today, scientists are {4} to send people back to the Moon. They hope that one day people might even {5} there. Who knows? Maybe you will be one of the {6} people to live on the Moon!",
            ],
            gaps: [
              {
                options: [
                  "saw up",
                  "watched",
                  "looked",
                ],
                answer: 1,
              },
              {
                options: [
                  "took up",
                  "held",
                  "collected",
                ],
                answer: 2,
              },
              {
                options: [
                  "words",
                  "talks",
                  "speeches",
                ],
                answer: 0,
              },
              {
                options: [
                  "thinking",
                  "planning",
                  "hoping on",
                ],
                answer: 1,
              },
              {
                options: [
                  "live",
                  "stay up",
                  "sit",
                ],
                answer: 0,
              },
              {
                options: [
                  "firstly",
                  "at first",
                  "first",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Hi Sophie,",
              "I'm writing to tell you about my new bedroom. We moved {1} a new house last week, and I've got a much bigger room now!",
              "I've painted the walls light green, and I've got a new bed and desk. My favourite thing is the big window. You can see the whole park {2} it.",
              "I'm going to have a sleepover next weekend to celebrate. Would you like {3} come? We can watch films and eat popcorn. My mum is going {4} make pizza for dinner. Bring your sleeping bag! I really hope you can come. Let me know {5} Thursday. See you {6}!",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "into",
                "to",
              ],
              [
                "from",
              ],
              [
                "to",
              ],
              [
                "to",
              ],
              [
                "by",
                "before",
                "on",
              ],
              [
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a party next week. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say whose party it is.",
              "Say where the party will be.",
              "Say what present you will take.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nNext Saturday, I'm going to my friend Elif's birthday party. It will be at a bowling centre in the city. I'm going to take her a book about horses because she loves them.\n\nBye,\nMira",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🐕🌳",
                label: "1",
              },
              {
                e: "🐕🦴⛏️",
                label: "2",
              },
              {
                e: "🐕💰👦😮",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One afternoon, Ben was playing with his dog in the garden. Suddenly, the dog started digging a big hole under a tree. Ben tried to stop it, but the dog kept digging. Then Ben saw something shiny in the hole. It was an old metal box! Inside, there were some old coins. Ben's dad said they were more than a hundred years old.",
          },
        },
      ],
    },
  ],
};
