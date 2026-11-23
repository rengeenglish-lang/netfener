import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 74 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_74: CambridgeTest = {
  id: "preliminary-74",
  level: "preliminary",
  no: 74,
  title: "B1 Preliminary · Practice Test 74",
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
                    "Students who are late must go to the office before going to class.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Late students can't come in.",
                  "The office is closed.",
                  "Late students should go to the office first.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've bought the cinema tickets. See you there at 7! Lucy",
                  ],
                },
                question: "What has Lucy done?",
                options: [
                  "bought tickets",
                  "cancelled the plan",
                  "changed the time",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for all ages.",
                  ],
                },
                question: "Who can use this?",
                options: [
                  "only adults",
                  "everyone",
                  "only children",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Can you lend me your football boots for the match? Mine are broken. Tom",
                  ],
                },
                question: "What does Tom want?",
                options: [
                  "to borrow boots",
                  "to buy boots",
                  "to repair his boots",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The playground is closed for repairs.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The playground is new.",
                  "The park is closed.",
                  "You can't use the playground at the moment.",
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
            instruction: "The young people below all want to choose a book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Haunted School",
                text: "A scary story about a ghost in a school.",
              },
              {
                title: "Football Stars",
                text: "Biographies of famous footballers.",
              },
              {
                title: "Easy Cooking",
                text: "Simple recipes for teenagers.",
              },
              {
                title: "The Magic Kingdom",
                text: "A fantasy about a magical world.",
              },
              {
                title: "Space Facts",
                text: "Interesting facts about planets and stars.",
              },
              {
                title: "The Secret Diary",
                text: "A funny story about a teenager's life.",
              },
              {
                title: "World Travel",
                text: "A guide to the best places to visit.",
              },
              {
                title: "Animal Rescue",
                text: "True stories about animals being saved.",
              },
            ],
            items: [
              {
                text: "Kaan loves football.",
                answer: 1,
              },
              {
                text: "Defne loves animals and true stories.",
                answer: 7,
              },
              {
                text: "Mert wants to read something funny.",
                answer: 5,
              },
              {
                text: "Selin loves scary stories.",
                answer: 0,
              },
              {
                text: "Burak wants to learn about planets.",
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
              title: "My grandfather's farm",
              paragraphs: [
                "Every summer, I spend a month on my grandfather's farm in the countryside. He has cows, sheep, chickens and a big vegetable garden.",
                "When I was younger, I just played with the animals. But now that I'm older, I help my grandfather with the work. I get up early to feed the animals and milk the cows.",
                "My favourite job is working in the vegetable garden. My grandfather has taught me how to plant seeds and when to pick the vegetables. We grow tomatoes, potatoes, carrots and beans.",
                "I love spending time on the farm. It's peaceful, and I feel close to nature. My grandfather is getting older, and he says that one day the farm will be mine. I'm going to study agriculture at university so that I can look after it.",
              ],
            },
            items: [
              {
                question: "How long does the writer spend on the farm each summer?",
                options: [
                  "a month",
                  "a week",
                  "the whole summer",
                  "two days",
                ],
                answer: 0,
              },
              {
                question: "What did the writer do when she was younger?",
                options: [
                  "worked hard",
                  "milked cows",
                  "played with the animals",
                  "planted seeds",
                ],
                answer: 2,
              },
              {
                question: "What's the writer's favourite job?",
                options: [
                  "feeding animals",
                  "working in the vegetable garden",
                  "milking cows",
                  "cleaning",
                ],
                answer: 1,
              },
              {
                question: "What has the grandfather taught her?",
                options: [
                  "how to drive a tractor",
                  "how to cook",
                  "how to sell vegetables",
                  "how to grow vegetables",
                ],
                answer: 3,
              },
              {
                question: "Why will the writer study agriculture?",
                options: [
                  "to become a teacher",
                  "to look after the farm",
                  "to make money",
                  "to travel",
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
            title: "The underground city",
            text: [
              "In Turkey, there's an ancient city built entirely underground. {1} It's called Derinkuyu, and it could hold up to 20,000 people.",
              "The city was built more than 2,000 years ago. {2} It goes down about eighty-five metres and has eighteen levels.",
              "Inside, there were homes, kitchens, schools and even churches. {3} There were also places to keep animals and store food.",
              "People used the city to hide from enemies. {4} Huge stone doors could be rolled across the entrances to keep attackers out.",
              "The city was rediscovered in 1963. {5} Today, tourists can visit some of the levels.",
            ],
            sentences: [
              "Nobody can visit the city.",
              "They could stay there for months if necessary.",
              "The city was built last century.",
              "Nobody knows exactly who built it.",
              "It's one of the largest underground cities in the world.",
              "A man found it when he was repairing his house.",
              "The city is on top of a mountain.",
              "Air shafts brought fresh air into the city.",
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
            title: "Sharks",
            text: [
              "Sharks have lived on Earth for more than 400 million years. They are older than dinosaurs! There are more than 500 different {1} of shark.",
              "The biggest shark is the whale shark, which can grow up to eighteen metres long. {2} its size, it only eats very small animals called plankton.",
              "Many people are afraid of sharks, but shark attacks are very rare. In fact, humans are much more {3} to sharks than sharks are to humans. Every year, millions of sharks are killed by fishing. Sharks are very important for the ocean. They help to keep the {4} of other fish healthy. Without sharks, the ocean's ecosystem would be {5}. Many countries now have laws to protect sharks. We should all learn to {6} these amazing animals.",
            ],
            gaps: [
              {
                options: [
                  "specie",
                  "special",
                  "specially",
                  "species",
                ],
                answer: 3,
              },
              {
                options: [
                  "Although",
                  "Despite",
                  "However",
                  "Because",
                ],
                answer: 1,
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
                  "popular",
                  "populate",
                  "populations",
                  "popularity",
                ],
                answer: 2,
              },
              {
                options: [
                  "damage",
                  "damaged",
                  "damaging",
                  "damages",
                ],
                answer: 1,
              },
              {
                options: [
                  "respectful",
                  "respectfully",
                  "respected",
                  "respect",
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
            title: "A volunteering experience",
            text: [
              "Last summer, I volunteered at a hospital {1} two weeks. I helped the nurses and talked to the patients.",
              "At first, I was nervous because I'd never worked in a hospital before. But the nurses were very kind and showed me what to do. My job was to bring the patients drinks and newspapers and to chat with them.",
              "Many of the patients were old and lonely. They didn't have many visitors, so they were very happy to talk {2} me. One old man told me amazing stories about his life. He had been a sailor and had travelled all over the world. I visited him every day, and we became good friends. On my last day, he gave me a book {3} his travels. I was very moved. The experience taught me how important it is {4} spend time with people who are lonely. I'm thinking {5} studying to become a nurse. I'd recommend volunteering to {6}.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "to",
                "with",
              ],
              [
                "about",
              ],
              [
                "to",
              ],
              [
                "about",
                "of",
              ],
              [
                "everyone",
                "anyone",
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
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "A new hobby",
              lines: [
                "I've started a new hobby: photography! [Great!]",
                "Do you have any hobbies? [Tell Robin]",
                "What should I take photos of? [Give ideas]",
                "Could we go on a photo walk together? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThat's great! Photography is a wonderful hobby.\n\nI have a few hobbies. I love playing the guitar, and I practise every day. I also enjoy swimming and reading. At the weekends, I sometimes go cycling with my friends.\n\nYou should take photos of nature, like flowers, trees and animals. The countryside near your house is beautiful. You could also take photos of people in the street, or of buildings in the city centre. Try taking photos at sunrise or sunset, because the light is beautiful.\n\nYes, I'd love to go on a photo walk with you! How about next Saturday?\n\nBye,\nNehir",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Why we should protect nature",
              lines: [
                "Why is it important to protect nature?",
                "What problems does nature face?",
                "What can young people do to help?",
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
            sample: "Protecting our planet\n\nNature is very important for all living things. It gives us food, water, clean air and medicine. It's also beautiful and helps us relax.\n\nHowever, nature faces many problems. Forests are being cut down, oceans are full of plastic, and many animals are in danger of disappearing. Climate change is making the planet warmer, which affects plants and animals all over the world.\n\nYoung people can do a lot to help. We can recycle, use less plastic and save energy at home. We can also plant trees and join organisations that protect nature. If we all work together, we can make a difference and protect our planet for the future.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The parcel was addressed to Emma, but she hadn't ordered anything.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The parcel was addressed to Emma, but she hadn't ordered anything. She opened it carefully. Inside, there was a beautiful old camera and a letter.\n\nThe letter was from her grandfather, who had died last year. He had written it before he died and asked a friend to send it on Emma's sixteenth birthday.\n\n'Dear Emma,' it said. 'This was my first camera. I took photos all over the world with it. Now I want you to have it. Go and see the world!'\n\nEmma cried as she read the letter. That summer, she travelled to Italy and took photos with her grandfather's camera. She felt he was with her.",
          },
        },
      ],
    },
  ],
};
