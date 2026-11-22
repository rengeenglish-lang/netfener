import type { CambridgeTest } from "./types";

/** A2 Key practice test 76 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_76: CambridgeTest = {
  id: "key-76",
  level: "key",
  no: 76,
  title: "A2 Key · Practice Test 76",
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
                    "Students may use the computer room after school until 5 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The computer room is closed after school.",
                  "Students can use computers after lessons.",
                  "Computers are only for teachers.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, the cinema is showing the film we wanted to see on Friday. Shall I book tickets? Emma",
                  ],
                },
                question: "What does Emma want to know?",
                options: [
                  "what film Grace likes",
                  "if she should get tickets",
                  "when the cinema opens",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE KEEP DOGS ON A LEAD",
                    "Farm animals in fields.",
                  ],
                },
                question: "Why should dogs be on a lead?",
                options: [
                  "The path is dangerous.",
                  "Dogs aren't allowed.",
                  "There are animals nearby.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "I've finished painting the fence. Can you help me with the garden next Saturday? Grandpa",
                  ],
                },
                question: "What does Grandpa want Ben to do?",
                options: [
                  "help him in the garden",
                  "paint the fence",
                  "visit him on Sunday",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "Changing rooms are being cleaned 2–3 p.m. daily.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The changing rooms are closed all day.",
                  "You can't use the changing rooms for one hour every day.",
                  "The sports centre closes at 2.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "VOLUNTEERS NEEDED",
                    "Help at our animal shelter at weekends.",
                    "No experience needed – just love animals!",
                  ],
                },
                question: "What do we know about the volunteers?",
                options: [
                  "They don't need experience.",
                  "They will be paid.",
                  "They must work every day.",
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
                title: "Harry",
                text: "I love hiking. My family and I walk in the mountains almost every weekend. Last summer, we walked across Scotland. It took two weeks, and we carried everything on our backs. I loved being in nature and away from computers.",
              },
              {
                title: "Lily",
                text: "My hobby is learning the violin. I've been playing for five years. I practise every day, even when I'm tired. Last year, I passed a difficult exam with the top grade. My teacher wants me to apply to a music school in London.",
              },
              {
                title: "Omar",
                text: "I'm interested in film-making. I make short films with my friends and edit them on my laptop. We wrote a film about a haunted school. It won a prize at a film festival for teenagers! Now we're making a comedy.",
              },
            ],
            items: [
              {
                text: "went on a long journey?",
                answer: 0,
              },
              {
                text: "enjoys being away from technology?",
                answer: 0,
              },
              {
                text: "practises daily?",
                answer: 1,
              },
              {
                text: "has been advised to apply somewhere?",
                answer: 1,
              },
              {
                text: "works on projects with friends?",
                answer: 2,
              },
              {
                text: "won a prize at a festival?",
                answer: 2,
              },
              {
                text: "did well in an exam?",
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
              title: "The girl who knits for penguins",
              paragraphs: [
                "Nine-year-old Mia has knitted more than fifty small jumpers for penguins. 'I saw on the news that some penguins got oil on their feathers,' she says. 'The jumpers stop them from cleaning their feathers and getting ill.'",
                "Mia's grandmother taught her to knit when she was six. 'At first, I made scarves for my dolls,' laughs Mia. 'But then I wanted to do something useful.'",
                "Mia sends the jumpers to a penguin rescue centre in Australia. 'They wrote me a letter to say thank you,' she says proudly. 'They sent me photos of penguins wearing my jumpers!'",
                "Mia's school friends have started knitting too. 'We meet every Wednesday at lunchtime,' she says. 'We want to make a hundred jumpers by the end of the year.'",
              ],
            },
            items: [
              {
                question: "Why do penguins need jumpers?",
                options: [
                  "to keep them warm",
                  "to make them look nice",
                  "to stop them getting ill after oil spills",
                ],
                answer: 2,
              },
              {
                question: "Who taught Mia to knit?",
                options: [
                  "her mother",
                  "her grandmother",
                  "her teacher",
                ],
                answer: 1,
              },
              {
                question: "What did Mia knit at first?",
                options: [
                  "jumpers for penguins",
                  "scarves for toys",
                  "hats for her friends",
                ],
                answer: 1,
              },
              {
                question: "What did the rescue centre send Mia?",
                options: [
                  "money",
                  "a penguin",
                  "a letter and photos",
                ],
                answer: 2,
              },
              {
                question: "What do Mia's friends want to do?",
                options: [
                  "make many more jumpers",
                  "visit Australia",
                  "start a business",
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
            title: "Lighthouses",
            text: [
              "Lighthouses are tall towers with bright lights on top. They are built on coasts and islands to {1} ships away from dangerous rocks.",
              "The first lighthouses were fires on top of hills. The most famous ancient lighthouse was in Alexandria, Egypt. It was more than 100 metres tall and was one of the Seven {2} of the Ancient World.",
              "In the past, every lighthouse had a keeper. The keeper lived in the lighthouse and made sure the light was always {3}. It was a lonely job, especially on small islands. Today, most lighthouses are {4}, so they don't need keepers. Ships also use satellites and computers to find their way. But lighthouses are still useful, especially on dark and {5} nights. Many old lighthouses are now museums or hotels, where tourists can {6} the night.",
            ],
            gaps: [
              {
                options: [
                  "guide",
                  "lead up",
                  "show up",
                ],
                answer: 0,
              },
              {
                options: [
                  "Sights",
                  "Wonders",
                  "Views",
                ],
                answer: 1,
              },
              {
                options: [
                  "on",
                  "in",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "alone",
                  "themselves",
                  "automatic",
                ],
                answer: 2,
              },
              {
                options: [
                  "storm",
                  "stormily",
                  "stormy",
                ],
                answer: 2,
              },
              {
                options: [
                  "spend",
                  "pass up",
                  "use",
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
              "Hi Amy,",
              "I'm writing to tell you about my school trip to France. We went {1} five days. It was the best trip ever!",
              "We stayed with French families. My family was really kind. They had a daughter {2} my age, called Claire. We're going to stay in touch. She taught me lots of French words.",
              "We visited Paris {3} one day and saw the Eiffel Tower. We also visited a castle and a chocolate factory. I ate so much chocolate! Have you ever {4} to France? I'd love to go back. Write soon and tell me {5} your news. Hello {6} your family!",
              "Love,",
              "Sophie",
            ],
            answers: [
              [
                "for",
              ],
              [
                "of",
              ],
              [
                "on",
                "for",
              ],
              [
                "been",
              ],
              [
                "all",
                "about",
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
            instruction: "You are going to a museum next weekend. Write an email to your English friend, Jamie. Write 25 words or more.",
            prompts: [
              "Say which museum you will visit.",
              "Say why you want to go.",
              "Invite Jamie to come.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nNext Saturday, I'm going to visit the natural history museum. I want to go because there's a new exhibition about dinosaurs. Would you like to come with me?\n\nBye,\nTaylan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🍳🍲",
                label: "1",
              },
              {
                e: "👩📞🔥😱",
                label: "2",
              },
              {
                e: "👩🍕👨‍👩‍👧😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One evening, Mrs Smith was cooking soup for dinner. Her phone rang, and she talked to her sister for a long time. She forgot about the soup, and it burned! The kitchen was full of smoke. When her family came home, they all laughed. Instead of soup, they ordered pizza and had a fun evening together.",
          },
        },
      ],
    },
  ],
};
