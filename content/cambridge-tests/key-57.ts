import type { CambridgeTest } from "./types";

/** A2 Key practice test 57 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_57: CambridgeTest = {
  id: "key-57",
  level: "key",
  no: 57,
  title: "A2 Key · Practice Test 57",
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
                    "The water slide is closed today.",
                    "It will open again tomorrow.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed.",
                  "You can't use the slide today.",
                  "The slide is new.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Dad, can I stay at Jo's house tonight? Her mum says it's OK. Ella",
                  ],
                },
                question: "What does Ella want?",
                options: [
                  "Jo to stay at her house",
                  "a lift to Jo's house",
                  "to sleep at a friend's house",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "Audio guides available in five languages.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can listen to information in different languages.",
                  "The museum is in five buildings.",
                  "Guides speak five languages.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "I've found a great flat for us near the university. Can you come and see it on Friday? Max",
                  ],
                },
                question: "What does Max want Sam to do?",
                options: [
                  "find a flat",
                  "look at a flat with him",
                  "pay for a flat",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Please leave large bags at the front desk.",
                  ],
                },
                question: "What should customers do?",
                options: [
                  "leave big bags with staff",
                  "take their bags inside",
                  "buy a new bag",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FOOTBALL CAMP",
                    "For boys and girls aged 7–14.",
                    "Professional coaches. Lunch included.",
                  ],
                },
                question: "What do we know about the camp?",
                options: [
                  "It's only for boys.",
                  "It's for adults.",
                  "Children get food there.",
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
                title: "Daisy",
                text: "I love baking. Every weekend, I make cakes and biscuits for my family. Last year, I entered a TV baking competition for children. I got to the semi-final! It was amazing to meet famous chefs. Now I'm writing a recipe book.",
              },
              {
                title: "Oscar",
                text: "My hobby is cycling. I ride my bike to school every day, and at weekends I do long rides with a club. Last summer, I cycled around Lake Geneva with my dad. It was 180 kilometres! Next year, I want to try cycling in the mountains.",
              },
              {
                title: "Maya",
                text: "I'm into art, especially drawing cartoons. I draw every day in my sketchbook. I've created a cartoon character called Benny the Bear. I post his adventures on social media, and lots of people follow them. A children's magazine wants to publish my cartoons!",
              },
            ],
            items: [
              {
                text: "appeared on TV?",
                answer: 0,
              },
              {
                text: "is writing a book?",
                answer: 0,
              },
              {
                text: "uses their hobby for transport?",
                answer: 1,
              },
              {
                text: "wants to try something more difficult?",
                answer: 1,
              },
              {
                text: "invented a character?",
                answer: 2,
              },
              {
                text: "may soon have their work printed?",
                answer: 2,
              },
              {
                text: "met well-known people?",
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
              title: "Sleeping in the snow",
              paragraphs: [
                "Every winter, a group of students from a school in Norway spend a night sleeping outside in the snow. It's part of a lesson about survival.",
                "'At first, I thought it was a crazy idea,' says fifteen-year-old Ingrid. 'It was minus fifteen degrees! But our teachers taught us how to stay warm.'",
                "The students build shelters from snow. 'We dig a hole and make walls,' explains Ingrid. 'It's surprisingly warm inside. We also wear lots of layers and sleep in special sleeping bags.'",
                "Ingrid says she learned a lot. 'I'm more confident now,' she says. 'I know I can deal with difficult situations. And the stars at night were incredible. I'll never forget it.'",
              ],
            },
            items: [
              {
                question: "Why do the students sleep in the snow?",
                options: [
                  "They want to win a prize.",
                  "It is part of a lesson.",
                  "Their parents want them to.",
                ],
                answer: 1,
              },
              {
                question: "What did Ingrid think at first?",
                options: [
                  "It would be easy.",
                  "It was a strange idea.",
                  "It would be fun.",
                ],
                answer: 1,
              },
              {
                question: "What do the students make?",
                options: [
                  "fires",
                  "tents",
                  "shelters from snow",
                ],
                answer: 2,
              },
              {
                question: "What surprised Ingrid?",
                options: [
                  "how warm the shelter was",
                  "how cold the shelter was",
                  "how big the shelter was",
                ],
                answer: 0,
              },
              {
                question: "How has Ingrid changed?",
                options: [
                  "She doesn't like winter.",
                  "She is more self-confident.",
                  "She wants to be a teacher.",
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
            title: "Libraries",
            text: [
              "Libraries have existed for thousands of years. One of the most famous was the Library of Alexandria in Egypt. It {1} hundreds of thousands of books, written on scrolls.",
              "Today, there are libraries in almost every town. You can {2} books for free and take them home. Most libraries also have computers, DVDs and magazines.",
              "Libraries are not just places for books. Many have events for children, like story time, and {3} for adults, like computer lessons. They are also quiet places where students can {4}. Some people think that libraries are not needed {5} we have the internet. But libraries are important for people who can't afford to buy books or computers. They also help people to {6} reading. So next time you need a book, why not visit your local library?",
            ],
            gaps: [
              {
                options: [
                  "made",
                  "had",
                  "took",
                ],
                answer: 1,
              },
              {
                options: [
                  "borrow",
                  "lend",
                  "rent",
                ],
                answer: 0,
              },
              {
                options: [
                  "schools",
                  "teachers",
                  "classes",
                ],
                answer: 2,
              },
              {
                options: [
                  "teach",
                  "learn up",
                  "study",
                ],
                answer: 2,
              },
              {
                options: [
                  "because",
                  "so",
                  "but",
                ],
                answer: 0,
              },
              {
                options: [
                  "want",
                  "enjoy",
                  "need",
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
              "Hi Jack,",
              "I've just joined a new swimming club, and I love it! We train {1} Monday and Wednesday evenings at the big pool in town.",
              "The coach is really good. She used to swim {2} her country. She's helping me improve my technique. I'm already much faster than {3} I started.",
              "There's a competition next month. I'm going {4} swim in the 100 metres. I'm a bit nervous, but I'll do my best. Do you still go swimming? Maybe you could join the club too! It would be great {5} have a friend there. Let me know {6} you think.",
              "Bye,",
              "Ollie",
            ],
            answers: [
              [
                "on",
                "every",
              ],
              [
                "for",
              ],
              [
                "when",
              ],
              [
                "to",
              ],
              [
                "to",
              ],
              [
                "what",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to visit your grandparents. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say where your grandparents live.",
              "Say how long you will stay.",
              "Say what you will do there.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nNext week, I'm going to visit my grandparents. They live in a small village near the sea. I'm going to stay for ten days. We will go fishing, walk on the beach and cook together.\n\nBye,\nYusuf",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎹🎶",
                label: "1",
              },
              {
                e: "👧🎹😴",
                label: "2",
              },
              {
                e: "👧🎹🏆👏",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Ella wanted to play in the school piano competition. Every evening, she practised her song for an hour. Sometimes she was tired and wanted to stop, but she kept going. On the day of the competition, she played perfectly. The judges gave her first prize! Ella's parents were very proud of her hard work.",
          },
        },
      ],
    },
  ],
};
