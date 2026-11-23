import type { CambridgeTest } from "./types";

/** A2 Key practice test 88 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_88: CambridgeTest = {
  id: "key-88",
  level: "key",
  no: 88,
  title: "A2 Key · Practice Test 88",
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
                    "The school gates close at 5 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "School starts at 5.",
                  "You can't get into school after 5.",
                  "The gates are always open.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lily, can you remind me what time the party starts? I've forgotten. Jo",
                  ],
                },
                question: "What does Jo want to know?",
                options: [
                  "where the party is",
                  "when the party begins",
                  "what to bring",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE WIPE YOUR FEET",
                  ],
                },
                question: "What should you do?",
                options: [
                  "take off your shoes",
                  "walk slowly",
                  "clean your shoes",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "My computer is broken. Can I use yours to finish my homework this evening? Ben",
                  ],
                },
                question: "What does Ben want?",
                options: [
                  "to use Tom's computer",
                  "Tom to fix his computer",
                  "Tom to do his homework",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Children under 10 must be with an adult.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Adults can't swim.",
                  "Young children need an adult with them.",
                  "Children can't swim.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "COOKING CLASS",
                    "Learn to make pizza!",
                    "Friday 6 p.m. Ages 8–14. £10.",
                  ],
                },
                question: "Who can go to the class?",
                options: [
                  "children aged 8 to 14",
                  "adults",
                  "everyone",
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
                title: "Jessica",
                text: "I love dancing. I do ballet and tap dance. I have classes every day after school. Last year, I danced in a big show at a London theatre. It was amazing! I want to be a professional dancer when I'm older.",
              },
              {
                title: "Ryan",
                text: "My hobby is collecting stamps. I've got more than three thousand stamps from all over the world. My grandfather started the collection, and he gave it to me. I'm always looking for rare stamps. Last month, I found one from 1890!",
              },
              {
                title: "Mia",
                text: "I'm a keen climber. I climb at an indoor centre twice a week. Last summer, I climbed a real mountain in Wales with my dad. It was very hard, but the view from the top was beautiful. Next year, we want to climb in the Alps.",
              },
            ],
            items: [
              {
                text: "performed at a theatre?",
                answer: 0,
              },
              {
                text: "has a career goal?",
                answer: 0,
              },
              {
                text: "got a collection from a grandparent?",
                answer: 1,
              },
              {
                text: "found something old?",
                answer: 1,
              },
              {
                text: "does their hobby with a parent?",
                answer: 2,
              },
              {
                text: "has plans for next year?",
                answer: 2,
              },
              {
                text: "has classes every day?",
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
              title: "Running a marathon",
              paragraphs: [
                "Last year, fifty-year-old Mark ran his first marathon. 'I never did any sport when I was young,' he says. 'But when I was forty-five, my doctor told me I needed to get fit.'",
                "Mark started by walking every day. 'Then I started running,' he says. 'At first, I could only run for two minutes! But I kept trying.'",
                "After two years, Mark could run ten kilometres. Then he decided to run a marathon. 'I trained for six months,' he says. 'I ran five days a week.'",
                "On the day of the marathon, Mark was nervous. 'But the crowd cheered for everyone,' he says. 'It took me five hours, but I finished! It was the best day of my life.'",
              ],
            },
            items: [
              {
                question: "Why did Mark start doing exercise?",
                options: [
                  "He wanted to win a race.",
                  "His friends asked him.",
                  "His doctor told him to.",
                ],
                answer: 2,
              },
              {
                question: "What did Mark do first?",
                options: [
                  "ran every day",
                  "walked every day",
                  "swam every day",
                ],
                answer: 1,
              },
              {
                question: "How long could Mark run at first?",
                options: [
                  "two hours",
                  "two minutes",
                  "ten minutes",
                ],
                answer: 1,
              },
              {
                question: "How long did Mark train for the marathon?",
                options: [
                  "two years",
                  "one month",
                  "six months",
                ],
                answer: 2,
              },
              {
                question: "How long did the marathon take?",
                options: [
                  "five hours",
                  "two hours",
                  "one day",
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
            title: "Rivers",
            text: [
              "Rivers are very important for people and animals. They {1} us water to drink and to grow food.",
              "The longest river in the world is the Nile in Africa. It is about 6,650 kilometres long. It {2} through eleven countries.",
              "Many cities were built next to rivers, because people needed water. London is on the River Thames, and Paris is on the River Seine. In the past, people used rivers to {3} goods from one place to another. Today, we also use rivers to make electricity. Many animals live in rivers, like fish, frogs and otters. Sadly, many rivers are {4} because of pollution. Factories and farms put chemicals into them. This is bad for the animals and for people. We need to {5} our rivers clean. You can help by never {6} rubbish into rivers.",
            ],
            gaps: [
              {
                options: [
                  "give",
                  "make up",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "runs up",
                  "flows",
                  "walks",
                ],
                answer: 1,
              },
              {
                options: [
                  "carry",
                  "hold up",
                  "take up",
                ],
                answer: 0,
              },
              {
                options: [
                  "dirt",
                  "dirtily",
                  "dirty",
                ],
                answer: 2,
              },
              {
                options: [
                  "hold up",
                  "stay",
                  "keep",
                ],
                answer: 2,
              },
              {
                options: [
                  "throwing",
                  "putting up",
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
              "Hi Jack,",
              "I'm writing to tell you about my holiday. We went {1} Spain for two weeks. It was fantastic!",
              "We stayed in a hotel by the beach. Every day, I swam in the sea and played volleyball. The weather was hot and sunny {2} the time.",
              "We also visited Barcelona. We saw some amazing buildings and ate {3} delicious food. My favourite was paella. Have you ever been {4} Spain? I'd love to go back next year. Write soon and tell me {5} your holiday. See you {6} school!",
              "Oscar",
            ],
            answers: [
              [
                "to",
              ],
              [
                "all",
              ],
              [
                "some",
                "lots",
                "really",
              ],
              [
                "to",
              ],
              [
                "about",
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
            instruction: "You have a new friend. Write an email to your English friend, Jamie. Write 25 words or more.",
            prompts: [
              "Say who your new friend is.",
              "Describe your new friend.",
              "Say what you do together.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nI have a new friend called Deniz. He's in my class at school. He's tall with curly hair and he's very funny. We play basketball together every day after school.\n\nBye,\nKaan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🌧️🏠",
                label: "1",
              },
              {
                e: "👧📦🐱",
                label: "2",
              },
              {
                e: "👧🐱❤️😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One rainy evening, Lucy heard a noise outside her front door. When she opened it, she saw a small box. Inside, there was a little kitten. It was wet and cold. Lucy took it inside and gave it some milk. Her parents said she could keep it. She called it Lucky, and now it's her best friend.",
          },
        },
      ],
    },
  ],
};
