import type { CambridgeTest } from "./types";

/** A2 Key practice test 40 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_40: CambridgeTest = {
  id: "key-40",
  level: "key",
  no: 40,
  title: "A2 Key · Practice Test 40",
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
                    "ART GALLERY",
                    "New exhibition opens Saturday.",
                    "Free entry on the first day.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The gallery is closed on Saturday.",
                  "You won't have to pay on the opening day.",
                  "The exhibition is always free.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Kate, the concert has moved to the big hall because so many people bought tickets. See you there! Lisa",
                  ],
                },
                question: "Why has the concert moved?",
                options: [
                  "The small hall is closed.",
                  "It's very popular.",
                  "The band wanted a bigger stage.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "KEEP LEFT",
                    "Cyclists on the right.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Cyclists must walk.",
                  "Everyone must keep right.",
                  "Walkers and cyclists use different sides.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear Mrs Lee,",
                    "I'd like to book a table for four people for Saturday at 7 p.m. Please call me to confirm. Tom White",
                  ],
                },
                question: "Why has Tom written this email?",
                options: [
                  "to reserve a table at a restaurant",
                  "to cancel a booking",
                  "to complain about a meal",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "GYM",
                    "New members get a free personal training session.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Everyone gets free training.",
                  "People who join can have a free session.",
                  "Personal training is not available.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "HELP WANTED",
                    "Café needs a waiter or waitress for weekends.",
                    "Experience preferred but not essential.",
                  ],
                },
                question: "What do we know about the job?",
                options: [
                  "You can apply without experience.",
                  "It is from Monday to Friday.",
                  "You must have worked in a café before.",
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
                title: "Elsie",
                text: "I love taking care of my garden. I've got a small greenhouse where I grow tomatoes and peppers. I also have a pond with fish. Every spring, I plant new flowers. Gardening makes me feel relaxed, especially after a long day at school.",
              },
              {
                title: "Rowan",
                text: "I'm learning to play the bagpipes. It's a traditional Scottish instrument. My grandfather plays them, and he gave me his old ones. They're very loud, so I practise in the garden shed. Next year, I want to play in the town's pipe band.",
              },
              {
                title: "Nina",
                text: "My hobby is making videos about science. I do experiments and film them, and then I explain what happens. I've got a channel with about five thousand subscribers. Some teachers use my videos in their lessons. I'd like to be a science teacher one day.",
              },
            ],
            items: [
              {
                text: "finds their hobby calming?",
                answer: 0,
              },
              {
                text: "grows food?",
                answer: 0,
              },
              {
                text: "uses something that belonged to someone else?",
                answer: 1,
              },
              {
                text: "practises away from the house?",
                answer: 1,
              },
              {
                text: "has a large audience?",
                answer: 2,
              },
              {
                text: "has their work used in schools?",
                answer: 2,
              },
              {
                text: "hopes to join a group?",
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
              title: "The library cat",
              paragraphs: [
                "In a small town in England, the library has a very special visitor. Every morning, a cat called Walter walks into the library and sleeps on a chair near the window.",
                "'Walter belongs to a family who live next door,' explains librarian Sue Jones. 'He started coming here two years ago, and now he comes every day.'",
                "The children who visit the library love Walter. 'They read books to him,' says Sue. 'He's very patient. He just lies there and listens!'",
                "Walter has become famous. He has his own social media page with thousands of followers. 'People come from other towns just to see him,' says Sue. 'He's good for the library. More people are visiting us now.'",
              ],
            },
            items: [
              {
                question: "What does Walter do at the library?",
                options: [
                  "He catches mice.",
                  "He reads books.",
                  "He sleeps there.",
                ],
                answer: 2,
              },
              {
                question: "Who does Walter belong to?",
                options: [
                  "the librarian",
                  "a family nearby",
                  "the library",
                ],
                answer: 1,
              },
              {
                question: "What do children do with Walter?",
                options: [
                  "They play with him outside.",
                  "They read to him.",
                  "They give him food.",
                ],
                answer: 1,
              },
              {
                question: "How has Walter become famous?",
                options: [
                  "He was on TV.",
                  "He won a prize.",
                  "He has his own page online.",
                ],
                answer: 2,
              },
              {
                question: "Why is Walter good for the library?",
                options: [
                  "More people come to visit.",
                  "He keeps the library clean.",
                  "He helps children choose books.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Recycling",
            text: [
              "Every year, people throw away millions of tonnes of rubbish. Much of it {1} in big holes in the ground called landfills. This is bad for the environment.",
              "Recycling means using old things to make new ones. For example, old plastic bottles can be {2} into clothes, and old paper can be made into new paper.",
              "Recycling helps to save energy and {3} pollution. It also means we don't need to use as many natural {4}, like trees and oil. Many countries now have special bins for different kinds of rubbish, such as glass, paper and plastic. It's important to {5} your rubbish carefully. You can also help by buying things with less packaging and by {6} things again instead of throwing them away.",
            ],
            gaps: [
              {
                options: [
                  "ends up",
                  "finishes",
                  "stops",
                ],
                answer: 0,
              },
              {
                options: [
                  "become",
                  "turned",
                  "done",
                ],
                answer: 1,
              },
              {
                options: [
                  "reduce",
                  "fall",
                  "sink",
                ],
                answer: 0,
              },
              {
                options: [
                  "things",
                  "stuff",
                  "resources",
                ],
                answer: 2,
              },
              {
                options: [
                  "choose",
                  "pick",
                  "sort",
                ],
                answer: 2,
              },
              {
                options: [
                  "using",
                  "doing",
                  "making",
                ],
                answer: 0,
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
              "Hi Oliver,",
              "Thanks {1} your email. It was great to hear from you. I'm glad you're enjoying your holiday in Spain.",
              "I've been really busy this week. On Monday, I started a summer job at a café near my house. I work there {2} morning from nine until one. I serve drinks and clean the tables. It's quite tiring, {3} I'm earning some money.",
              "I'm saving up {4} a new camera. I want to take photos on our school trip in September. When {5} you coming home? Let's meet up {6} you get back!",
              "Jack",
            ],
            answers: [
              [
                "for",
              ],
              [
                "every",
                "each",
              ],
              [
                "but",
              ],
              [
                "for",
              ],
              [
                "are",
              ],
              [
                "when",
                "after",
                "once",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You visited a new café in your town. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say where the café is.",
              "Say what you had there.",
              "Say why you liked it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nYesterday, I went to a new café next to the cinema in my town. I had a hot chocolate and a slice of carrot cake. I liked it because the staff were friendly and the music was great.\n\nBye,\nIrmak",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎤🎭",
                label: "1",
              },
              {
                e: "👧🎤😰",
                label: "2",
              },
              {
                e: "👧🎤👏😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last month, Emma sang a song in her school's talent show. Before the show, she was very nervous and her hands were shaking. When she walked onto the stage, she almost forgot the words. But then she started singing, and she felt better. At the end, everyone clapped and cheered. Emma was very proud of herself.",
          },
        },
      ],
    },
  ],
};
