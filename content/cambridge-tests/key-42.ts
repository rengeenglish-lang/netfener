import type { CambridgeTest } from "./types";

/** A2 Key practice test 42 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_42: CambridgeTest = {
  id: "key-42",
  level: "key",
  no: 42,
  title: "A2 Key · Practice Test 42",
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
                    "STATION CAFÉ",
                    "Coffee and a cake: £3.50 before 10 a.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There is a special offer in the morning.",
                  "The café opens at 10 a.m.",
                  "Cakes are free with coffee.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, the dentist has a free appointment at 4 today. Do you want it? Mum",
                  ],
                },
                question: "Why has Mum sent this message?",
                options: [
                  "to remind Lucy about the dentist",
                  "to tell Lucy she will be late",
                  "to offer Lucy an appointment",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "ZOO",
                    "Please do not tap on the glass. It frightens the animals.",
                  ],
                },
                question: "Why shouldn't you tap on the glass?",
                options: [
                  "The glass might break.",
                  "It scares the animals.",
                  "It's very noisy.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Mark,",
                    "The meeting has moved to Room 5 because Room 3 is being painted. See you at 2. Lisa",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the time of the meeting",
                  "the place of the meeting",
                  "the day of the meeting",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Students can borrow tablets from the library for homework.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Tablets are not allowed in school.",
                  "Students must buy tablets.",
                  "Students can take devices to use at home.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PAINTING CLASSES",
                    "For children aged 6–12.",
                    "Saturday mornings. All materials included.",
                  ],
                },
                question: "What do we know about the classes?",
                options: [
                  "Children don't need to bring paints.",
                  "They are for adults.",
                  "They are in the evening.",
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
                title: "Joe",
                text: "I've been interested in birds since I was very young. I've got a camera with a big lens, and I take photos of birds near my house. I've also built bird boxes for my garden. Last spring, a family of blue tits lived in one of them. I watched the babies grow up.",
              },
              {
                title: "Lara",
                text: "I love dancing. I do ballet three times a week. It's very hard work, and my feet often hurt. But I love performing on stage. In the summer, I'm going to a special ballet school in London for a month. Only twenty students were chosen.",
              },
              {
                title: "Ryan",
                text: "My hobby is learning about history. I visit castles and old buildings with my parents at weekends. I read lots of history books too. I've started a blog where I write about the places I visit. My history teacher reads it and says it's really good.",
              },
            ],
            items: [
              {
                text: "made something for animals?",
                answer: 0,
              },
              {
                text: "observed young animals?",
                answer: 0,
              },
              {
                text: "sometimes has pain?",
                answer: 1,
              },
              {
                text: "was selected for something special?",
                answer: 1,
              },
              {
                text: "writes about their hobby online?",
                answer: 2,
              },
              {
                text: "visits places with family?",
                answer: 2,
              },
              {
                text: "will spend time in a big city?",
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
              title: "A world record",
              paragraphs: [
                "Last year, a group of students from a school in Manchester broke a world record. They made the world's longest paper chain. It was more than seventy kilometres long!",
                "'It was our teacher's idea,' says fourteen-year-old Ella. 'She wanted to do something fun to raise money for the school library.'",
                "The students worked on the chain for three months. 'We used recycled paper,' explains Ella. 'Everyone helped: students, teachers and parents. Even the head teacher made some!'",
                "When the chain was finished, people from the World Records organisation came to measure it. 'We were so excited when they said we'd broken the record,' says Ella. 'We raised £2,000 for new books.'",
              ],
            },
            items: [
              {
                question: "What did the students make?",
                options: [
                  "a big book",
                  "a very long paper chain",
                  "a paper house",
                ],
                answer: 1,
              },
              {
                question: "Whose idea was it?",
                options: [
                  "a teacher's",
                  "Ella's",
                  "the head teacher's",
                ],
                answer: 0,
              },
              {
                question: "What kind of paper did they use?",
                options: [
                  "new paper",
                  "coloured paper",
                  "old paper",
                ],
                answer: 2,
              },
              {
                question: "Who helped make the chain?",
                options: [
                  "only the students",
                  "many people at the school",
                  "a company",
                ],
                answer: 1,
              },
              {
                question: "What did they do with the money?",
                options: [
                  "went on a trip",
                  "bought books",
                  "gave it to a hospital",
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
            title: "Ostriches",
            text: [
              "The ostrich is the largest bird in the world. It can {1} up to 2.7 metres tall and weigh more than 150 kilos.",
              "Ostriches can't fly, but they can run very fast. They can {2} speeds of seventy kilometres an hour. Their long, strong legs also help them {3} themselves. One kick from an ostrich can be very dangerous!",
              "Ostriches live in Africa, in dry areas with grass and bushes. They eat plants, seeds and small insects. They can go for a long time {4} drinking water. Ostriches lay the biggest eggs of any bird. One ostrich egg is about the same {5} as twenty-four chicken eggs! Some people think that ostriches put their heads in the sand when they're afraid. But this isn't {6}. They just lie down flat on the ground.",
            ],
            gaps: [
              {
                options: [
                  "rise",
                  "grow",
                  "go",
                ],
                answer: 1,
              },
              {
                options: [
                  "get",
                  "arrive",
                  "reach",
                ],
                answer: 2,
              },
              {
                options: [
                  "defend",
                  "save",
                  "help",
                ],
                answer: 0,
              },
              {
                options: [
                  "except",
                  "without",
                  "with",
                ],
                answer: 1,
              },
              {
                options: [
                  "size",
                  "big",
                  "large",
                ],
                answer: 0,
              },
              {
                options: [
                  "real",
                  "right",
                  "true",
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
              "Hi Ali,",
              "Thank you for helping me with my science project last week. I got the best mark {1} the class! My teacher said it was excellent.",
              "I couldn't {2} done it without you. You explained everything so clearly.",
              "I'd like to say thank you. Would you like to come to the cinema with me {3} Saturday? I'll buy the tickets and popcorn! There's a new action film that I think you'll like. It starts {4} three o'clock. We could meet outside the cinema {5} half past two. Let me know {6} you can come.",
              "Thanks again,",
              "Sam",
            ],
            answers: [
              [
                "in",
              ],
              [
                "have",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "at",
              ],
              [
                "at",
              ],
              [
                "if",
                "whether",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have a new neighbour. Write an email to your English friend, Jo. Write 25 words or more.",
            prompts: [
              "Say who your new neighbour is.",
              "Describe them.",
              "Say what you did together.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nWe have a new neighbour called Leyla. She's twelve, the same age as me. She's tall, with long dark hair, and she's very funny. Yesterday, we rode our bikes together in the park.\n\nBye,\nDila",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦📚🏫",
                label: "1",
              },
              {
                e: "👦📕🚌❓",
                label: "2",
              },
              {
                e: "👦📕🏠😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Monday, Ben borrowed a book from the school library. On the way home, he left it on the bus. He was very worried because it wasn't his book. The next day, he went to the bus station and asked about it. A woman at the lost property office gave the book back to him. Ben was very relieved.",
          },
        },
      ],
    },
  ],
};
