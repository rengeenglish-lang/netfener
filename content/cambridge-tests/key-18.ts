import type { CambridgeTest } from "./types";

/** A2 Key practice test 18 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_18: CambridgeTest = {
  id: "key-18",
  level: "key",
  no: 18,
  title: "A2 Key · Practice Test 18",
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
                    "SPORTS CENTRE",
                    "Children under 14 cannot use the gym.",
                    "Try our junior fitness classes instead!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Younger children can do a different activity.",
                  "Children cannot come to the sports centre.",
                  "The gym is only for children.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Jo, the dentist called. Your appointment is tomorrow at 9, not Friday. Don't forget! Mum",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the name of the dentist",
                  "the time of school",
                  "the day of the appointment",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE DO NOT TOUCH",
                    "These paintings are very old.",
                  ],
                },
                question: "Where would you see this sign?",
                options: [
                  "in a park",
                  "in a gallery",
                  "in a shop",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Alex,",
                    "I've finished my history project early, so I can help you with yours tomorrow if you like. Tom",
                  ],
                },
                question: "What is Tom offering to do?",
                options: [
                  "give Alex his project",
                  "help Alex with his work",
                  "finish Alex's project for him",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BUS",
                    "Please give this seat to older people or people with young children.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children must sit here.",
                  "This seat is for drivers only.",
                  "Some passengers need this seat more.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "TABLE TENNIS CLUB",
                    "All ages and levels welcome.",
                    "Fridays 6–8 p.m. First month free!",
                  ],
                },
                question: "What do we know about the club?",
                options: [
                  "New members don't pay at first.",
                  "It is only for beginners.",
                  "It meets every evening.",
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
                title: "Lucas",
                text: "I love swimming. I train with my school team before school every morning, so I have to get up at six! In the summer, I swim in the sea. Last month, I swam five kilometres across a lake to raise money for a children's charity.",
              },
              {
                title: "Amelia",
                text: "I'm crazy about books. I'm in a book club at the town library. Every month, we choose a book, read it and then talk about it. I also volunteer at the library on Saturdays. I help younger children choose books and sometimes read stories to them.",
              },
              {
                title: "Jack",
                text: "My hobby is cycling. My dad and I go on long bike rides together at weekends. Last summer, we cycled from our town to the coast. It took three days and we camped every night. Next year, we want to cycle across France.",
              },
            ],
            items: [
              {
                text: "gets up very early?",
                answer: 0,
              },
              {
                text: "did a challenge for a good cause?",
                answer: 0,
              },
              {
                text: "discusses their hobby with others?",
                answer: 1,
              },
              {
                text: "helps children?",
                answer: 1,
              },
              {
                text: "went on a trip that lasted several days?",
                answer: 2,
              },
              {
                text: "has plans to go to another country?",
                answer: 2,
              },
              {
                text: "does their hobby with a parent?",
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
              title: "Teenager cleans up the river",
              paragraphs: [
                "When sixteen-year-old Zoe Turner went canoeing on the river near her home, she was shocked. 'There was plastic everywhere,' she says. 'Bottles, bags, even an old bike! I knew I had to do something.'",
                "Zoe started a group called River Friends. Every month, the group meets to clean the river. 'At first, only five people came,' says Zoe. 'Now we have more than sixty volunteers.'",
                "The group has collected more than two tonnes of rubbish. They also visit schools to teach children about plastic pollution. 'Young people can make a big difference,' says Zoe.",
                "Last month, Zoe won a prize for her work. 'I was very surprised,' she says. 'But the best prize is seeing the river clean again. Now I can see fish and birds there again.'",
              ],
            },
            items: [
              {
                question: "What surprised Zoe on the river?",
                options: [
                  "how many fish there were",
                  "how much rubbish there was",
                  "how cold the water was",
                ],
                answer: 1,
              },
              {
                question: "How has River Friends changed?",
                options: [
                  "Many more people have joined.",
                  "It now meets every day.",
                  "It has stopped cleaning the river.",
                ],
                answer: 0,
              },
              {
                question: "What else does the group do?",
                options: [
                  "sell plastic bottles",
                  "repair bikes",
                  "teach children",
                ],
                answer: 2,
              },
              {
                question: "How did Zoe feel when she won the prize?",
                options: [
                  "She thought she deserved it.",
                  "She didn't expect it.",
                  "She was disappointed.",
                ],
                answer: 1,
              },
              {
                question: "What is most important to Zoe?",
                options: [
                  "winning prizes",
                  "seeing the river clean",
                  "getting more volunteers",
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
            title: "Sunflowers",
            text: [
              "Sunflowers are tall plants with big yellow flowers. They can {1} up to three metres high. They first grew in North and South America, and people have {2} them for thousands of years.",
              "Young sunflowers do something very interesting. During the day, their flowers {3} the sun as it moves across the sky. At night, they turn back to face east, ready for the morning.",
              "Sunflower seeds are very {4} for us. You can eat them as a snack, or use them to make oil for cooking. Birds also love the seeds, so many people {5} sunflowers in their gardens. The tallest sunflower ever grown was more than nine metres tall. That's {6} than a house!",
            ],
            gaps: [
              {
                options: [
                  "rise",
                  "grow",
                  "build",
                ],
                answer: 1,
              },
              {
                options: [
                  "put",
                  "placed",
                  "planted",
                ],
                answer: 2,
              },
              {
                options: [
                  "follow",
                  "watch",
                  "look",
                ],
                answer: 0,
              },
              {
                options: [
                  "well",
                  "healthy",
                  "fit",
                ],
                answer: 1,
              },
              {
                options: [
                  "grow",
                  "make",
                  "build",
                ],
                answer: 0,
              },
              {
                options: [
                  "higher",
                  "longer",
                  "taller",
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
              "Hi Jessica,",
              "I've just got back {1} holiday. We went to Turkey for ten days. It was amazing! The weather was hot and sunny {2} day.",
              "We stayed in a hotel near the sea, and I went swimming every morning. We also visited some old ruins. They were more {3} two thousand years old!",
              "I tried lots of new food. My favourite was a sweet called baklava. I've brought some back {4} you! Are you free on Saturday? We {5} meet in town, and I can tell you all about it. Text me {6} you get this email.",
              "Love,",
              "Chloe",
            ],
            answers: [
              [
                "from",
              ],
              [
                "every",
                "each",
                "all",
              ],
              [
                "than",
              ],
              [
                "for",
              ],
              [
                "could",
                "can",
              ],
              [
                "when",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to have a party for your birthday. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Invite Kim to your party.",
              "Say where the party will be.",
              "Say what you will do at the party.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nWould you like to come to my birthday party next Saturday? It will be at my house in the garden. We are going to have a barbecue and play music and games.\n\nHope you can come!\nEmre",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦📱🚶",
                label: "1",
              },
              {
                e: "📱⬇️🌊😱",
                label: "2",
              },
              {
                e: "👦👨🎣📱😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Tom was walking by the river and looking at his new phone. Suddenly, he dropped it and it fell into the water. Tom was very upset because the phone was a birthday present. A fisherman saw what happened. He used his net to get the phone out of the water. Tom was very happy and thanked the man.",
          },
        },
      ],
    },
  ],
};
