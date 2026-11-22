import type { CambridgeTest } from "./types";

/** A2 Key practice test 53 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_53: CambridgeTest = {
  id: "key-53",
  level: "key",
  no: 53,
  title: "A2 Key · Practice Test 53",
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
                    "SCHOOL OFFICE",
                    "Please wait here. Someone will be with you shortly.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "A member of staff will come soon.",
                  "The office is closed.",
                  "You should come back later.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Dan, I've got a spare football ticket for Saturday. Do you want it? It's free! Josh",
                  ],
                },
                question: "What is Josh offering?",
                options: [
                  "to buy Dan a football",
                  "to play football with Dan",
                  "a free ticket",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO FISHING",
                    "This lake is protected.",
                  ],
                },
                question: "Why can't you fish here?",
                options: [
                  "There are no fish.",
                  "It is dangerous.",
                  "The lake is protected.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear Mrs Clark,",
                    "I'm sorry Emma was late today. Our car broke down. It won't happen again. Mr Jones",
                  ],
                },
                question: "Why has Mr Jones written to Mrs Clark?",
                options: [
                  "to explain why Emma was late",
                  "to say Emma is ill",
                  "to ask for a meeting",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Back-to-school sale!",
                    "All bags and pencil cases 30% off.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Everything in the shop is 30% off.",
                  "Some school things are cheaper.",
                  "The shop is closing.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BABYSITTING",
                    "Responsible 16-year-old available for babysitting.",
                    "Evenings and weekends. Call Ellie.",
                  ],
                },
                question: "What does Ellie offer?",
                options: [
                  "to look after children",
                  "to teach children",
                  "to clean houses",
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
                title: "Joel",
                text: "I love playing the piano. I've been playing since I was five. Now I'm fifteen, and I practise for two hours a day. Last year, I played a concert with an orchestra. I was very nervous, but my family said I played beautifully. I want to go to a music academy.",
              },
              {
                title: "Bella",
                text: "My hobby is skiing. My family goes skiing every winter in the Alps. I've been skiing since I was three! Last year, I started racing, and I've already won two races. In summer, I train on dry slopes near my home. I hope to compete internationally one day.",
              },
              {
                title: "Leo",
                text: "I'm interested in cooking. I watch cooking shows and try new recipes every weekend. My signature dish is a Thai curry. My friends love it. I've started a cooking blog with photos of everything I make. I've got about three hundred readers.",
              },
            ],
            items: [
              {
                text: "performed with a large group of musicians?",
                answer: 0,
              },
              {
                text: "hopes to study at a special school?",
                answer: 0,
              },
              {
                text: "has done their hobby since they were very young?",
                answer: 1,
              },
              {
                text: "practises in a different way in summer?",
                answer: 1,
              },
              {
                text: "has a dish they are known for?",
                answer: 2,
              },
              {
                text: "shares their hobby on the internet?",
                answer: 2,
              },
              {
                text: "is quite new to competitions?",
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
              title: "Making music from rubbish",
              paragraphs: [
                "In a poor town in Paraguay, a group of children play beautiful music in an orchestra. But their instruments aren't normal. They are made from rubbish!",
                "The town is built next to a huge rubbish dump. 'We didn't have money for instruments,' explains music teacher Favio Chávez. 'So we started making them from things we found in the rubbish.'",
                "The orchestra's violins are made from old tins, and the cellos are made from oil barrels. 'They sound really good,' says thirteen-year-old Maria, who plays the violin.",
                "The orchestra has become famous. It has played concerts all over the world. 'Music has changed my life,' says Maria. 'Before, I didn't have any dreams. Now I want to be a professional musician.'",
              ],
            },
            items: [
              {
                question: "What is unusual about the orchestra?",
                options: [
                  "It only has children.",
                  "The instruments are made from rubbish.",
                  "It plays only rock music.",
                ],
                answer: 1,
              },
              {
                question: "Why did they make instruments from rubbish?",
                options: [
                  "They couldn't afford real ones.",
                  "They wanted to be famous.",
                  "Real instruments sound bad.",
                ],
                answer: 0,
              },
              {
                question: "What are the violins made from?",
                options: [
                  "wood",
                  "plastic bottles",
                  "old tins",
                ],
                answer: 2,
              },
              {
                question: "What has the orchestra done?",
                options: [
                  "It has stopped playing.",
                  "It has bought new instruments.",
                  "It has performed in many countries.",
                ],
                answer: 2,
              },
              {
                question: "How has music changed Maria's life?",
                options: [
                  "She has an ambition now.",
                  "She is very rich.",
                  "She has moved away.",
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
            title: "The Great Barrier Reef",
            text: [
              "The Great Barrier Reef is in the sea off the coast of Australia. It is the largest coral reef in the world. It is so big that you can {1} it from space!",
              "The reef is made of millions of tiny animals called corals. It is home to thousands of different kinds of fish, turtles, sharks and dolphins. Many people {2} it every year to go diving and snorkelling.",
              "Sadly, the reef is in danger. The water in the sea is getting warmer {3} of climate change. When the water gets too warm, the corals lose their colour and can {4}. Pollution is also a problem. Scientists and the Australian government are working hard to {5} the reef. Tourists can help too, by not touching the coral and by using sun cream that is {6} for the sea.",
            ],
            gaps: [
              {
                options: [
                  "see",
                  "look",
                  "watch",
                ],
                answer: 0,
              },
              {
                options: [
                  "go",
                  "visit",
                  "travel",
                ],
                answer: 1,
              },
              {
                options: [
                  "because",
                  "since",
                  "so",
                ],
                answer: 0,
              },
              {
                options: [
                  "kill",
                  "end",
                  "die",
                ],
                answer: 2,
              },
              {
                options: [
                  "keep up",
                  "protect",
                  "guard",
                ],
                answer: 1,
              },
              {
                options: [
                  "safety",
                  "safe",
                  "safely",
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
              "Hi Emma,",
              "I've got some exciting news! My family is going {1} get a dog. We're going to the animal shelter on Saturday to choose one.",
              "I want a small dog, but my brother wants a big one. My parents say we need a dog that is good {2} children, because my little sister is only three.",
              "Have you got any advice? You've had a dog {3} years. What should we look for? Also, what's a good name for a dog? I can't decide! I'll send you a photo {4} we've chosen one. I'm so excited! Write back {5}. Thanks {6} your help!",
              "Love,",
              "Molly",
            ],
            answers: [
              [
                "to",
              ],
              [
                "with",
              ],
              [
                "for",
              ],
              [
                "when",
                "after",
                "once",
              ],
              [
                "soon",
              ],
              [
                "from",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a wedding. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say whose wedding it is.",
              "Say where it will be.",
              "Say what you will wear.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nNext month, I'm going to my cousin's wedding. It will be in a big garden by the sea. I'm going to wear a new blue suit and a white shirt.\n\nBye,\nBora",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🍎🌳",
                label: "1",
              },
              {
                e: "👦🍎🐛😮",
                label: "2",
              },
              {
                e: "👦🐛🌿😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One afternoon, Leo picked an apple from the tree in his garden. When he was about to eat it, he saw a small caterpillar inside! At first, he was surprised and nearly dropped the apple. Then he decided to help the caterpillar. He carefully put it on a leaf in the garden. A few weeks later, he saw a beautiful butterfly near the tree.",
          },
        },
      ],
    },
  ],
};
