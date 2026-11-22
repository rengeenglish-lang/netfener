import type { CambridgeTest } from "./types";

/** A2 Key practice test 73 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_73: CambridgeTest = {
  id: "key-73",
  level: "key",
  no: 73,
  title: "A2 Key · Practice Test 73",
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
                    "SWIMMING POOL",
                    "Family swim: Sundays 10 a.m.–12 p.m.",
                    "Lots of toys and floats!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed on Sundays.",
                  "Families can swim together on Sunday mornings.",
                  "Toys aren't allowed in the pool.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Kate, can you pick up some milk on your way home? We've run out. Thanks, Mum",
                  ],
                },
                question: "What does Mum want Kate to do?",
                options: [
                  "buy something",
                  "come home early",
                  "make dinner",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THEATRE",
                    "No late entry.",
                    "Please arrive 10 minutes before the start.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The show starts 10 minutes late.",
                  "You can arrive at any time.",
                  "You can't go in if you're late.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jo,",
                    "I've finished the book you lent me. It was great! I'll give it back on Monday. Can you lend me the next one? Ann",
                  ],
                },
                question: "What does Ann want?",
                options: [
                  "to buy a book",
                  "to borrow another book",
                  "to give Jo a present",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "We are open 24 hours a day, 7 days a week.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "It's closed at night.",
                  "You can shop at any time.",
                  "It's closed on Sundays.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "JOB: Shop assistant needed for Saturdays.",
                    "Must be friendly and good with people.",
                  ],
                },
                question: "What kind of person is wanted for the job?",
                options: [
                  "someone who can drive",
                  "someone who speaks French",
                  "someone friendly",
                ],
                answer: 2,
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
                title: "Ruby",
                text: "I'm a keen gymnast. I train every day for three hours after school. It's very hard, but I love it. Last year, I won a silver medal at the national championships. My coach thinks I could be in the Olympic team one day.",
              },
              {
                title: "Tom",
                text: "I love playing the guitar. I started learning when I was ten. Now I'm sixteen, and I play in a rock band with my friends. We play at parties and in cafés. Last month, we won a talent competition in our town. The prize was recording time in a professional studio.",
              },
              {
                title: "Amira",
                text: "My hobby is learning about other cultures. I love reading about different countries and trying new food. I have pen friends in Japan, Brazil and Kenya. We send each other letters and small presents. One day, I want to visit all of them.",
              },
            ],
            items: [
              {
                text: "trains for many hours?",
                answer: 0,
              },
              {
                text: "won a medal?",
                answer: 0,
              },
              {
                text: "won a chance to record?",
                answer: 1,
              },
              {
                text: "plays in public places?",
                answer: 1,
              },
              {
                text: "sends gifts to people abroad?",
                answer: 2,
              },
              {
                text: "hopes to travel?",
                answer: 2,
              },
              {
                text: "has been doing their hobby for six years?",
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
              title: "A park on a roof",
              paragraphs: [
                "In New York, there's a park on top of an old railway line. It's called the High Line, and it's nine metres above the street.",
                "The railway was built in the 1930s to carry goods to factories. But in 1980, the trains stopped. For many years, the railway was empty, and wild plants grew on it.",
                "In 2009, it opened as a park. Now it has gardens, benches and art. More than seven million people visit it every year. 'It's my favourite place in the city,' says fifteen-year-old Maya, who lives nearby. 'It's quiet and green, even though it's in the middle of the city.'",
                "Other cities around the world are now copying the idea. 'It shows that old things can be used in new ways,' says Maya.",
              ],
            },
            items: [
              {
                question: "Where is the High Line?",
                options: [
                  "above the street",
                  "under the ground",
                  "by the sea",
                ],
                answer: 0,
              },
              {
                question: "What was the High Line originally?",
                options: [
                  "a road",
                  "a railway",
                  "a factory",
                ],
                answer: 1,
              },
              {
                question: "What happened after the trains stopped?",
                options: [
                  "Plants grew there.",
                  "It was destroyed.",
                  "It became a road.",
                ],
                answer: 0,
              },
              {
                question: "What does Maya like about the park?",
                options: [
                  "It is big.",
                  "It has trains.",
                  "It is peaceful.",
                ],
                answer: 2,
              },
              {
                question: "What are other cities doing?",
                options: [
                  "building new railways",
                  "copying the idea",
                  "closing parks",
                ],
                answer: 1,
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
              "Bicycles are one of the most popular ways to travel in the world. There are more than a billion bicycles, about twice as {1} as cars.",
              "Cycling is good for your health. It makes your heart stronger and helps you {2} fit. It's also good for the environment because bicycles don't produce pollution.",
              "In some cities, like Copenhagen in Denmark, more than half of people {3} to work or school by bike. The city has special cycle lanes and traffic lights for bicycles. Many other cities are now trying to {4} more people to cycle. They are building bike lanes and bike-sharing schemes. With these schemes, you can hire a bike for a short time and {5} it at a different place. If you ride a bike, remember to always wear a helmet and {6} careful of traffic.",
            ],
            gaps: [
              {
                options: [
                  "much",
                  "many",
                  "more",
                ],
                answer: 1,
              },
              {
                options: [
                  "make up",
                  "keep",
                  "do",
                ],
                answer: 1,
              },
              {
                options: [
                  "journey",
                  "trip",
                  "travel",
                ],
                answer: 2,
              },
              {
                options: [
                  "encourage",
                  "make up",
                  "let",
                ],
                answer: 0,
              },
              {
                options: [
                  "put up",
                  "leave",
                  "stay",
                ],
                answer: 1,
              },
              {
                options: [
                  "be",
                  "do",
                  "have",
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
              "Hi Ella,",
              "I've got some exciting news. My parents have said I can have a dog! We're going to get one from an animal shelter {1} Saturday.",
              "I want a small dog because our house isn't very big. My sister wants a puppy, but my parents think an older dog would be better. They say older dogs are calmer and {2} need as much training.",
              "Would you like {3} come with us to the shelter? You know a lot about dogs, so you could help us choose. We're leaving {4} ten o'clock. My dad can pick you up on the way. Let me know {5} you can come. I'm {6} excited!",
              "Love,",
              "Mia",
            ],
            answers: [
              [
                "on",
                "this",
                "next",
              ],
              [
                "don't",
              ],
              [
                "to",
              ],
              [
                "at",
              ],
              [
                "if",
                "whether",
              ],
              [
                "so",
                "very",
                "really",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to start learning to drive. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say when you will start.",
              "Say who will teach you.",
              "Say how you feel about it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nI'm going to start driving lessons next month, after my birthday. My uncle is a driving instructor, so he will teach me. I'm excited but also a bit nervous!\n\nBye,\nBatu",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🧹🏡",
                label: "1",
              },
              {
                e: "👦💰📦",
                label: "2",
              },
              {
                e: "👦🎮😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Tom wanted to buy a new video game, but he didn't have enough money. So he decided to help his neighbours. Every weekend, he cleaned cars, cut grass and walked dogs. After two months, he had saved enough money. He went to the shop and bought the game. He was very proud because he had earned the money himself.",
          },
        },
      ],
    },
  ],
};
