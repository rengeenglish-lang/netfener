import type { CambridgeTest } from "./types";

/** A2 Key practice test 59 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_59: CambridgeTest = {
  id: "key-59",
  level: "key",
  no: 59,
  title: "A2 Key · Practice Test 59",
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
                    "Students must not use the main stairs between lessons. Please use the side stairs.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The main stairs are closed all day.",
                  "Students can't go upstairs.",
                  "Students should use different stairs.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Tom, my phone is broken. If you need me, call my mum's number. Jack",
                  ],
                },
                question: "What does Jack tell Tom?",
                options: [
                  "that he has a new phone",
                  "how to contact him",
                  "that his mum is ill",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BEACH CAFÉ",
                    "Seats inside for customers buying food.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Everyone can sit inside.",
                  "Only people buying food can sit inside.",
                  "There are no seats.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "I've finished my part of the presentation. I'll send it to you tonight so you can add your part. Lucy",
                  ],
                },
                question: "What will Lucy do tonight?",
                options: [
                  "finish the presentation alone",
                  "meet Kate",
                  "send Kate her work",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Talk quietly in this area.",
                    "Silent study on the second floor.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can talk a little here.",
                  "Talking is not allowed anywhere.",
                  "The second floor is for groups.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER JOB",
                    "Fruit pickers needed. July–August.",
                    "Must be 16+. Free accommodation.",
                  ],
                },
                question: "What do we know about the job?",
                options: [
                  "It is all year.",
                  "You can stay there for free.",
                  "It is for children.",
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
                title: "Ivy",
                text: "I love doing gymnastics. I train every day after school for three hours. It's very hard, and I don't have much free time. But I love it. Last year, I was chosen for the national junior team. My dream is to go to the Olympics.",
              },
              {
                title: "Leo",
                text: "My hobby is taking care of animals. I have two rabbits, a hamster and a tortoise. I also volunteer at a wildlife hospital on Saturdays. I help clean the cages and feed the animals. When I'm older, I want to be a vet.",
              },
              {
                title: "Grace",
                text: "I'm a big reader. I read in English and French. My favourite books are mysteries. I'm in a book club at school, and we meet every Thursday. Last year, I won a writing competition with a mystery story. The prize was a set of books by my favourite author.",
              },
            ],
            items: [
              {
                text: "doesn't have a lot of free time?",
                answer: 0,
              },
              {
                text: "has an Olympic dream?",
                answer: 0,
              },
              {
                text: "has several pets?",
                answer: 1,
              },
              {
                text: "helps at a hospital?",
                answer: 1,
              },
              {
                text: "reads in two languages?",
                answer: 2,
              },
              {
                text: "won books?",
                answer: 2,
              },
              {
                text: "knows what job they want?",
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
              title: "Teenage inventor",
              paragraphs: [
                "Seventeen-year-old Ryan Chen has invented a machine that cleans plastic from the sea. 'I saw a video of a turtle with plastic around its neck,' he says. 'I wanted to help.'",
                "Ryan's machine floats on the water and collects small pieces of plastic. 'It uses solar power,' he explains. 'So it doesn't need any fuel.'",
                "It took Ryan two years to build the machine. 'I made lots of mistakes,' he admits. 'The first one sank! But I didn't give up. I kept trying.'",
                "Now a company wants to make Ryan's machine in large numbers. 'I'm so excited,' he says. 'If we can put thousands of these machines in the sea, we can make a real difference.'",
              ],
            },
            items: [
              {
                question: "What gave Ryan the idea?",
                options: [
                  "a video of an animal",
                  "a school lesson",
                  "a trip to the beach",
                ],
                answer: 0,
              },
              {
                question: "What does Ryan's machine use for energy?",
                options: [
                  "petrol",
                  "electricity from a cable",
                  "the sun",
                ],
                answer: 2,
              },
              {
                question: "What happened to the first machine?",
                options: [
                  "It worked perfectly.",
                  "It went under the water.",
                  "It was stolen.",
                ],
                answer: 1,
              },
              {
                question: "What does Ryan say about his mistakes?",
                options: [
                  "He stopped for a year.",
                  "He kept going.",
                  "He asked for help.",
                ],
                answer: 1,
              },
              {
                question: "What will a company do?",
                options: [
                  "give Ryan a job",
                  "buy Ryan's idea for a lot of money",
                  "produce lots of Ryan's machines",
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
            title: "Parrots",
            text: [
              "Parrots are colourful birds that live in warm countries. There are about 400 different kinds of parrot. The {1} is the hyacinth macaw, which is about one metre long.",
              "Parrots are very clever birds. Some can learn to {2} human words. A famous African grey parrot called Alex knew more than a hundred words and could count to six!",
              "Parrots usually live in groups. They are very social, and they {3} to each other with loud calls. They eat fruit, nuts and seeds. Their strong beaks can {4} hard nuts easily. Many parrots can live for a very long time, sometimes more than sixty years. That's why people who {5} a parrot as a pet need to think carefully. Sadly, many kinds of parrot are in danger because people catch them to {6} as pets.",
            ],
            gaps: [
              {
                options: [
                  "longest",
                  "tallest",
                  "largest",
                ],
                answer: 2,
              },
              {
                options: [
                  "copy",
                  "talk",
                  "tell",
                ],
                answer: 0,
              },
              {
                options: [
                  "say",
                  "call",
                  "tell",
                ],
                answer: 1,
              },
              {
                options: [
                  "break",
                  "cut",
                  "hit",
                ],
                answer: 0,
              },
              {
                options: [
                  "need to",
                  "like to",
                  "want",
                ],
                answer: 2,
              },
              {
                options: [
                  "buy",
                  "pay",
                  "sell",
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
              "Hi Ruby,",
              "I'm so excited {1} your visit next month! My parents say you can stay {2} long as you like.",
              "I've planned lots of things for us to do. We can go to the museum, the zoo and the new shopping centre. There's also a great beach {3} we can go swimming.",
              "What would you like to do? Tell me if there's anything special you want to see. My mum asks if there's any food you don't eat. Let me know {4} I can tell her. I can't wait {5} see you. It will be so much fun! Write back {6}!",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "about",
              ],
              [
                "as",
              ],
              [
                "where",
              ],
              [
                "so",
              ],
              [
                "to",
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
            instruction: "You want to buy a present for your English friend, Kim. Write an email to Kim. Write 25 words or more.",
            prompts: [
              "Say why you want to buy a present.",
              "Ask what Kim would like.",
              "Say when you will give it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nIt's your birthday next week, so I want to buy you a present! What would you like? A book, a T-shirt or something else? I'll give it to you at your party on Saturday.\n\nBye,\nBeren",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎒🏫",
                label: "1",
              },
              {
                e: "👦🎒❓😟",
                label: "2",
              },
              {
                e: "👦🎒🐕😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Sam couldn't find his school bag anywhere. He looked in his bedroom, the kitchen and the living room, but it wasn't there. He was going to be late for school! Then he heard a noise in the garden. His dog was lying on the grass, sleeping on his bag! Sam laughed, picked up the bag and ran to school.",
          },
        },
      ],
    },
  ],
};
