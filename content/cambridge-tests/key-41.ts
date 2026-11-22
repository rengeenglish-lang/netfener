import type { CambridgeTest } from "./types";

/** A2 Key practice test 41 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_41: CambridgeTest = {
  id: "key-41",
  level: "key",
  no: 41,
  title: "A2 Key · Practice Test 41",
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
                    "The library will be closed on Friday afternoon for a staff meeting.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can't use the library for part of Friday.",
                  "The library is closed all week.",
                  "Students must go to a meeting on Friday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Nina, I'm making a cake for Mum's birthday. Can you buy some candles on your way home? Dad",
                  ],
                },
                question: "What does Dad want Nina to do?",
                options: [
                  "make a cake",
                  "come home early",
                  "get something from a shop",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THIS LIFT IS NOT WORKING",
                    "Engineers are coming tomorrow.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The lift is new.",
                  "The engineers are working now.",
                  "The lift will be repaired soon.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "I've got an extra ticket for the zoo on Saturday. My sister can't come. Would you like it? Rosie",
                  ],
                },
                question: "What is Rosie offering?",
                options: [
                  "a free place on a trip",
                  "to take Ella's sister",
                  "to buy Ella a ticket",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BEACH",
                    "Lifeguards on duty until 6 p.m.",
                    "Swim at your own risk after that.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't swim after six.",
                  "There is no one to help swimmers after six.",
                  "Lifeguards arrive at six.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "NEW SPORTS CLUB",
                    "Volleyball every Monday. All levels.",
                    "£2 a session. Just turn up!",
                  ],
                },
                question: "What do we know about the club?",
                options: [
                  "You don't need to book.",
                  "It's free.",
                  "It's only for good players.",
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
                title: "Mia",
                text: "I'm learning to ride horses. I have a lesson every Saturday at a stable near my village. I've only been riding for six months, so I'm still a beginner. My favourite horse is called Daisy. She's very gentle and patient with me. One day, I'd like to have my own horse.",
              },
              {
                title: "Louis",
                text: "I play football for a local team. We train twice a week and play matches on Sundays. I'm the captain, which is a big responsibility. I have to encourage the other players when we're losing. Last season, we won the league. It was the best moment of my life.",
              },
              {
                title: "Anya",
                text: "I'm interested in fashion. I design clothes and make them using my mum's sewing machine. I've made dresses, skirts and bags. Last month, I organised a fashion show at school to raise money for charity. My friends were the models.",
              },
            ],
            items: [
              {
                text: "is fairly new to their hobby?",
                answer: 0,
              },
              {
                text: "has a favourite animal?",
                answer: 0,
              },
              {
                text: "has to support others?",
                answer: 1,
              },
              {
                text: "was part of a winning team?",
                answer: 1,
              },
              {
                text: "organised an event?",
                answer: 2,
              },
              {
                text: "uses equipment belonging to a parent?",
                answer: 2,
              },
              {
                text: "dreams of owning something?",
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
              title: "The boy who teaches computers",
              paragraphs: [
                "Every Saturday, thirteen-year-old Arjun goes to a community centre near his home. He teaches old people how to use computers and smartphones.",
                "'Lots of older people want to talk to their grandchildren on video calls,' explains Arjun. 'But they don't know how to use the technology. I help them.'",
                "Arjun started teaching after he helped his own grandmother. 'She lives in India, and she wanted to see photos of us,' he says. 'I showed her how to use email and video calls. Now we talk every week.'",
                "Arjun's students love him. 'He's very patient,' says seventy-eight-year-old Margaret. 'He never gets angry when I make mistakes.' Arjun says the work makes him happy. 'I like helping people,' he says.",
              ],
            },
            items: [
              {
                question: "What does Arjun do at the community centre?",
                options: [
                  "He fixes computers.",
                  "He helps older people use technology.",
                  "He sells smartphones.",
                ],
                answer: 1,
              },
              {
                question: "Why do older people want to learn?",
                options: [
                  "to contact their families",
                  "to find jobs",
                  "to play games",
                ],
                answer: 0,
              },
              {
                question: "How did Arjun get the idea?",
                options: [
                  "His teacher suggested it.",
                  "He read about it online.",
                  "He helped his grandmother first.",
                ],
                answer: 2,
              },
              {
                question: "What does Margaret say about Arjun?",
                options: [
                  "He talks too fast.",
                  "He is very strict.",
                  "He doesn't lose his temper.",
                ],
                answer: 2,
              },
              {
                question: "How does Arjun feel about his work?",
                options: [
                  "It makes him happy.",
                  "It is too difficult.",
                  "It is boring.",
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
            title: "Sleep",
            text: [
              "Everyone needs sleep. Children and teenagers need about nine to eleven hours {1} night, but many don't get enough.",
              "When we sleep, our bodies and brains {2}. Sleep helps us remember things we learned during the day. It also helps our bodies grow and stay healthy.",
              "If you don't sleep enough, you might feel tired and find it difficult to {3}. You might also feel more stressed or angry. Here are some {4} for a good night's sleep. Go to bed at the same time every night. Don't use your phone or computer for an hour {5} bed, because the light keeps your brain awake. Keep your bedroom dark and quiet. And don't drink {6} with caffeine, like cola or coffee, in the evening.",
            ],
            gaps: [
              {
                options: [
                  "every",
                  "many",
                  "all",
                ],
                answer: 0,
              },
              {
                options: [
                  "stop",
                  "rest",
                  "close",
                ],
                answer: 1,
              },
              {
                options: [
                  "concentrate",
                  "think",
                  "attend",
                ],
                answer: 0,
              },
              {
                options: [
                  "points",
                  "helps",
                  "tips",
                ],
                answer: 2,
              },
              {
                options: [
                  "after",
                  "before",
                  "until",
                ],
                answer: 1,
              },
              {
                options: [
                  "nothing",
                  "anything",
                  "everything",
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
              "Hi Sophie,",
              "I'm writing to tell you about my new hobby. I've started learning {1} play the guitar! My uncle gave me his old guitar, and I have lessons every Tuesday.",
              "At first, it was really hard. My fingers hurt a lot! But now I {2} play three songs. My teacher says I'm doing well.",
              "I practise {3} day for about thirty minutes. My little brother says I'm too loud! Next month, there's a concert at my school, and I'm going to play {4} it. I'm a bit nervous. Would you like {5} come and watch? Let me know {6} you can come.",
              "Love,",
              "Hannah",
            ],
            answers: [
              [
                "to",
              ],
              [
                "can",
              ],
              [
                "every",
                "each",
              ],
              [
                "in",
                "at",
              ],
              [
                "to",
              ],
              [
                "if",
                "whether",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to have a picnic with your family. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say where you are going to have the picnic.",
              "Say what food you will take.",
              "Invite Kim to come.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nOn Sunday, my family is going to have a picnic by the lake in the forest. We are going to take sandwiches, fruit, cake and lemonade. Would you like to come with us?\n\nBye,\nCeren",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🏃🌳",
                label: "1",
              },
              {
                e: "👨🏃⬇️🤕",
                label: "2",
              },
              {
                e: "👨🏃🏅😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last spring, Mr Taylor started training for a marathon. He ran in the park every morning. Two weeks before the race, he fell and hurt his ankle. He was very worried that he couldn't run. But he rested and his ankle got better. On the day of the marathon, he ran the whole race and got a medal at the end. He was very proud.",
          },
        },
      ],
    },
  ],
};
