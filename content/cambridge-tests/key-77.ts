import type { CambridgeTest } from "./types";

/** A2 Key practice test 77 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_77: CambridgeTest = {
  id: "key-77",
  level: "key",
  no: 77,
  title: "A2 Key · Practice Test 77",
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
                    "TRAIN STATION",
                    "Tickets bought on the train cost more.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "It's cheaper to buy tickets before you get on.",
                  "You can't buy tickets on the train.",
                  "Tickets are free on the train.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Sam, your swimming bag is still in my car. I'll drop it at your house later. Dad",
                  ],
                },
                question: "What will Dad do?",
                options: [
                  "go swimming",
                  "buy Sam a new bag",
                  "take Sam's bag to his house",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE TURN OFF THE LIGHTS WHEN YOU LEAVE",
                  ],
                },
                question: "What should people do?",
                options: [
                  "leave the lights on",
                  "turn on the lights",
                  "switch off the lights",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Emma,",
                    "The dance class has a new teacher from next week. Her name is Miss Lopez. She's very good! Lucy",
                  ],
                },
                question: "What does Lucy tell Emma?",
                options: [
                  "There will be a new teacher.",
                  "The dance class is cancelled.",
                  "Lucy is the new teacher.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The lake is closed for swimming today because of the cold weather.",
                  ],
                },
                question: "Why can't you swim in the lake today?",
                options: [
                  "It's being cleaned.",
                  "It's too cold.",
                  "There's no lifeguard.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "TENNIS LESSONS",
                    "Group lessons for teenagers.",
                    "Saturdays 10–12. Rackets provided.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "You don't need your own racket.",
                  "They are private lessons.",
                  "They are for adults.",
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
                title: "Ellie",
                text: "I love skiing. My family goes skiing every winter in the Alps. Last year, I started racing and won my first competition. In summer, I practise on a dry slope near my home. I want to be in the national ski team.",
              },
              {
                title: "Josh",
                text: "My hobby is reading comics. I've got more than five hundred comics. I also draw my own. I've made a comic about a boy who can fly. I share it online, and lots of people read it. A comic shop in my town sells printed copies.",
              },
              {
                title: "Nadia",
                text: "I'm a keen cook. I make food from different countries. My favourite is Indian food. Last year, I won a cooking competition for young chefs. The prize was a day in the kitchen of a famous restaurant. I learned so much!",
              },
            ],
            items: [
              {
                text: "goes on holiday every year for their hobby?",
                answer: 0,
              },
              {
                text: "practises in a different way in summer?",
                answer: 0,
              },
              {
                text: "collects things?",
                answer: 1,
              },
              {
                text: "has their work sold in a shop?",
                answer: 1,
              },
              {
                text: "spent time with professionals?",
                answer: 2,
              },
              {
                text: "won a competition?",
                answer: 2,
              },
              {
                text: "hopes to be on a national team?",
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
              title: "The boy who cleans beaches",
              paragraphs: [
                "Every Saturday, twelve-year-old Jake goes to the beach near his home. But he doesn't go to swim. He goes to pick up rubbish.",
                "'I was shocked when I saw how much plastic was on the beach,' says Jake. 'It's dangerous for birds and fish. So I decided to clean it.'",
                "At first, Jake cleaned the beach alone. Then he put a message online. 'Now about thirty people come every week,' he says. 'Even my teacher comes!'",
                "Jake and his group have collected more than five tonnes of rubbish. 'We find bottles, bags and even old shoes,' he says. 'I want people to stop using so much plastic. We all need to look after our planet.'",
              ],
            },
            items: [
              {
                question: "Why does Jake go to the beach?",
                options: [
                  "to swim",
                  "to collect rubbish",
                  "to fish",
                ],
                answer: 1,
              },
              {
                question: "Why did Jake start cleaning the beach?",
                options: [
                  "He saw lots of plastic.",
                  "His parents asked him.",
                  "He wanted money.",
                ],
                answer: 0,
              },
              {
                question: "How did more people join Jake?",
                options: [
                  "His teacher told them.",
                  "They saw him on TV.",
                  "He posted a message on the internet.",
                ],
                answer: 2,
              },
              {
                question: "Who comes to help Jake?",
                options: [
                  "only his family",
                  "nobody",
                  "about thirty people",
                ],
                answer: 2,
              },
              {
                question: "What does Jake want people to do?",
                options: [
                  "use less plastic",
                  "go to the beach more",
                  "buy new shoes",
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
            title: "Tigers",
            text: [
              "Tigers are the largest cats in the world. They live in Asia, in forests, grasslands and swamps. Each tiger has its own {1} of stripes, like a fingerprint.",
              "Tigers usually live alone. They are excellent hunters and can {2} animals much bigger than themselves. They hunt mostly at night.",
              "Unlike most cats, tigers love water. They are good swimmers and often {3} in rivers and lakes to cool down. A hundred years ago, there were about 100,000 tigers in the wild. Today, there are only about 4,000. People have {4} tigers for their skins and destroyed their forests. Many countries are now working to {5} tigers. They have created special parks where tigers can live safely. In some places, the number of tigers is {6} again.",
            ],
            gaps: [
              {
                options: [
                  "pattern",
                  "design up",
                  "picture",
                ],
                answer: 0,
              },
              {
                options: [
                  "hold up",
                  "catch",
                  "take up",
                ],
                answer: 1,
              },
              {
                options: [
                  "swim",
                  "walk",
                  "run up",
                ],
                answer: 0,
              },
              {
                options: [
                  "caught up",
                  "shot up",
                  "hunted",
                ],
                answer: 2,
              },
              {
                options: [
                  "keep up",
                  "protect",
                  "guard on",
                ],
                answer: 1,
              },
              {
                options: [
                  "making",
                  "growing",
                  "building",
                ],
                answer: 1,
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
              "Hi Isla,",
              "I'm sorry I couldn't come to your birthday party. My grandma was ill, and we had to visit her {1} hospital. She's better now.",
              "I've got a present for you. It's a necklace with a star on it. I hope you like {2}. I'll give it to you {3} I see you.",
              "Are you free on Saturday? We could go to the park and have a picnic. I'll make sandwiches and bring some cake. My mum says she can drive us {4}. Let me know {5} you can come. Happy birthday again! See you {6}.",
              "Love,",
              "Freya",
            ],
            answers: [
              [
                "in",
              ],
              [
                "it",
              ],
              [
                "when",
                "next",
              ],
              [
                "there",
              ],
              [
                "if",
                "whether",
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
            instruction: "You have joined a sports team. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say what sport it is.",
              "Say when you practise.",
              "Say how you feel about it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nI've just joined the school volleyball team! We practise every Tuesday and Thursday after school. I'm really excited because I love volleyball and I've made new friends.\n\nBye,\nDeren",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎒🚌",
                label: "1",
              },
              {
                e: "👦😴🚌",
                label: "2",
              },
              {
                e: "👦🚌🌊😮",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Tom got on the bus to go to school. He was very tired because he had gone to bed late. He fell asleep on the bus and missed his stop. When he woke up, the bus was at the beach at the end of the line! Tom had to take another bus back to school. He was very late, and he promised to go to bed earlier.",
          },
        },
      ],
    },
  ],
};
