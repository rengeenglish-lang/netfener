import type { CambridgeTest } from "./types";

/** A2 Key practice test 82 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_82: CambridgeTest = {
  id: "key-82",
  level: "key",
  no: 82,
  title: "A2 Key · Practice Test 82",
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
                    "Students must wear a helmet when cycling to school.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can't cycle to school.",
                  "Helmets can be bought at school.",
                  "Cyclists must protect their heads.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lily, the dentist has changed your appointment to 4.30 tomorrow. Mum",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the dentist's name",
                  "the day of school",
                  "the time of an appointment",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "Coats and bags must be left in the cloakroom.",
                  ],
                },
                question: "What should visitors do?",
                options: [
                  "leave their things in a special room",
                  "carry their bags",
                  "take their coats in",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jake,",
                    "I've got a new phone number. Here it is: 07722 123456. Please save it. Sam",
                  ],
                },
                question: "Why has Sam sent this email?",
                options: [
                  "to ask for Jake's number",
                  "to give Jake his new number",
                  "to say his phone is broken",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Please shower before entering the pool.",
                  ],
                },
                question: "What should you do?",
                options: [
                  "wash before swimming",
                  "swim quickly",
                  "bring a towel",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "ART EXHIBITION",
                    "Paintings by local students.",
                    "Town hall, all week. Free entry.",
                  ],
                },
                question: "What do we know about the exhibition?",
                options: [
                  "It's for one day only.",
                  "The paintings are by famous artists.",
                  "You don't have to pay.",
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
                title: "Ella",
                text: "I love playing hockey. I play for my school and a local club. Last year, I was chosen for the regional team. We played against teams from all over the country. Next month, I'm going to a training camp for the national team.",
              },
              {
                title: "Sam",
                text: "My hobby is collecting old records. I've got more than three hundred. My dad gave me his collection, and I've added to it. I buy records at second-hand shops. I love listening to music from the 1960s and 1970s.",
              },
              {
                title: "Priya",
                text: "I love cooking. I make cakes and sell them to raise money for charity. Last year, I raised £500 for an animal shelter. I also have a cooking channel online. I show people how to make easy, healthy food.",
              },
            ],
            items: [
              {
                text: "will attend a training camp?",
                answer: 0,
              },
              {
                text: "plays for more than one team?",
                answer: 0,
              },
              {
                text: "got things from a parent?",
                answer: 1,
              },
              {
                text: "buys second-hand things?",
                answer: 1,
              },
              {
                text: "raises money for animals?",
                answer: 2,
              },
              {
                text: "teaches people online?",
                answer: 2,
              },
              {
                text: "enjoys old music?",
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
              title: "The village without cars",
              paragraphs: [
                "In the Netherlands, there's a village called Giethoorn with no roads. Instead, there are canals, and people travel by boat.",
                "'It's very quiet here,' says fifteen-year-old Lotte, who lives in the village. 'You only hear birds and the sound of the water.'",
                "Lotte goes to school by boat. 'In winter, when the canals freeze, I go by ice skates!' she says. 'It's really fun.'",
                "Lots of tourists visit Giethoorn every year. 'In summer, it's very busy,' says Lotte. 'Sometimes there are too many boats on the canals. But I love my village. I don't think I'd like to live in a noisy city.'",
              ],
            },
            items: [
              {
                question: "What is unusual about Giethoorn?",
                options: [
                  "It has no roads.",
                  "It has no people.",
                  "It has no water.",
                ],
                answer: 0,
              },
              {
                question: "What does Lotte say about the village?",
                options: [
                  "It's very noisy.",
                  "It's boring.",
                  "It's very peaceful.",
                ],
                answer: 2,
              },
              {
                question: "How does Lotte go to school in winter?",
                options: [
                  "by car",
                  "by bus",
                  "on ice skates",
                ],
                answer: 2,
              },
              {
                question: "What happens in summer?",
                options: [
                  "There are lots of visitors.",
                  "The canals freeze.",
                  "Lotte goes on holiday.",
                ],
                answer: 0,
              },
              {
                question: "How does Lotte feel about cities?",
                options: [
                  "She wants to move to one.",
                  "She wouldn't like to live in one.",
                  "She loves them.",
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
            title: "Honeybees",
            text: [
              "Honeybees are small insects that live in large groups called colonies. One colony can have more than 50,000 bees! Each colony has one queen, {1} lays all the eggs.",
              "Most bees in the colony are worker bees. They are all female. They collect nectar from flowers and {2} it into honey. They also clean the hive and look after the babies.",
              "Bees talk to each other by dancing! When a bee finds flowers, it goes back to the hive and does a special dance. The dance tells the other bees where the flowers {3}. Bees are very important for people. About a third of the food we eat {4} on bees, because they help plants to grow fruit and seeds. Sadly, the number of bees is falling. We can help them by planting flowers and not using {5} chemicals in our gardens. Without bees, the world would be a very {6} place.",
            ],
            gaps: [
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
                  "turn",
                  "change up",
                  "make up",
                ],
                answer: 0,
              },
              {
                options: [
                  "is",
                  "be",
                  "are",
                ],
                answer: 2,
              },
              {
                options: [
                  "relies up",
                  "depends",
                  "stands",
                ],
                answer: 1,
              },
              {
                options: [
                  "harm",
                  "harmful",
                  "harmless",
                ],
                answer: 1,
              },
              {
                options: [
                  "differently",
                  "difference",
                  "different",
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
              "Hi Jack,",
              "I'm writing to invite you to my birthday party next Saturday. It starts at three o'clock {1} my house.",
              "My mum has organised a treasure hunt in the garden! There will be prizes {2} the winners. After that, we're going to have pizza and a big chocolate cake.",
              "Please wear old clothes, because we might get dirty {3} the treasure hunt! You don't need to bring a present, but if you want, I'd love {4} new book. Can you tell me {5} you can come by Thursday? I hope you can make it. See you {6}!",
              "Oscar",
            ],
            answers: [
              [
                "at",
              ],
              [
                "for",
              ],
              [
                "in",
                "during",
              ],
              [
                "a",
              ],
              [
                "if",
                "whether",
              ],
              [
                "soon",
                "then",
                "saturday",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to go to the cinema. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say which film you want to see.",
              "Say when you want to go.",
              "Ask Alex to come with you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nI want to see the new animated film about a robot. Shall we go on Sunday afternoon at three o'clock? Would you like to come with me?\n\nBye,\nAylin",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🛍️🎁",
                label: "1",
              },
              {
                e: "👩🎁🚂❓",
                label: "2",
              },
              {
                e: "👩🎁👴😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last week, Sarah bought a present for her grandfather's birthday. She took the train to visit him. When she arrived, she realised she had left the present on the train! She was very upset. She called the train company, and they found it. They sent it to her grandfather's house the next day. He loved it.",
          },
        },
      ],
    },
  ],
};
