import type { CambridgeTest } from "./types";

/** A2 Key practice test 50 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_50: CambridgeTest = {
  id: "key-50",
  level: "key",
  no: 50,
  title: "A2 Key · Practice Test 50",
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
                    "Swimming caps must be worn.",
                    "Caps for sale at reception.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Caps are free.",
                  "You don't need a cap.",
                  "You can buy a cap if you don't have one.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, my sister is ill, so I have to stay home and look after her. Can we meet tomorrow instead? Anna",
                  ],
                },
                question: "Why can't Anna meet Jo today?",
                options: [
                  "She has to care for someone.",
                  "She is ill.",
                  "She has a lot of homework.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BOOKSHOP CAFÉ",
                    "Please don't read books from the shop in the café.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can read any book in the café.",
                  "You shouldn't take shop books into the café.",
                  "The café sells books.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ruby,",
                    "I've made a mistake. The party is at 6, not 5. Sorry! See you then. Holly",
                  ],
                },
                question: "Why has Holly sent this email?",
                options: [
                  "to correct a time",
                  "to cancel the party",
                  "to change the place",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAR PARK",
                    "Pay at the machine before you leave.",
                    "Cards only.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You pay when you arrive.",
                  "Parking is free.",
                  "You can't pay with cash.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "JOIN OUR CHOIR!",
                    "Everyone welcome – no experience needed.",
                    "Wednesdays, 7.30 p.m., St John's Church.",
                  ],
                },
                question: "What do we know about the choir?",
                options: [
                  "It's only for professional singers.",
                  "It meets on Mondays.",
                  "Beginners can join.",
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
                title: "Ollie",
                text: "I'm a big fan of space. I've read lots of books about planets and stars. Last year, I went to a space camp in the USA for a week. We built rockets and learned about life on the space station. I'd love to be an astronaut, but I know it's very difficult.",
              },
              {
                title: "Mia",
                text: "I love making jewellery from things I find on the beach, like shells and sea glass. I sell my necklaces and earrings at a market in summer. I give some of the money to an organisation that cleans the beaches.",
              },
              {
                title: "Harry",
                text: "I do martial arts. I've got a black belt in karate. I train five days a week, and I teach a class for young children on Saturdays. Last year, I won a gold medal at the national championships. Next year, I'm going to compete in Japan.",
              },
            ],
            items: [
              {
                text: "attended a camp?",
                answer: 0,
              },
              {
                text: "knows their dream won't be easy?",
                answer: 0,
              },
              {
                text: "uses natural materials?",
                answer: 1,
              },
              {
                text: "supports an environmental group?",
                answer: 1,
              },
              {
                text: "has reached a high level?",
                answer: 2,
              },
              {
                text: "will travel abroad to compete?",
                answer: 2,
              },
              {
                text: "sells things in summer?",
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
              title: "A museum for children",
              paragraphs: [
                "In a city in Spain, there's a museum that's run by children. All the guides are between ten and sixteen years old.",
                "Twelve-year-old Lucia is one of them. 'I show visitors around and tell them about the paintings,' she says. 'At first, I was nervous about speaking to adults. But now I love it.'",
                "The guides have special training every month. 'We learn about the art and practise speaking in English and French,' explains Lucia. 'Lots of tourists visit the museum.'",
                "The museum's director says the idea has been a great success. 'Visitors love it,' she says. 'And the children become more confident.' Lucia agrees. 'I want to work in a museum when I'm older,' she says.",
              ],
            },
            items: [
              {
                question: "What is special about the museum?",
                options: [
                  "It only has paintings by children.",
                  "Children work as guides.",
                  "It is free.",
                ],
                answer: 1,
              },
              {
                question: "How did Lucia feel at first?",
                options: [
                  "very confident",
                  "bored",
                  "worried about talking to adults",
                ],
                answer: 2,
              },
              {
                question: "What do the guides practise in their training?",
                options: [
                  "foreign languages",
                  "painting",
                  "selling tickets",
                ],
                answer: 0,
              },
              {
                question: "Why do the guides need other languages?",
                options: [
                  "The paintings are from other countries.",
                  "Many visitors come from other countries.",
                  "The director speaks French.",
                ],
                answer: 1,
              },
              {
                question: "What does the director say about the children?",
                options: [
                  "They become more self-confident.",
                  "They are too young.",
                  "They don't know enough about art.",
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
            title: "Tomatoes",
            text: [
              "Tomatoes are used in cooking all over the world. They are in pizza, pasta sauce, salads and soups. But did you know that tomatoes are actually a {1}, not a vegetable?",
              "Tomatoes first grew in South America. People in Mexico were growing them more than 2,500 years ago. When they first {2} in Europe, many people thought they were poisonous!",
              "Today, China grows more tomatoes than any other country. There are more than 10,000 {3} of tomato. They can be red, yellow, orange, green or even purple. Tomatoes are very good for you. They contain lots of vitamins. Some scientists say they can {4} protect your heart. In Spain, there's a festival every year where people throw tomatoes at each other! About 20,000 people {5} part. The streets become completely {6}!",
            ],
            gaps: [
              {
                options: [
                  "fruit",
                  "plant",
                  "food",
                ],
                answer: 0,
              },
              {
                options: [
                  "came up",
                  "reached",
                  "arrived",
                ],
                answer: 2,
              },
              {
                options: [
                  "ways",
                  "forms of",
                  "kinds",
                ],
                answer: 2,
              },
              {
                options: [
                  "help",
                  "make",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "have",
                  "take",
                  "make",
                ],
                answer: 1,
              },
              {
                options: [
                  "red",
                  "redder",
                  "reddish",
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
              "Hi Isla,",
              "Thank you for the lovely postcard from Italy! It looks like you {1} having a great time. I'd love to go to Rome one day.",
              "Things are fine here. School finished last week, {2} now I'm on holiday too. I've been to the beach a few times with my family. The weather has been really hot.",
              "When do you come back? I'd love to see you. Maybe we {3} have a sleepover at my house. My mum says it's OK. We could watch films and stay {4} late! Let me know when you're back home. Have {5} great time for the rest of your holiday. See you {6}!",
              "Love,",
              "Freya",
            ],
            answers: [
              [
                "are",
                "were",
              ],
              [
                "so",
                "and",
              ],
              [
                "could",
                "can",
              ],
              [
                "up",
              ],
              [
                "a",
              ],
              [
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You need help with your homework. Write an email to your English friend, Robin. Write 25 words or more.",
            prompts: [
              "Say which subject you need help with.",
              "Say what the problem is.",
              "Ask when Robin can help you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Robin' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Robin,\n\nCould you help me with my maths homework? I don't understand how to do the questions about fractions. When are you free? Maybe we could meet at the library tomorrow after school.\n\nThanks,\nAlp",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🐱🌳",
                label: "1",
              },
              {
                e: "🐱⬆️🌳😟",
                label: "2",
              },
              {
                e: "👧🐱🍗🌳😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One afternoon, Lucy's cat climbed up a tall tree in the garden. It stayed at the top and wouldn't come down. Lucy was very worried. She called it again and again, but it didn't move. Then she had an idea. She put some chicken on a plate under the tree. A few minutes later, the cat came down to eat it. Lucy was very relieved.",
          },
        },
      ],
    },
  ],
};
