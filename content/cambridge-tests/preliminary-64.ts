import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 64 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_64: CambridgeTest = {
  id: "preliminary-64",
  level: "preliminary",
  no: 64,
  title: "B1 Preliminary · Practice Test 64",
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
                    "The school trip to the museum has been postponed until next month.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The trip is cancelled forever.",
                  "The trip will happen later.",
                  "The trip is today.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I'm at the station. Where are you? The train leaves in five minutes! Lucy",
                  ],
                },
                question: "Why has Lucy sent this message?",
                options: [
                  "The train is cancelled.",
                  "Grace is late.",
                  "Lucy is lost.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Shake gently before use.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't shake it.",
                  "Use it without shaking.",
                  "You should mix it before using it.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Can you help me move house on Saturday? I'll buy you lunch! Tom",
                  ],
                },
                question: "What does Tom want?",
                options: [
                  "help moving house",
                  "to buy Ben lunch",
                  "to visit Ben",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Children's activities every Saturday morning. Free.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't come on Saturdays.",
                  "There are free activities for children on Saturday mornings.",
                  "Activities cost money.",
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
            instruction: "The young people below all want to join a sports club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Swimming Club",
                text: "Training five times a week. For serious swimmers.",
              },
              {
                title: "Tennis Club",
                text: "Lessons for all levels. Rackets provided.",
              },
              {
                title: "Football Club",
                text: "Girls' and boys' teams. Matches every Saturday.",
              },
              {
                title: "Climbing Club",
                text: "Indoor and outdoor climbing.",
              },
              {
                title: "Cycling Club",
                text: "Long rides every Sunday.",
              },
              {
                title: "Golf Club",
                text: "Learn to play golf. Equipment can be hired.",
              },
              {
                title: "Yoga Club",
                text: "Relaxing classes for all ages.",
              },
              {
                title: "Basketball Club",
                text: "Indoor courts. Training twice a week.",
              },
            ],
            items: [
              {
                text: "Elif wants to try tennis but doesn't have a racket.",
                answer: 1,
              },
              {
                text: "Can loves cycling and is free on Sundays.",
                answer: 4,
              },
              {
                text: "Asya wants to relax and reduce stress.",
                answer: 6,
              },
              {
                text: "Burak is a serious swimmer.",
                answer: 0,
              },
              {
                text: "Lale wants to play football in a girls' team.",
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
              title: "A trip to Japan",
              paragraphs: [
                "Last spring, I went to Japan with my family. It was my first time in Asia, and everything was new and exciting.",
                "We started in Tokyo, which is a huge, busy city. There were bright lights and tall buildings everywhere. We visited temples, shopping centres and a robot restaurant!",
                "Then we took the bullet train to Kyoto. The train was very fast and very clean. In Kyoto, we saw beautiful gardens and temples. It was cherry blossom season, so the trees were covered in pink flowers.",
                "The food was amazing. I tried sushi, ramen and many other dishes. Japanese people were very polite and helpful. The trip made me want to learn Japanese. I've started taking lessons, and I hope to go back one day.",
              ],
            },
            items: [
              {
                question: "Where did the family start their trip?",
                options: [
                  "Kyoto",
                  "Osaka",
                  "Beijing",
                  "Tokyo",
                ],
                answer: 3,
              },
              {
                question: "How did they travel to Kyoto?",
                options: [
                  "by plane",
                  "by bullet train",
                  "by car",
                  "by bus",
                ],
                answer: 1,
              },
              {
                question: "What did the writer see in Kyoto?",
                options: [
                  "gardens and temples",
                  "a robot restaurant",
                  "shopping centres",
                  "the sea",
                ],
                answer: 0,
              },
              {
                question: "What does the writer say about Japanese people?",
                options: [
                  "They were unfriendly.",
                  "They didn't speak English.",
                  "They were polite and helpful.",
                  "They were noisy.",
                ],
                answer: 2,
              },
              {
                question: "What has the writer started doing?",
                options: [
                  "cooking Japanese food",
                  "learning Japanese",
                  "working in Japan",
                  "writing a book",
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
            title: "A library for seeds",
            text: [
              "In some towns, there are libraries where you can borrow seeds instead of books. {1} They're called seed libraries.",
              "The idea is simple. {2} You take some seeds, plant them in your garden and grow vegetables or flowers.",
              "When the plants grow, you collect new seeds from them. {3} This way, the library always has seeds for other people.",
              "Seed libraries help people grow their own food. {4} They also help to protect old types of plants that are disappearing.",
              "Many seed libraries also organise workshops. {5} People can learn how to grow vegetables and look after plants.",
            ],
            sentences: [
              "Seed libraries only have books.",
              "They're becoming more popular around the world.",
              "This saves money and is good for the environment.",
              "Seed libraries are only in big cities.",
              "You don't need to pay anything.",
              "You have to pay a lot for seeds.",
              "Then you bring some of them back to the library.",
              "These are especially useful for beginners.",
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
              "A volcano is a mountain with an opening at the top. Sometimes hot liquid rock, gas and ash come out of the opening. This is called an {1}.",
              "There are about 1,500 active volcanoes on Earth. Many of them are located around the Pacific Ocean, in an area {2} as the Ring of Fire.",
              "Volcanoes can be very dangerous. When they erupt, they can destroy buildings and cause injuries. In AD 79, the volcano Vesuvius destroyed the Roman city of Pompeii. But volcanoes also have {3}. The soil near volcanoes is very good for growing crops. In Iceland, the heat from volcanoes is used to produce electricity and {4} homes. Volcanoes also create new land. The Hawaiian Islands were formed by volcanoes. Scientists study volcanoes to {5} when they might erupt. This helps them to warn people and keep them {6}.",
            ],
            gaps: [
              {
                options: [
                  "erupt",
                  "erupting",
                  "eruption",
                  "erupted",
                ],
                answer: 2,
              },
              {
                options: [
                  "known",
                  "know",
                  "knowing",
                  "knowledge",
                ],
                answer: 0,
              },
              {
                options: [
                  "beneficial",
                  "benefited",
                  "benefiting",
                  "benefits",
                ],
                answer: 3,
              },
              {
                options: [
                  "heating",
                  "heat",
                  "heated",
                  "heater",
                ],
                answer: 1,
              },
              {
                options: [
                  "predict",
                  "prediction",
                  "predictable",
                  "predicted",
                ],
                answer: 0,
              },
              {
                options: [
                  "safety",
                  "safely",
                  "safe",
                  "save",
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
            title: "My favourite place",
            text: [
              "My favourite place is a small beach near my grandparents' house. I've been going there {1} I was a baby.",
              "The beach is quiet and beautiful. The sand is white, and the water is clear and blue. There are rocks at one end {2} you can find crabs and small fish.",
              "When I was little, my grandfather used to take me there every day. We built sandcastles and looked for shells. He taught me how to swim there too. Now I'm older, I go there with my friends. We swim, play volleyball and have picnics. In the evenings, we sit on the rocks and watch the sunset. It's the {3} beautiful sunset I've ever seen. The beach is special to me {4} it reminds me of my grandfather. He died two years ago, but I feel close to him {5} I'm there. I hope I'll always be able to visit {6} beach.",
            ],
            answers: [
              [
                "since",
              ],
              [
                "where",
              ],
              [
                "most",
              ],
              [
                "because",
                "as",
                "since",
              ],
              [
                "when",
                "whenever",
              ],
              [
                "this",
                "that",
                "the",
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
              subject: "A new phone",
              lines: [
                "I've just got a new phone! [Lucky you!]",
                "What do you use your phone for? [Tell Jamie]",
                "Do you think teenagers use their phones too much? [Give your opinion]",
                "How much time do you spend on your phone? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nLucky you! What kind of phone is it? I'd love to see it.\n\nI use my phone mainly for messaging my friends and listening to music. I also use it to take photos and watch videos. Sometimes I use it for homework, to look things up online.\n\nI think some teenagers do use their phones too much. Some of my friends are on their phones all the time, even when we're together. I think it's important to have a balance and do other things too, like sport or reading.\n\nI spend about two hours a day on my phone. I try to put it away at dinner and an hour before bed.\n\nBye,\nAda",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best gift",
              lines: [
                "What's the best gift you've ever given someone?",
                "Who did you give it to?",
                "Why was it special?",
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
            sample: "A gift from the heart\n\nThe best gift I've ever given was a photo album I made for my grandmother's eightieth birthday. It took me three months to make.\n\nI collected old photos from all my relatives and scanned them. Then I put them in a beautiful album in order, from when she was a baby to today. I also asked everyone in the family to write a short message for her.\n\nWhen my grandmother opened it, she started crying. She said it was the most wonderful present she'd ever received. She spent hours looking through it and telling us stories about the photos. It was special because it showed her how much we all love her.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The bus driver smiled and said, 'This is your stop.'' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The bus driver smiled and said, 'This is your stop.' Lily got off the bus and looked around. She was in a small village she had never seen before.\n\nShe was visiting her pen friend, Anna, for the first time. They had been writing to each other for three years, but they had never met.\n\nLily walked to the address on the envelope. She knocked on the door nervously. A girl with red hair opened it and screamed with excitement. 'Lily! You're here!' It was Anna.\n\nThey hugged like old friends. Lily spent a wonderful week with Anna and her family. They became best friends.",
          },
        },
      ],
    },
  ],
};
