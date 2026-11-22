import type { CambridgeTest } from "./types";

/** A2 Key practice test 39 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_39: CambridgeTest = {
  id: "key-39",
  level: "key",
  no: 39,
  title: "A2 Key · Practice Test 39",
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
                    "PLEASE KEEP OFF THE GRASS",
                    "New grass is growing.",
                  ],
                },
                question: "Why shouldn't you walk on the grass?",
                options: [
                  "It is wet.",
                  "It is private.",
                  "It is new.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, I've finished early at work. Shall I pick you up from school? Mum",
                  ],
                },
                question: "What is Mum offering to do?",
                options: [
                  "collect Lucy",
                  "make dinner",
                  "come to work later",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "CAMPSITE SHOP",
                    "Open 8 a.m. – 8 p.m.",
                    "Fresh bread every morning.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The shop is open all night.",
                  "You can buy fresh bread in the morning.",
                  "Bread is free.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jo,",
                    "Can you send me a photo of your homework? I want to check my answers. Thanks! Ben",
                  ],
                },
                question: "Why has Ben sent this email?",
                options: [
                  "He wants to compare his work.",
                  "He wants Jo to do his homework.",
                  "He has lost his homework.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Children under 5 free.",
                    "Students half price with ID.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Everyone pays half price.",
                  "Children can't come in.",
                  "Students pay less if they have a card.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SURF LESSONS",
                    "Learn to surf in one week!",
                    "All equipment included. Ages 10 and up.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "They are for adults only.",
                  "You don't need your own surfboard.",
                  "They last one day.",
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
                title: "Lena",
                text: "I love cooking cakes. I've started a small business selling birthday cakes to people in my town. I decorate them with chocolate, fruit and flowers. My most popular cake is a rainbow cake. I've made more than fifty cakes this year!",
              },
              {
                title: "Adam",
                text: "My hobby is hiking. My family and I go walking in the mountains almost every weekend. Last summer, we climbed the highest mountain in our country. It took two days, and we slept in a hut near the top. The view from the top was incredible.",
              },
              {
                title: "Jade",
                text: "I'm a member of a book club for teenagers. We meet once a month at a café and discuss a book. I love hearing other people's opinions. Sometimes we invite the authors to come and talk to us. Last month, a famous writer came and signed our books.",
              },
            ],
            items: [
              {
                text: "has their own business?",
                answer: 0,
              },
              {
                text: "has a best-selling product?",
                answer: 0,
              },
              {
                text: "does their hobby with family?",
                answer: 1,
              },
              {
                text: "stayed somewhere overnight?",
                answer: 1,
              },
              {
                text: "meets in a café?",
                answer: 2,
              },
              {
                text: "has met a famous person?",
                answer: 2,
              },
              {
                text: "is interested in other people's views?",
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
              title: "Learning to drive a tractor",
              paragraphs: [
                "Fifteen-year-old Harry lives on a farm in Wales. 'I've been helping my parents on the farm since I was little,' he says. 'Now I can drive the tractor!'",
                "Harry learned to drive the tractor last year. 'My dad taught me,' he explains. 'At first, I was nervous because it's so big. But now I love it.'",
                "Harry gets up at six o'clock every morning to feed the animals before school. 'It's hard work, especially in winter,' he says. 'But I love being outside.'",
                "When he leaves school, Harry wants to study agriculture at college. 'Farming is changing,' he says. 'There's lots of new technology. I want to learn about it and use it on our farm one day.'",
              ],
            },
            items: [
              {
                question: "Who taught Harry to drive the tractor?",
                options: [
                  "his mother",
                  "a teacher",
                  "his father",
                ],
                answer: 2,
              },
              {
                question: "How did Harry feel at first?",
                options: [
                  "excited",
                  "bored",
                  "worried",
                ],
                answer: 2,
              },
              {
                question: "What does Harry do before school?",
                options: [
                  "He feeds the animals.",
                  "He drives to school.",
                  "He does his homework.",
                ],
                answer: 0,
              },
              {
                question: "What does Harry say about winter?",
                options: [
                  "He doesn't work in winter.",
                  "The work is harder.",
                  "He likes it best.",
                ],
                answer: 1,
              },
              {
                question: "What does Harry want to learn about?",
                options: [
                  "new farming technology",
                  "driving cars",
                  "animals",
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
            title: "Rainforests",
            text: [
              "Rainforests are thick forests that grow in hot, wet parts of the world. The biggest is the Amazon rainforest in South America. It {1} more than five million square kilometres.",
              "More than half of all the world's plants and animals live in rainforests. Scientists think there are many {2} that nobody has discovered yet!",
              "Rainforests are very important for our planet. The trees take in carbon dioxide and {3} oxygen. That's why people sometimes call rainforests 'the lungs of the Earth'. Many of our medicines also {4} from rainforest plants. Sadly, people cut down large areas of rainforest every year to make space for farms. This is very {5} for the animals that live there. Many organisations are trying to {6} the rainforests before it's too late.",
            ],
            gaps: [
              {
                options: [
                  "covers",
                  "fills",
                  "holds",
                ],
                answer: 0,
              },
              {
                options: [
                  "kinds",
                  "objects",
                  "species",
                ],
                answer: 2,
              },
              {
                options: [
                  "build",
                  "produce",
                  "grow",
                ],
                answer: 1,
              },
              {
                options: [
                  "go",
                  "come",
                  "get",
                ],
                answer: 1,
              },
              {
                options: [
                  "wrong",
                  "sad",
                  "bad",
                ],
                answer: 2,
              },
              {
                options: [
                  "save",
                  "hold",
                  "keep up",
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
              "Hi Megan,",
              "How are you? I hope you're enjoying your new school. I really miss you! It's not the same here {1} you.",
              "We've got a new teacher for English. Her name is Mrs Clark, and she's very nice. She lets us choose our own books {2} read in class.",
              "Are you coming back to visit {3} the holidays? We could go to the park and have a picnic, like we used {4} do. Write back soon and tell me {5} about your new friends and school. I want to know {6}!",
              "Love,",
              "Isla",
            ],
            answers: [
              [
                "without",
              ],
              [
                "to",
              ],
              [
                "in",
                "during",
                "for",
              ],
              [
                "to",
              ],
              [
                "all",
                "everything",
              ],
              [
                "everything",
                "all",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to start a new sport. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say which sport you want to start.",
              "Say where you can do it.",
              "Ask Pat to do it with you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nI want to start playing badminton. There's a badminton club at the sports centre near my house on Tuesday evenings. Would you like to come with me? It would be more fun together!\n\nBye,\nDeniz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🐦🪺",
                label: "1",
              },
              {
                e: "👦🪜🐦",
                label: "2",
              },
              {
                e: "🐦👦😊🌳",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Tom found a baby bird on the ground under a tree. It had fallen out of its nest. Tom wanted to help, so he got a ladder and climbed up the tree carefully. He put the baby bird back in its nest. A few minutes later, the mother bird came back. Tom was very happy that the bird was safe.",
          },
        },
      ],
    },
  ],
};
