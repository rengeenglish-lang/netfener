import type { CambridgeTest } from "./types";

/** A2 Key practice test 75 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_75: CambridgeTest = {
  id: "key-75",
  level: "key",
  no: 75,
  title: "A2 Key · Practice Test 75",
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
                    "All visitors must sign in at reception.",
                  ],
                },
                question: "What should visitors do?",
                options: [
                  "wait outside",
                  "phone the school",
                  "write their name at the front desk",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, I'm sorry, I can't come to your party. My grandparents are visiting. Have fun! Sam",
                  ],
                },
                question: "Why can't Sam go to the party?",
                options: [
                  "He has family visitors.",
                  "He's ill.",
                  "He's on holiday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SKATE PARK",
                    "Open daylight hours only.",
                  ],
                },
                question: "When can you use the skate park?",
                options: [
                  "at night",
                  "when it is light",
                  "only in the morning",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "I've put the photos from our trip online. Have a look and tell me which ones you want printed. Lucy",
                  ],
                },
                question: "What does Lucy want Ella to do?",
                options: [
                  "choose some photos",
                  "take more photos",
                  "print the photos",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Children's menu available until 6 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't come after six.",
                  "The café closes at six.",
                  "Children can order special food before six.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PIANO TEACHER",
                    "Lessons for children and adults.",
                    "In your home or mine. Call Mrs Lee.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "They are only for children.",
                  "They can be at the student's house.",
                  "They are online.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Grace",
                text: "I love surfing. I've been surfing for six years. I live near the beach, so I go surfing every morning before school. Last summer, I won a junior surfing competition. Next year, I want to compete in Australia.",
              },
              {
                title: "Sam",
                text: "My hobby is cooking. I watch cooking shows on TV and try the recipes at home. My favourite thing to cook is Thai food. Last month, I cooked a three-course dinner for my parents' anniversary. They said it was better than a restaurant!",
              },
              {
                title: "Freya",
                text: "I'm a keen reader. I read about three books a week. I love fantasy and science fiction. I've started writing reviews of books on a website. Some publishers have started sending me free books to review before they're in the shops!",
              },
            ],
            items: [
              {
                text: "does their hobby before school?",
                answer: 0,
              },
              {
                text: "wants to travel abroad to compete?",
                answer: 0,
              },
              {
                text: "learns from television?",
                answer: 1,
              },
              {
                text: "cooked for a special occasion?",
                answer: 1,
              },
              {
                text: "gets free things?",
                answer: 2,
              },
              {
                text: "reads before other people can?",
                answer: 2,
              },
              {
                text: "has won a competition?",
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
              title: "A dog called Max",
              paragraphs: [
                "When ten-year-old Lily got lost in a forest near her home, her dog Max stayed with her all night. 'I was so scared,' says Lily. 'But Max kept me warm and calm.'",
                "Lily had gone for a walk with Max in the afternoon. 'I wanted to see a waterfall,' she explains. 'But I took the wrong path and got lost. Then it got dark.'",
                "Lily's parents called the police. Hundreds of people looked for her. In the morning, a helicopter found Lily and Max sitting under a tree. 'Max started barking when he heard the helicopter,' says Lily. 'That's how they found us.'",
                "Lily is fine now. 'Max is a hero,' she says. 'He got a special award from the police. Now he gets extra treats every day!'",
              ],
            },
            items: [
              {
                question: "What did Max do during the night?",
                options: [
                  "He ran home.",
                  "He found the path.",
                  "He stayed with Lily.",
                ],
                answer: 2,
              },
              {
                question: "Why did Lily go into the forest?",
                options: [
                  "to look for Max",
                  "to meet friends",
                  "to see a waterfall",
                ],
                answer: 2,
              },
              {
                question: "Who looked for Lily?",
                options: [
                  "many people",
                  "only her parents",
                  "only the police",
                ],
                answer: 0,
              },
              {
                question: "How was Lily found?",
                options: [
                  "Lily called her parents.",
                  "Max barked at a helicopter.",
                  "She walked home.",
                ],
                answer: 1,
              },
              {
                question: "What happened to Max after?",
                options: [
                  "He got an award.",
                  "He got lost again.",
                  "He went to the police.",
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
            title: "Snakes",
            text: [
              "There are about 3,500 different kinds of snake in the world. They live on every continent {1} Antarctica.",
              "Snakes don't have legs, but they can move very quickly. They use their muscles to {2} along the ground. Some snakes can also swim and climb trees.",
              "Snakes can't hear like we do, but they can feel movements in the ground. They also use their tongues to smell. Most snakes eat small animals, like mice, birds and frogs. Some big snakes can eat animals that are {3} than their heads! They can open their mouths very wide. Only about 600 kinds of snake are poisonous, and only about 200 are dangerous to people. Most snakes are shy and {4} attack people. In many countries, snakes are important because they {5} the number of mice and rats. So if you see a snake, don't be afraid. Just {6} it alone.",
            ],
            gaps: [
              {
                options: [
                  "except",
                  "without",
                  "only",
                ],
                answer: 0,
              },
              {
                options: [
                  "walk up",
                  "run up",
                  "move",
                ],
                answer: 2,
              },
              {
                options: [
                  "more big",
                  "bigger",
                  "biggest",
                ],
                answer: 1,
              },
              {
                options: [
                  "usually",
                  "rarely",
                  "always",
                ],
                answer: 1,
              },
              {
                options: [
                  "hold up",
                  "keep up",
                  "control",
                ],
                answer: 2,
              },
              {
                options: [
                  "leave",
                  "let",
                  "stay",
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
              "Hi Jack,",
              "I'm writing to tell you that I'm moving to a new school next month. My family is moving {1} a different city because of my dad's new job.",
              "I'm a bit sad because I'll miss my friends, especially you. But I'm also excited. The new school has a swimming pool and a big sports field.",
              "I hope we can stay {2} touch. We can talk on the phone and send messages. You can also come and visit me {3} the holidays. My parents say it's fine. It's only two hours {4} train. I'll send you my new address {5} I have it. Promise you'll write {6}!",
              "Your friend,",
              "Oscar",
            ],
            answers: [
              [
                "to",
              ],
              [
                "in",
              ],
              [
                "in",
                "during",
              ],
              [
                "by",
              ],
              [
                "when",
                "once",
              ],
              [
                "back",
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to make a cake. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say what kind of cake you will make.",
              "Say who the cake is for.",
              "Ask Kim to help you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nI'm going to make a chocolate cake with strawberries on Saturday. It's for my brother's birthday. Could you help me? You're much better at baking than me!\n\nThanks,\nBeril",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🐦🌳",
                label: "1",
              },
              {
                e: "🐦🪟🏠",
                label: "2",
              },
              {
                e: "👧🐦🏥😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Maya heard a noise outside. A small bird had hit her window and was lying on the ground. Its wing was hurt. Maya put it in a box and took it to the animal hospital. The vet looked after the bird for a week. Then Maya went to collect it and set it free in the garden. She was happy to see it fly away.",
          },
        },
      ],
    },
  ],
};
