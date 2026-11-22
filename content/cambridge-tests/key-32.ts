import type { CambridgeTest } from "./types";

/** A2 Key practice test 32 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_32: CambridgeTest = {
  id: "key-32",
  level: "key",
  no: 32,
  title: "A2 Key · Practice Test 32",
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
                    "Children under 8 must wear armbands in the big pool.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Young children need armbands in one pool.",
                  "Children can't swim in the big pool.",
                  "Everyone must wear armbands.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Tom, I've finished my shift early. Do you want to meet for coffee at 4? Rachel",
                  ],
                },
                question: "What does Rachel suggest?",
                options: [
                  "working together",
                  "meeting later today",
                  "meeting tomorrow",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE TAKE OFF YOUR SHOES",
                    "Thank you.",
                  ],
                },
                question: "Where would you probably see this sign?",
                options: [
                  "at the entrance to someone's home",
                  "in a shoe shop",
                  "in a park",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Our team meeting is at 5 today, in the classroom next to the gym. Bring your new shirt to try on. Coach",
                  ],
                },
                question: "What should Ben take to the meeting?",
                options: [
                  "his football boots",
                  "some money",
                  "something to wear",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BUS",
                    "Please have the correct money ready.",
                    "Drivers do not give change.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The driver will give you change.",
                  "You should pay the exact price.",
                  "You must buy tickets online.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FLAT TO SHARE",
                    "Room available in a two-bedroom flat.",
                    "Near the station. Non-smokers only.",
                  ],
                },
                question: "What do we know about the flat?",
                options: [
                  "Smokers are welcome.",
                  "It is close to the train station.",
                  "It has three bedrooms.",
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
                title: "Lola",
                text: "I'm a keen tennis player. I play at a club near my house three times a week. I'm also in the school team. My coach thinks I could get a sports scholarship to a university in the USA. That would be amazing, but I'd have to work very hard.",
              },
              {
                title: "Harvey",
                text: "My hobby is playing chess online. I play against people from all over the world, usually in the evening after my homework. I've played more than two thousand games! I also watch videos of famous chess players to learn their strategies.",
              },
              {
                title: "Mila",
                text: "I love dancing. I do street dance at a studio in town. Last year, my dance group entered a TV talent show and we got to the final! We didn't win, but it was an incredible experience. Now lots of people recognise us in the street.",
              },
            ],
            items: [
              {
                text: "hopes to study abroad?",
                answer: 0,
              },
              {
                text: "plays for two different teams?",
                answer: 0,
              },
              {
                text: "has done their hobby many times?",
                answer: 1,
              },
              {
                text: "learns by watching experts?",
                answer: 1,
              },
              {
                text: "has been on television?",
                answer: 2,
              },
              {
                text: "is now known by people they don't know?",
                answer: 2,
              },
              {
                text: "plays against strangers?",
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
              title: "The tallest trees",
              paragraphs: [
                "In California, in the USA, there are some of the tallest trees in the world. They are called redwoods, and some of them are more than one hundred metres tall.",
                "Fifteen-year-old Alex visited the redwood forest with his family last summer. 'I've never seen anything like it,' he says. 'The trees are so tall that you can't see the tops!'",
                "Alex and his family walked through the forest for three hours. 'It was very quiet and peaceful,' he remembers. 'The air smelled fresh, and there were lots of birds.'",
                "Some redwoods are more than two thousand years old. 'It's amazing to think that they were alive when the Romans were building their cities,' says Alex. 'I want to come back one day and see them again.'",
              ],
            },
            items: [
              {
                question: "What do we learn about redwoods?",
                options: [
                  "They only grow in Europe.",
                  "They are very small.",
                  "They are among the tallest trees on Earth.",
                ],
                answer: 2,
              },
              {
                question: "What surprised Alex about the trees?",
                options: [
                  "He couldn't see the top of them.",
                  "They had no leaves.",
                  "They were very short.",
                ],
                answer: 0,
              },
              {
                question: "How did Alex feel in the forest?",
                options: [
                  "bored",
                  "calm",
                  "frightened",
                ],
                answer: 1,
              },
              {
                question: "How old are some redwoods?",
                options: [
                  "over two thousand years",
                  "a few hundred years",
                  "about fifty years",
                ],
                answer: 0,
              },
              {
                question: "What does Alex want to do?",
                options: [
                  "become a scientist",
                  "plant a redwood",
                  "visit the forest again",
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
            title: "Honey",
            text: [
              "Honey is a sweet food made by bees. Bees collect a liquid called nectar from flowers and {1} it back to their hive. Then they turn it into honey and keep it in small wax cells.",
              "People have been eating honey for thousands of years. Pictures on the walls of caves {2} people collecting honey more than 8,000 years ago!",
              "Honey never goes bad. Scientists found honey in an ancient Egyptian tomb that was 3,000 years old, and it was still {3} to eat. Honey is also used as medicine. Some people {4} it for sore throats or small cuts. The colour and taste of honey {5} on which flowers the bees visited. To make just one jar of honey, bees have to visit about two million flowers. They work very {6}!",
            ],
            gaps: [
              {
                options: [
                  "hold",
                  "keep",
                  "carry",
                ],
                answer: 2,
              },
              {
                options: [
                  "tell",
                  "show",
                  "say",
                ],
                answer: 1,
              },
              {
                options: [
                  "fine",
                  "good",
                  "nice",
                ],
                answer: 1,
              },
              {
                options: [
                  "make",
                  "do",
                  "use",
                ],
                answer: 2,
              },
              {
                options: [
                  "depend",
                  "rely",
                  "stand",
                ],
                answer: 0,
              },
              {
                options: [
                  "much",
                  "hard",
                  "well",
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
              "Hi Ava,",
              "I'm really looking forward to visiting you next week! I've never been to Scotland {1}. My train arrives in Edinburgh at four o'clock on Friday afternoon.",
              "Will you be able to meet me {2} the station? If you're busy, I can take a taxi to your house. Just send me the address.",
              "What's the weather like there at the moment? I don't know {3} clothes to bring. Should I bring a warm coat? Also, is there anything you'd like me to bring {4} you from London? Let me know. I can't wait {5} see you! See you {6} Friday.",
              "Love,",
              "Grace",
            ],
            answers: [
              [
                "before",
              ],
              [
                "at",
              ],
              [
                "what",
                "which",
              ],
              [
                "for",
              ],
              [
                "to",
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
            instruction: "You have started a new school. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Describe your new school.",
              "Say what your favourite lesson is.",
              "Say what the other students are like.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nI started at my new school last week. It's very big and modern, and it has a great sports hall. My favourite lesson is art because the teacher is really nice. The other students are friendly and helpful.\n\nBye,\nDuru",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🛒🧺",
                label: "1",
              },
              {
                e: "🧺🍎🍞🥛",
                label: "2",
              },
              {
                e: "👩🍳🍲👨‍👩‍👧",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday morning, Mum went to the market to buy food for a special dinner. She bought vegetables, bread, milk and some fish. When she got home, she spent all afternoon in the kitchen. In the evening, the whole family sat around the table and ate the delicious meal together. Everyone said it was the best dinner ever.",
          },
        },
      ],
    },
  ],
};
