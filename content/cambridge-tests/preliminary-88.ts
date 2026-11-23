import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 88 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_88: CambridgeTest = {
  id: "preliminary-88",
  level: "preliminary",
  no: 88,
  title: "B1 Preliminary · Practice Test 88",
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
                    "Students who want to play in the school orchestra should see Mr Smith.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The orchestra is full.",
                  "Students interested in the orchestra should see Mr Smith.",
                  "Mr Smith is ill.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've bought the cinema tickets. Meet you at 7! Lucy",
                  ],
                },
                question: "What has Lucy done?",
                options: [
                  "cancelled the plan",
                  "bought tickets",
                  "changed the time",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "For external use only.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can drink it.",
                  "You can eat it.",
                  "Only use it on the outside of your body.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Can you help me move my things on Saturday? I'm moving to a new flat. Tom",
                  ],
                },
                question: "What does Tom want?",
                options: [
                  "help moving",
                  "to buy a flat",
                  "to visit Ben",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "No ball games on the grass.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can play anywhere.",
                  "You can't play ball games on the grass.",
                  "Balls are sold here.",
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
            instruction: "The young people below all want to choose a book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Lost City",
                text: "An adventure in the jungle.",
              },
              {
                title: "Easy Baking",
                text: "Simple recipes for cakes.",
              },
              {
                title: "Famous Artists",
                text: "The lives of great painters.",
              },
              {
                title: "The Football Hero",
                text: "A story about a young footballer.",
              },
              {
                title: "Space Exploration",
                text: "The history of space travel.",
              },
              {
                title: "Ghost Stories",
                text: "Scary stories for teenagers.",
              },
              {
                title: "Learn Italian",
                text: "A course for beginners.",
              },
              {
                title: "Animal Facts",
                text: "Interesting facts about animals.",
              },
            ],
            items: [
              {
                text: "Elif wants to learn to bake cakes.",
                answer: 1,
              },
              {
                text: "Can wants to learn Italian.",
                answer: 6,
              },
              {
                text: "Zeynep loves painters.",
                answer: 2,
              },
              {
                text: "Mert loves animals.",
                answer: 7,
              },
              {
                text: "Asya loves space.",
                answer: 4,
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
              title: "A trip to India",
              paragraphs: [
                "Last summer, I went to India with my family. It was my first time in Asia, and everything was new and exciting.",
                "We started in Delhi, which is a huge, busy city. There were people, cars and motorbikes everywhere! We visited the Red Fort and some beautiful temples.",
                "Then we travelled to Agra to see the Taj Mahal. It was even more beautiful than I'd imagined. We arrived at sunrise, when the white marble was pink and gold.",
                "The food was amazing. I tried lots of different curries, some of them very spicy! The people were very friendly and welcoming. The trip opened my eyes to a different culture. I want to go back and explore more of India.",
              ],
            },
            items: [
              {
                question: "Where did the family start their trip?",
                options: [
                  "Agra",
                  "Mumbai",
                  "Goa",
                  "Delhi",
                ],
                answer: 3,
              },
              {
                question: "What was Delhi like?",
                options: [
                  "very quiet",
                  "very busy",
                  "very small",
                  "very cold",
                ],
                answer: 1,
              },
              {
                question: "When did they visit the Taj Mahal?",
                options: [
                  "at sunrise",
                  "at night",
                  "at lunchtime",
                  "in the evening",
                ],
                answer: 0,
              },
              {
                question: "What does the writer say about the food?",
                options: [
                  "It was boring.",
                  "It was too sweet.",
                  "It was amazing.",
                  "She didn't like it.",
                ],
                answer: 2,
              },
              {
                question: "What does the writer want to do?",
                options: [
                  "live in India",
                  "go back to India",
                  "cook Indian food",
                  "become a guide",
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
            title: "A restaurant in a cave",
            text: [
              "In Italy, there's a restaurant built inside a cave above the sea. {1} It's called Grotta Palazzese.",
              "The cave was formed thousands of years ago by the sea. {2} The restaurant has been there since the eighteenth century.",
              "Diners sit at tables inside the cave, looking out at the sea. {3} At night, the cave is lit by candles.",
              "The restaurant is only open in summer. {4} In winter, the waves are too strong.",
              "It's one of the most romantic restaurants in the world. {5} Many couples go there to celebrate special occasions.",
            ],
            sentences: [
              "The restaurant is in a city.",
              "It's one of the most unusual restaurants in the world.",
              "It's closed from October to April.",
              "Nobody eats there.",
              "Local people used it for parties.",
              "The restaurant is very cheap.",
              "The view is spectacular, especially at sunset.",
              "It's very expensive, but the food is excellent.",
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
            title: "Volcanoes",
            text: [
              "A volcano is an opening in the Earth's surface. When a volcano {1}, hot liquid rock, called lava, comes out.",
              "There are about 1,500 active volcanoes in the world. Many of them are around the Pacific Ocean, in an area called the 'Ring of Fire'.",
              "Volcanoes can be very {2}. Lava can destroy buildings, and ash can make it difficult to breathe. However, volcanoes are also {3}. The soil near volcanoes is very rich, so farmers can grow good crops. In some countries, the heat from volcanoes is used to produce {4}. Volcanoes also create new land. The Hawaiian Islands were {5} by volcanoes. Scientists study volcanoes to predict when they might erupt. This helps them to {6} people so they can leave the area.",
            ],
            gaps: [
              {
                options: [
                  "eruption",
                  "erupting",
                  "erupts",
                  "erupted",
                ],
                answer: 2,
              },
              {
                options: [
                  "dangerous",
                  "danger",
                  "dangerously",
                  "endanger",
                ],
                answer: 0,
              },
              {
                options: [
                  "use",
                  "usefully",
                  "usage",
                  "useful",
                ],
                answer: 3,
              },
              {
                options: [
                  "electric",
                  "electricity",
                  "electrical",
                  "electrician",
                ],
                answer: 1,
              },
              {
                options: [
                  "formed",
                  "form",
                  "forming",
                  "formation",
                ],
                answer: 0,
              },
              {
                options: [
                  "warning",
                  "warned",
                  "warn",
                  "warns",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A visit to London",
            text: [
              "Last year, I visited London {1} my family. It was my first time in the city.",
              "We stayed in a hotel near Hyde Park. On the first day, we went to see Buckingham Palace. We watched the Changing of the Guard, {2} was very interesting.",
              "Then we visited the British Museum. It's huge! We saw mummies from ancient Egypt and lots of other amazing things. On the second day, we went on the London Eye. The view of the city {3} the top was incredible. We also took a boat trip along the River Thames. In the evening, we went to see a musical in the West End. It was fantastic! I loved London. There are so many things to see and do. I'd love to go back {4} I'm older. Maybe I'll even live there {5} day. It's {6} of my favourite cities.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "which",
              ],
              [
                "from",
              ],
              [
                "when",
              ],
              [
                "one",
                "some",
              ],
              [
                "one",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A school project",
              lines: [
                "I have to do a project about a famous person. [Interesting!]",
                "Who do you think I should choose? [Suggest someone]",
                "Where can I find information? [Give advice]",
                "Can you help me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nThat sounds really interesting! There are so many famous people you could choose.\n\nI think you should choose Albert Einstein. He was a brilliant scientist who changed the way we understand the universe. There are lots of interesting stories about his life, and you could talk about his famous theories.\n\nYou can find information in books at the library and on reliable websites. You could also watch documentaries about his life. Make sure you check that the information is correct!\n\nOf course I'll help you! I'm good at making posters, so I could help you with the design.\n\nBye,\nAsya",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Protecting the environment",
              lines: [
                "Why is it important to protect the environment?",
                "What can young people do?",
                "What do you do to help?",
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
            sample: "Small changes, big difference\n\nProtecting the environment is very important for our future. If we don't look after our planet, there will be serious problems, like climate change, pollution and the loss of animals and plants.\n\nYoung people can do a lot to help. We can recycle, use less plastic and save energy. We can also walk or cycle instead of asking our parents to drive us. Planting trees and joining environmental groups are also great ideas.\n\nI try to do my part. I always recycle, and I take a reusable bottle to school. I also turn off lights when I leave a room. These are small changes, but if everyone does them, they can make a big difference.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Sarah saw the advertisement, she knew she had to apply.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Sarah saw the advertisement, she knew she had to apply. A TV company was looking for young people to appear in a new cooking show.\n\nSarah loved cooking. She'd been making meals for her family since she was ten. She filled in the application form and sent a video of herself making her favourite dish.\n\nTwo weeks later, she got a phone call. She had been chosen! The filming would take place in London over the summer.\n\nThe show was very exciting. Sarah cooked amazing dishes and made lots of new friends. She didn't win, but she came second. Now she wants to become a professional chef.",
          },
        },
      ],
    },
  ],
};
