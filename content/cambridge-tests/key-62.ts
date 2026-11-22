import type { CambridgeTest } from "./types";

/** A2 Key practice test 62 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_62: CambridgeTest = {
  id: "key-62",
  level: "key",
  no: 62,
  title: "A2 Key · Practice Test 62",
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
                    "TRAIN STATION",
                    "The 10.15 train to Oxford is running 20 minutes late.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The train to Oxford is cancelled.",
                  "The train leaves early.",
                  "The Oxford train will be delayed.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lily, I can't come to the cinema tonight. I've got too much homework. Sorry! Zoe",
                  ],
                },
                question: "Why can't Zoe go to the cinema?",
                options: [
                  "She has a lot of schoolwork.",
                  "She is ill.",
                  "She has no money.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE DO NOT FEED THE DUCKS",
                    "Bread is bad for them.",
                  ],
                },
                question: "Why shouldn't you feed the ducks?",
                options: [
                  "They might bite.",
                  "Bread isn't good for them.",
                  "They have already eaten.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jack,",
                    "I've finished painting your bedroom. Come and see it when you're back from your trip. Dad",
                  ],
                },
                question: "What has Dad done?",
                options: [
                  "decorated Jack's room",
                  "gone on a trip",
                  "bought new furniture",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Self-service tills available.",
                    "Ask staff if you need help.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are no tills.",
                  "Staff can't help you.",
                  "Customers can pay without a cashier.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "NEW CAFÉ",
                    "Free coffee with any cake on opening day!",
                  ],
                },
                question: "What do we know about the café?",
                options: [
                  "Cake is free on opening day.",
                  "Coffee is always free.",
                  "You get a free drink if you buy cake.",
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
                title: "Oliver",
                text: "I love playing tennis. I've been playing since I was six. I train with a coach three times a week. Last year, I played in a tournament in France and won! I want to become a professional player, but I know it's very hard.",
              },
              {
                title: "Amira",
                text: "My hobby is cooking. I love making food from my family's country, Morocco. My grandmother taught me lots of traditional recipes. Every Friday, I cook dinner for my whole family. My favourite dish is chicken with lemons and olives.",
              },
              {
                title: "Finn",
                text: "I'm a keen musician. I play the guitar and sing in a band with my brother and two friends. We write our own songs. Last summer, we played at a music festival in our town. Hundreds of people watched us. We're recording our first album next year.",
              },
            ],
            items: [
              {
                text: "won abroad?",
                answer: 0,
              },
              {
                text: "knows their dream is difficult?",
                answer: 0,
              },
              {
                text: "learned from a grandparent?",
                answer: 1,
              },
              {
                text: "makes food from another culture?",
                answer: 1,
              },
              {
                text: "plays with a sibling?",
                answer: 2,
              },
              {
                text: "creates original music?",
                answer: 2,
              },
              {
                text: "cooks once a week?",
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
              title: "A new school",
              paragraphs: [
                "When fourteen-year-old Sofia moved from Italy to England, she couldn't speak much English. 'I was very scared on my first day at school,' she remembers. 'I didn't understand anything.'",
                "Sofia's teacher gave her a buddy, a girl called Emma. 'Emma helped me find my classes and explained things to me,' says Sofia. 'She was so kind. We became best friends.'",
                "Sofia also had extra English lessons twice a week. 'I studied very hard,' she says. 'I watched English TV and read English books. After six months, I could understand almost everything.'",
                "Now, two years later, Sofia speaks English very well. 'I've helped new students too,' she says. 'I know how difficult it is. I want them to feel welcome, like Emma did for me.'",
              ],
            },
            items: [
              {
                question: "How did Sofia feel on her first day?",
                options: [
                  "excited",
                  "frightened",
                  "bored",
                ],
                answer: 1,
              },
              {
                question: "How did Emma help Sofia?",
                options: [
                  "She taught her Italian.",
                  "She gave her English lessons.",
                  "She showed her around and explained things.",
                ],
                answer: 2,
              },
              {
                question: "What did Sofia do to learn English?",
                options: [
                  "She watched TV and read books in English.",
                  "She moved to a different school.",
                  "She stopped speaking Italian.",
                ],
                answer: 0,
              },
              {
                question: "How long did it take Sofia to understand most English?",
                options: [
                  "two years",
                  "half a year",
                  "one month",
                ],
                answer: 1,
              },
              {
                question: "What does Sofia do now?",
                options: [
                  "She helps new students.",
                  "She teaches Italian.",
                  "She has moved back to Italy.",
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
            title: "Whales",
            text: [
              "Whales are the largest animals on Earth. The blue whale can grow up to thirty metres long. It is even {1} than the biggest dinosaurs!",
              "Whales are mammals, not fish. They breathe air, so they have to {2} to the surface of the sea. They breathe through a hole on the top of their heads.",
              "Some whales eat very small animals called krill. A blue whale can eat about four tonnes of krill {3} day! Other whales eat fish and squid. Whales are very {4} animals. They communicate with each other using songs. Some whale songs can be heard hundreds of kilometres away. In the past, people hunted whales for their meat and oil. Many kinds of whale nearly disappeared. Today, most countries have {5} whale hunting. Many people now go on boat trips to {6} whales in the wild.",
            ],
            gaps: [
              {
                options: [
                  "bigger",
                  "more big",
                  "biggest",
                ],
                answer: 0,
              },
              {
                options: [
                  "go out",
                  "get on",
                  "come up",
                ],
                answer: 2,
              },
              {
                options: [
                  "many",
                  "all",
                  "every",
                ],
                answer: 2,
              },
              {
                options: [
                  "intelligent",
                  "intelligence",
                  "intelligently",
                ],
                answer: 0,
              },
              {
                options: [
                  "finished up",
                  "stopped",
                  "ended up",
                ],
                answer: 1,
              },
              {
                options: [
                  "watch",
                  "look",
                  "view at",
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
              "Hi Ben,",
              "How {1} your exams? I hope they went well. Mine finished last Friday, and I'm so happy they're over!",
              "Now I've got two months of holiday. I'm going to spend a week {2} my cousins in the mountains. We're going hiking and camping.",
              "When I come back, would you like to go to the new water park with me? It's got the biggest slides {3} the country! My dad can drive us there. We could go {4} the end of July. Let me know {5} that's OK for you. Have a great summer, and see you {6}!",
              "Josh",
            ],
            answers: [
              [
                "were",
              ],
              [
                "with",
              ],
              [
                "in",
              ],
              [
                "at",
                "in",
                "near",
                "towards",
              ],
              [
                "if",
                "whether",
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
            instruction: "You helped your neighbour last weekend. Write an email to your English friend, Ali. Write 25 words or more.",
            prompts: [
              "Say who your neighbour is.",
              "Say what you did to help.",
              "Say how your neighbour felt.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Ali' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Ali,\n\nLast weekend, I helped my neighbour, Mrs Demir. She is old and can't carry heavy things. I carried her shopping bags and helped her in the garden. She was very happy and gave me a cake.\n\nBye,\nEmre",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎨🏫",
                label: "1",
              },
              {
                e: "👧🖼️🏛️",
                label: "2",
              },
              {
                e: "👧🖼️👀😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last year, Maya painted a picture of her grandmother for an art competition. She worked on it for many weeks. She didn't win the competition, but a few months later, she got a letter. A local gallery wanted to show her painting in an exhibition! Maya and her grandmother went to see it together. They were both very proud.",
          },
        },
      ],
    },
  ],
};
