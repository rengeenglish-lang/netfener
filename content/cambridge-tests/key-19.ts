import type { CambridgeTest } from "./types";

/** A2 Key practice test 19 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_19: CambridgeTest = {
  id: "key-19",
  level: "key",
  no: 19,
  title: "A2 Key · Practice Test 19",
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
                    "SCHOOL LIBRARY",
                    "Computers can be booked for one hour only.",
                    "Book at the front desk.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't use a computer for more than an hour.",
                  "Computers are only for teachers.",
                  "You don't need to book a computer.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Sam, thanks for dinner last night. It was delicious! Can you send me the recipe for the cake? Kim",
                  ],
                },
                question: "What does Kim want Sam to do?",
                options: [
                  "cook dinner again",
                  "send her instructions for making something",
                  "buy her a cake",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "CAMPSITE",
                    "No fires except in the barbecue area.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can only make a fire in a special place.",
                  "Barbecues are not allowed.",
                  "Fires are allowed everywhere.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear Mrs Jones,",
                    "My son Leo is ill and can't come to school today. He will probably be back tomorrow. Mark Brown",
                  ],
                },
                question: "Why has Mr Brown written this email?",
                options: [
                  "to ask for homework",
                  "to make an appointment",
                  "to explain why his son is absent",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Bring your own bags and get 10p off your shopping.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Bags cost 10p each.",
                  "You must bring your own bags.",
                  "You can save money if you don't use new bags.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PIANO FOR SALE",
                    "Good condition. Free to anyone who can collect it.",
                    "Call Mrs Black.",
                  ],
                },
                question: "What do we know about the piano?",
                options: [
                  "It doesn't cost anything.",
                  "It needs repairing.",
                  "Mrs Black will bring it to you.",
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
                title: "Oliver",
                text: "I play the drums. I started two years ago after watching a concert on TV. My parents weren't happy about the noise at first, so I practise in the garage. I've joined a band with some older students at my school. We're playing at the school summer party.",
              },
              {
                title: "Chloe",
                text: "My hobby is running. I'm in the athletics club at school and I train four times a week. I'm best at the 800 metres. Last year, I broke the school record! I also love watching athletics on TV. My hero is a famous Kenyan runner.",
              },
              {
                title: "Ben",
                text: "I enjoy drawing comics. I create my own characters and stories. I draw on paper first and then colour them on my computer. Every week, I share a new page online. I've got about five hundred readers now. One day, I'd like to publish a comic book.",
              },
            ],
            items: [
              {
                text: "was inspired by something on television?",
                answer: 0,
              },
              {
                text: "plays with people who are older?",
                answer: 0,
              },
              {
                text: "has beaten a record?",
                answer: 1,
              },
              {
                text: "admires a famous person?",
                answer: 1,
              },
              {
                text: "uses both traditional and modern methods?",
                answer: 2,
              },
              {
                text: "has a group of regular fans?",
                answer: 2,
              },
              {
                text: "will perform at a school event?",
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
              title: "Life in the Arctic",
              paragraphs: [
                "Sixteen-year-old Nuka lives in a small town in Greenland, near the Arctic. 'In winter, the sun doesn't come up for two months,' she says. 'It's dark all day and all night.'",
                "But in summer, it's the opposite. 'The sun doesn't go down at all!' Nuka explains. 'It's strange at first, but I'm used to it. We often play football at midnight.'",
                "Nuka's town has only 3,000 people, and there are no roads to other towns. 'If we want to travel, we have to go by plane or boat,' she says. 'In winter, some people use dog sleds.'",
                "Nuka loves her town, but she wants to study in Denmark next year. 'I want to become a doctor,' she says. 'Then I'll come back and work here. We need more doctors in Greenland.'",
              ],
            },
            items: [
              {
                question: "What happens in Nuka's town in winter?",
                options: [
                  "It is very sunny.",
                  "Everyone leaves the town.",
                  "It is dark for a long time.",
                ],
                answer: 2,
              },
              {
                question: "What does Nuka say about summer?",
                options: [
                  "People can do activities very late.",
                  "It is too hot to play football.",
                  "It is dark at night.",
                ],
                answer: 0,
              },
              {
                question: "How do people travel to other towns?",
                options: [
                  "by car",
                  "by plane or boat",
                  "by train",
                ],
                answer: 1,
              },
              {
                question: "Why does Nuka want to go to Denmark?",
                options: [
                  "to study",
                  "to work as a doctor",
                  "to see her family",
                ],
                answer: 0,
              },
              {
                question: "What does Nuka plan to do in the future?",
                options: [
                  "live in Denmark",
                  "travel around the world",
                  "return to Greenland",
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
            title: "Robots in the home",
            text: [
              "In the future, robots might {1} lots of jobs in our homes. Some families already have robot vacuum cleaners that clean the floor {2} themselves.",
              "Scientists are also making robots that can cook, wash clothes and even play with children. Some robots can understand what you say and {3} questions.",
              "Many people think home robots will make life easier. They will give us more free time to {4} with our families. But other people are {5}. They think robots are expensive and might stop working. They also worry about robots knowing too much about our lives. What do you think? Would you like a robot at home? Maybe one day, robots will be as {6} as TVs and fridges!",
            ],
            gaps: [
              {
                options: [
                  "make",
                  "work",
                  "do",
                ],
                answer: 2,
              },
              {
                options: [
                  "with",
                  "for",
                  "by",
                ],
                answer: 2,
              },
              {
                options: [
                  "answer",
                  "reply",
                  "respond",
                ],
                answer: 0,
              },
              {
                options: [
                  "pass",
                  "spend",
                  "use",
                ],
                answer: 1,
              },
              {
                options: [
                  "worried",
                  "afraid",
                  "scared",
                ],
                answer: 0,
              },
              {
                options: [
                  "usual",
                  "normal",
                  "common",
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
              "Hi Ryan,",
              "How {1} you? I'm writing to tell you about my school trip. Last week, my class went to London {2} three days. We stayed in a youth hostel near the river.",
              "On the first day, we visited the Science Museum. It was {3} interesting! On the second day, we went on the London Eye. You {4} see the whole city from the top.",
              "On the last evening, we watched a musical in a theatre. I'd love to go back {5} London one day. Have you ever been there? Write back and tell me {6} your news.",
              "Bye for now,",
              "Emma",
            ],
            answers: [
              [
                "are",
              ],
              [
                "for",
              ],
              [
                "very",
                "really",
                "so",
              ],
              [
                "can",
                "could",
              ],
              [
                "to",
              ],
              [
                "all",
                "about",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to learn a new hobby. Write an email to your English friend, Jamie. Write 25 words or more.",
            prompts: [
              "Say what hobby you want to learn.",
              "Say why you want to learn it.",
              "Say where you can learn it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nI want to learn to play the guitar. I love music and I think it would be fun to play songs with my friends. There's a music school in my town that has guitar lessons for teenagers.\n\nBye,\nDeniz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🛍️👗",
                label: "1",
              },
              {
                e: "👧👗❌📏",
                label: "2",
              },
              {
                e: "👧👗✅😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last Saturday, Anna went shopping and bought a beautiful dress for a party. When she got home, she tried it on, but it was too small. She was very disappointed. The next day, she took the dress back to the shop. The shop assistant was very helpful and found her the same dress in a bigger size. Anna was very happy.",
          },
        },
      ],
    },
  ],
};
