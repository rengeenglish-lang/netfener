import type { CambridgeTest } from "./types";

/** A2 Key practice test 92 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_92: CambridgeTest = {
  id: "key-92",
  level: "key",
  no: 92,
  title: "A2 Key · Practice Test 92",
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
                    "The music room is closed this week for painting.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't use the music room this week.",
                  "Music lessons are in the hall.",
                  "The music room is new.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, I've lost my phone. If you need me, call my home number. Ann",
                  ],
                },
                question: "What does Ann tell Jo?",
                options: [
                  "that she has a new phone",
                  "how to contact her",
                  "that she found Jo's phone",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE USE THE BINS",
                    "Keep our beach clean.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Put your rubbish in the bins.",
                  "The beach is closed.",
                  "Bins are for sale.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "Can you help me with my maths homework tonight? I don't understand question 5. Ben",
                  ],
                },
                question: "What does Ben want?",
                options: [
                  "Tom's homework",
                  "a new maths book",
                  "help with his homework",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Fresh bread baked every morning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Bread is free in the morning.",
                  "The bread is made daily.",
                  "The bakery is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BIKE HIRE",
                    "£5 per hour or £20 per day.",
                    "Helmets free.",
                  ],
                },
                question: "What do we know about the bike hire?",
                options: [
                  "It costs £5 per day.",
                  "You don't pay for a helmet.",
                  "Helmets cost extra.",
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
                title: "Isabella",
                text: "I love horse riding. I've been riding since I was six. Last year, I competed in a show jumping competition and won second prize. My horse is called Star. I look after him every day before and after school.",
              },
              {
                title: "Jack",
                text: "My hobby is fishing. I go fishing with my dad every Sunday morning. We go to a lake near our house. Last month, I caught the biggest fish I've ever caught. It was nearly a metre long! We took a photo and then put it back.",
              },
              {
                title: "Sophie",
                text: "I'm interested in fashion. I design clothes and make them myself. Last year, I won a design competition at school. My design was a dress made from recycled plastic bags! It was shown in a fashion show.",
              },
            ],
            items: [
              {
                text: "came second in a competition?",
                answer: 0,
              },
              {
                text: "looks after an animal twice a day?",
                answer: 0,
              },
              {
                text: "does their hobby with a parent?",
                answer: 1,
              },
              {
                text: "caught something big?",
                answer: 1,
              },
              {
                text: "used recycled materials?",
                answer: 2,
              },
              {
                text: "had their work shown?",
                answer: 2,
              },
              {
                text: "does their hobby on Sundays?",
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
              title: "The tallest building",
              paragraphs: [
                "The Burj Khalifa in Dubai is the tallest building in the world. It is 828 metres tall and has 163 floors!",
                "The building took six years to build. More than 12,000 workers helped to build it. It opened in 2010.",
                "The Burj Khalifa has apartments, offices and a hotel. There's also an observation deck on the 148th floor. 'The view is amazing,' says visitor Sarah. 'You can see the desert and the sea.'",
                "The lifts in the Burj Khalifa are some of the fastest in the world. They travel at ten metres per second. 'It takes only one minute to get to the top,' says Sarah. 'My ears hurt a bit, but it was worth it!'",
              ],
            },
            items: [
              {
                question: "How tall is the Burj Khalifa?",
                options: [
                  "163 metres",
                  "148 metres",
                  "828 metres",
                ],
                answer: 2,
              },
              {
                question: "How long did it take to build?",
                options: [
                  "six years",
                  "one year",
                  "ten years",
                ],
                answer: 0,
              },
              {
                question: "What can you find in the building?",
                options: [
                  "only offices",
                  "apartments, offices and a hotel",
                  "only a hotel",
                ],
                answer: 1,
              },
              {
                question: "What can you see from the observation deck?",
                options: [
                  "the desert and the sea",
                  "mountains",
                  "forests",
                ],
                answer: 0,
              },
              {
                question: "How long does it take to get to the top?",
                options: [
                  "an hour",
                  "ten minutes",
                  "about a minute",
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
            title: "Dolphins",
            text: [
              "Dolphins are very intelligent animals. They live in groups called pods and {1} with each other using clicks and whistles.",
              "Dolphins are mammals, not fish. They breathe air through a hole on the top of their heads. They need to come to the {2} of the water to breathe.",
              "Dolphins are very good swimmers. Some dolphins can swim at more than thirty kilometres an hour. They also love to jump out of the water and {3} the waves. Dolphins eat fish and squid. They use sound to find their food. This is called echolocation. Dolphins are very friendly. There are many stories of dolphins {4} people in the sea. Sadly, many dolphins are hurt by fishing nets and pollution. We need to {5} the oceans clean to {6} these amazing animals.",
            ],
            gaps: [
              {
                options: [
                  "talk up",
                  "speak up",
                  "communicate",
                ],
                answer: 2,
              },
              {
                options: [
                  "top up",
                  "surface",
                  "face",
                ],
                answer: 1,
              },
              {
                options: [
                  "drive",
                  "ride",
                  "walk up",
                ],
                answer: 1,
              },
              {
                options: [
                  "making",
                  "doing",
                  "helping",
                ],
                answer: 2,
              },
              {
                options: [
                  "keep",
                  "hold up",
                  "stay",
                ],
                answer: 0,
              },
              {
                options: [
                  "keep up",
                  "protect",
                  "guard on",
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
              "Thank you for coming to my birthday party. I hope you {1} a good time.",
              "Thank you {2} for the present. I love the book about football! I've already read half of it.",
              "My mum took lots of photos at the party. I'll send you some of them. There's a funny one of you {3} cake on your face! Are you coming to football practice on Thursday? We {4} walk there together. Let me know {5} you think. See you {6}!",
              "Oscar",
            ],
            answers: [
              [
                "had",
              ],
              [
                "also",
                "too",
              ],
              [
                "with",
              ],
              [
                "could",
                "can",
              ],
              [
                "what",
              ],
              [
                "soon",
                "then",
                "thursday",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a concert with your family. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say who is playing.",
              "Say where the concert is.",
              "Say why you are excited.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nNext Friday, I'm going to a concert with my family. My favourite band is playing at the big stadium in the city. I'm excited because I've never seen them live before!\n\nBye,\nBerk",
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
                e: "👦📝❓😟",
                label: "2",
              },
              {
                e: "👦👨‍🏫📝😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Ben had a very difficult maths test at school. He didn't understand the questions and he felt very worried. After the test, he talked to his teacher. She said he could have extra lessons after school. Ben went to the lessons every week. A month later, he took another test and got a very good mark. He was very happy.",
          },
        },
      ],
    },
  ],
};
