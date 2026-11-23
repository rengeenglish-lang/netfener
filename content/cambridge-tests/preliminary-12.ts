import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 12 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_12: CambridgeTest = {
  id: "preliminary-12",
  level: "preliminary",
  no: 12,
  title: "B1 Preliminary · Practice Test 12",
  papers: [
    {
      id: "reading",
      name: "Reading",
      minutes: 45,
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
                    "SWIMMING POOL",
                    "The pool will be closed on Saturday morning for a swimming competition. It will reopen at 2 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed all weekend.",
                  "People can swim on Saturday afternoon.",
                  "The competition is on Saturday afternoon.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hey Dan, I've got a spare ticket for the football on Sunday. My brother can't come. Interested? Let me know by tonight. Joe",
                  ],
                },
                question: "What does Joe want Dan to do?",
                options: [
                  "tell him quickly if he wants a ticket",
                  "buy a ticket for his brother",
                  "go to the football tonight",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Ready to eat. Just heat in the microwave for 3 minutes.",
                    "Stir halfway through.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You need to cook it in the oven.",
                  "You should eat it cold.",
                  "You should mix the food while heating it.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear Ms Lee,",
                    "Thank you for your application. We would like to invite you to an interview on Thursday at 10 a.m. Please confirm by phone. Green Café",
                  ],
                },
                question: "Why has the café written to Ms Lee?",
                options: [
                  "to offer her a job",
                  "to reject her application",
                  "to invite her to an interview",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "ZOO",
                    "The penguin feeding at 3 p.m. has been cancelled today. Please join us tomorrow instead.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Visitors can't see the penguins being fed today.",
                  "The penguins have left the zoo.",
                  "The zoo is closed tomorrow.",
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
            instruction: "The young people below all want to join an online course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Beginner's Spanish",
                text: "Learn basic Spanish in ten weeks through games and videos. Two short lessons a week.",
              },
              {
                title: "Creative Writing",
                text: "Write short stories and get feedback from a published author. Weekly assignments.",
              },
              {
                title: "Guitar for Everyone",
                text: "Learn to play popular songs on the guitar. Videos you can watch at any time.",
              },
              {
                title: "Photography Basics",
                text: "Learn how to use light and colour to take better photos with your phone.",
              },
              {
                title: "Healthy Cooking",
                text: "Simple, healthy recipes for busy teenagers. Live classes every Sunday morning.",
              },
              {
                title: "Web Design",
                text: "Build your own website from scratch. No experience needed, but you need a computer.",
              },
              {
                title: "Public Speaking",
                text: "Gain confidence speaking in front of groups. Live video sessions with a coach.",
              },
              {
                title: "World History",
                text: "Explore ancient civilisations through documentaries and quizzes.",
              },
            ],
            items: [
              {
                text: "Mia wants to feel less nervous when she gives presentations at school.",
                answer: 6,
              },
              {
                text: "Burak wants to create an online page for his band.",
                answer: 5,
              },
              {
                text: "Selin dreams of writing a novel and wants advice from an expert.",
                answer: 1,
              },
              {
                text: "Can wants to learn an instrument, but he's very busy and needs to choose when he studies.",
                answer: 2,
              },
              {
                text: "Defne is going on holiday to Madrid and wants to be able to say a few things.",
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "The year I lived with my grandparents",
              paragraphs: [
                "When I was thirteen, my parents had to work abroad for a year, so I went to live with my grandparents in their small village. I was angry at first. I'd have to change school and leave all my friends.",
                "My grandparents' house had no internet, and the nearest shop was a twenty-minute walk away. For the first few weeks, I was bored and lonely. I spent most evenings in my room, reading the same books again and again.",
                "Then my grandfather asked me to help him with his bees. I was scared of being stung, but I agreed. I soon became fascinated by the bees and how they worked together. My grandfather taught me everything he knew.",
                "By the end of the year, I didn't want to leave. I'd made friends in the village and learned so much from my grandparents. Now I keep bees in my own garden, and every summer I go back to help my grandfather.",
              ],
            },
            items: [
              {
                question: "How did the writer feel about moving at first?",
                options: [
                  "excited",
                  "angry",
                  "calm",
                  "pleased",
                ],
                answer: 1,
              },
              {
                question: "What was the writer's life like at the beginning?",
                options: [
                  "busy and exciting",
                  "very noisy",
                  "full of friends",
                  "boring and lonely",
                ],
                answer: 3,
              },
              {
                question: "What did the writer's grandfather ask her to do?",
                options: [
                  "go shopping",
                  "help with his bees",
                  "read books",
                  "use the internet",
                ],
                answer: 1,
              },
              {
                question: "How did the writer feel about the bees?",
                options: [
                  "She was always scared of them.",
                  "She didn't like them.",
                  "She wanted to sell them.",
                  "She became very interested in them.",
                ],
                answer: 3,
              },
              {
                question: "What does the writer do now?",
                options: [
                  "She keeps her own bees.",
                  "She lives with her grandparents.",
                  "She has stopped visiting.",
                  "She works abroad.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A café where everyone is welcome",
            text: [
              "In a small town in England, there's a café with a difference. {1} Instead, customers pay what they can afford.",
              "The café was opened by a young chef called Tom Hughes. {2} He wanted to make sure that nobody in his town went hungry.",
              "The café uses food that supermarkets would otherwise throw away. {3} It's still perfectly good to eat, but it might be close to its 'best before' date.",
              "Some customers pay nothing, while others pay more than the usual price to help those who can't. {4} Many customers also volunteer, helping to cook or wash up.",
              "The café has become the heart of the community. {5} Tom now hopes to open similar cafés in other towns.",
            ],
            sentences: [
              "The café only serves expensive meals.",
              "There are no prices on the menu.",
              "This system has worked well for more than three years.",
              "Tom closed the café after a month.",
              "He had seen many people in his area struggling to buy food.",
              "Supermarkets refused to give any food.",
              "Every morning, volunteers collect it from local shops.",
              "Lonely older people come to chat, and families meet there for lunch.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Recycling plastic",
            text: [
              "Plastic is everywhere in our lives, from bottles to toys. But only about nine per cent of all plastic ever made has been {1}. Most of it ends up in rubbish dumps or the sea.",
              "Plastic takes hundreds of years to break down. In the ocean, it can harm sea animals that {2} it for food.",
              "There are many ways we can help. The simplest is to use less plastic. You can carry a reusable bottle and {3} your own bags to the shops. When you do use plastic, make sure you put it in the {4} bin. Some companies are now making products from recycled plastic, such as clothes, shoes and even furniture. Scientists are also {5} new kinds of plastic that break down more quickly. If everyone makes small changes, we can make a big {6}.",
            ],
            gaps: [
              {
                options: [
                  "recycled",
                  "reused",
                  "returned",
                  "removed",
                ],
                answer: 0,
              },
              {
                options: [
                  "confuse",
                  "think",
                  "mistake",
                  "believe",
                ],
                answer: 2,
              },
              {
                options: [
                  "bring up",
                  "take",
                  "carry on",
                  "get",
                ],
                answer: 1,
              },
              {
                options: [
                  "correct up",
                  "true",
                  "proper up",
                  "right",
                ],
                answer: 3,
              },
              {
                options: [
                  "growing",
                  "developing",
                  "building up",
                  "making up",
                ],
                answer: 1,
              },
              {
                options: [
                  "change up",
                  "effect up",
                  "result",
                  "difference",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A great teacher",
            text: [
              "The best teacher I've ever had was Mr Wilson, {1} taught me history when I was twelve. Before I was in his class, I thought history was boring.",
              "Mr Wilson made every lesson exciting. He told us stories about people from the past {2} if they were his friends. Sometimes he even dressed up as famous historical characters!",
              "He also took us on trips to castles and museums. I remember the day we visited an old Roman town. We tried on Roman clothes and ate Roman food. It was {3} of the best days of my life. Mr Wilson always encouraged us to ask questions. He said there was no {4} thing as a stupid question. Because of him, I'm now studying history at university. I hope I can become a teacher {5} inspiring {6} he was.",
            ],
            answers: [
              [
                "who",
              ],
              [
                "as",
              ],
              [
                "one",
              ],
              [
                "such",
              ],
              [
                "as",
              ],
              [
                "as",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      minutes: 45,
      parts: [
        {
          title: "Part 1 · Email",
          task: {
            kind: "writing",
            instruction: "Read this email from your English-speaking friend Sam and the notes you have made. Write your email to Sam using all the notes. Write about 100 words.",
            input: {
              from: "Sam",
              subject: "Your new school",
              lines: [
                "How's your new school? [Tell Sam]",
                "Have you made any new friends? [Describe one]",
                "What's your favourite subject now? [Explain why]",
                "When can you come and visit me? [Suggest a time]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Sam,\n\nMy new school is great! It's much bigger than my old one, and there are lots of clubs. I've already joined the basketball team.\n\nI've made a few new friends. My best friend is called Arda. He's really funny and he's also in the basketball team, so we spend a lot of time together.\n\nMy favourite subject now is science, because we have a brilliant teacher who does lots of experiments with us. Last week, we made a volcano!\n\nI'd love to visit you. How about the first weekend of the holidays? Let me know if that's OK.\n\nBye,\nEmir",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best present I ever received",
              lines: [
                "What was it?",
                "Who gave it to you?",
                "Why was it so special?",
                "We'll publish the most interesting articles.",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "More than just a camera\n\nThe best present I've ever received was an old camera from my grandfather. He gave it to me on my fourteenth birthday, just a few months before he died.\n\nIt isn't a modern digital camera; it uses film, and you have to wait to see your photos. At first, I didn't know how to use it, but Grandpa taught me patiently.\n\nIt's special because Grandpa used it to take photos of our family for forty years. Now, whenever I take a photo with it, I feel close to him. I've decided I want to become a photographer.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was the last day of the holidays, and something exciting was about to happen.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was the last day of the holidays, and something exciting was about to happen. Leo and his friends had planned a camping trip in the forest near their village.\n\nThey put up their tents next to a small lake and cooked sausages over a fire. As it got dark, they told scary stories and laughed.\n\nSuddenly, they heard something moving in the trees. Everyone went quiet. A large shape came slowly towards them. Leo shone his torch at it and saw a deer with a baby beside it.\n\nThe deer looked at them for a moment and then walked away. It was the perfect end to the summer.",
          },
        },
      ],
    },
  ],
};
