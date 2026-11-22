import type { CambridgeTest } from "./types";

/** A2 Key practice test 51 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_51: CambridgeTest = {
  id: "key-51",
  level: "key",
  no: 51,
  title: "A2 Key · Practice Test 51",
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
                    "Mobile phones found in class will be kept in the office until the end of the day.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Phones will be kept for a week.",
                  "Phones are allowed in class.",
                  "Students will get their phones back after school.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Sam, the shop was closed, so I couldn't buy the bread. Can you get some on your way home? Mum",
                  ],
                },
                question: "What does Mum want Sam to do?",
                options: [
                  "buy some bread",
                  "go to the shop with her",
                  "make some bread",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THEATRE",
                    "Children under 12 must sit with an adult.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Children under 12 can't come in.",
                  "Young children can't sit alone.",
                  "Adults must sit at the back.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "I've forgotten the address of the restaurant. Can you send it to me? Thanks. Amy",
                  ],
                },
                question: "What does Amy need?",
                options: [
                  "information about where to go",
                  "a lift to the restaurant",
                  "to book a table",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAMPSITE",
                    "Quiet please after 10 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The campsite closes at 10 p.m.",
                  "Music is allowed after 10.",
                  "People shouldn't make noise late at night.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "KAYAK HIRE",
                    "£10 per hour. Life jackets included.",
                    "Open daily 9–5 in summer.",
                  ],
                },
                question: "What do we know about the kayaks?",
                options: [
                  "They are only available in winter.",
                  "You get a life jacket with them.",
                  "They cost £10 a day.",
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
                text: "I love playing chess. I joined a club when I was nine, and now I play in tournaments all over the country. Last month, I beat a player who was much older than me. My dad drives me to tournaments, and he always waits for me, even when the games are very long.",
              },
              {
                title: "Max",
                text: "I'm into wildlife photography. I go out early in the morning to take photos of deer, foxes and birds. You have to be very patient and quiet. One of my photos won a competition run by a nature magazine. The prize was a new lens for my camera.",
              },
              {
                title: "Rosa",
                text: "I do volunteer work at a home for old people. I visit every Sunday and play cards and board games with them. I also help serve tea and cakes. The residents tell me amazing stories about their lives. One woman was a famous dancer when she was young.",
              },
            ],
            items: [
              {
                text: "had a win against an older person?",
                answer: 0,
              },
              {
                text: "is taken somewhere by a parent?",
                answer: 0,
              },
              {
                text: "needs to wait a long time quietly?",
                answer: 1,
              },
              {
                text: "won something for their equipment?",
                answer: 1,
              },
              {
                text: "listens to people's life stories?",
                answer: 2,
              },
              {
                text: "serves food?",
                answer: 2,
              },
              {
                text: "does their hobby early in the day?",
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
              title: "The longest walk to school",
              paragraphs: [
                "Twelve-year-old Amina lives in a village in Kenya. Every morning, she walks eight kilometres to school. 'It takes me about two hours,' she says. 'I leave home at five o'clock.'",
                "Amina walks with her two brothers and some friends from the village. 'We talk and sing on the way,' she says. 'It makes the walk go faster.'",
                "Last year, a charity gave bikes to some of the students in Amina's village. 'Now my journey only takes forty minutes,' says Amina. 'I have more time to do my homework and help my mother.'",
                "Amina loves school. 'My favourite subject is science,' she says. 'I want to be a doctor and work in a hospital near my village. There aren't enough doctors here.'",
              ],
            },
            items: [
              {
                question: "How long did Amina's walk take?",
                options: [
                  "forty minutes",
                  "five hours",
                  "about two hours",
                ],
                answer: 2,
              },
              {
                question: "What does Amina do on the way to school?",
                options: [
                  "She reads books.",
                  "She does her homework.",
                  "She talks and sings with others.",
                ],
                answer: 2,
              },
              {
                question: "What did a charity do?",
                options: [
                  "It gave bikes to students.",
                  "It built a school.",
                  "It built a road.",
                ],
                answer: 0,
              },
              {
                question: "How has Amina's life changed?",
                options: [
                  "She lives closer to school.",
                  "She has more free time.",
                  "She doesn't go to school.",
                ],
                answer: 1,
              },
              {
                question: "Why does Amina want to be a doctor?",
                options: [
                  "Her area needs more doctors.",
                  "Doctors earn a lot of money.",
                  "Her mother is a doctor.",
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
            title: "Windmills",
            text: [
              "Windmills have been used for hundreds of years. In the past, people used them to {1} grain into flour and to pump water.",
              "The Netherlands is famous for its windmills. In the past, there were about 10,000 windmills in the country! Many of them helped to {2} water away from the land, because much of the Netherlands is below sea level.",
              "Today, there are modern windmills called wind turbines. They use the wind to {3} electricity. Wind power is a clean kind of energy because it doesn't cause {4}. Many countries are building more wind turbines on land and in the sea. Some people don't like them because they think they {5} the countryside look ugly. But others say they are beautiful and {6} for the planet.",
            ],
            gaps: [
              {
                options: [
                  "grind",
                  "cut",
                  "break",
                ],
                answer: 0,
              },
              {
                options: [
                  "push",
                  "throw",
                  "pump",
                ],
                answer: 2,
              },
              {
                options: [
                  "build",
                  "produce",
                  "raise",
                ],
                answer: 1,
              },
              {
                options: [
                  "dirt",
                  "pollution",
                  "rubbish",
                ],
                answer: 1,
              },
              {
                options: [
                  "do",
                  "let",
                  "make",
                ],
                answer: 2,
              },
              {
                options: [
                  "good",
                  "well",
                  "nice",
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
              "Hi Tom,",
              "I'm really sorry, but I broke the camera you lent {1}. I dropped it on the beach, and now it doesn't work.",
              "I feel terrible about it. I want to buy you a new one. Can you tell me {2} kind it was? I'll try to find the same one.",
              "I'm saving my pocket money, {3} it might take a few weeks. My parents said they will help me too. I hope you're not {4} angry with me. I'll be more careful {5} the future. Sorry again, and I'll see you {6} Monday.",
              "Jack",
            ],
            answers: [
              [
                "me",
              ],
              [
                "what",
                "which",
              ],
              [
                "so",
                "but",
              ],
              [
                "too",
                "very",
              ],
              [
                "in",
              ],
              [
                "on",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to go swimming with your English friend, Sam. Write an email to Sam. Write 25 words or more.",
            prompts: [
              "Suggest a day to go.",
              "Say which pool you want to go to.",
              "Say what time you will meet.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nWould you like to go swimming on Saturday? We could go to the new pool at the sports centre. It has a big slide! Let's meet outside the entrance at ten o'clock.\n\nBye,\nEge",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🛹🏞️",
                label: "1",
              },
              {
                e: "👦🛹⬇️🤕",
                label: "2",
              },
              {
                e: "👦🩹🛹😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday, Jack went to the skate park with his new skateboard. He tried a difficult trick, but he fell and hurt his knee. His friend helped him up and gave him a plaster. Jack sat down for a while. Then he tried the trick again, and this time he did it perfectly. He was very pleased with himself.",
          },
        },
      ],
    },
  ],
};
