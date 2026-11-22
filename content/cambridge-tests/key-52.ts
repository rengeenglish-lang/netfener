import type { CambridgeTest } from "./types";

/** A2 Key practice test 52 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_52: CambridgeTest = {
  id: "key-52",
  level: "key",
  no: 52,
  title: "A2 Key · Practice Test 52",
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
                    "Lost property will be kept for two weeks only.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost property is kept forever.",
                  "Lost things won't be kept for long.",
                  "You can't leave things here.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, Dad can drive us to the party, but we need to leave at 6.30. Can you be ready? Lucy",
                  ],
                },
                question: "What does Lucy want to know?",
                options: [
                  "if Jo can drive",
                  "if Jo can be ready on time",
                  "where the party is",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE RING THE BELL FOR SERVICE",
                  ],
                },
                question: "What should you do?",
                options: [
                  "wait outside",
                  "phone the shop",
                  "press a button to call someone",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Our science homework is due tomorrow, not Friday. Mr Hill changed it today. Don't forget! Tom",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the day the homework must be given in",
                  "the homework topic",
                  "the science teacher",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "FREE WI-FI",
                    "Password: available from the waiter.",
                  ],
                },
                question: "How can you get the password?",
                options: [
                  "look on the menu",
                  "ask a member of staff",
                  "pay at the counter",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "CAR WASH",
                    "Students washing cars to raise money for their school trip.",
                    "Saturday 10–4, school car park.",
                  ],
                },
                question: "Why are the students washing cars?",
                options: [
                  "to pay for a trip",
                  "to earn pocket money",
                  "to learn a new skill",
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
                title: "Amber",
                text: "I'm a keen runner. I'm in the school athletics team, and I train every day. My best event is the 1,500 metres. Last year, I broke a school record that was thirty years old! My coach thinks I could get a sports scholarship to a good university.",
              },
              {
                title: "Finn",
                text: "My hobby is collecting fossils. I go to the beach near my town, where there are lots of fossils in the rocks. I've found more than a hundred, including a fossil of a fish that's millions of years old. I took it to the local museum, and they put it on display.",
              },
              {
                title: "Hana",
                text: "I love learning about other cultures. I'm learning Korean from online videos, and I cook Korean food at home. Next year, I'm going on a school exchange to Seoul. I'll live with a Korean family for three weeks. I'm so excited!",
              },
            ],
            items: [
              {
                text: "beat a very old record?",
                answer: 0,
              },
              {
                text: "might study with financial help?",
                answer: 0,
              },
              {
                text: "finds things outdoors?",
                answer: 1,
              },
              {
                text: "had something they found shown to the public?",
                answer: 1,
              },
              {
                text: "will stay with a family abroad?",
                answer: 2,
              },
              {
                text: "teaches themselves using the internet?",
                answer: 2,
              },
              {
                text: "trains daily?",
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
              title: "The flying doctor",
              paragraphs: [
                "In the Australian outback, people live very far from towns and hospitals. Some families live hundreds of kilometres from the nearest doctor. That's why the Royal Flying Doctor Service exists.",
                "Doctors and nurses fly in small planes to visit sick people. 'We land on dirt roads and in fields,' says Dr Sarah Wilson. 'Sometimes we have to wait for kangaroos to move!'",
                "Sarah has been a flying doctor for ten years. 'Every day is different,' she says. 'One day, I might help a farmer with a broken leg. The next day, I might deliver a baby.'",
                "The service also helps people by radio and video calls. 'Children who live on farms often have school lessons by radio too,' explains Sarah. 'Life in the outback is very different from life in the city.'",
              ],
            },
            items: [
              {
                question: "Why does the Flying Doctor Service exist?",
                options: [
                  "There aren't enough roads.",
                  "City hospitals are too busy.",
                  "Many people live far from hospitals.",
                ],
                answer: 2,
              },
              {
                question: "What can be a problem when the planes land?",
                options: [
                  "There's too much traffic.",
                  "Animals might be in the way.",
                  "The weather is always bad.",
                ],
                answer: 1,
              },
              {
                question: "What does Sarah say about her job?",
                options: [
                  "It is boring.",
                  "Each day is different.",
                  "It is easy.",
                ],
                answer: 1,
              },
              {
                question: "How else does the service help people?",
                options: [
                  "by driving to them",
                  "by sending medicine by post",
                  "by radio and video calls",
                ],
                answer: 2,
              },
              {
                question: "What do we learn about children on farms?",
                options: [
                  "Some have lessons by radio.",
                  "They go to school in the city.",
                  "They don't go to school.",
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
            title: "Peppers",
            text: [
              "Chilli peppers are used in cooking all over the world. They give food a hot, spicy {1}. Some people love them, and others can't eat them at all!",
              "Chilli peppers first grew in Central and South America. Christopher Columbus {2} them to Europe in the fifteenth century. Soon they spread to Asia and Africa.",
              "The hotness of a chilli is measured on a scale. Sweet peppers have a score of zero, but the hottest chillies {3} more than two million! If you eat a very hot chilli, don't drink water. It will make your mouth feel {4}. Milk is better. Chillies are good for you. They have lots of vitamin C. Some people also {5} that eating chillies makes you happier. In some countries, there are competitions to see who can eat the most chillies. But be careful: they can make you very {6}!",
            ],
            gaps: [
              {
                options: [
                  "taste",
                  "smell",
                  "look",
                ],
                answer: 0,
              },
              {
                options: [
                  "carried",
                  "brought",
                  "held",
                ],
                answer: 1,
              },
              {
                options: [
                  "score",
                  "make",
                  "win",
                ],
                answer: 0,
              },
              {
                options: [
                  "bad",
                  "worst",
                  "worse",
                ],
                answer: 2,
              },
              {
                options: [
                  "know",
                  "learn",
                  "believe",
                ],
                answer: 2,
              },
              {
                options: [
                  "ill",
                  "wrong",
                  "badly",
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
              "Hi Sophie,",
              "Thank you {1} inviting me to your house for the weekend. I had a fantastic time! Your parents are really kind.",
              "I loved the walk in the forest {2} Saturday, and the pizza your dad made was delicious. I've told my mum about it, and now she wants the recipe!",
              "I'd like you to come and stay at my house {3}. Maybe in the summer holidays? We could go to the beach every day, because it's very close {4} my house. Let me know {5} you think. Say thank you to your parents again {6} me.",
              "Love,",
              "Ruby",
            ],
            answers: [
              [
                "for",
              ],
              [
                "on",
              ],
              [
                "next",
                "soon",
              ],
              [
                "to",
              ],
              [
                "what",
              ],
              [
                "from",
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have started learning a musical instrument. Write an email to your English friend, Jo. Write 25 words or more.",
            prompts: [
              "Say which instrument you are learning.",
              "Say who teaches you.",
              "Say how often you practise.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nI've started learning the violin! My teacher is called Mrs Aydın and she's very patient. I have a lesson every Tuesday, and I practise at home for twenty minutes every day.\n\nBye,\nLara",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩📞🏠",
                label: "1",
              },
              {
                e: "👩🚕🏥",
                label: "2",
              },
              {
                e: "👩👶😊🏥",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Late one night, Mrs Wilson got a phone call from her daughter. Her daughter was going to have a baby! Mrs Wilson quickly got dressed and called a taxi. The taxi took her to the hospital as fast as possible. When she arrived, her new grandson had just been born. She held him in her arms and felt very happy.",
          },
        },
      ],
    },
  ],
};
