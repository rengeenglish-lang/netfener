import type { CambridgeTest } from "./types";

/** A2 Key practice test 35 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_35: CambridgeTest = {
  id: "key-35",
  level: "key",
  no: 35,
  title: "A2 Key · Practice Test 35",
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
                    "GYM",
                    "Please clean the machines after use.",
                    "Cleaning spray is by the door.",
                  ],
                },
                question: "What should people do?",
                options: [
                  "bring their own spray",
                  "only use one machine",
                  "clean the equipment when they finish",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, the train has been cancelled. I'll get the bus instead, so I'll be about 30 minutes late. Sorry! Kate",
                  ],
                },
                question: "What does Kate tell Jo?",
                options: [
                  "She is not coming at all.",
                  "She is taking a different form of transport.",
                  "She has missed the bus.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "CAUTION",
                    "Wet floor.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The floor is being painted.",
                  "Be careful, because you might slip.",
                  "Don't walk on the grass.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Can I come to your house to work on our project on Saturday morning instead of Sunday? I'm busy on Sunday. Ben",
                  ],
                },
                question: "What does Ben want to do?",
                options: [
                  "finish the project alone",
                  "meet at his own house",
                  "change the day they meet",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOSPITAL CAFÉ",
                    "Open to visitors and patients.",
                    "8 a.m. – 8 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Both patients and visitors can use the café.",
                  "Only staff can use the café.",
                  "The café is open all night.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SECOND-HAND BOOKS",
                    "Thousands of books at low prices!",
                    "Market Street. Open every day.",
                  ],
                },
                question: "What do we know about the shop?",
                options: [
                  "It only sells new books.",
                  "Its books are cheap.",
                  "It is closed on Sundays.",
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
                title: "Eva",
                text: "I love playing the guitar and singing. I write my own songs and post videos of them online. I've got about two thousand followers now. Last month, a music producer contacted me. He wants me to record a song in his studio. I can't believe it!",
              },
              {
                title: "Toby",
                text: "My hobby is cycling. I'm part of a cycling club, and we ride about fifty kilometres every Sunday. In the summer, we go on longer trips. Last year, we cycled across Wales in five days. My legs were so tired, but I felt really proud.",
              },
              {
                title: "Leah",
                text: "I enjoy making films with my friends. We write the stories, act in them and film them on our phones. We spend a lot of time editing. Last year, one of our films won a prize at a film festival for young people. Now we're making a horror film!",
              },
            ],
            items: [
              {
                text: "was contacted by a professional?",
                answer: 0,
              },
              {
                text: "creates their own music?",
                answer: 0,
              },
              {
                text: "does their hobby with a group every week?",
                answer: 1,
              },
              {
                text: "felt proud after a long journey?",
                answer: 1,
              },
              {
                text: "works on a project with friends?",
                answer: 2,
              },
              {
                text: "won a prize?",
                answer: 2,
              },
              {
                text: "uses phones to make something?",
                answer: 2,
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
              title: "Life on a houseboat",
              paragraphs: [
                "Fourteen-year-old Ollie lives on a houseboat on a canal in London. 'It's like a small house, but it floats!' he says. 'We've lived here for five years.'",
                "Life on a houseboat is different from life in a normal house. 'The space is very small,' explains Ollie. 'My bedroom is tiny, and we don't have a bath, only a shower.'",
                "But there are lots of good things too. 'We can move to a different place whenever we want,' says Ollie. 'And I love waking up and seeing ducks and swans outside my window.'",
                "Ollie's friends love visiting him. 'They think it's really cool,' he says. 'In summer, we sit on the roof and watch the boats go past. I don't want to live anywhere else.'",
              ],
            },
            items: [
              {
                question: "How long has Ollie lived on the houseboat?",
                options: [
                  "five years",
                  "fourteen years",
                  "one year",
                ],
                answer: 0,
              },
              {
                question: "What is a disadvantage of the houseboat?",
                options: [
                  "It is cold.",
                  "It is noisy.",
                  "It is small.",
                ],
                answer: 2,
              },
              {
                question: "What does Ollie like about the houseboat?",
                options: [
                  "It has a big bath.",
                  "They can change where they live.",
                  "It is near his school.",
                ],
                answer: 1,
              },
              {
                question: "What can Ollie see from his window?",
                options: [
                  "trains",
                  "birds",
                  "cars",
                ],
                answer: 1,
              },
              {
                question: "What do Ollie's friends think about his home?",
                options: [
                  "They think it's strange.",
                  "They think it's too small.",
                  "They like it.",
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
            title: "Chocolate",
            text: [
              "Chocolate is made from the beans of the cacao tree. These trees grow in hot, wet countries near the equator, like Ghana and Ivory Coast. These two countries {1} more than half of the world's cacao.",
              "The beans grow inside large fruits called pods. Farmers {2} the pods by hand, take out the beans and dry them in the sun.",
              "Then the beans are sent to factories, where they are cooked and turned into chocolate. Milk chocolate has milk and sugar in it, while dark chocolate has less sugar and a stronger {3}. White chocolate doesn't contain any cacao beans, only cacao butter. The country {4} people eat the most chocolate is Switzerland. Each person eats about nine kilos a year! Chocolate is delicious, but you shouldn't eat too much {5} it. It contains a lot of sugar and fat. Dark chocolate is {6} for you than milk chocolate.",
            ],
            gaps: [
              {
                options: [
                  "build",
                  "rise",
                  "produce",
                ],
                answer: 2,
              },
              {
                options: [
                  "cut",
                  "break",
                  "pull",
                ],
                answer: 0,
              },
              {
                options: [
                  "flavour",
                  "taste",
                  "smell",
                ],
                answer: 1,
              },
              {
                options: [
                  "where",
                  "which",
                  "who",
                ],
                answer: 0,
              },
              {
                options: [
                  "from",
                  "with",
                  "of",
                ],
                answer: 2,
              },
              {
                options: [
                  "good",
                  "best",
                  "better",
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
              "Hi Zara,",
              "I'm so sorry I forgot your birthday! I feel really bad. I hope you had a wonderful day. What {1} you do?",
              "I've bought you a present. It's a book {2} your favourite singer. I'll give it to you when I see you next week.",
              "Would you like {3} go for a pizza on Friday after school? It will be my treat, because I forgot your birthday! We could go to the Italian restaurant {4} the cinema. Let me know {5} you're free. Sorry again, and happy birthday {6} last week!",
              "Love,",
              "Molly",
            ],
            answers: [
              [
                "did",
              ],
              [
                "about",
              ],
              [
                "to",
              ],
              [
                "near",
                "opposite",
                "next",
                "behind",
                "by",
              ],
              [
                "if",
                "whether",
                "when",
              ],
              [
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You had a party at your house last weekend. Write an email to your English friend, Ashley. Write 25 words or more.",
            prompts: [
              "Say why you had the party.",
              "Say who came.",
              "Say what you did.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Ashley' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Ashley,\n\nLast Saturday, I had a party at my house because it was my birthday. Ten friends from my class came. We played games, danced and ate a big chocolate cake.\n\nBye,\nYağmur",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🐴🌾",
                label: "1",
              },
              {
                e: "🐴🏃💨😮",
                label: "2",
              },
              {
                e: "👧🐴🍎😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Lily was visiting her uncle's farm. She wanted to give an apple to a horse in the field, but when she opened the gate, the horse ran out. Lily was very worried and ran after it. She called it and held out the apple. The horse came back and ate the apple from her hand. Lily took it back to the field and closed the gate carefully.",
          },
        },
      ],
    },
  ],
};
