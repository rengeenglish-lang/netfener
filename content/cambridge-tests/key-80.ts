import type { CambridgeTest } from "./types";

/** A2 Key practice test 80 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_80: CambridgeTest = {
  id: "key-80",
  level: "key",
  no: 80,
  title: "A2 Key · Practice Test 80",
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
                    "Year 8 parents' evening has moved to next Thursday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The parents' evening is on a different day.",
                  "There is no parents' evening.",
                  "Parents' evening is today.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, I've booked the tennis court for 4 o'clock. Don't forget your racket! Dan",
                  ],
                },
                question: "What does Dan remind Max to bring?",
                options: [
                  "balls",
                  "his racket",
                  "money",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE QUEUE HERE",
                    "Thank you for waiting.",
                  ],
                },
                question: "What should people do?",
                options: [
                  "wait in a line",
                  "sit down",
                  "come back later",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I'm going to be away next week, so I can't come to the art class. Can you take notes for me? Thanks, Jo",
                  ],
                },
                question: "What does Jo want Lucy to do?",
                options: [
                  "go on holiday with her",
                  "teach the art class",
                  "write down information for her",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "FARM SHOP",
                    "Pick your own strawberries!",
                    "£3 per box.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Strawberries are free.",
                  "You can collect strawberries yourself.",
                  "The shop sells only boxes.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "LOST CAT",
                    "Black and white, very friendly. Called Pepper.",
                    "Please check your garden sheds!",
                  ],
                },
                question: "What does the advertisement ask people to do?",
                options: [
                  "call the police",
                  "look in their sheds",
                  "buy a cat",
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
                title: "Ivy",
                text: "I love horses. I've been riding since I was five. I have my own pony called Biscuit. I look after him every day, and we compete in show jumping competitions. Last month, we won a big competition. I was so proud of Biscuit!",
              },
              {
                title: "Max",
                text: "My hobby is writing songs. I play the guitar and write songs about my life. I've written more than thirty songs. I perform them at open mic nights in cafés. Last month, a local radio station interviewed me and played one of my songs.",
              },
              {
                title: "Sophie",
                text: "I'm interested in science, especially space. I go to an astronomy club once a month. We look at the stars through big telescopes. Last year, I won a competition to design a base on Mars. My design is now displayed at a science museum.",
              },
            ],
            items: [
              {
                text: "looks after an animal daily?",
                answer: 0,
              },
              {
                text: "won a competition with an animal?",
                answer: 0,
              },
              {
                text: "performs in cafés?",
                answer: 1,
              },
              {
                text: "was interviewed?",
                answer: 1,
              },
              {
                text: "attends a club monthly?",
                answer: 2,
              },
              {
                text: "has their work on show?",
                answer: 2,
              },
              {
                text: "has written lots of songs?",
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
              title: "The boy who loves languages",
              paragraphs: [
                "Fourteen-year-old Pablo can speak six languages: Spanish, English, French, German, Italian and Chinese. 'I love learning how people talk in different countries,' he says.",
                "Pablo's parents are Spanish and English, so he learned those languages at home. 'Then I started French at school when I was eight,' he says. 'I found it easy, so I wanted to learn more.'",
                "Pablo learns languages in many ways. 'I watch films and listen to music,' he explains. 'I also talk to people online. It's the best way to practise.'",
                "Pablo's favourite language is Chinese. 'It's very difficult because of the writing,' he says. 'But it's beautiful. I want to live in China one day and work as a translator.'",
              ],
            },
            items: [
              {
                question: "How many languages can Pablo speak?",
                options: [
                  "four",
                  "two",
                  "six",
                ],
                answer: 2,
              },
              {
                question: "How did Pablo learn Spanish and English?",
                options: [
                  "at home",
                  "at school",
                  "online",
                ],
                answer: 0,
              },
              {
                question: "What is the best way to practise, according to Pablo?",
                options: [
                  "reading books",
                  "speaking with people online",
                  "doing grammar exercises",
                ],
                answer: 1,
              },
              {
                question: "Why is Chinese difficult for Pablo?",
                options: [
                  "the writing",
                  "the grammar",
                  "the sounds",
                ],
                answer: 0,
              },
              {
                question: "What does Pablo want to do?",
                options: [
                  "teach languages",
                  "become a film star",
                  "work as a translator in China",
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
            title: "Bats",
            text: [
              "Bats are the only mammals that can really fly. There are more than 1,400 different kinds of bat, and they live almost {1} in the world.",
              "Most bats sleep during the day and come out at night. They sleep upside down, {2} from trees or the roofs of caves.",
              "Many bats use sound to find their food in the dark. They make high noises and listen to the echoes. This helps them {3} where insects are. Most bats eat insects. One small bat can eat thousands of insects in one night! Some bats eat fruit. These bats are very important because they help to {4} seeds, so new trees can grow. Many people are afraid of bats, but most bats are {5} to people. Sadly, many kinds of bat are in danger because people are destroying the places where they live. We need to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "anywhere",
                  "somewhere",
                  "everywhere",
                ],
                answer: 2,
              },
              {
                options: [
                  "holding up",
                  "hanging",
                  "sitting",
                ],
                answer: 1,
              },
              {
                options: [
                  "learn up",
                  "know",
                  "see up",
                ],
                answer: 1,
              },
              {
                options: [
                  "throw up",
                  "put up",
                  "spread",
                ],
                answer: 2,
              },
              {
                options: [
                  "harmless",
                  "harmful",
                  "harm",
                ],
                answer: 0,
              },
              {
                options: [
                  "keep up",
                  "protect",
                  "guard on",
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
              "Hi Hannah,",
              "I'm writing to tell you some great news! I've won a competition at school. It {1} a writing competition, and I wrote a story about a magic forest.",
              "The prize is a trip to London to meet a famous author! I'm so excited. I'm going {2} next month with my mum. We're going to stay in a hotel for two nights.",
              "I want to ask the author lots of questions. Can you think of any good questions {3} me? You've read lots of her books. I'll tell you everything {4} I get back. Wish me {5}! P.S. Do you want me to get her autograph {6} you?",
              "Love,",
              "Isla",
            ],
            answers: [
              [
                "was",
              ],
              [
                "there",
              ],
              [
                "for",
              ],
              [
                "when",
              ],
              [
                "luck",
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
            instruction: "You are going to have a holiday with your family. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say where you are going.",
              "Say how long you will stay.",
              "Say what you will do.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nNext month, my family and I are going to Cappadocia. We are going to stay for a week. We will go in a hot-air balloon and visit some amazing caves.\n\nBye,\nAda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎮🏆",
                label: "1",
              },
              {
                e: "👦🎮😢",
                label: "2",
              },
              {
                e: "👦🤝👦🎮😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Ben entered a video game competition at his school. He practised every day for weeks. On the day of the competition, he got to the final, but he lost to a boy called Leo. Ben was very disappointed. But after the competition, Leo came to talk to him. They found out they liked the same games. Now they are best friends and play together every weekend.",
          },
        },
      ],
    },
  ],
};
