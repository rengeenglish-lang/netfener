import type { CambridgeTest } from "./types";

/** A2 Key practice test 14 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_14: CambridgeTest = {
  id: "key-14",
  level: "key",
  no: 14,
  title: "A2 Key · Practice Test 14",
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
                    "CAFÉ",
                    "We now serve hot food all day.",
                    "Try our new soup of the day!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The café only serves soup.",
                  "Hot food is only available at lunchtime.",
                  "You can get hot meals at any time.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Grace, I've lost my key! Are you home? Can I come and get the spare one from you? Mum",
                  ],
                },
                question: "What does Mum want?",
                options: [
                  "the extra key Grace has",
                  "Grace to buy a new key",
                  "Grace to come home early",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PARK",
                    "Bicycles are not allowed on the grass.",
                    "Please use the cycle path.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Bicycles are not allowed in the park.",
                  "Cyclists must stay on a special path.",
                  "You can ride your bike anywhere.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Harry,",
                    "Our class photo is ready. You can buy a copy from the school office for £5 until next Friday. Mrs Lee",
                  ],
                },
                question: "What does Mrs Lee say?",
                options: [
                  "Students can buy the photo for a short time.",
                  "The photo is free.",
                  "The photo will be taken next Friday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "FOR SALE",
                    "Children's books – 50p each.",
                    "All money goes to the hospital.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The books are for adults.",
                  "The books are free.",
                  "The money will help a hospital.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "ART COMPETITION",
                    "Paint a picture of your town!",
                    "Prizes for the best three paintings. Send your work by 30 April.",
                  ],
                },
                question: "What do we know about the competition?",
                options: [
                  "You must paint a picture of a person.",
                  "It finishes in March.",
                  "There is more than one prize.",
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
                title: "Daniel",
                text: "I'm a keen fisherman. My uncle taught me when I was five. We go fishing on the river near my house most weekends. I always put the fish back in the water after I catch them. I love sitting quietly by the river. It's very relaxing after a busy week at school.",
              },
              {
                title: "Chloe",
                text: "I do gymnastics. I train for three hours every day after school, so I don't have much free time. It's hard, but I love it. Last year, I was chosen for the national junior team. Next summer, I'm going to compete in a competition in Spain.",
              },
              {
                title: "Omar",
                text: "My hobby is reading. I read about two books a week, mostly science fiction. I also write reviews of the books on a website for young readers. Lots of people read my reviews, and some authors have even written to thank me!",
              },
            ],
            items: [
              {
                text: "doesn't keep what they catch?",
                answer: 0,
              },
              {
                text: "has very little spare time?",
                answer: 1,
              },
              {
                text: "has received messages from famous people?",
                answer: 2,
              },
              {
                text: "will travel abroad for their hobby?",
                answer: 1,
              },
              {
                text: "finds their hobby calming?",
                answer: 0,
              },
              {
                text: "shares their opinions online?",
                answer: 2,
              },
              {
                text: "was taught by a relative?",
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
              title: "Saving the turtles",
              paragraphs: [
                "Every summer, sixteen-year-old Elena Rossi spends her holidays on a beach in Greece. But she isn't there to sunbathe. She works as a volunteer, protecting sea turtles.",
                "Sea turtles lay their eggs in the sand at night. 'Our job is to find the nests and put a fence around them,' explains Elena. 'This stops people walking on them by mistake.'",
                "When the baby turtles come out of their eggs, they have to get to the sea. 'Bright lights from hotels can confuse them,' says Elena. 'So we help them find the right way.'",
                "Elena first heard about the project from her biology teacher. 'I've been volunteering for three years now,' she says. 'Watching baby turtles swim into the sea for the first time is the best feeling in the world.'",
              ],
            },
            items: [
              {
                question: "Why does Elena go to the beach?",
                options: [
                  "to relax in the sun",
                  "to help protect animals",
                  "to work in a hotel",
                ],
                answer: 1,
              },
              {
                question: "Why do the volunteers put fences around the nests?",
                options: [
                  "to stop the turtles leaving",
                  "to keep the eggs warm",
                  "so that people don't step on them",
                ],
                answer: 2,
              },
              {
                question: "What problem do the baby turtles have?",
                options: [
                  "Lights can make them go the wrong way.",
                  "The sea is too cold.",
                  "They can't break their eggs.",
                ],
                answer: 0,
              },
              {
                question: "How did Elena find out about the project?",
                options: [
                  "She saw it on TV.",
                  "A teacher told her.",
                  "She read about it online.",
                ],
                answer: 1,
              },
              {
                question: "How does Elena feel about her work?",
                options: [
                  "She finds it very rewarding.",
                  "She finds it boring.",
                  "She thinks it's too hard.",
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
            title: "The London Underground",
            text: [
              "The London Underground is the oldest underground railway in the world. It {1} in 1863. At first, the trains used steam, and the tunnels were full of smoke!",
              "Today, the Underground has eleven lines and 272 stations. About five million people {2} it every day. Londoners call it 'the Tube' because the tunnels are round, like tubes.",
              "The Underground map is famous all over the world. It was {3} by a man called Harry Beck in 1931. The map doesn't show the real distances between stations. Instead, it makes the lines {4} and easy to follow. During the Second World War, people {5} in the stations at night to stay safe from bombs. Some stations are very deep. The {6} one is more than fifty metres under the ground!",
            ],
            gaps: [
              {
                options: [
                  "opened",
                  "started",
                  "began",
                ],
                answer: 0,
              },
              {
                options: [
                  "take",
                  "ride",
                  "use",
                ],
                answer: 2,
              },
              {
                options: [
                  "made",
                  "built",
                  "designed",
                ],
                answer: 2,
              },
              {
                options: [
                  "simple",
                  "easy",
                  "plain",
                ],
                answer: 0,
              },
              {
                options: [
                  "stayed",
                  "slept",
                  "lived",
                ],
                answer: 1,
              },
              {
                options: [
                  "deepest",
                  "lowest",
                  "biggest",
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
            title: "A note",
            text: [
              "Dear Jo,",
              "Thank you so much {1} looking after my plants while I was away. They all look very healthy! I'm sorry I came back a day later {2} I said. There was a problem with my flight.",
              "I've brought you some chocolates from Belgium. I hope you like {3}. I'll leave them on your doorstep {4} you're not at home.",
              "Would you like to come for dinner on Friday? I can show you my photos. Let me know {5} you're free. Thanks {6}!",
              "Sarah",
            ],
            answers: [
              [
                "for",
              ],
              [
                "than",
              ],
              [
                "them",
              ],
              [
                "if",
                "because",
                "as",
              ],
              [
                "if",
                "whether",
                "when",
              ],
              [
                "again",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to join a sports club. Write an email to your English friend, Max. Write 25 words or more.",
            prompts: [
              "Say which sport you want to do.",
              "Say why you want to do it.",
              "Ask Max to join with you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Max' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Max,\n\nI want to join the volleyball club at the sports centre. I want to do it because it's fun and I want to get fitter. Would you like to join with me? We could go together on Tuesdays.\n\nBye,\nAhmet",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩✈️🧳",
                label: "1",
              },
              {
                e: "🧳❌😟",
                label: "2",
              },
              {
                e: "🧳🚗🏨😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Emma flew to Italy for a holiday. When she arrived at the airport, she waited for her suitcase, but it didn't come. She felt very worried because all her clothes were in it. She went to the information desk and explained the problem. The next day, a driver brought her suitcase to her hotel. Emma was very relieved.",
          },
        },
      ],
    },
  ],
};
