import type { CambridgeTest } from "./types";

/** A2 Key practice test 54 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_54: CambridgeTest = {
  id: "key-54",
  level: "key",
  no: 54,
  title: "A2 Key · Practice Test 54",
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
                    "PLEASE NOTE",
                    "Café closes 30 minutes before the museum.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't get a drink just before the museum closes.",
                  "The café is open later than the museum.",
                  "The museum closes at the same time as the café.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, I'm at the shop. Which colour T-shirt do you want, black or white? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "what size Lucy wears",
                  "how much the T-shirt costs",
                  "which colour Lucy prefers",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLAYGROUND",
                    "No dogs allowed.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Dogs must be on a lead.",
                  "Dogs can't come into this area.",
                  "Dogs can play here.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi team,",
                    "Training tomorrow will be inside because of the rain. Meet in the sports hall at 5. Coach",
                  ],
                },
                question: "Why will training be inside?",
                options: [
                  "because the field is being repaired",
                  "because of the weather",
                  "because it's dark",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Printing costs 10p per page.",
                    "Pay at the desk.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Printing is free.",
                  "You can't print here.",
                  "You have to pay to print.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "GUITAR FOR SALE",
                    "Electric guitar with amplifier. Excellent condition. £150.",
                  ],
                },
                question: "What do we know about the guitar?",
                options: [
                  "It comes with an amplifier.",
                  "It is broken.",
                  "It costs less than £100.",
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
                title: "Ruby",
                text: "I love horses. I help at a riding school every weekend. In return, I get free riding lessons. I've learned to jump and to look after horses. My favourite horse is an old grey one called Captain. He's very calm and gentle with beginners.",
              },
              {
                title: "Nathan",
                text: "My hobby is computer games, but I also design them. I've learned to code, and I've made three simple games. I entered one of them in a competition for young game designers. It came second! Now a small company wants to work with me.",
              },
              {
                title: "Emily",
                text: "I'm learning to sail. I go to a sailing club on a lake every Saturday in summer. I've done two courses and got my first certificate. Next summer, I'm going on a sailing holiday with my family on the sea. I'll be the one in charge of the boat for a day!",
              },
            ],
            items: [
              {
                text: "gets something for free in return for work?",
                answer: 0,
              },
              {
                text: "has a favourite animal?",
                answer: 0,
              },
              {
                text: "has learned to write computer programs?",
                answer: 1,
              },
              {
                text: "has been contacted by a business?",
                answer: 1,
              },
              {
                text: "has a qualification?",
                answer: 2,
              },
              {
                text: "will soon have an important job?",
                answer: 2,
              },
              {
                text: "does their hobby only in one season?",
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
              title: "A café for dogs",
              paragraphs: [
                "In a city in Japan, there's a café where dogs are welcome. They have their own menu, with special cakes and drinks for dogs!",
                "'Lots of people in the city live in small flats,' explains the owner, Yuki Tanaka. 'They love their dogs, but there aren't many places they can take them. So I opened this café.'",
                "The café is very popular. On weekends, there are often more than thirty dogs there. 'The dogs play together while their owners drink coffee,' says Yuki. 'Everyone is happy.'",
                "Fourteen-year-old Kenji visits the café every Sunday with his dog, Hana. 'Hana loves the birthday cake,' he says. 'It's made with chicken and vegetables. I tried it once. It wasn't very nice!'",
              ],
            },
            items: [
              {
                question: "What is special about the café?",
                options: [
                  "It only sells cakes.",
                  "It welcomes dogs.",
                  "It's only for children.",
                ],
                answer: 1,
              },
              {
                question: "Why did Yuki open the café?",
                options: [
                  "Dog owners didn't have many places to go.",
                  "She doesn't like dogs.",
                  "She wanted to sell dogs.",
                ],
                answer: 0,
              },
              {
                question: "What happens at weekends?",
                options: [
                  "The café is closed.",
                  "Dogs aren't allowed.",
                  "Lots of dogs come.",
                ],
                answer: 2,
              },
              {
                question: "What does Hana like?",
                options: [
                  "coffee",
                  "a special cake",
                  "playing outside",
                ],
                answer: 1,
              },
              {
                question: "What did Kenji think of the dog cake?",
                options: [
                  "He loved it.",
                  "He didn't like it.",
                  "He hasn't tried it.",
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
            title: "Penguins",
            text: [
              "Emperor penguins are the biggest penguins in the world. They live in Antarctica, the coldest place on Earth. In winter, the temperature can {1} to minus sixty degrees!",
              "To stay warm, emperor penguins stand {2} in big groups. They take turns standing on the outside of the group, where it's coldest.",
              "Emperor penguins {3} their eggs in the middle of winter. The mother lays one egg and then goes to the sea to find food. The father keeps the egg warm on his feet for about two months. During this time, he doesn't {4} anything! When the baby is born, the mother comes back with food. Emperor penguins can dive {5} than 500 metres under the water to catch fish. They can stay underwater for more than twenty minutes. They are truly {6} birds!",
            ],
            gaps: [
              {
                options: [
                  "grow",
                  "fall",
                  "stay",
                ],
                answer: 1,
              },
              {
                options: [
                  "close",
                  "near",
                  "together",
                ],
                answer: 2,
              },
              {
                options: [
                  "lay",
                  "put",
                  "make",
                ],
                answer: 0,
              },
              {
                options: [
                  "feed",
                  "eat",
                  "cook",
                ],
                answer: 1,
              },
              {
                options: [
                  "deeper",
                  "deep",
                  "deepest",
                ],
                answer: 0,
              },
              {
                options: [
                  "amazed",
                  "amaze",
                  "amazing",
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
              "Hi Liam,",
              "I've just got back from my holiday {1} Greece. It was amazing! We stayed on a small island with beautiful beaches.",
              "Every day, we went swimming in the sea. The water was so clear that you {2} see the fish. I also tried windsurfing for the first time. I fell in the water {3} lot, but it was really fun!",
              "The food was delicious. I ate lots of fish and Greek salad. I've brought you {4} present. I'll give it to you {5} I see you. Are you free on Saturday? We could meet in the park. Let me know. See you {6}!",
              "Josh",
            ],
            answers: [
              [
                "in",
              ],
              [
                "could",
                "can",
              ],
              [
                "a",
              ],
              [
                "a",
              ],
              [
                "when",
                "next",
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
            instruction: "You are going to help at a charity event. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say what the event is.",
              "Say what you will do.",
              "Ask Kim to help too.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nNext Saturday, there's a charity cake sale at my school. I'm going to make chocolate cakes and help sell them. Would you like to help too? We need more people!\n\nBye,\nAslı",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🧳🚂",
                label: "1",
              },
              {
                e: "👨🚂😴",
                label: "2",
              },
              {
                e: "👨🚉❓😮",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last week, Mr Clark took the train to visit his sister. The journey was long, and he fell asleep. When he woke up, the train had stopped. He got off quickly, but it was the wrong station! He had missed his stop. He had to wait an hour for another train. He arrived at his sister's house very late, but they both laughed about it.",
          },
        },
      ],
    },
  ],
};
