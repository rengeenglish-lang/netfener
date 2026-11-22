import type { CambridgeTest } from "./types";

/** A2 Key practice test 28 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_28: CambridgeTest = {
  id: "key-28",
  level: "key",
  no: 28,
  title: "A2 Key · Practice Test 28",
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
                    "MUSEUM",
                    "Guided tours every hour.",
                    "Tours start at the main entrance.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There is only one tour a day.",
                  "Tours begin in the same place each time.",
                  "Tours start in the café.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Mum, I'm staying at Sam's house for dinner. I'll be home by 9. Is that OK? Leo",
                  ],
                },
                question: "What does Leo want?",
                options: [
                  "his mum to collect him",
                  "permission to eat at a friend's house",
                  "to invite Sam for dinner",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "LIFT",
                    "Maximum 8 people.",
                    "In case of fire, use the stairs.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The lift is for eight people only on Mondays.",
                  "There are no stairs.",
                  "You should not use the lift during a fire.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ruby,",
                    "I'm sorry, I can't come to your party. I have to visit my grandma in hospital. Have a great time! Jo",
                  ],
                },
                question: "Why can't Jo go to the party?",
                options: [
                  "She has to see a relative who is ill.",
                  "She is ill.",
                  "She is working.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Books returned late: 10p per day.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Books cost 10p to borrow.",
                  "You have to pay if your book is late.",
                  "The library closes at ten.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "CAMPING EQUIPMENT FOR SALE",
                    "Tent, sleeping bags and cooking set. Used only twice. £80 for everything.",
                  ],
                },
                question: "What do we know about the camping equipment?",
                options: [
                  "It has not been used much.",
                  "It is brand new.",
                  "You can buy each thing separately.",
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
                title: "Daisy",
                text: "I love swimming in the sea, even in winter! I'm part of a group that swims in the sea every Sunday morning, all year round. In January, the water is only about eight degrees. It's very cold, but it makes me feel fantastic. We always have hot chocolate afterwards.",
              },
              {
                title: "Rory",
                text: "My hobby is collecting comics. I've got more than three hundred. Some of them are very old and valuable. I buy them at markets and online. I keep them in plastic covers so they don't get damaged. My dream is to find a really rare one.",
              },
              {
                title: "Nadia",
                text: "I'm learning to cook food from different countries. Every weekend, I choose a new recipe. So far, I've made dishes from Thailand, Morocco and Peru. My family has to try everything, even when it's not very good! My mum says I'm getting better and better.",
              },
            ],
            items: [
              {
                text: "does their hobby in very cold conditions?",
                answer: 0,
              },
              {
                text: "has a drink after their hobby?",
                answer: 0,
              },
              {
                text: "protects the things they own?",
                answer: 1,
              },
              {
                text: "is looking for something special?",
                answer: 1,
              },
              {
                text: "asks family members to test what they make?",
                answer: 2,
              },
              {
                text: "has improved over time?",
                answer: 2,
              },
              {
                text: "buys things on the internet?",
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
              title: "The village school",
              paragraphs: [
                "In a small village in Scotland, there is a school with only twelve students. Eleven-year-old Callum is one of them. 'Everyone knows everyone,' he says. 'It's like a big family.'",
                "There is only one teacher, Mrs MacLeod, and she teaches all the students together in one classroom. 'The older children help the younger ones,' explains Callum. 'I help a girl who is six with her reading.'",
                "The school is next to the sea, and the students often have lessons outside. 'We study the birds and plants on the beach,' says Callum. 'It's much more interesting than sitting in a classroom.'",
                "Next year, Callum will go to a big school in town. 'I'll have to take a boat every day!' he says. 'I'm excited, but I'll miss my little school a lot.'",
              ],
            },
            items: [
              {
                question: "What does Callum say about his school?",
                options: [
                  "It is too small.",
                  "The students don't know each other.",
                  "It feels like a family.",
                ],
                answer: 2,
              },
              {
                question: "What does Callum do to help?",
                options: [
                  "He helps the teacher clean.",
                  "He helps a younger student read.",
                  "He teaches the older students.",
                ],
                answer: 1,
              },
              {
                question: "Why does Callum like having lessons outside?",
                options: [
                  "They are shorter.",
                  "They are more interesting.",
                  "There is no homework.",
                ],
                answer: 1,
              },
              {
                question: "How will Callum travel to his new school?",
                options: [
                  "by bus",
                  "on foot",
                  "by boat",
                ],
                answer: 2,
              },
              {
                question: "How does Callum feel about changing school?",
                options: [
                  "happy but also sad",
                  "only worried",
                  "not interested",
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
            title: "Jeans",
            text: [
              "Jeans are one of the most popular kinds of clothes in the world. Almost everyone has {1} a pair! But they haven't always been fashionable.",
              "The first jeans were made in 1873 in the USA. They were work clothes for miners and farmers {2} needed strong trousers. The material was thick and didn't tear easily.",
              "In the 1950s, film stars started {3} jeans, and young people wanted to look like them. Soon jeans were very fashionable. Today, jeans come in many different {4}, colours and sizes. Some people pay a lot of money for designer jeans. But making jeans uses a lot of water, so some companies are trying to make them in a more {5} way. Next time you {6} a pair of jeans, think about how they were made!",
            ],
            gaps: [
              {
                options: [
                  "at least",
                  "at last",
                  "at all",
                ],
                answer: 0,
              },
              {
                options: [
                  "which",
                  "who",
                  "what",
                ],
                answer: 1,
              },
              {
                options: [
                  "wearing",
                  "dressing",
                  "putting",
                ],
                answer: 0,
              },
              {
                options: [
                  "ways",
                  "forms",
                  "styles",
                ],
                answer: 2,
              },
              {
                options: [
                  "natural",
                  "greenish",
                  "eco-friendly",
                ],
                answer: 2,
              },
              {
                options: [
                  "buy",
                  "pay",
                  "spend",
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
              "I've got two tickets {1} the football match on Sunday! My uncle gave them to me. Do you want to come {2} me?",
              "The match starts at three o'clock. We could meet at the station at two and take the train together. It only takes {3} twenty minutes.",
              "Don't forget to wear your team shirt! I'll bring some sandwiches {4} we can have lunch on the train. Let me know as soon {5} you can. I need to tell my uncle {6} Friday.",
              "See you,",
              "Ollie",
            ],
            answers: [
              [
                "for",
                "to",
              ],
              [
                "with",
              ],
              [
                "about",
              ],
              [
                "so",
                "and",
              ],
              [
                "as",
              ],
              [
                "by",
                "before",
                "on",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to visit a friend in hospital. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say who is in hospital.",
              "Say why they are there.",
              "Ask Sam to come with you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nMy friend Ahmet is in hospital. He broke his leg playing football last week. I'm going to visit him on Saturday afternoon. Would you like to come with me?\n\nSee you,\nBaran",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🍳🥞",
                label: "1",
              },
              {
                e: "🥞⬆️🏠😮",
                label: "2",
              },
              {
                e: "👦🐕🥞😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Sunday morning, Jake wanted to make pancakes for his family. He mixed everything and started cooking. When he tried to turn a pancake over, he threw it too high and it fell on the floor. Before Jake could pick it up, his dog ran over and ate it! Everyone laughed. Jake made more pancakes, and this time he was more careful.",
          },
        },
      ],
    },
  ],
};
