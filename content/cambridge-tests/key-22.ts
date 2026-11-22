import type { CambridgeTest } from "./types";

/** A2 Key practice test 22 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_22: CambridgeTest = {
  id: "key-22",
  level: "key",
  no: 22,
  title: "A2 Key · Practice Test 22",
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
                    "SCHOOL BUS",
                    "The bus will leave at 3.45 today because of the parents' meeting.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There is no bus today.",
                  "Parents must take the bus.",
                  "The bus leaves at a different time today.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Anna, can you feed my fish while I'm away this weekend? The food is next to the tank. Thanks! Lucy",
                  ],
                },
                question: "What does Lucy want Anna to do?",
                options: [
                  "buy fish food",
                  "clean the fish tank",
                  "look after her pet",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE KEEP THIS DOOR CLOSED",
                    "The cat must not go outside.",
                  ],
                },
                question: "Why should you keep the door closed?",
                options: [
                  "to stop an animal getting out",
                  "to keep the room warm",
                  "because it's a private room",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The library has the book you wanted. They'll keep it for you until Saturday. Mum",
                  ],
                },
                question: "What does Mum tell Tom?",
                options: [
                  "The library is closed until Saturday.",
                  "He can collect his book until a certain day.",
                  "He must return a book.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAR PARK",
                    "Free for the first two hours.",
                    "£2 for every hour after that.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You only pay if you stay a long time.",
                  "Parking costs £2 for two hours.",
                  "The car park is always free.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "VOLUNTEERS NEEDED",
                    "Help us clean the beach on Sunday morning.",
                    "Gloves and bags provided.",
                  ],
                },
                question: "What do we know about the event?",
                options: [
                  "It is in the afternoon.",
                  "Volunteers will be paid.",
                  "You don't need to bring gloves.",
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
                title: "Mason",
                text: "I'm a big fan of board games. I've got more than fifty games at home. Every Friday evening, my friends come to my house and we play for hours. Sometimes we invent our own games. Last year, we entered a competition and our game won second prize.",
              },
              {
                title: "Ava",
                text: "I love gardening. My grandmother has a big garden, and I help her there every weekend. We grow flowers, fruit and vegetables. My favourite thing is growing strawberries. In the summer, we make jam and give it to our neighbours.",
              },
              {
                title: "Leo",
                text: "I'm learning to fly! My uncle is a pilot, and he takes me up in his small plane once a month. He lets me hold the controls for a few minutes. It's the best feeling in the world. When I'm seventeen, I'm going to start real flying lessons.",
              },
            ],
            items: [
              {
                text: "has a large collection?",
                answer: 0,
              },
              {
                text: "has created something new?",
                answer: 0,
              },
              {
                text: "does their hobby with an older relative?",
                answer: 1,
              },
              {
                text: "makes something to give away?",
                answer: 1,
              },
              {
                text: "is waiting until they are older to do something?",
                answer: 2,
              },
              {
                text: "does their hobby once a month?",
                answer: 2,
              },
              {
                text: "plays with friends at their home?",
                answer: 0,
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
              title: "The girl who saves bees",
              paragraphs: [
                "When Emily Moore was twelve, she read that bees were in danger. 'I was really worried,' she says. 'Without bees, many plants and fruits can't grow.'",
                "Emily decided to help. She asked her parents to stop using chemicals in their garden. Then she planted lots of flowers that bees love, like lavender and sunflowers.",
                "Next, Emily made a short film about bees and showed it at her school. 'After that, lots of students wanted to help too,' she says. 'We made a bee garden at school.'",
                "Now Emily is fifteen, and she gives talks to other schools. 'Anyone can help bees,' she says. 'Even a small pot of flowers on a balcony can make a difference.'",
              ],
            },
            items: [
              {
                question: "Why was Emily worried?",
                options: [
                  "She learned that bees had a problem.",
                  "She was stung by a bee.",
                  "Her garden had no flowers.",
                ],
                answer: 0,
              },
              {
                question: "What did Emily ask her parents to do?",
                options: [
                  "buy some bees",
                  "plant trees",
                  "stop using chemicals",
                ],
                answer: 2,
              },
              {
                question: "What happened after Emily showed her film?",
                options: [
                  "She won a prize.",
                  "Her teacher made a bee garden.",
                  "Other students wanted to help.",
                ],
                answer: 2,
              },
              {
                question: "What does Emily do now?",
                options: [
                  "She visits schools to talk about bees.",
                  "She sells honey.",
                  "She makes films about animals.",
                ],
                answer: 0,
              },
              {
                question: "What does Emily say about helping bees?",
                options: [
                  "You need a big garden.",
                  "It doesn't have to be difficult.",
                  "Only adults can do it.",
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
            title: "Elephants",
            text: [
              "Elephants are the largest land animals in the world. An adult African elephant can {1} more than 6,000 kilos! There are two main kinds of elephant: African and Asian.",
              "Elephants use their long noses, called trunks, for many things. They use them to {2} food, drink water and say hello to each other. They can also use them to spray water over their bodies {3} it's hot.",
              "Elephants live in families led by the oldest female. They are very {4} animals and have excellent memories. They can remember friends and places for many years. Sadly, elephants are in {5}. People hunt them for their tusks, and they are losing their homes. Many organisations are working hard to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "measure",
                  "weigh",
                  "hold",
                ],
                answer: 1,
              },
              {
                options: [
                  "pick up",
                  "take up",
                  "get up",
                ],
                answer: 0,
              },
              {
                options: [
                  "what",
                  "where",
                  "when",
                ],
                answer: 2,
              },
              {
                options: [
                  "clever",
                  "intelligent",
                  "bright",
                ],
                answer: 1,
              },
              {
                options: [
                  "risk",
                  "danger",
                  "trouble",
                ],
                answer: 1,
              },
              {
                options: [
                  "save",
                  "keep",
                  "protect",
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
              "Hi Zoe,",
              "Thanks {1} inviting me to your party on Saturday. I'd love {2} come! What time does it start?",
              "I'm not sure how {3} get to your house. Is it near the station? My dad can drive me there, so can you send me your address?",
              "Is it a fancy dress party? If it {4}, I need to find a costume! Also, can I bring {5} special? I could make some cookies. Let me know what you think. See you {6} Saturday!",
              "Love,",
              "Mia",
            ],
            answers: [
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "to",
              ],
              [
                "is",
              ],
              [
                "anything",
                "something",
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
            instruction: "You are going to start a new class after school. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say what the class is.",
              "Say when it is.",
              "Say why you want to do it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nI'm going to start a photography class after school! It's every Wednesday from four to six o'clock. I want to do it because I love taking photos and I want to learn how to take better pictures.\n\nBye,\nMelis",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🐕🏞️",
                label: "1",
              },
              {
                e: "🐕💧🦆",
                label: "2",
              },
              {
                e: "👩🐕💦😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Sunday, Sarah took her dog to the park. Near the lake, the dog saw some ducks and ran towards them. It jumped into the water, but the ducks flew away. When the dog came out of the lake, it shook its body and Sarah got completely wet. She couldn't stop laughing.",
          },
        },
      ],
    },
  ],
};
