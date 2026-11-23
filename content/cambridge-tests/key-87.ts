import type { CambridgeTest } from "./types";

/** A2 Key practice test 87 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_87: CambridgeTest = {
  id: "key-87",
  level: "key",
  no: 87,
  title: "A2 Key · Practice Test 87",
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
                    "Students can buy fruit at the canteen for 20p.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Fruit is free.",
                  "The canteen doesn't sell fruit.",
                  "Fruit is cheap at the canteen.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, my train is delayed. I'll be at the café at 4, not 3. Sorry! Dan",
                  ],
                },
                question: "What does Dan tell Max?",
                options: [
                  "He will arrive later.",
                  "He has missed his train.",
                  "He can't come.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THIS SEAT IS FOR PEOPLE WHO NEED IT MORE",
                  ],
                },
                question: "Who should sit here?",
                options: [
                  "children only",
                  "people who find standing difficult",
                  "drivers",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "Can you bring your camera to the party? I want to take lots of photos. Thanks! Kate",
                  ],
                },
                question: "What does Kate want Lucy to bring?",
                options: [
                  "her camera",
                  "some food",
                  "her phone",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "All jackets 40% off this weekend.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Everything is 40% off.",
                  "Jackets are free.",
                  "Jackets are cheaper for a short time.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FREE CONCERT",
                    "The city orchestra plays in the park!",
                    "Sunday 3 p.m. Bring a chair.",
                  ],
                },
                question: "What should you bring to the concert?",
                options: [
                  "money",
                  "something to sit on",
                  "food",
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
                title: "Ella",
                text: "I love swimming. I'm in a swimming club and train five times a week. Last year, I swam in the national championships and won a silver medal. My next goal is to swim for my country at the Commonwealth Games.",
              },
              {
                title: "Josh",
                text: "My hobby is gardening. I have a small vegetable garden at home. I grow tomatoes, beans and potatoes. My mum uses my vegetables for cooking. Last summer, I entered a competition for the biggest tomato and came first!",
              },
              {
                title: "Aisha",
                text: "I'm interested in photography. I take photos of people and places in my city. I've started a photography club at school. We go on photo walks every Saturday. Last month, our club had an exhibition in the school hall.",
              },
            ],
            items: [
              {
                text: "trains five times a week?",
                answer: 0,
              },
              {
                text: "has an international goal?",
                answer: 0,
              },
              {
                text: "grows food?",
                answer: 1,
              },
              {
                text: "won a competition for a vegetable?",
                answer: 1,
              },
              {
                text: "started a group?",
                answer: 2,
              },
              {
                text: "organised an exhibition?",
                answer: 2,
              },
              {
                text: "gives what they make to a parent?",
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
              title: "The boy who wrote a book",
              paragraphs: [
                "When eleven-year-old Sam's grandmother got ill, he wanted to make her happy. 'She loved reading,' says Sam. 'So I decided to write her a book.'",
                "Sam wrote a story about a dragon who lived in a castle. 'I wrote every day after school,' he says. 'It took me three months. My mum helped me with the spelling.'",
                "When Sam gave the book to his grandmother, she cried. 'She said it was the best present ever,' says Sam. 'She read it to all her friends.'",
                "Then something amazing happened. A publisher read Sam's story and wanted to print it. 'Now my book is in shops!' says Sam. 'I'm going to write another one.'",
              ],
            },
            items: [
              {
                question: "Why did Sam write a book?",
                options: [
                  "to win a competition",
                  "for school",
                  "to make his grandmother happy",
                ],
                answer: 2,
              },
              {
                question: "What was the story about?",
                options: [
                  "a grandmother",
                  "a school",
                  "a dragon",
                ],
                answer: 2,
              },
              {
                question: "Who helped Sam with spelling?",
                options: [
                  "his mum",
                  "his teacher",
                  "his grandmother",
                ],
                answer: 0,
              },
              {
                question: "How did Sam's grandmother feel?",
                options: [
                  "sad",
                  "very happy",
                  "angry",
                ],
                answer: 1,
              },
              {
                question: "What happened to Sam's book?",
                options: [
                  "It was published.",
                  "It was lost.",
                  "It won a prize.",
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
            title: "Cheetahs",
            text: [
              "Cheetahs are the fastest land animals in the world. They can {1} at speeds of up to 120 kilometres an hour!",
              "Cheetahs live in Africa and a small part of Iran. They have yellow fur with black spots. They also have black lines on their faces, which {2} them see in bright sunlight.",
              "Cheetahs hunt in the day. They {3} quietly towards their food and then run very fast to catch it. But they can only run fast for a short time, about thirty seconds. Then they need to rest. Unlike other big cats, cheetahs can't {4} loudly. Instead, they make sounds like birds! Sadly, there are only about 7,000 cheetahs left in the wild. They are in danger because people are {5} their homes. Many organisations are working to {6} cheetahs.",
            ],
            gaps: [
              {
                options: [
                  "run",
                  "walk",
                  "fly",
                ],
                answer: 0,
              },
              {
                options: [
                  "make up",
                  "do up",
                  "help",
                ],
                answer: 2,
              },
              {
                options: [
                  "run up",
                  "walk",
                  "fly",
                ],
                answer: 1,
              },
              {
                options: [
                  "sing up",
                  "roar",
                  "shout up",
                ],
                answer: 1,
              },
              {
                options: [
                  "breaking up",
                  "making",
                  "destroying",
                ],
                answer: 2,
              },
              {
                options: [
                  "protect",
                  "keep up",
                  "guard on",
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
              "Hi Ruby,",
              "I'm going {1} have a sleepover at my house next Friday. Would you like to come?",
              "We're going to watch films, eat pizza and play games. My mum is going to make pancakes {2} breakfast on Saturday morning!",
              "Please bring your pyjamas, a sleeping bag and a toothbrush. You can come {3} six o'clock. My dad can pick you up if you want. Let me know {4} you can come. I've invited Isla and Mia {5}. It's going to be {6} fun!",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "to",
              ],
              [
                "for",
              ],
              [
                "at",
              ],
              [
                "if",
                "whether",
              ],
              [
                "too",
              ],
              [
                "so",
                "really",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You lost something at school. Write an email to your English teacher, Mrs Smith. Write 25 words or more.",
            prompts: [
              "Say what you lost.",
              "Say when you lost it.",
              "Ask for help.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Mrs Smith' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Mrs Smith,\n\nI lost my blue pencil case at school yesterday. I think I left it in the science lab after lunch. Could you please help me find it?\n\nThank you,\nEmre",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🏪🍎",
                label: "1",
              },
              {
                e: "👩💰❓",
                label: "2",
              },
              {
                e: "👦💰👩😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last Saturday, Mrs Green was buying fruit at the market. When she wanted to pay, she couldn't find her money. She was very embarrassed. A young boy saw what happened. He paid for her fruit with his pocket money. Mrs Green was very grateful. The next day, she went to his house and gave him the money back with a box of chocolates.",
          },
        },
      ],
    },
  ],
};
