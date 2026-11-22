import type { CambridgeTest } from "./types";

/** A2 Key practice test 65 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_65: CambridgeTest = {
  id: "key-65",
  level: "key",
  no: 65,
  title: "A2 Key · Practice Test 65",
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
                    "Year 11 students can leave school at lunchtime on Friday to prepare for exams.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Some students can go home early on Friday.",
                  "All students have Friday off.",
                  "Exams are on Friday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, the restaurant is full tonight. Can we go tomorrow instead? Sophie",
                  ],
                },
                question: "What does Sophie want to do?",
                options: [
                  "choose a different restaurant",
                  "cancel the plan completely",
                  "change the day they go out",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "DANGER",
                    "Thin ice. Do not walk on the lake.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can skate here.",
                  "The lake is closed for swimming.",
                  "It is not safe to go on the lake.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "I'm sorry I forgot your birthday. I'll buy you a present this weekend. Happy birthday! Jake",
                  ],
                },
                question: "Why has Jake written this email?",
                options: [
                  "to say sorry",
                  "to invite Sam to a party",
                  "to ask Sam what he wants",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Free guided tours at 11 a.m. and 3 p.m.",
                  ],
                },
                question: "When can you join a tour?",
                options: [
                  "every hour",
                  "twice a day",
                  "only in the morning",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SPANISH CLASSES FOR KIDS",
                    "Fun games and songs.",
                    "Ages 5–10. Saturday mornings.",
                  ],
                },
                question: "What do we know about the classes?",
                options: [
                  "They are for young children.",
                  "They are for adults.",
                  "They are in the evening.",
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
                title: "Grace",
                text: "I love playing the cello. I've been learning for eight years. I play in the national youth orchestra. Last year, we went on tour to China and played in some amazing concert halls. I practise for three hours every day.",
              },
              {
                title: "Henry",
                text: "My hobby is mountain biking. I ride with a club in the hills near my town every Sunday. It's exciting but dangerous. Last year, I fell off and broke my arm. But as soon as it was better, I got back on my bike!",
              },
              {
                title: "Ava",
                text: "I'm interested in fashion. I design and make my own clothes. I learned to sew from my grandmother. Last month, I won a competition for young designers. The prize was a week of work experience with a famous fashion company in London.",
              },
            ],
            items: [
              {
                text: "has travelled abroad with a group?",
                answer: 0,
              },
              {
                text: "practises for many hours?",
                answer: 0,
              },
              {
                text: "was injured but continued?",
                answer: 1,
              },
              {
                text: "does their hobby with a club?",
                answer: 1,
              },
              {
                text: "learned from a grandparent?",
                answer: 2,
              },
              {
                text: "will spend time with a professional company?",
                answer: 2,
              },
              {
                text: "rides once a week?",
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
              title: "A day without technology",
              paragraphs: [
                "Last month, a school in London tried something unusual. For one day, no one was allowed to use any technology: no phones, no computers and no tablets.",
                "'At first, everyone was worried,' says fifteen-year-old Tom. 'We use technology for everything. We didn't know how we would do our work.'",
                "The teachers taught lessons using books, paper and whiteboards. 'We did a lot more talking and group work,' says Tom. 'In science, we did experiments outside. It was really fun.'",
                "At the end of the day, most students said they enjoyed it. 'I talked to people I don't usually talk to,' says Tom. 'I think we should do it once a month.' The head teacher agrees. 'We're going to do it again next term,' she says.",
              ],
            },
            items: [
              {
                question: "What did the school do?",
                options: [
                  "They gave students new phones.",
                  "They stopped using technology for a day.",
                  "They closed for a day.",
                ],
                answer: 1,
              },
              {
                question: "How did students feel at first?",
                options: [
                  "worried",
                  "happy",
                  "angry",
                ],
                answer: 0,
              },
              {
                question: "What happened in science?",
                options: [
                  "They watched a video.",
                  "They had no lesson.",
                  "They did experiments outside.",
                ],
                answer: 2,
              },
              {
                question: "What did Tom do that was different?",
                options: [
                  "He used his phone secretly.",
                  "He read a book alone.",
                  "He talked to new people.",
                ],
                answer: 2,
              },
              {
                question: "What will the school do next?",
                options: [
                  "try the day again",
                  "stop using technology forever",
                  "buy more computers",
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
            title: "Pandas",
            text: [
              "Giant pandas live in the mountains of China. They are black and white, and they are one of the most {1} animals in the world.",
              "Pandas eat almost only bamboo. An adult panda can eat up to thirty-eight kilos of bamboo every day! They spend about twelve hours a day eating.",
              "Baby pandas are very small when they are born. They are pink, blind and {2} only about 100 grams. That's about the same as a small apple! For many years, pandas were in danger of {3}. There were very few left in the wild. But China has worked hard to {4} them. They have created special parks where pandas can live safely. Now there are more than 1,800 wild pandas. In 2016, pandas were {5} from the list of endangered animals. This is good news, but pandas still need our help. It's important to {6} their forests.",
            ],
            gaps: [
              {
                options: [
                  "popular",
                  "famous up",
                  "known",
                ],
                answer: 0,
              },
              {
                options: [
                  "measure",
                  "weigh",
                  "hold",
                ],
                answer: 1,
              },
              {
                options: [
                  "disappearing",
                  "losing",
                  "leaving",
                ],
                answer: 0,
              },
              {
                options: [
                  "keep up",
                  "guard",
                  "protect",
                ],
                answer: 2,
              },
              {
                options: [
                  "taken up",
                  "removed",
                  "moved out",
                ],
                answer: 1,
              },
              {
                options: [
                  "keep up",
                  "save",
                  "hold",
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
              "Hi Jack,",
              "I'm sorry I wasn't at football practice yesterday. I was {1} with a cold. I'm feeling better now.",
              "Did the coach say anything about the match {2} Saturday? I really want to play. I hope I'm still in the team.",
              "Also, I've got a new football. My uncle gave it to me {3} my birthday. It's the same one that the professional players use! Would you like {4} try it? We could play in the park after school on Thursday. Let me know {5} you can come. See you {6}!",
              "Oscar",
            ],
            answers: [
              [
                "ill",
                "sick",
                "home",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "if",
                "whether",
              ],
              [
                "soon",
                "then",
                "thursday",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a cooking class. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say what kind of food you will learn to make.",
              "Say when the class is.",
              "Ask Kim to come with you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nI'm going to a cooking class to learn how to make Italian food. The class is every Thursday evening at the community centre. Would you like to come with me? It will be fun!\n\nBye,\nDila",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🏃🌧️",
                label: "1",
              },
              {
                e: "👩🏃🐕",
                label: "2",
              },
              {
                e: "👩🐕🏠😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One rainy morning, Sarah went running in the park. While she was running, she saw a small wet dog sitting alone under a bench. It looked cold and lost. Sarah picked it up and took it home. She put a notice on the internet, and the next day the owner called her. The owner was very grateful to have her dog back.",
          },
        },
      ],
    },
  ],
};
