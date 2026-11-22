import type { CambridgeTest } from "./types";

/** A2 Key practice test 31 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_31: CambridgeTest = {
  id: "key-31",
  level: "key",
  no: 31,
  title: "A2 Key · Practice Test 31",
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
                    "SCHOOL CANTEEN",
                    "Hot meals served 12–1.30 p.m.",
                    "Sandwiches available all day.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can only get hot food at lunchtime.",
                  "Sandwiches are only sold at lunchtime.",
                  "The canteen closes at 12.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Emma, I've left my glasses on your kitchen table. Can you keep them safe until tomorrow? Grandma",
                  ],
                },
                question: "What does Grandma want Emma to do?",
                options: [
                  "bring her new glasses",
                  "look after something for her",
                  "clean the kitchen table",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "ZOO",
                    "Feeding time for the penguins: 2.30 p.m.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can watch the penguins eat in the afternoon.",
                  "Visitors can feed the penguins.",
                  "The penguins are closed at 2.30.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Liam,",
                    "My computer is broken, so I'll send you my part of the project tomorrow from school. Sorry! Sara",
                  ],
                },
                question: "Why can't Sara send her work today?",
                options: [
                  "She hasn't finished it.",
                  "She is ill.",
                  "She has a problem with her computer.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Gates close at sunset.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The park is open all night.",
                  "The park opens at sunset.",
                  "The park closes when it gets dark.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SPANISH LESSONS",
                    "Native speaker offers lessons for all levels.",
                    "Online or in person. First lesson half price.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "You can have them on the internet.",
                  "They are only for beginners.",
                  "The first lesson is free.",
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
                title: "Archie",
                text: "I love rowing. I'm in a rowing club, and we train on the river at six o'clock every morning. It's very hard work, but I'm much fitter now. Our team of four won a race last month. Next year, I want to try for the national team.",
              },
              {
                title: "Rosie",
                text: "I collect old postcards. I've got more than a thousand from all over the world. Some of them are over a hundred years old. I find them at antique shops and car boot sales. I love reading the messages people wrote on them a long time ago.",
              },
              {
                title: "Ethan",
                text: "I'm a member of a theatre group for young people. We meet on Saturday afternoons. We do acting exercises and rehearse plays. In December, we're going to perform a musical in a real theatre. I've got one of the main parts, so I have to learn lots of songs.",
              },
            ],
            items: [
              {
                text: "does their hobby at an early hour?",
                answer: 0,
              },
              {
                text: "has become healthier through their hobby?",
                answer: 0,
              },
              {
                text: "likes reading what other people wrote?",
                answer: 1,
              },
              {
                text: "buys things that are very old?",
                answer: 1,
              },
              {
                text: "will perform in a big building soon?",
                answer: 2,
              },
              {
                text: "needs to remember a lot?",
                answer: 2,
              },
              {
                text: "is part of a team that has won something?",
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
              title: "A city farm",
              paragraphs: [
                "In the middle of London, there's a farm with goats, pigs, chickens and even a donkey. It's a city farm, and fifteen-year-old Tia volunteers there every Saturday.",
                "'Lots of children in the city have never seen a real farm animal,' says Tia. 'Here, they can touch them and learn how to look after them.'",
                "Tia started volunteering two years ago. 'At first, I was scared of the goats,' she laughs. 'They're very naughty! But now they're my favourite animals.'",
                "Tia's job is to feed the animals and clean their homes. She also shows visitors around the farm. 'I love seeing how happy the children are,' she says. 'I want to be a vet, so this is really good experience for me.'",
              ],
            },
            items: [
              {
                question: "What is unusual about the farm?",
                options: [
                  "It only has goats.",
                  "It is very big.",
                  "It is in a big city.",
                ],
                answer: 2,
              },
              {
                question: "Why is the farm important for city children?",
                options: [
                  "They can meet farm animals.",
                  "They can buy food.",
                  "They can get jobs.",
                ],
                answer: 0,
              },
              {
                question: "How did Tia feel about the goats at first?",
                options: [
                  "She loved them.",
                  "She was frightened of them.",
                  "She thought they were boring.",
                ],
                answer: 1,
              },
              {
                question: "What does Tia do at the farm?",
                options: [
                  "She looks after the animals and shows people around.",
                  "She sells eggs.",
                  "She teaches children to ride the donkey.",
                ],
                answer: 0,
              },
              {
                question: "Why is the farm useful for Tia?",
                options: [
                  "It pays her well.",
                  "It is near her school.",
                  "It helps her prepare for a future job.",
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
            title: "Bicycles",
            text: [
              "The first bicycle was {1} in Germany in 1817. It was made of wood and didn't have pedals! People sat on it and pushed it along the ground with their feet.",
              "Later, bicycles had pedals and one very big wheel at the front. They were {2} to ride and quite dangerous.",
              "The modern bicycle, with two wheels of the same size and a chain, appeared in the 1880s. It quickly became very popular, and it {3} people's lives. Suddenly, they could travel further and faster. Today, there are more than one billion bicycles in the world. In some cities, like Amsterdam, there are more bikes than people! Cycling is a great way to {4} fit, and it's also good for the environment because it doesn't {5} pollution. Many cities are now building more cycle {6} to make cycling safer.",
            ],
            gaps: [
              {
                options: [
                  "discovered",
                  "found",
                  "invented",
                ],
                answer: 2,
              },
              {
                options: [
                  "heavy",
                  "strong",
                  "difficult",
                ],
                answer: 2,
              },
              {
                options: [
                  "changed",
                  "moved",
                  "turned",
                ],
                answer: 0,
              },
              {
                options: [
                  "make",
                  "keep",
                  "have",
                ],
                answer: 1,
              },
              {
                options: [
                  "cause",
                  "give",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "streets",
                  "ways",
                  "lanes",
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
              "Hi Sam,",
              "Sorry I didn't answer your message. I was {1} holiday in Spain with my family and my phone didn't work there.",
              "We had a fantastic time! We stayed in a small town {2} the mountains. Every day, we went walking, and in the evenings we ate in the town square.",
              "I brought you back a football shirt from Barcelona. I'll give it to you {3} school on Monday. What did you do {4} the holidays? Did you go away? Tell me {5} about it when I see you. See you {6}!",
              "Josh",
            ],
            answers: [
              [
                "on",
              ],
              [
                "in",
              ],
              [
                "at",
              ],
              [
                "in",
                "during",
              ],
              [
                "all",
                "everything",
              ],
              [
                "soon",
                "then",
                "monday",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to go to a concert with your English friend, Lee. Write an email to Lee. Write 25 words or more.",
            prompts: [
              "Say which band is playing.",
              "Say when the concert is.",
              "Say how much the tickets cost.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Lee' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Lee,\n\nMy favourite band is playing a concert in the city next month! It's on Saturday the 14th at eight o'clock. The tickets cost £20 each. Would you like to come with me?\n\nBye,\nMert",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦⛸️❄️",
                label: "1",
              },
              {
                e: "👦⛸️⬇️😣",
                label: "2",
              },
              {
                e: "👦👩⛸️😀",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last winter, Daniel went ice skating for the first time with his sister. He was very excited, but as soon as he stepped onto the ice, he fell over. He tried again and again, but he kept falling. His sister held his hand and showed him what to do. By the end of the day, Daniel could skate on his own. He was very proud.",
          },
        },
      ],
    },
  ],
};
