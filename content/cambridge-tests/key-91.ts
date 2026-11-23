import type { CambridgeTest } from "./types";

/** A2 Key practice test 91 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_91: CambridgeTest = {
  id: "key-91",
  level: "key",
  no: 91,
  title: "A2 Key · Practice Test 91",
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
                    "Students who forget their PE kit will not be able to take part in the lesson.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You need your PE kit to do sport.",
                  "PE lessons are cancelled.",
                  "PE kits can be bought at school.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, I'm going to the shops. Do you need anything? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "where Max is",
                  "if Max wants something from the shops",
                  "when Max will be home",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "LIFT",
                    "Use the stairs in case of fire.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Don't use the lift if there is a fire.",
                  "The lift is broken.",
                  "There are no stairs.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Our science test is on Wednesday, not Thursday. Don't forget to study! Ruby",
                  ],
                },
                question: "What does Ruby tell Ella?",
                options: [
                  "the test is cancelled",
                  "there's no science lesson",
                  "the test is earlier",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free water for everyone.",
                    "Just ask!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Water costs money.",
                  "The café only sells water.",
                  "You can have water without paying.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DRAMA WORKSHOP",
                    "For teenagers aged 13–17.",
                    "Two days in the summer holidays. £30.",
                  ],
                },
                question: "What do we know about the workshop?",
                options: [
                  "It's during the holidays.",
                  "It's for children under 10.",
                  "It's free.",
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
                title: "Ben",
                text: "I love snowboarding. I go every winter with my family to the mountains. Last year, I learned to do jumps. I've started watching videos of professional snowboarders to learn new tricks. I want to take part in a competition next winter.",
              },
              {
                title: "Lily",
                text: "My hobby is drawing. I draw animals, especially horses. I've been drawing since I was four. Last year, I won a national drawing competition. My picture was printed on a calendar that was sold in shops all over the country!",
              },
              {
                title: "Ahmed",
                text: "I'm interested in science. I go to a science club after school. We do experiments and build things. Last month, we made a rocket that flew fifty metres high! Next year, our club is going to visit a space centre.",
              },
            ],
            items: [
              {
                text: "learns by watching others?",
                answer: 0,
              },
              {
                text: "plans to compete?",
                answer: 0,
              },
              {
                text: "has been doing their hobby for a long time?",
                answer: 1,
              },
              {
                text: "had their work printed for sale?",
                answer: 1,
              },
              {
                text: "goes to an after-school club?",
                answer: 2,
              },
              {
                text: "will visit somewhere special?",
                answer: 2,
              },
              {
                text: "goes on holiday every year?",
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
              title: "The village of books",
              paragraphs: [
                "Hay-on-Wye is a small town in Wales with only about 1,500 people. But it has more than twenty bookshops! It's called 'the town of books'.",
                "It all started in 1961, when a man called Richard Booth opened a second-hand bookshop. 'People thought he was crazy,' says local resident Mary. 'But soon other people opened bookshops too.'",
                "Every year, the town has a big book festival. Famous writers come to talk about their books. 'About 100,000 people visit the festival,' says Mary. 'The town is very busy.'",
                "Fourteen-year-old Ella lives in Hay-on-Wye. 'I love it here,' she says. 'I've got hundreds of books. I spend all my pocket money in the bookshops!'",
              ],
            },
            items: [
              {
                question: "What is special about Hay-on-Wye?",
                options: [
                  "It has a big library.",
                  "It has many schools.",
                  "It has lots of bookshops.",
                ],
                answer: 2,
              },
              {
                question: "Who started the first bookshop?",
                options: [
                  "Richard Booth",
                  "Mary",
                  "Ella",
                ],
                answer: 0,
              },
              {
                question: "What did people think of Richard Booth?",
                options: [
                  "He was clever.",
                  "He was strange.",
                  "He was rich.",
                ],
                answer: 1,
              },
              {
                question: "What happens at the festival?",
                options: [
                  "Writers talk about their books.",
                  "People sell old clothes.",
                  "There's a music concert.",
                ],
                answer: 0,
              },
              {
                question: "What does Ella spend her money on?",
                options: [
                  "clothes",
                  "food",
                  "books",
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
            title: "Bananas",
            text: [
              "Bananas are one of the most popular fruits in the world. People eat more than 100 billion bananas {1} year!",
              "Bananas grow in hot countries, like India, Brazil and Ecuador. They grow on large plants, not trees. Each plant {2} one bunch of bananas, which can have more than a hundred bananas!",
              "Bananas are very good for you. They have lots of energy, so many athletes eat them before sport. They also contain vitamins that help keep your heart {3}. Most bananas we buy are yellow, but there are also red, green and even blue bananas! Bananas are picked when they are green and {4} on the journey to shops. If you want to make your bananas {5} more quickly, put them in a bag with an apple. Bananas are also easy to eat. You don't need a knife; you just {6} the skin off!",
            ],
            gaps: [
              {
                options: [
                  "each of",
                  "all",
                  "every",
                ],
                answer: 2,
              },
              {
                options: [
                  "makes up",
                  "does",
                  "produces",
                ],
                answer: 2,
              },
              {
                options: [
                  "healthy",
                  "health",
                  "healthily",
                ],
                answer: 0,
              },
              {
                options: [
                  "grow up",
                  "ripen",
                  "get up",
                ],
                answer: 1,
              },
              {
                options: [
                  "ripen",
                  "ripe",
                  "ripened",
                ],
                answer: 0,
              },
              {
                options: [
                  "cut up",
                  "take",
                  "peel",
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
              "Hi Sophie,",
              "I'm writing to tell you about my new hobby. I've started {1} the drums! My uncle gave me his old drum kit.",
              "I practise every evening after school {2} an hour. My parents say it's very loud, so I practise in the garage. My neighbours don't like it much!",
              "I'm getting better every week. My teacher says I {3} join a band soon. Would you like to come and listen {4} me play? Maybe you could come on Saturday. Let me know {5} you can come. I'll play {6} favourite song for you!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "playing",
                "learning",
              ],
              [
                "for",
              ],
              [
                "can",
                "could",
                "should",
                "might",
                "will",
              ],
              [
                "to",
              ],
              [
                "if",
                "whether",
              ],
              [
                "your",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to buy a new phone. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say why you need a new phone.",
              "Say what kind of phone you want.",
              "Ask Sam for advice.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nI need a new phone because my old one is broken. I want a phone with a good camera because I love taking photos. Which phone do you think I should buy?\n\nBye,\nArda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🏃🏁",
                label: "1",
              },
              {
                e: "👧🏃⬇️😢",
                label: "2",
              },
              {
                e: "👧🏃🏁👏😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Lily was running in the school race. She was in first place, but then she fell over just before the finish line. She was very upset, and her knee was hurting. But she got up and kept running. She finished the race in third place. Everyone cheered for her because she didn't give up. Lily felt very proud.",
          },
        },
      ],
    },
  ],
};
