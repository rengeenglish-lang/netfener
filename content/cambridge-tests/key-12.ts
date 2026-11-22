import type { CambridgeTest } from "./types";

/** A2 Key practice test 12 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_12: CambridgeTest = {
  id: "key-12",
  level: "key",
  no: 12,
  title: "A2 Key · Practice Test 12",
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
                    "SPORTS HALL",
                    "Basketball practice cancelled today.",
                    "It will take place on Thursday instead.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There is no basketball this week.",
                  "Basketball practice has moved to another day.",
                  "Basketball practice is every Thursday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Ben – I'm going to the supermarket. Do you need anything for your school trip tomorrow? Mum",
                  ],
                },
                question: "Why has Mum sent this message?",
                options: [
                  "to ask if Ben needs anything",
                  "to remind Ben about his trip",
                  "to tell Ben to go shopping",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BEACH",
                    "Lifeguards on duty 10 a.m.–6 p.m.",
                    "Swim only between the red and yellow flags.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Swimming is not allowed.",
                  "Lifeguards are here all night.",
                  "You should only swim in one area.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "I'm selling my old skateboard. It's in great condition. Do you know anyone who might want it? £30. Joe",
                  ],
                },
                question: "What is Joe asking Sam?",
                options: [
                  "if he wants to buy a new skateboard",
                  "if he can repair a skateboard",
                  "if he knows a possible buyer",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING LESSONS",
                    "Places for children aged 5–10.",
                    "Sign up at reception before Friday.",
                  ],
                },
                question: "How can you book a lesson?",
                options: [
                  "Go to the front desk.",
                  "Phone the swimming pool.",
                  "Book online.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FREE CONCERT",
                    "Saturday, 7 p.m., City Park",
                    "Bring a blanket and a picnic!",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "Tickets are expensive.",
                  "You can eat at the concert.",
                  "The concert is inside.",
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
                title: "Ryan",
                text: "I've been surfing for three years. I live near the sea, so I go every weekend, even in winter when the water is really cold. I wear a thick wetsuit. My dream is to surf in Australia. I'm saving money from my part-time job at a café to go there one day.",
              },
              {
                title: "Lily",
                text: "I collect stamps. I've got over two thousand from all over the world. My favourite is a stamp from Japan with a picture of a mountain. My grandfather started the collection when he was a boy, and he gave it to me last year. I add new stamps every month.",
              },
              {
                title: "Josh",
                text: "I'm learning to play the violin. I have lessons every Monday, and I practise for thirty minutes every day. It's really difficult, but I'm getting better. Next month, I'm going to play in a concert with the school orchestra. I'm a bit nervous about it.",
              },
            ],
            items: [
              {
                text: "is working to pay for a trip?",
                answer: 0,
              },
              {
                text: "got their collection from a family member?",
                answer: 1,
              },
              {
                text: "is worried about something in the future?",
                answer: 2,
              },
              {
                text: "does their hobby in all seasons?",
                answer: 0,
              },
              {
                text: "practises every day?",
                answer: 2,
              },
              {
                text: "has a favourite item?",
                answer: 1,
              },
              {
                text: "needs special clothes for their hobby?",
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
              title: "A new life in the city",
              paragraphs: [
                "Last year, fourteen-year-old Amira and her family moved from a small village to London. 'Everything was different,' she says. 'In my village, there were only fifty students in my school. Now there are over a thousand!'",
                "At first, Amira found the city very noisy. 'I couldn't sleep because of the traffic,' she remembers. 'And I got lost on the underground lots of times.'",
                "But slowly, things got better. Amira joined the school drama club and made new friends. 'They showed me all the best places in the city,' she says. 'Now I know my way around.'",
                "Amira still misses some things about village life. 'I miss the quiet and the fresh air,' she says. 'But there are so many things to do in London. I visit a different museum every month. I think I'll stay here when I'm older.'",
              ],
            },
            items: [
              {
                question: "What surprised Amira about her new school?",
                options: [
                  "how many students there were",
                  "how small it was",
                  "how strict the teachers were",
                ],
                answer: 0,
              },
              {
                question: "What problem did Amira have at first?",
                options: [
                  "She didn't like the food.",
                  "The noise kept her awake.",
                  "She couldn't find a school.",
                ],
                answer: 1,
              },
              {
                question: "How did Amira make friends?",
                options: [
                  "She joined a club.",
                  "She met them on the underground.",
                  "Her neighbours introduced her.",
                ],
                answer: 0,
              },
              {
                question: "What does Amira do every month?",
                options: [
                  "She visits her village.",
                  "She takes part in a play.",
                  "She goes to a museum.",
                ],
                answer: 2,
              },
              {
                question: "How does Amira feel about her future?",
                options: [
                  "She wants to go back to her village.",
                  "She doesn't know yet.",
                  "She wants to live in London.",
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
            title: "The first ice cream",
            text: [
              "Ice cream is one of the world's {1} desserts. But who made the first ice cream? Nobody knows for sure. About 2,000 years ago, people in China mixed rice and milk and {2} it in snow.",
              "Hundreds of years later, rich people in Europe ate ice cream at special {3}. It was very expensive because people needed lots of ice, and they had to {4} it in special buildings to stop it melting.",
              "In the nineteenth century, a machine was {5} that made ice cream more easily. After that, more and more people could {6} it. Today, the most popular flavour in the world is vanilla.",
            ],
            gaps: [
              {
                options: [
                  "best",
                  "loved",
                  "favourite",
                ],
                answer: 2,
              },
              {
                options: [
                  "froze",
                  "cooled",
                  "iced",
                ],
                answer: 0,
              },
              {
                options: [
                  "meetings",
                  "parties",
                  "games",
                ],
                answer: 1,
              },
              {
                options: [
                  "store",
                  "save",
                  "put",
                ],
                answer: 0,
              },
              {
                options: [
                  "discovered",
                  "found",
                  "invented",
                ],
                answer: 2,
              },
              {
                options: [
                  "pay",
                  "afford",
                  "spend",
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
              "Dear Mr Green,",
              "I am writing to say thank you {1} the school trip to the science museum last week. I really enjoyed it. My favourite part was the space room. I didn't know {2} the Moon was so far from Earth!",
              "I also liked the workshop {3} we made our own rockets. Mine flew higher {4} anyone else's! I'd love to go on another trip like that.",
              "Could we visit the natural history museum next term? I think everyone in the class {5} enjoy it. Thank you again {6} organising the trip.",
              "Best wishes,",
              "Mia",
            ],
            answers: [
              [
                "for",
              ],
              [
                "that",
              ],
              [
                "where",
                "when",
              ],
              [
                "than",
              ],
              [
                "would",
                "will",
              ],
              [
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to have a picnic with your English friend, Pat. Write an email to Pat. Write 25 words or more.",
            prompts: [
              "Say where you want to have the picnic.",
              "Say what food you will bring.",
              "Ask Pat to bring something.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nShall we have a picnic in the park near the lake on Saturday? I will bring sandwiches, some fruit and a big bottle of lemonade. Could you bring a blanket and some cakes?\n\nSee you,\nElif",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🚗🛣️",
                label: "1",
              },
              {
                e: "🚗💨🐑🐑",
                label: "2",
              },
              {
                e: "👨🚗⏰😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Mr Jones was driving to an important meeting in the city. Suddenly, he had to stop because there were lots of sheep in the road. He waited for twenty minutes while a farmer moved them into a field. Mr Jones was worried he would be late. But when he arrived, he found out that the meeting started an hour later, so he was right on time.",
          },
        },
      ],
    },
  ],
};
