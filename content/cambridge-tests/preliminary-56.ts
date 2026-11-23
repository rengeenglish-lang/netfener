import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 56 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_56: CambridgeTest = {
  id: "preliminary-56",
  level: "preliminary",
  no: 56,
  title: "B1 Preliminary · Practice Test 56",
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
                    "Students can collect their exam results from the office on Thursday between 10 and 12.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can get their results at a certain time.",
                  "Exams are on Thursday.",
                  "The office is closed on Thursday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Mia, I'm stuck in traffic. Can you start cooking dinner? The recipe is on the fridge. Mum",
                  ],
                },
                question: "What does Mum want Mia to do?",
                options: [
                  "buy food",
                  "begin making dinner",
                  "wait for her",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not use if seal is broken.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't use it if it has been opened.",
                  "Break the seal before using.",
                  "The seal doesn't matter.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jack,",
                    "The school trip is full, but you're first on the waiting list. I'll let you know if a place becomes available. Mr Hill",
                  ],
                },
                question: "What does Mr Hill tell Jack?",
                options: [
                  "He has a place.",
                  "The trip is cancelled.",
                  "He might get a place later.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Customers only. Please buy something to use our tables.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Anyone can sit here.",
                  "You must buy something to sit here.",
                  "The café is closed.",
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
            instruction: "The young people below all want to watch a sports match on TV. Read the descriptions of eight matches. Decide which match would be the most suitable for each person.",
            options: [
              {
                title: "Tennis Final",
                text: "The best female players compete for the title.",
              },
              {
                title: "Rugby World Cup",
                text: "An exciting match between two strong teams.",
              },
              {
                title: "Olympic Swimming",
                text: "Watch the world's fastest swimmers race.",
              },
              {
                title: "Formula 1",
                text: "Cars race around the streets of Monaco.",
              },
              {
                title: "Basketball",
                text: "Two top American teams play in the final.",
              },
              {
                title: "Cycling",
                text: "The last stage of a famous race through France.",
              },
              {
                title: "Ice Skating",
                text: "Figure skaters perform beautiful routines.",
              },
              {
                title: "Athletics",
                text: "The 100-metre final with the fastest runners.",
              },
            ],
            items: [
              {
                text: "Elif loves dancing and beautiful movement.",
                answer: 6,
              },
              {
                text: "Can is a big fan of fast cars.",
                answer: 3,
              },
              {
                text: "Zeynep plays tennis and wants to watch the best women.",
                answer: 0,
              },
              {
                text: "Mert loves cycling and long races.",
                answer: 5,
              },
              {
                text: "Lale wants to watch the world's fastest runners.",
                answer: 7,
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
              title: "A summer on a farm",
              paragraphs: [
                "Last summer, I spent six weeks working on an organic farm in Italy. I wanted to learn about farming and practise my Italian.",
                "The work was very hard. I got up at five every morning to milk the goats and feed the chickens. Then I spent the day picking fruit and vegetables in the hot sun.",
                "The family I worked with was very kind. They taught me how to make cheese and bread. In the evenings, we ate together outside, and they told me stories about their lives. My Italian improved a lot because they didn't speak any English.",
                "At the end of the summer, I didn't want to leave. I'd learned so much and made great friends. The experience made me realise that I want to work outdoors. I'm going to study agriculture at university.",
              ],
            },
            items: [
              {
                question: "Why did the writer go to Italy?",
                options: [
                  "to learn about farming and practise Italian",
                  "to visit family",
                  "for a holiday",
                  "to study at university",
                ],
                answer: 0,
              },
              {
                question: "What did the writer do every morning?",
                options: [
                  "went to school",
                  "went shopping",
                  "looked after the animals",
                  "cooked breakfast",
                ],
                answer: 2,
              },
              {
                question: "What did the family teach the writer?",
                options: [
                  "how to speak English",
                  "how to drive",
                  "how to make cheese and bread",
                  "how to swim",
                ],
                answer: 2,
              },
              {
                question: "Why did the writer's Italian improve?",
                options: [
                  "The family only spoke Italian.",
                  "She took lessons.",
                  "She watched Italian TV.",
                  "She read Italian books.",
                ],
                answer: 0,
              },
              {
                question: "What will the writer study?",
                options: [
                  "Italian",
                  "cooking",
                  "business",
                  "agriculture",
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
            title: "A school for elephants",
            text: [
              "In Thailand, there's a special school where young people learn to look after elephants. {1} It's called the Elephant Conservation Centre.",
              "Students at the school spend a month living with the elephants. {2} They feed them, bathe them in the river and take them for walks in the forest.",
              "Each student is paired with one elephant. {3} By the end of the month, many students say they feel a strong connection with their elephant.",
              "The centre also helps elephants that have been rescued. {4} Many of them used to work in the tourist industry.",
              "The school is very popular with young people from all over the world. {5} The money they pay helps to look after the elephants.",
            ],
            sentences: [
              "Students ride the elephants every day.",
              "It's one of the few places where you can do this.",
              "Some of them were badly treated before they arrived.",
              "The school is free.",
              "They learn everything about how to care for them.",
              "Elephants are not allowed at the school.",
              "They spend every day together.",
              "Many of them come back to volunteer again.",
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
            title: "The Moon",
            text: [
              "The Moon is Earth's only natural satellite. It is about a quarter of the {1} of the Earth.",
              "Scientists believe the Moon was formed about 4.5 billion years ago, when a large object crashed into the Earth. The pieces that were thrown into space slowly came together to form the Moon.",
              "The Moon doesn't have its own light. We see it because it {2} light from the Sun. As the Moon moves around the Earth, we see different parts of it lit up. This is why the Moon seems to change shape. The Moon also affects the Earth's oceans. Its gravity causes the tides to rise and fall. In 1969, Neil Armstrong became the first person to walk on the Moon. Since then, only eleven more people have walked there. Today, scientists are planning new {3} to the Moon. Some countries want to build a permanent {4} there. In the future, the Moon could be used as a base for {5} to Mars. Who knows? Maybe one day people will be able to {6} holidays there!",
            ],
            gaps: [
              {
                options: [
                  "sized",
                  "size",
                  "sizes up",
                  "sizing",
                ],
                answer: 1,
              },
              {
                options: [
                  "reflection",
                  "reflective",
                  "reflected up",
                  "reflects",
                ],
                answer: 3,
              },
              {
                options: [
                  "missions",
                  "mission up",
                  "missionary",
                  "missioned",
                ],
                answer: 0,
              },
              {
                options: [
                  "basic",
                  "based",
                  "base",
                  "basement",
                ],
                answer: 2,
              },
              {
                options: [
                  "journey up",
                  "journeyed",
                  "journeys",
                  "journeying",
                ],
                answer: 2,
              },
              {
                options: [
                  "take",
                  "took",
                  "taken",
                  "taking",
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
            title: "A school concert",
            text: [
              "Last month, our school had a concert to raise money {1} a children's hospital. Students from all years took part.",
              "I played the piano in the school orchestra. We'd been practising for months. On the night of the concert, the hall was full. More than three hundred people came, {2} parents, teachers and students.",
              "The concert started with the choir. They sang beautifully. Then it was the orchestra's turn. I was very nervous, but once we started playing, I relaxed. The audience clapped {3} a long time when we finished. There were also solo performances. My friend Emma sang a song she'd written {4}. It was amazing! At the end, the head teacher announced that we'd raised more than £2,000. Everyone cheered. It was a fantastic night, and I'm proud that we helped {5} children. I hope we'll have another concert {6} year.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "including",
              ],
              [
                "for",
              ],
              [
                "herself",
              ],
              [
                "sick",
                "ill",
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "An exchange student",
              lines: [
                "An exchange student from England is coming to stay with my family! [Exciting!]",
                "What should I show her in my town? [Give ideas]",
                "What food should we cook for her? [Suggest something]",
                "How can I help her feel at home? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nThat's so exciting! I'm sure you'll have a great time together.\n\nYou should show her the most interesting places in your town, like the old castle and the market. You could also take her to your favourite café and introduce her to your friends.\n\nI think you should cook her some traditional dishes from your country. That way, she can try something new. But make sure you ask if there's anything she doesn't eat first!\n\nTo help her feel at home, you could put some English books in her room and ask her about her family. Be patient if she's homesick at first.\n\nBye,\nSelin",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best day of my holiday",
              lines: [
                "Tell us about the best day of your last holiday.",
                "Where were you?",
                "What made it special?",
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
            sample: "A day I'll never forget\n\nThe best day of my last holiday was when we went on a boat trip in Greece. We left early in the morning and sailed to a small island.\n\nThe water was crystal clear, and we could see fish swimming below us. We stopped at a beautiful beach where we swam and snorkelled. I saw an octopus hiding in the rocks!\n\nFor lunch, the captain cooked fresh fish on the boat. It was delicious. In the afternoon, we saw dolphins swimming next to the boat. They jumped out of the water and played in the waves. It was magical. The whole family agreed it was the best day of the holiday.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The museum guard had never seen anything like it.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The museum guard had never seen anything like it. In the middle of the night, the dinosaur skeleton in the main hall had started to move!\n\nHe rubbed his eyes and looked again. The skeleton was walking slowly across the room. The guard was terrified. He hid behind a statue and called the police.\n\nWhen the police arrived, they found the skeleton standing still in its usual place. 'You must have been dreaming,' they laughed. The guard felt embarrassed.\n\nThe next morning, the museum director discovered the truth. A group of students had attached strings to the skeleton as a joke. They had been controlling it from upstairs!",
          },
        },
      ],
    },
  ],
};
