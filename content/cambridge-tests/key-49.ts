import type { CambridgeTest } from "./types";

/** A2 Key practice test 49 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_49: CambridgeTest = {
  id: "key-49",
  level: "key",
  no: 49,
  title: "A2 Key · Practice Test 49",
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
                    "GYM",
                    "Free fitness classes for members every Saturday morning.",
                  ],
                },
                question: "Who can do the classes for free?",
                options: [
                  "everyone",
                  "people who belong to the gym",
                  "only children",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, I've found a great present for Lucy. Can you give me half the money? It's £20. Emma",
                  ],
                },
                question: "What does Emma want Grace to do?",
                options: [
                  "share the cost of a present",
                  "buy a present alone",
                  "choose a present",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "HOSPITAL",
                    "Parking for visitors at the back of the building.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Visitors can't park here.",
                  "Parking is in front of the hospital.",
                  "Visitors should park behind the hospital.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "I'm going to the gym after school. Do you want to come? I can lend you a towel. Max",
                  ],
                },
                question: "What is Max doing?",
                options: [
                  "asking Sam for a towel",
                  "inviting Sam to the gym",
                  "telling Sam the gym is closed",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Fresh fish counter closed today.",
                    "Packaged fish available in aisle 5.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There is no fish today.",
                  "You can still buy fish today.",
                  "The fish counter is in aisle 5.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "ENGLISH CONVERSATION CLUB",
                    "Practise speaking with native speakers.",
                    "Tuesdays 7 p.m., city library. Free!",
                  ],
                },
                question: "What do we know about the club?",
                options: [
                  "It is in the morning.",
                  "It is at a school.",
                  "It doesn't cost anything.",
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
                title: "Lily",
                text: "I love ice skating. I train at the ice rink four times a week before school. It means getting up at five o'clock! Last year, I skated in a competition in Germany. I came sixth out of thirty skaters. My coach says I could be in the national team in two years.",
              },
              {
                title: "Sam",
                text: "My hobby is making short films. I use my phone and some free editing software. My films are usually funny, and my friends act in them. I've put about twenty films online. One of them has been watched more than fifty thousand times!",
              },
              {
                title: "Ava",
                text: "I collect vintage clothes. I find them at second-hand shops and markets. My favourite is a dress from the 1960s. I wear my clothes to school parties and people always ask where I got them. I'm thinking of opening a small online shop.",
              },
            ],
            items: [
              {
                text: "gets up very early?",
                answer: 0,
              },
              {
                text: "has competed abroad?",
                answer: 0,
              },
              {
                text: "uses technology that costs nothing?",
                answer: 1,
              },
              {
                text: "has a very popular piece of work?",
                answer: 1,
              },
              {
                text: "buys old things?",
                answer: 2,
              },
              {
                text: "might start a business?",
                answer: 2,
              },
              {
                text: "works with friends?",
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
              title: "The tiny house",
              paragraphs: [
                "Last year, sixteen-year-old Jack and his dad built a tiny house in their garden. It's only twelve square metres, but it has a bed, a desk and a small kitchen.",
                "'I wanted my own space,' says Jack. 'I share a bedroom with my two little brothers, and it's very noisy!'",
                "Building the house took six months. 'We worked every weekend,' explains Jack. 'My dad is a builder, so he knew what to do. I learned how to use lots of tools.'",
                "Now Jack sleeps and studies in the tiny house. 'It's so quiet,' he says. 'My grades have improved because I can concentrate better.' His friends love it too. 'We have film nights there every Friday,' he laughs.",
              ],
            },
            items: [
              {
                question: "Why did Jack want the tiny house?",
                options: [
                  "He wanted somewhere quiet.",
                  "He wanted to sell it.",
                  "His parents told him to.",
                ],
                answer: 0,
              },
              {
                question: "How long did it take to build?",
                options: [
                  "one weekend",
                  "half a year",
                  "two years",
                ],
                answer: 1,
              },
              {
                question: "What did Jack learn?",
                options: [
                  "how to use tools",
                  "how to cook",
                  "how to be a teacher",
                ],
                answer: 0,
              },
              {
                question: "How has the tiny house helped Jack?",
                options: [
                  "He sleeps less.",
                  "He has more brothers.",
                  "He can study better.",
                ],
                answer: 2,
              },
              {
                question: "What do Jack and his friends do on Fridays?",
                options: [
                  "study together",
                  "watch films",
                  "build things",
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
            title: "Cats",
            text: [
              "Cats are one of the most popular pets in the world. People have {1} cats as pets for about 9,000 years.",
              "Cats are very good hunters. They have excellent eyesight and can see well in the {2}. They also have very good hearing and can hear sounds that people can't.",
              "Cats sleep a lot, about twelve to sixteen hours a day! They are also very clean animals. They spend a lot of time washing {3} with their tongues. Cats communicate in different ways. They {4} when they are happy and hiss when they are angry or afraid. Some people say cats are not as friendly as dogs. But many cat owners {5} with this. They say their cats are very loving. If you want a pet that is easy to look after, a cat might be a good {6}.",
            ],
            gaps: [
              {
                options: [
                  "held",
                  "kept",
                  "owned up",
                ],
                answer: 1,
              },
              {
                options: [
                  "black",
                  "dark",
                  "night",
                ],
                answer: 1,
              },
              {
                options: [
                  "itself",
                  "them",
                  "themselves",
                ],
                answer: 2,
              },
              {
                options: [
                  "purr",
                  "sing",
                  "shout",
                ],
                answer: 0,
              },
              {
                options: [
                  "argue",
                  "disagree",
                  "refuse",
                ],
                answer: 1,
              },
              {
                options: [
                  "choice",
                  "choose",
                  "chosen",
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
              "Hi Emma,",
              "I hope you're enjoying your new job! I'm writing because I need {1} advice. I want to get a part-time job too, but I don't know where to start.",
              "You work in a shop, don't you? Do you like it? How {2} hours do you work every week?",
              "I'd like to work at weekends, {3} I have school during the week. I'm good with people, and I'm very organised. Do you think your shop needs more staff? Could you ask your manager {4} me? I'd be really grateful. Let me know {5} you think. Thanks {6} advance!",
              "Love,",
              "Sophie",
            ],
            answers: [
              [
                "some",
                "your",
              ],
              [
                "many",
              ],
              [
                "because",
                "as",
                "since",
              ],
              [
                "for",
                "about",
              ],
              [
                "what",
              ],
              [
                "in",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to have a party at school. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say why there is a party.",
              "Say what food there will be.",
              "Say what you will wear.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nOur class is having a party at school on Friday because it's the end of term. There will be pizza, crisps, fruit and a big cake. I'm going to wear my new jeans and a red T-shirt.\n\nBye,\nBerra",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🎣🌊",
                label: "1",
              },
              {
                e: "👨🎣👟😂",
                label: "2",
              },
              {
                e: "👨🐟🎣😀",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last Sunday, Mr Green went fishing by the river. He waited for hours, but he didn't catch anything. Then he felt something heavy on his line. He pulled and pulled, but it was only an old shoe! Mr Green laughed. Ten minutes later, he caught a big fish. He was very happy and took it home for dinner.",
          },
        },
      ],
    },
  ],
};
