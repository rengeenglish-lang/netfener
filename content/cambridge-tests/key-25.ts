import type { CambridgeTest } from "./types";

/** A2 Key practice test 25 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_25: CambridgeTest = {
  id: "key-25",
  level: "key",
  no: 25,
  title: "A2 Key · Practice Test 25",
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
                    "Card payments only.",
                    "We do not accept cash.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must pay with cash.",
                  "You must pay by card.",
                  "The café is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Alice, I'm going to the gym after work. Do you want to come? I'll be there at 6. Sophie",
                  ],
                },
                question: "Why has Sophie sent this message?",
                options: [
                  "to ask Alice to join her",
                  "to cancel a plan",
                  "to ask what time it is",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "Bags must be left in the lockers.",
                    "Lockers are free.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Bags are not allowed in the lockers.",
                  "Lockers cost money.",
                  "Visitors must not take bags into the museum.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Dan,",
                    "I've finished reading your book. Shall I give it back tomorrow, or can I lend it to my sister? Tom",
                  ],
                },
                question: "What does Tom want to know?",
                options: [
                  "where he can buy the book",
                  "if he can give the book to someone else",
                  "when Dan wrote the book",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "TRAIN",
                    "Quiet coach. Please do not use mobile phones in this carriage.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Mobile phones are sold here.",
                  "Passengers should not make phone calls here.",
                  "This carriage is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PET SITTER",
                    "I can look after your cat or dog while you're on holiday.",
                    "Reasonable prices. Call Jenny.",
                  ],
                },
                question: "What does Jenny offer to do?",
                options: [
                  "sell pets",
                  "train dogs",
                  "take care of people's animals",
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
                title: "Alfie",
                text: "I love fishing. I go to the lake with my dad early every Sunday morning. We usually catch about ten fish, but we always put them back. Last month, I caught the biggest fish of my life. My dad took a photo of it, and it was in the local newspaper.",
              },
              {
                title: "Bella",
                text: "My hobby is painting. I paint landscapes and animals. I've had lessons from a local artist for two years. Last summer, I had my own small exhibition at a café in my town. I sold three paintings! I used the money to buy better paints and brushes.",
              },
              {
                title: "Callum",
                text: "I'm a keen gamer, but I also play the piano. I practise for an hour every day after school. I've passed my grade five exam. My piano teacher says I could go to music college. I'd love that, but I also want to study computer science. I can't decide!",
              },
            ],
            items: [
              {
                text: "appeared in the news?",
                answer: 0,
              },
              {
                text: "sold some of their work?",
                answer: 1,
              },
              {
                text: "has two different interests?",
                answer: 2,
              },
              {
                text: "has a decision to make about the future?",
                answer: 2,
              },
              {
                text: "has had the same teacher for a while?",
                answer: 1,
              },
              {
                text: "does their hobby with a parent?",
                answer: 0,
              },
              {
                text: "has passed an exam?",
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
              title: "Living with grandparents",
              paragraphs: [
                "Fourteen-year-old Sara lives with her parents, her brother and her grandparents in a big house in Istanbul. 'There are seven of us!' she says. 'It's never quiet.'",
                "Sara's grandmother does most of the cooking. 'She makes the best food in the world,' says Sara. 'She's teaching me her recipes, so I can cook them for my own family one day.'",
                "Sara's grandfather was a history teacher. 'He helps me with my homework,' she says. 'And he tells me amazing stories about the city in the past. I've learned so much from him.'",
                "Sometimes it's not easy. 'We all want to watch different things on TV!' laughs Sara. 'But I'm lucky. My grandparents are always there for me. Most of my friends only see their grandparents at the weekend.'",
              ],
            },
            items: [
              {
                question: "How many people live in Sara's house?",
                options: [
                  "seven",
                  "five",
                  "four",
                ],
                answer: 0,
              },
              {
                question: "What is Sara's grandmother doing?",
                options: [
                  "writing a cookbook",
                  "teaching Sara to cook",
                  "opening a restaurant",
                ],
                answer: 1,
              },
              {
                question: "How does Sara's grandfather help her?",
                options: [
                  "with her schoolwork",
                  "with her cooking",
                  "with her sports",
                ],
                answer: 0,
              },
              {
                question: "What sometimes causes a problem in the house?",
                options: [
                  "doing housework",
                  "having enough rooms",
                  "choosing what to watch",
                ],
                answer: 2,
              },
              {
                question: "Why does Sara feel lucky?",
                options: [
                  "She has her own TV.",
                  "She sees her grandparents every day.",
                  "Her house is very quiet.",
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
            title: "The Eiffel Tower",
            text: [
              "The Eiffel Tower in Paris is one of the most famous {1} in the world. It was built for a big exhibition in 1889. At first, many people in Paris didn't like it. They thought it was ugly!",
              "The tower is 330 metres tall. When it was built, it was the tallest building in the world, and it {2} the tallest for forty-one years.",
              "Every seven years, the tower is painted. Workers use sixty tonnes of paint to {3} it from rust. About seven million people {4} the tower every year. You can take a lift or walk up the stairs. There are 674 steps to the second floor! At night, the tower is {5} with thousands of lights. It looks beautiful. Today, it's hard to imagine Paris {6} the Eiffel Tower.",
            ],
            gaps: [
              {
                options: [
                  "houses",
                  "buildings",
                  "places",
                ],
                answer: 1,
              },
              {
                options: [
                  "kept",
                  "stayed",
                  "lasted",
                ],
                answer: 1,
              },
              {
                options: [
                  "save",
                  "help",
                  "protect",
                ],
                answer: 2,
              },
              {
                options: [
                  "visit",
                  "see",
                  "go",
                ],
                answer: 0,
              },
              {
                options: [
                  "full",
                  "covered",
                  "filled",
                ],
                answer: 1,
              },
              {
                options: [
                  "without",
                  "except",
                  "with",
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
              "Hi Lucy,",
              "I'm really sorry I missed your call yesterday. I {1} at my grandma's house, and I left my phone at home.",
              "You asked me about the science project. I've started it, {2} I haven't finished yet. I'm doing mine about volcanoes. What's yours about?",
              "Maybe we could work on our projects together? We {3} go to the library on Saturday morning. There are lots of good books there. After that, we could have lunch {4} my house. My mum is making pasta! Call me {5} you get this message. Talk {6} soon!",
              "Grace",
            ],
            answers: [
              [
                "was",
              ],
              [
                "but",
              ],
              [
                "could",
                "can",
              ],
              [
                "at",
              ],
              [
                "when",
              ],
              [
                "to",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You went to a museum last weekend. Write an email to your English friend, Robin. Write 25 words or more.",
            prompts: [
              "Say which museum you visited.",
              "Say what you saw there.",
              "Say if you enjoyed it and why.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Robin' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Robin,\n\nLast Sunday, I visited the science museum with my class. We saw lots of old machines and a real rocket. I really enjoyed it because the guide was very funny and I learned a lot.\n\nBye,\nBerk",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🎂🏠",
                label: "1",
              },
              {
                e: "👨‍👩‍👧🎉😮",
                label: "2",
              },
              {
                e: "👩🎁😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "It was Mum's birthday, but she thought everyone had forgotten. She came home from work feeling sad. When she opened the door, her family and friends shouted 'Surprise!' The house was full of balloons and there was a big cake on the table. Mum was very surprised and happy. She opened her presents and everyone had a wonderful evening.",
          },
        },
      ],
    },
  ],
};
