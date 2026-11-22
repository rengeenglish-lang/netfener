import type { CambridgeTest } from "./types";

/** A2 Key practice test 30 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_30: CambridgeTest = {
  id: "key-30",
  level: "key",
  no: 30,
  title: "A2 Key · Practice Test 30",
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
                    "Tickets can be bought from the machines or online.",
                    "The ticket office is closed today.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't buy a ticket from a person today.",
                  "There are no trains today.",
                  "You can only buy tickets online.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ali, are you still coming to the basketball game? I've saved you a seat next to me. Josh",
                  ],
                },
                question: "Why has Josh sent this message?",
                options: [
                  "to say the game is cancelled",
                  "to ask Ali to save him a seat",
                  "to check if Ali is coming",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SHOP",
                    "Sale! Everything must go!",
                    "Up to 70% off.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The shop is opening soon.",
                  "Some things are very cheap.",
                  "Everything costs 70p.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lily,",
                    "I've found your scarf in my car. I'll bring it to work tomorrow. Jenny",
                  ],
                },
                question: "What will Jenny do?",
                options: [
                  "buy Lily a new scarf",
                  "return something Lily left behind",
                  "drive Lily to work",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "The school will be closed on Monday because of the election.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students must vote on Monday.",
                  "School starts later on Monday.",
                  "Students don't have school on Monday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FREE KITTENS",
                    "Four kittens need good homes.",
                    "Ten weeks old. Call Mary.",
                  ],
                },
                question: "What do we know about the kittens?",
                options: [
                  "You don't have to pay for them.",
                  "They are very old.",
                  "There are ten kittens.",
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
                title: "Ellie",
                text: "I love horses, but I can't have one because I live in a flat in the city. So every Saturday, I go to a riding school outside the city. I've been riding for two years. My instructor says I'm ready to start jumping next month. I'm really excited!",
              },
              {
                title: "Marcus",
                text: "I play the trumpet in a brass band. We play at festivals and in the park in summer. The band has people of all ages, from eleven to seventy-five! I'm one of the youngest. The older members are really kind and they help me a lot.",
              },
              {
                title: "Zoe",
                text: "My hobby is writing poems. I write in my notebook every day, usually about nature or my feelings. Last year, I won a national poetry competition for teenagers. My poem was printed in a book. Now I'm writing a collection of poems that I'd like to publish.",
              },
            ],
            items: [
              {
                text: "has to travel to do their hobby?",
                answer: 0,
              },
              {
                text: "will soon try something new?",
                answer: 0,
              },
              {
                text: "is in a group with people much older than them?",
                answer: 1,
              },
              {
                text: "performs outdoors?",
                answer: 1,
              },
              {
                text: "does their hobby daily?",
                answer: 2,
              },
              {
                text: "has had their work published?",
                answer: 2,
              },
              {
                text: "gets help from other members?",
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
              title: "Learning to sail",
              paragraphs: [
                "Last summer, thirteen-year-old Ruby spent two weeks at a sailing school on the south coast of England. 'I'd never been on a boat before,' she says. 'I was a bit nervous on the first day.'",
                "At first, Ruby learned on the land. 'We learned how to tie knots and how the wind moves the boat,' she explains. 'Then we went on the water in small boats with an instructor.'",
                "Ruby fell into the water three times! 'It was very cold,' she laughs. 'But we were wearing life jackets, so it was safe. And it was really funny.'",
                "By the end of the course, Ruby could sail a small boat by herself. 'It was an amazing feeling,' she says. 'Now I want to learn to sail bigger boats. Maybe one day I'll sail around the world!'",
              ],
            },
            items: [
              {
                question: "How did Ruby feel on the first day?",
                options: [
                  "very confident",
                  "a little worried",
                  "bored",
                ],
                answer: 1,
              },
              {
                question: "What did Ruby do before going on the water?",
                options: [
                  "She learned some basic skills.",
                  "She swam in the sea.",
                  "She bought a boat.",
                ],
                answer: 0,
              },
              {
                question: "What does Ruby say about falling into the water?",
                options: [
                  "It was very dangerous.",
                  "It made her want to stop.",
                  "It was cold but funny.",
                ],
                answer: 2,
              },
              {
                question: "What could Ruby do at the end of the course?",
                options: [
                  "teach other students",
                  "sail alone",
                  "sail around the world",
                ],
                answer: 1,
              },
              {
                question: "What does Ruby want to do next?",
                options: [
                  "become an instructor",
                  "learn to sail larger boats",
                  "buy a boat",
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
            title: "Tea",
            text: [
              "Tea is the second most popular drink in the world, after water. People have been drinking it {1} thousands of years.",
              "According to a Chinese story, tea was discovered by accident about 5,000 years ago. Some leaves {2} into a cup of hot water, and the emperor liked the taste!",
              "Tea comes from a plant that grows in warm, wet places. The biggest tea-producing countries are China, India and Kenya. There are many different {3} of tea, such as green tea, black tea and white tea. In Britain, people often drink tea with milk. In Turkey, people {4} tea in small glasses. In Morocco, they add mint. Tea is also {5} for you. Some scientists say it can help your heart. But don't drink too much, or you might not {6} well at night!",
            ],
            gaps: [
              {
                options: [
                  "since",
                  "for",
                  "during",
                ],
                answer: 1,
              },
              {
                options: [
                  "dropped",
                  "went",
                  "fell",
                ],
                answer: 2,
              },
              {
                options: [
                  "types",
                  "ways",
                  "forms",
                ],
                answer: 0,
              },
              {
                options: [
                  "eat",
                  "drink",
                  "fill",
                ],
                answer: 1,
              },
              {
                options: [
                  "good",
                  "well",
                  "fine",
                ],
                answer: 0,
              },
              {
                options: [
                  "rest",
                  "dream",
                  "sleep",
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
              "Hi Max,",
              "How was your weekend? I {1} a really busy one! On Saturday, I helped my dad paint the kitchen. It took {2} day!",
              "On Sunday, my cousins came to visit. We went to the new park in town. It's got a huge skate park and a climbing wall. We stayed there {3} five hours. I think you'd love it.",
              "Do you want to go there together next weekend? We could take our skateboards. My mum {4} drive us there. Let me know {5} you think. See {6} at school tomorrow!",
              "Jack",
            ],
            answers: [
              [
                "had",
              ],
              [
                "all",
              ],
              [
                "for",
              ],
              [
                "can",
                "could",
                "will",
              ],
              [
                "what",
              ],
              [
                "you",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to buy a present for your friend. Write an email to your English friend, Jo. Write 25 words or more.",
            prompts: [
              "Say who the present is for.",
              "Say what you want to buy.",
              "Ask Jo to come shopping with you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nIt's my best friend Elif's birthday next week. I want to buy her a book about horses because she loves them. Would you like to come shopping with me on Saturday?\n\nThanks,\nSu",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🌸🏡",
                label: "1",
              },
              {
                e: "🌧️🌸💧",
                label: "2",
              },
              {
                e: "👩🌸🌞😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Mrs Green planted lots of flowers in her garden in the spring. She looked after them every day, but then it didn't rain for weeks and the flowers started to die. She felt very sad. One night, there was a big storm. The next morning, the sun came out and her flowers looked beautiful again. Mrs Green was very happy.",
          },
        },
      ],
    },
  ],
};
