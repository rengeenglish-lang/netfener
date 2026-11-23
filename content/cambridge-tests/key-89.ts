import type { CambridgeTest } from "./types";

/** A2 Key practice test 89 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_89: CambridgeTest = {
  id: "key-89",
  level: "key",
  no: 89,
  title: "A2 Key · Practice Test 89",
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
                    "SCHOOL TRIP",
                    "Bring a packed lunch and a waterproof jacket.",
                  ],
                },
                question: "What should students bring?",
                options: [
                  "food and a coat",
                  "money",
                  "swimming things",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Mum, I'm at Ella's house. Can I stay for dinner? I'll be home by 8. Lucy",
                  ],
                },
                question: "What does Lucy want?",
                options: [
                  "Mum to pick her up",
                  "Ella to come to her house",
                  "permission to stay for dinner",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO SMOKING",
                    "Anywhere in the building.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can smoke anywhere.",
                  "Smoking is allowed in some areas.",
                  "You can't smoke inside.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "The library has a new book about horses. I'll get it for you if you want. Sophie",
                  ],
                },
                question: "What is Sophie offering?",
                options: [
                  "to get a book for Kate",
                  "to buy Kate a horse",
                  "to lend Kate her book",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Free entry for under 16s.",
                  ],
                },
                question: "Who doesn't need to pay?",
                options: [
                  "adults",
                  "young people",
                  "students over 16",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SKI HOLIDAY",
                    "One week in the Alps.",
                    "Lessons and equipment included. Book now!",
                  ],
                },
                question: "What do we know about the holiday?",
                options: [
                  "Lessons are part of the price.",
                  "It is two weeks.",
                  "You need your own skis.",
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
                title: "Harvey",
                text: "I love football. I play for my school and a local club. I'm the goalkeeper. Last season, I saved three penalties in the final, and we won the cup! A scout from a professional club watched me play.",
              },
              {
                title: "Nina",
                text: "My hobby is making jewellery. I make necklaces and bracelets from beads and shells. I sell them at a craft market every month. I give half the money to a charity that helps children.",
              },
              {
                title: "Leo",
                text: "I'm interested in history. I visit museums and castles with my family. I've read lots of books about the Romans. Last year, I found an old Roman coin in my garden! I took it to the museum, and they said it was nearly 2,000 years old.",
              },
            ],
            items: [
              {
                text: "plays in a particular position?",
                answer: 0,
              },
              {
                text: "was watched by someone from a club?",
                answer: 0,
              },
              {
                text: "sells things every month?",
                answer: 1,
              },
              {
                text: "gives money to charity?",
                answer: 1,
              },
              {
                text: "found something very old?",
                answer: 2,
              },
              {
                text: "visits places with family?",
                answer: 2,
              },
              {
                text: "helped their team win?",
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
              title: "The robot that helps",
              paragraphs: [
                "In a hospital in Japan, there's a robot that helps nurses. It's called Robear, and it looks like a friendly bear.",
                "'Robear can lift patients from their beds,' explains nurse Yuki. 'This helps us a lot, because lifting patients is very hard work.'",
                "Robear is very gentle. 'Patients feel safe with Robear,' says Yuki. 'At first, some people were scared. But now they love it.'",
                "Scientists think that more robots will work in hospitals in the future. 'Robots can't replace nurses,' says Yuki. 'But they can help us do our jobs better.'",
              ],
            },
            items: [
              {
                question: "What does Robear look like?",
                options: [
                  "a person",
                  "a bear",
                  "a dog",
                ],
                answer: 1,
              },
              {
                question: "What can Robear do?",
                options: [
                  "lift patients",
                  "give medicine",
                  "cook food",
                ],
                answer: 0,
              },
              {
                question: "Why is Robear helpful?",
                options: [
                  "Nurses are lazy.",
                  "Patients don't like nurses.",
                  "Lifting patients is difficult.",
                ],
                answer: 2,
              },
              {
                question: "How did some patients feel at first?",
                options: [
                  "happy",
                  "angry",
                  "frightened",
                ],
                answer: 2,
              },
              {
                question: "What does Yuki think about robots?",
                options: [
                  "They can help nurses.",
                  "They will replace nurses.",
                  "They are dangerous.",
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
            title: "Bicycles in Amsterdam",
            text: [
              "Amsterdam is famous for its bicycles. There are more bicycles than people in the city! About 60% of people {1} a bike every day.",
              "Amsterdam is very flat, which makes cycling easy. There are also lots of special cycle lanes. These are {2} from the roads, so cycling is very safe.",
              "People in Amsterdam use their bikes for everything. They cycle to work, to school and to the shops. Some people even carry their children in special boxes on the front of their bikes! Cycling is good for people's health and for the environment. Bicycles don't {3} pollution, and they don't take up much space. Many other cities are trying to {4} Amsterdam's example. They are building more cycle lanes and {5} people to cycle. If you visit Amsterdam, you should {6} a bike and explore the city.",
            ],
            gaps: [
              {
                options: [
                  "ride",
                  "drive",
                  "walk",
                ],
                answer: 0,
              },
              {
                options: [
                  "apart up",
                  "separate",
                  "alone",
                ],
                answer: 1,
              },
              {
                options: [
                  "cause",
                  "make up",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "copy up",
                  "make",
                  "follow",
                ],
                answer: 2,
              },
              {
                options: [
                  "making up",
                  "encouraging",
                  "letting",
                ],
                answer: 1,
              },
              {
                options: [
                  "pay up",
                  "hire",
                  "buy up",
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
              "Hi Isla,",
              "I'm so excited! My family is going to visit London next month. We're going {1} stay for five days.",
              "I want to see Big Ben, the London Eye and Buckingham Palace. I also want to go shopping {2} Oxford Street. Have you been to London? What should we visit?",
              "My mum says we can visit you {3} you're free. You live near London, don't you? It would be great {4} see you again! Let me know {5} you think. I can't wait {6} see you.",
              "Love,",
              "Freya",
            ],
            answers: [
              [
                "to",
              ],
              [
                "in",
                "on",
              ],
              [
                "if",
                "when",
              ],
              [
                "to",
              ],
              [
                "what",
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
            instruction: "You are going to play in a concert. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say what instrument you play.",
              "Say when the concert is.",
              "Invite Alex to come.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nI'm going to play the piano in a school concert next Friday evening. I've been practising a lot! Would you like to come and watch? Tickets are free.\n\nBye,\nSu",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🛒🥛",
                label: "1",
              },
              {
                e: "👦🥛⬇️💦",
                label: "2",
              },
              {
                e: "👦🧽😅👩",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Tom's mum asked him to buy some milk from the shop. On the way home, he was walking quickly and he dropped the bottle. It broke, and milk went everywhere! Tom felt very silly. He went back to the shop and bought another bottle with his own money. When he got home, his mum laughed and said thank you.",
          },
        },
      ],
    },
  ],
};
