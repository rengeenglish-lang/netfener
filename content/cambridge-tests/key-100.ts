import type { CambridgeTest } from "./types";

/** A2 Key practice test 100 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_100: CambridgeTest = {
  id: "key-100",
  level: "key",
  no: 100,
  title: "A2 Key · Practice Test 100",
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
                    "The end-of-year party will be in the school garden if the weather is good.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The party is cancelled.",
                  "The party will be outside if it's sunny.",
                  "The party is inside.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, I'm at the station. Where are you? The train leaves in 10 minutes! Kate",
                  ],
                },
                question: "Why has Kate sent this message?",
                options: [
                  "The train is cancelled.",
                  "Lucy is late.",
                  "Kate has missed the train.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "DANGER",
                    "Deep water. No swimming.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can swim here.",
                  "The water is shallow.",
                  "It isn't safe to swim here.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Our team photo will be taken on Friday. Please wear your team shirt. Coach",
                  ],
                },
                question: "What should Ben wear on Friday?",
                options: [
                  "his team shirt",
                  "his school uniform",
                  "his best clothes",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "You can borrow up to five books at a time.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must borrow five books.",
                  "You can't take more than five books.",
                  "You can borrow ten books.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER PARTY",
                    "Music, food and games!",
                    "Saturday 2–6 p.m. in the park. Everyone welcome.",
                  ],
                },
                question: "What do we know about the party?",
                options: [
                  "Anyone can come.",
                  "It's in the evening.",
                  "It's only for children.",
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
                title: "Sophie",
                text: "I love dancing. I've been dancing since I was four. I do ballet, jazz and street dance. Last year, I was chosen to dance in a famous musical in London. I danced in the show for three months! It was the best experience of my life.",
              },
              {
                title: "Leo",
                text: "My hobby is chess. I play every day online and at a club. Last year, I became the national under-16 champion. Next year, I'm going to play in the world championships in India. I'm practising very hard.",
              },
              {
                title: "Emma",
                text: "I'm interested in helping animals. I volunteer at a wildlife hospital. We look after injured birds, foxes and hedgehogs. When they are better, we let them go back into the wild. I want to be a vet when I'm older.",
              },
            ],
            items: [
              {
                text: "performed for several months?",
                answer: 0,
              },
              {
                text: "started their hobby when very young?",
                answer: 0,
              },
              {
                text: "is a national champion?",
                answer: 1,
              },
              {
                text: "will travel abroad to compete?",
                answer: 1,
              },
              {
                text: "helps injured animals?",
                answer: 2,
              },
              {
                text: "returns animals to nature?",
                answer: 2,
              },
              {
                text: "practises every day?",
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
              title: "The end of the year",
              paragraphs: [
                "It's the last day of school for sixteen-year-old Ella and her friends. They're leaving their school after five years. 'I'm happy, but also a bit sad,' says Ella.",
                "Ella's class is having a big party in the school hall. 'We're going to dance and eat lots of food,' she says. 'The teachers are coming too!'",
                "Ella has many good memories of her school. 'My favourite memory is our school trip to Paris,' she says. 'We saw the Eiffel Tower and ate lots of croissants!'",
                "After the summer, Ella is going to college to study art. 'I'm excited about the future,' she says. 'But I'll miss my friends and teachers. We've promised to stay in touch.'",
              ],
            },
            items: [
              {
                question: "How does Ella feel?",
                options: [
                  "only happy",
                  "angry",
                  "happy and sad",
                ],
                answer: 2,
              },
              {
                question: "Where is the party?",
                options: [
                  "at Ella's house",
                  "in the school hall",
                  "in a restaurant",
                ],
                answer: 1,
              },
              {
                question: "What is Ella's favourite memory?",
                options: [
                  "her first day at school",
                  "a trip to Paris",
                  "a sports day",
                ],
                answer: 1,
              },
              {
                question: "What will Ella study at college?",
                options: [
                  "science",
                  "history",
                  "art",
                ],
                answer: 2,
              },
              {
                question: "What have Ella and her friends promised?",
                options: [
                  "to keep in contact",
                  "to visit Paris again",
                  "to become teachers",
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
            title: "Libraries",
            text: [
              "Libraries are places where you can {1} books for free. Most towns and cities have a library.",
              "The first public libraries opened in the nineteenth century. Before that, only rich people could {2} to buy books.",
              "Today, libraries have much more than books. You can use computers, borrow DVDs and read newspapers and magazines. Many libraries also have events for children, like story time and {3} clubs. Libraries are quiet places where people can study and read. They are very important for students who don't have a quiet place to work {4} home. Some people think that libraries are not needed because of the internet. But librarians can help you {5} the information you need. So why not visit your local library? You might find your new {6} book!",
            ],
            gaps: [
              {
                options: [
                  "borrow",
                  "lend",
                  "rent up",
                ],
                answer: 0,
              },
              {
                options: [
                  "pay up",
                  "afford",
                  "spend",
                ],
                answer: 1,
              },
              {
                options: [
                  "reading",
                  "read",
                  "reader",
                ],
                answer: 0,
              },
              {
                options: [
                  "in",
                  "on",
                  "at",
                ],
                answer: 2,
              },
              {
                options: [
                  "look up",
                  "search up",
                  "find",
                ],
                answer: 2,
              },
              {
                options: [
                  "favourite",
                  "favour",
                  "favourably",
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
              "Hi Jack,",
              "I can't believe it's the end {1} the school year! I've had a great year. Thanks for being such a good friend.",
              "This summer, I'm going {2} visit my cousins in Scotland. We're going to go hiking and camping in the mountains. I'm really excited!",
              "What are you doing this summer? Are you going away? I hope we can meet {3} I come back. Maybe we could go to the beach together. Write to me while I'm away. I'll send you {4} postcard from Scotland. Have a great summer, {5} see you {6} September!",
              "Oscar",
            ],
            answers: [
              [
                "of",
              ],
              [
                "to",
              ],
              [
                "when",
                "after",
                "once",
              ],
              [
                "a",
              ],
              [
                "and",
              ],
              [
                "in",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have finished the school year. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say how your year went.",
              "Say what you will do in the summer.",
              "Ask about Charlie's plans.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nI've finished the school year, and it went really well! I got good marks in most subjects. This summer, I'm going to the seaside with my family. What are your plans for the holidays?\n\nBye,\nCan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎓🏫",
                label: "1",
              },
              {
                e: "👧👨‍👩‍👧🎉",
                label: "2",
              },
              {
                e: "👧✈️🌍😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Lily finished school last summer. On her last day, there was a big party, and her family came to celebrate with her. They were very proud because she had got excellent marks. As a present, her parents gave her a ticket to travel around Europe for a month. Lily was very excited. She visited six countries and made lots of new friends.",
          },
        },
      ],
    },
  ],
};
