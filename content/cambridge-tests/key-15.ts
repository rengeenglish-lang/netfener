import type { CambridgeTest } from "./types";

/** A2 Key practice test 15 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_15: CambridgeTest = {
  id: "key-15",
  level: "key",
  no: 15,
  title: "A2 Key · Practice Test 15",
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
                    "CINEMA",
                    "Children's films every Saturday morning.",
                    "Tickets only £2!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't watch films on Saturday.",
                  "All tickets cost £2.",
                  "Saturday morning films are cheap.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Paul, I'm running late. Start the meeting without me. I'll be there in 20 minutes. Rob",
                  ],
                },
                question: "What does Rob want Paul to do?",
                options: [
                  "begin the meeting",
                  "wait for him",
                  "cancel the meeting",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "HOSPITAL",
                    "Visiting hours: 2–4 p.m. and 6–8 p.m.",
                    "No more than two visitors per patient.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Visitors can come at any time.",
                  "Only two people can visit a patient at once.",
                  "Visitors can only come in the morning.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "I've booked a table for six people at the Italian restaurant for Friday at eight. Can you tell the others? Jack",
                  ],
                },
                question: "What does Jack want Ella to do?",
                options: [
                  "tell the others about the booking",
                  "book a restaurant",
                  "cook dinner on Friday",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Students who walk or cycle to school can get a free breakfast.",
                    "Ask in the canteen.",
                  ],
                },
                question: "Who can get breakfast without paying?",
                options: [
                  "students who arrive early",
                  "all students",
                  "students who don't come by car or bus",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "HOLIDAY COTTAGE",
                    "Sleeps 4. Near the beach. Pets welcome!",
                    "Available from June. Email for prices.",
                  ],
                },
                question: "What do we know about the cottage?",
                options: [
                  "It is far from the sea.",
                  "You can bring your dog.",
                  "It is available now.",
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
                title: "Grace",
                text: "I play the trumpet in a jazz band. We practise every Friday night at a music school. The band has twelve people, and I'm the only girl. We play at weddings and parties, so we sometimes earn some money. I want to study music at university.",
              },
              {
                title: "Harry",
                text: "I love bird-watching. I keep a notebook where I write down every bird I see. So far, I've seen 150 different kinds. I often go to a nature reserve near my town with my binoculars. Last spring, I saw a very rare bird there. I took a photo and sent it to a nature website.",
              },
              {
                title: "Isla",
                text: "My hobby is skateboarding. I go to the skate park after school every day with my friends. We teach each other new tricks. I've broken my arm twice, but I don't care. I love it! My parents worry, but they bought me good safety equipment.",
              },
            ],
            items: [
              {
                text: "sometimes gets paid for their hobby?",
                answer: 0,
              },
              {
                text: "writes things down?",
                answer: 1,
              },
              {
                text: "has been hurt doing their hobby?",
                answer: 2,
              },
              {
                text: "is different from the others in their group?",
                answer: 0,
              },
              {
                text: "shared something with an online group?",
                answer: 1,
              },
              {
                text: "learns from people of the same age?",
                answer: 2,
              },
              {
                text: "has plans for further studies?",
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
              title: "A very special library",
              paragraphs: [
                "In a small village in Colombia, there is a very unusual library. It doesn't have a building. Instead, the books travel on the backs of two donkeys!",
                "Luis Soriano, a teacher, started the library in 1997. 'Many children here don't have any books at home,' he explains. 'And the nearest town with a library is very far away. So I decided to take the books to them.'",
                "Every weekend, Luis travels to villages in the mountains with his donkeys. When he arrives, the children run to meet him. He reads stories to them and lends them books for the week.",
                "At first, Luis had only seventy books. Now, thanks to people who have given him books, he has more than 4,000. 'Reading opens doors,' he says. 'It helps children dream about their future.'",
              ],
            },
            items: [
              {
                question: "What is unusual about the library?",
                options: [
                  "It's in a big building.",
                  "It only has a few books.",
                  "Animals carry the books.",
                ],
                answer: 2,
              },
              {
                question: "Why did Luis start the library?",
                options: [
                  "He wanted to sell books.",
                  "His school asked him to.",
                  "Children in the area had no books.",
                ],
                answer: 2,
              },
              {
                question: "What happens when Luis arrives in a village?",
                options: [
                  "Children come to see him.",
                  "He teaches the children maths.",
                  "He sells the books.",
                ],
                answer: 0,
              },
              {
                question: "How has the library changed?",
                options: [
                  "It now has a building.",
                  "It now has many more books.",
                  "It now uses a car.",
                ],
                answer: 1,
              },
              {
                question: "What does Luis believe about reading?",
                options: [
                  "It helps children think about what they could become.",
                  "It isn't as important as maths.",
                  "It is only for older children.",
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
            title: "Bamboo",
            text: [
              "Bamboo is a kind of grass, but it can grow as tall {1} a tree. Some kinds of bamboo can grow almost a metre in a single day! That makes it the {2} growing plant in the world.",
              "Bamboo grows in many hot countries, especially in Asia. People have {3} it for thousands of years. They use it to build houses, bridges and furniture. It is very strong but also light.",
              "Today, bamboo is becoming more popular around the world because it is good for the {4}. It grows quickly and doesn't need much water. You can find bamboo toothbrushes, plates and even clothes in many shops. Some people say bamboo is the {5} of the future. Pandas also love it. In fact, it is {6} the only thing they eat!",
            ],
            gaps: [
              {
                options: [
                  "as",
                  "like",
                  "than",
                ],
                answer: 0,
              },
              {
                options: [
                  "quickest",
                  "biggest",
                  "fastest",
                ],
                answer: 2,
              },
              {
                options: [
                  "made",
                  "used",
                  "done",
                ],
                answer: 1,
              },
              {
                options: [
                  "nature",
                  "environment",
                  "world",
                ],
                answer: 1,
              },
              {
                options: [
                  "stuff",
                  "thing",
                  "material",
                ],
                answer: 2,
              },
              {
                options: [
                  "almost",
                  "quite",
                  "much",
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
              "Hi Tom,",
              "I'm so excited that you're coming to stay with us next month! I've planned lots {1} things for us to do. On the first day, we can go {2} the beach. It's only ten minutes from my house.",
              "There's also a great theme park near here. It's got the biggest rollercoaster {3} the country! My dad says he'll take us there {4} Saturday.",
              "Don't forget to bring your swimming things and a warm jacket, because it sometimes gets cold {5} the evening. Can you tell me what time your train arrives? We'll meet you {6} the station.",
              "See you soon!",
              "Jack",
            ],
            answers: [
              [
                "of",
              ],
              [
                "to",
              ],
              [
                "in",
              ],
              [
                "on",
                "next",
                "this",
              ],
              [
                "in",
              ],
              [
                "at",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You went shopping last weekend. Write an email to your English friend, Jo. Write 25 words or more.",
            prompts: [
              "Say where you went.",
              "Say what you bought.",
              "Say why you bought it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nLast Saturday, I went to the new shopping centre with my sister. I bought a pair of white trainers. I bought them because my old trainers were too small and I need them for running.\n\nSee you,\nDefne",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦⚽🌳",
                label: "1",
              },
              {
                e: "⚽🏠🪟👵",
                label: "2",
              },
              {
                e: "👵⚽😊👦",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Sunday, Jack was playing football in the street with his friends. He kicked the ball too hard and it went over a wall into an old woman's garden. Jack was nervous, but he knocked on her door to ask for the ball. The woman was very kind. She gave him the ball and some biscuits too. Now they are good friends.",
          },
        },
      ],
    },
  ],
};
