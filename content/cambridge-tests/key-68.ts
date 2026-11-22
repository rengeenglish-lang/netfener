import type { CambridgeTest } from "./types";

/** A2 Key practice test 68 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_68: CambridgeTest = {
  id: "key-68",
  level: "key",
  no: 68,
  title: "A2 Key · Practice Test 68",
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
                    "CINEMA",
                    "The 8 p.m. show is sold out.",
                    "Tickets still available for 10 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can still see the later film.",
                  "Both shows are sold out.",
                  "There's no 10 p.m. show.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lily, I'm at the station, but I can't find you. Where are you? Ruby",
                  ],
                },
                question: "Why has Ruby sent this message?",
                options: [
                  "She's late.",
                  "She can't see Lily.",
                  "She's lost her ticket.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "RECYCLING",
                    "Glass bottles only in this bin.",
                  ],
                },
                question: "What can you put in this bin?",
                options: [
                  "glass bottles",
                  "plastic bottles",
                  "paper",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi team,",
                    "Remember, the end-of-season party is on Friday at the pizza restaurant. Please pay £10 by Wednesday. Coach",
                  ],
                },
                question: "What must the players do by Wednesday?",
                options: [
                  "choose a restaurant",
                  "play a match",
                  "pay for the party",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Closed for lunch 1–2 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop is closed all afternoon.",
                  "The shop closes for an hour in the middle of the day.",
                  "The shop sells lunch.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "MUSIC FESTIVAL",
                    "Three days of music in the park!",
                    "Children under 12 free.",
                  ],
                },
                question: "What do we know about the festival?",
                options: [
                  "It is one day.",
                  "Young children don't pay.",
                  "It is indoors.",
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
                title: "Alfie",
                text: "I love swimming in open water, like lakes and the sea. I train with a club every weekend. Last summer, I swam across a lake that was five kilometres wide. It took me two hours! Next year, I want to swim across the sea to France with a team.",
              },
              {
                title: "Bethany",
                text: "My hobby is baking cakes. I make birthday cakes for my friends and family. Last year, I won a baking competition at my school. The judges said my chocolate cake was the best they'd ever tasted! Now I'm taking a cake decorating course.",
              },
              {
                title: "Kian",
                text: "I'm into robotics. I'm in the robotics club at school. Last year, our team built a robot that can pick up rubbish. We entered it in a national competition and came first! We're going to an international competition in Japan next spring.",
              },
            ],
            items: [
              {
                text: "swims outside, not in a pool?",
                answer: 0,
              },
              {
                text: "has an ambitious plan for next year?",
                answer: 0,
              },
              {
                text: "makes things for people they know?",
                answer: 1,
              },
              {
                text: "is doing a course?",
                answer: 1,
              },
              {
                text: "works with a team at school?",
                answer: 2,
              },
              {
                text: "will travel to Asia?",
                answer: 2,
              },
              {
                text: "won a school competition?",
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
              title: "A school for street children",
              paragraphs: [
                "In a big city in India, there's a school with no walls. It's under a bridge! The teacher, Rajesh Sharma, started it in 2006.",
                "'I saw many children working on the streets instead of going to school,' says Rajesh. 'Their families were too poor to send them to school. So I decided to teach them myself.'",
                "At first, only two children came. Now there are more than three hundred. The children write on boards painted on the bridge wall. 'We don't have much,' says Rajesh. 'But the children are so happy to learn.'",
                "Some of Rajesh's students have gone on to university. 'Education can change lives,' he says. 'Every child should have the chance to learn.'",
              ],
            },
            items: [
              {
                question: "Where is the school?",
                options: [
                  "in a big building",
                  "in a park",
                  "under a bridge",
                ],
                answer: 2,
              },
              {
                question: "Why did Rajesh start the school?",
                options: [
                  "Children weren't going to school.",
                  "He wanted to make money.",
                  "The government asked him.",
                ],
                answer: 0,
              },
              {
                question: "How has the school changed?",
                options: [
                  "It now has walls.",
                  "Many more children come now.",
                  "It has fewer students.",
                ],
                answer: 1,
              },
              {
                question: "What do the children write on?",
                options: [
                  "boards on a wall",
                  "computers",
                  "notebooks",
                ],
                answer: 0,
              },
              {
                question: "What does Rajesh believe?",
                options: [
                  "Only rich children should learn.",
                  "Schools need walls.",
                  "All children deserve an education.",
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
            title: "Elephants",
            text: [
              "Elephants are the largest land animals in the world. There are two main kinds: African elephants and Asian elephants. African elephants are bigger and have larger {1}.",
              "Elephants are very intelligent and have excellent memories. They live in family groups led by the oldest female. Family members {2} after each other and help with the babies.",
              "An elephant's trunk is very useful. They use it to breathe, smell, drink and pick up food. An elephant's trunk has about 40,000 muscles! Elephants eat a lot. An adult can eat up to 150 kilos of food {3} day. They spend most of their time eating grass, leaves and fruit. Sadly, elephants are in danger. People {4} them for their ivory tusks. They are also losing their homes because of farming. Many countries have made laws to {5} elephants. You can help by never buying things made of {6}.",
            ],
            gaps: [
              {
                options: [
                  "eyes",
                  "heads",
                  "ears",
                ],
                answer: 2,
              },
              {
                options: [
                  "take",
                  "look",
                  "care",
                ],
                answer: 1,
              },
              {
                options: [
                  "the",
                  "a",
                  "one",
                ],
                answer: 1,
              },
              {
                options: [
                  "catch up",
                  "shoot up",
                  "hunt",
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
              {
                options: [
                  "plastic",
                  "ivory",
                  "wood",
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
              "Hi Emma,",
              "I hope you're having a good holiday. I'm writing to ask you something. My school is having a charity day {1} Friday, and we have to dress up as a famous person.",
              "I want to dress up as a famous singer, but I don't have {2} clothes. You've got lots of nice dresses. Could I borrow one? I'll be very careful {3} it.",
              "I'll give it back to you on Saturday. I'll wash it before I return it, of course. If you say yes, I can come to your house to get it {4} Thursday. Let me know {5} that's OK. Thanks {6} much!",
              "Love,",
              "Lily",
            ],
            answers: [
              [
                "on",
                "this",
                "next",
              ],
              [
                "the",
                "any",
                "good",
                "nice",
              ],
              [
                "with",
              ],
              [
                "on",
              ],
              [
                "if",
                "whether",
              ],
              [
                "very",
                "so",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a football match. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say which teams are playing.",
              "Say who you are going with.",
              "Say how you will get there.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nOn Saturday, I'm going to watch a big football match between Galatasaray and Beşiktaş. I'm going with my dad and my brother. We are going to take the underground to the stadium.\n\nBye,\nAras",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🎈🎂",
                label: "1",
              },
              {
                e: "🎈💨⬆️😟",
                label: "2",
              },
              {
                e: "👦🎈👨😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "It was Tom's birthday, and his dad bought him a big red balloon. When they were walking home, the wind blew the balloon out of Dad's hand. It flew up into the sky. Tom started to cry. But a man selling balloons in the park saw what happened. He gave Tom a new balloon for free. Tom was happy again.",
          },
        },
      ],
    },
  ],
};
