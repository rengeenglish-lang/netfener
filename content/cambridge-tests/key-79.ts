import type { CambridgeTest } from "./types";

/** A2 Key practice test 79 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_79: CambridgeTest = {
  id: "key-79",
  level: "key",
  no: 79,
  title: "A2 Key · Practice Test 79",
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
                    "LIBRARY",
                    "Children must be with an adult in the computer area.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't use computers alone.",
                  "Children can't use the library.",
                  "Adults can't use computers.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, can we meet at 11 instead of 10 tomorrow? I have to take my dog to the vet first. Kate",
                  ],
                },
                question: "Why does Kate want to meet later?",
                options: [
                  "She wants to sleep late.",
                  "She has to do something first.",
                  "She is ill.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO ENTRY",
                    "Staff only.",
                  ],
                },
                question: "Who can go in?",
                options: [
                  "people who work there",
                  "everyone",
                  "customers",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "The concert tickets are £8 for students. Shall I buy one for you? Ruby",
                  ],
                },
                question: "What does Ruby offer to do?",
                options: [
                  "go to a concert alone",
                  "give Ella £8",
                  "buy Ella a ticket",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BUS STATION",
                    "Waiting room open 6 a.m.–11 p.m.",
                  ],
                },
                question: "When can you use the waiting room?",
                options: [
                  "all night",
                  "only in the afternoon",
                  "from early morning to late evening",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FREE YOGA IN THE PARK",
                    "Every Sunday at 9 a.m.",
                    "Bring a mat and some water.",
                  ],
                },
                question: "What should you bring?",
                options: [
                  "a mat and a drink",
                  "money",
                  "special shoes",
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
                title: "Charlie",
                text: "I'm crazy about trains. I've been to train museums all over the country with my dad. I've also built a model railway in our attic. It has twenty trains and hundreds of metres of track. I'd like to be a train driver one day.",
              },
              {
                title: "Rosa",
                text: "I love dancing. I do flamenco, a traditional Spanish dance. My grandmother is from Spain, and she taught me. I perform at festivals and cultural events. Last month, I danced in front of the Spanish ambassador! It was a great honour.",
              },
              {
                title: "Leo",
                text: "My hobby is volunteering. I help at a food bank every Saturday. I sort food and help people carry their bags. I've learned that lots of families need help. It makes me feel good to know I'm doing something useful.",
              },
            ],
            items: [
              {
                text: "built something at home?",
                answer: 0,
              },
              {
                text: "knows what job they want?",
                answer: 0,
              },
              {
                text: "learned from a grandparent?",
                answer: 1,
              },
              {
                text: "performed for an important person?",
                answer: 1,
              },
              {
                text: "helps people in need?",
                answer: 2,
              },
              {
                text: "feels good about their hobby?",
                answer: 2,
              },
              {
                text: "visits places with a parent?",
                answer: 0,
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
              title: "A school in space",
              paragraphs: [
                "In 2018, astronauts on the International Space Station started giving lessons to schoolchildren on Earth. Students could ask them questions by video.",
                "'It was amazing,' says thirteen-year-old Harry, who took part. 'I asked an astronaut how she sleeps in space. She said she sleeps in a sleeping bag attached to the wall!'",
                "The astronauts also did science experiments for the students. 'They showed us what happens to water in space,' says Harry. 'It floats in little balls. It was so cool.'",
                "Harry now wants to be an astronaut. 'I'm working hard at science and maths,' he says. 'I know it's very difficult to become an astronaut. But I'm going to try.'",
              ],
            },
            items: [
              {
                question: "How did students talk to astronauts?",
                options: [
                  "in person",
                  "by letter",
                  "by video",
                ],
                answer: 2,
              },
              {
                question: "What did Harry ask about?",
                options: [
                  "sleeping in space",
                  "food in space",
                  "the journey to space",
                ],
                answer: 0,
              },
              {
                question: "Where do astronauts sleep?",
                options: [
                  "in a bed",
                  "in a bag on the wall",
                  "on the floor",
                ],
                answer: 1,
              },
              {
                question: "What happens to water in space?",
                options: [
                  "It floats.",
                  "It disappears.",
                  "It freezes.",
                ],
                answer: 0,
              },
              {
                question: "What is Harry doing now?",
                options: [
                  "training as an astronaut",
                  "building a rocket",
                  "studying hard",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Rainbows",
            text: [
              "A rainbow is a beautiful arc of colours in the sky. You can see one when the sun {1} through rain.",
              "Sunlight looks white, but it is really made of many colours. When sunlight passes through raindrops, the colours {2}. That's why we see red, orange, yellow, green, blue, indigo and violet.",
              "To see a rainbow, the sun must be {3} you and the rain must be in front of you. Rainbows usually appear in the morning or late afternoon, when the sun is low in the sky. Sometimes you can see a double rainbow. The second rainbow is fainter, and its colours are in the {4} order. In many cultures, there are stories about rainbows. In Irish stories, there is a pot of gold at the end of the rainbow. But you can never {5} it, because a rainbow moves when you move! Next time it rains on a sunny day, look up. You might {6} a rainbow.",
            ],
            gaps: [
              {
                options: [
                  "burns up",
                  "lights up",
                  "shines",
                ],
                answer: 2,
              },
              {
                options: [
                  "break up",
                  "part up",
                  "separate",
                ],
                answer: 2,
              },
              {
                options: [
                  "behind",
                  "after",
                  "under",
                ],
                answer: 0,
              },
              {
                options: [
                  "other",
                  "opposite",
                  "back",
                ],
                answer: 1,
              },
              {
                options: [
                  "reach",
                  "arrive",
                  "get up",
                ],
                answer: 0,
              },
              {
                options: [
                  "look",
                  "watch at",
                  "see",
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
              "Hi Ruby,",
              "Thank you for inviting me {1} your house for dinner last night. I had a lovely time. Your mum is a great cook!",
              "I loved the chicken and the chocolate cake. Could you ask your mum {2} the recipe for the cake? My mum wants to make it too.",
              "I'd like you to come to my house next week. My dad is going {3} make his famous paella. He learned to make it {4} he lived in Spain. Would Thursday be OK? Let me know. Thanks again {5} a lovely evening. See you {6} school!",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "to",
              ],
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "when",
                "while",
              ],
              [
                "for",
              ],
              [
                "at",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to sell your old bike. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Describe the bike.",
              "Say why you want to sell it.",
              "Say how much it costs.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nI want to sell my old bike. It's blue and it has ten gears. I'm selling it because it's too small for me now. It costs £30. Do you know anyone who wants it?\n\nBye,\nBerk",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🧗⛰️",
                label: "1",
              },
              {
                e: "👨🧗🌧️😰",
                label: "2",
              },
              {
                e: "👨🏔️🚩😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Mr Wilson decided to climb a mountain. He started early in the morning. Halfway up, it started to rain, and the path became very slippery. He was frightened and thought about going back. But he kept going slowly and carefully. Finally, he reached the top. The rain stopped, and the view was amazing. He felt very proud.",
          },
        },
      ],
    },
  ],
};
