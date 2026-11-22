import type { CambridgeTest } from "./types";

/** A2 Key practice test 61 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_61: CambridgeTest = {
  id: "key-61",
  level: "key",
  no: 61,
  title: "A2 Key · Practice Test 61",
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
                    "Football practice is cancelled this week because the field is too wet.",
                  ],
                },
                question: "Why is football practice cancelled?",
                options: [
                  "The coach is away.",
                  "The ground is in bad condition.",
                  "There is a match.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Mia, the shop has your favourite cereal on offer. Shall I buy two boxes? Dad",
                  ],
                },
                question: "What does Dad want to know?",
                options: [
                  "if he should buy more of something",
                  "what Mia wants for breakfast",
                  "which shop to go to",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM SHOP",
                    "Members get 15% off.",
                  ],
                },
                question: "Who can pay less in the shop?",
                options: [
                  "children",
                  "students",
                  "museum members",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The match tickets have arrived. I'll give you yours at school tomorrow. You owe me £12. Ben",
                  ],
                },
                question: "What does Ben tell Tom?",
                options: [
                  "The match is cancelled.",
                  "He will give Tom his ticket and Tom must pay.",
                  "Tom must buy his own ticket.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Please put rubbish in the bins or take it home.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are no bins in the park.",
                  "Don't leave rubbish in the park.",
                  "You can leave rubbish on the grass.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DRUM LESSONS",
                    "For beginners and improvers.",
                    "Drums provided. First lesson £5.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "They are only for beginners.",
                  "The first lesson is free.",
                  "You don't need your own drums.",
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
                title: "Lucy",
                text: "I love dancing. I go to a dance school three times a week. I do street dance and contemporary dance. Last year, my group won a national dance competition. We performed in front of two thousand people! I want to study dance at university.",
              },
              {
                title: "Ethan",
                text: "My hobby is collecting old coins. I've got more than five hundred from around the world. Some are more than two hundred years old. I buy them online and at markets. My most valuable coin is from ancient Rome. My grandfather gave it to me.",
              },
              {
                title: "Nina",
                text: "I enjoy volunteering at a children's hospital. Every Saturday, I play games with the children and read them stories. Some of them are very ill and stay in hospital for a long time. It makes me happy when I can make them smile.",
              },
            ],
            items: [
              {
                text: "performed in front of a large crowd?",
                answer: 0,
              },
              {
                text: "is planning to continue studying their hobby?",
                answer: 0,
              },
              {
                text: "has something very old?",
                answer: 1,
              },
              {
                text: "got a gift from a grandparent?",
                answer: 1,
              },
              {
                text: "spends time with young people who are unwell?",
                answer: 2,
              },
              {
                text: "feels good when others are happy?",
                answer: 2,
              },
              {
                text: "buys things on the internet?",
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
              title: "The boy who loves bugs",
              paragraphs: [
                "Twelve-year-old Theo loves insects. He has a collection of more than thirty live insects in his bedroom, including beetles, stick insects and a giant snail.",
                "'Most people think insects are disgusting,' says Theo. 'But they're amazing! Some beetles can carry a hundred times their own weight.'",
                "Theo looks after all his insects carefully. 'I give them fresh food every day and clean their homes every week,' he explains. 'My mum doesn't like the spiders, so I keep them in a special box.'",
                "Theo wants to be an entomologist, a scientist who studies insects. 'There are millions of kinds of insects that nobody has studied yet,' he says. 'I want to discover a new one and give it my name!'",
              ],
            },
            items: [
              {
                question: "What does Theo have in his bedroom?",
                options: [
                  "live insects",
                  "dead insects",
                  "books about insects",
                ],
                answer: 0,
              },
              {
                question: "What does Theo say about beetles?",
                options: [
                  "They are disgusting.",
                  "They are very strong.",
                  "They are very small.",
                ],
                answer: 1,
              },
              {
                question: "How often does Theo clean the insects' homes?",
                options: [
                  "weekly",
                  "daily",
                  "monthly",
                ],
                answer: 0,
              },
              {
                question: "Why does Theo keep the spiders in a special box?",
                options: [
                  "They are dangerous.",
                  "They might escape.",
                  "His mother doesn't like them.",
                ],
                answer: 2,
              },
              {
                question: "What would Theo like to do?",
                options: [
                  "work in a zoo",
                  "find a new kind of insect",
                  "write a book",
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
            title: "The Amazon River",
            text: [
              "The Amazon is the largest river in the world. It is about 6,400 kilometres long and {1} through Peru, Colombia and Brazil.",
              "More water flows through the Amazon than through any other river. In some places, the river is more than forty kilometres {2} during the rainy season!",
              "The Amazon rainforest around the river is home to millions of kinds of plants and animals. There are pink river dolphins, giant fish and dangerous piranhas in the water. Many people {3} near the river. They use boats to travel because there are very few roads. The river is also an important {4} of food and water. Sadly, the rainforest is getting smaller because people are cutting down trees. This is bad for the animals and for the {5} of the planet. Many organisations are working to {6} the Amazon.",
            ],
            gaps: [
              {
                options: [
                  "goes up",
                  "flows",
                  "moves up",
                ],
                answer: 1,
              },
              {
                options: [
                  "long",
                  "wide",
                  "far",
                ],
                answer: 1,
              },
              {
                options: [
                  "stay up",
                  "sit",
                  "live",
                ],
                answer: 2,
              },
              {
                options: [
                  "source",
                  "place",
                  "start",
                ],
                answer: 0,
              },
              {
                options: [
                  "healthy",
                  "health",
                  "healthily",
                ],
                answer: 1,
              },
              {
                options: [
                  "protect",
                  "keep up",
                  "guard",
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
              "Hi Ella,",
              "I've got great news! I've been chosen {1} the school play. I'm going to be the main character, a princess {2} lives in a castle.",
              "We start practising next week. We'll practise every Tuesday and Thursday after school {3} two months. I have to learn lots of lines, so I'll be very busy.",
              "The play is at the end of term. I hope you can come and watch! Tickets will be on sale {4} December. My mum is making my costume. It's a long purple dress with gold stars on it. I'm so excited! What {5} you doing at the moment? Write back and tell me {6} your news.",
              "Love,",
              "Sophie",
            ],
            answers: [
              [
                "for",
              ],
              [
                "who",
                "that",
              ],
              [
                "for",
              ],
              [
                "in",
                "from",
              ],
              [
                "are",
              ],
              [
                "all",
                "about",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to the beach with your family. Write an email to your English friend, Jo. Write 25 words or more.",
            prompts: [
              "Say when you are going.",
              "Say what you will do there.",
              "Invite Jo to come.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nOn Sunday, my family is going to the beach. We will swim, play volleyball and have a picnic. Would you like to come with us? There's space in the car.\n\nBye,\nTuna",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🧩🏠",
                label: "1",
              },
              {
                e: "👦🧩❓😟",
                label: "2",
              },
              {
                e: "👦🧩🐈😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On a rainy Sunday, Jake decided to do a big puzzle with a thousand pieces. He worked on it all day. In the evening, he only had one piece left, but he couldn't find it anywhere. He looked under the table and the sofa. Then he saw his cat sitting nearby. The last piece was under the cat's paw! Jake laughed and finished the puzzle.",
          },
        },
      ],
    },
  ],
};
