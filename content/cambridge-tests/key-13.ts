import type { CambridgeTest } from "./types";

/** A2 Key practice test 13 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_13: CambridgeTest = {
  id: "key-13",
  level: "key",
  no: 13,
  title: "A2 Key · Practice Test 13",
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
                    "LIBRARY",
                    "Quiet please! Group study rooms on the first floor.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed for study.",
                  "You can work with others upstairs.",
                  "You must talk quietly upstairs.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hey Adam, I've got a cold and can't come to football today. Can you tell the coach? Thanks, Chris",
                  ],
                },
                question: "What does Chris want Adam to do?",
                options: [
                  "give the coach a message",
                  "play football instead of him",
                  "bring him some medicine",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SHOP",
                    "We are moving! From 1 June, find us at 15 High Street.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The shop is closing forever.",
                  "The shop is open on 1 June only.",
                  "The shop will be in a new place soon.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "I left my umbrella at your house yesterday. It's black with white spots. Could you bring it to school? Thanks! Ann",
                  ],
                },
                question: "Why has Ann written this email?",
                options: [
                  "to invite Kate to her house",
                  "to ask for something she forgot",
                  "to say thank you for a present",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "TOWN MUSEUM",
                    "Free entry on the first Sunday of every month.",
                  ],
                },
                question: "When can you visit the museum without paying?",
                options: [
                  "every Sunday",
                  "one day a month",
                  "every day",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "COMPUTER CLUB",
                    "For students aged 11–14. Learn to make your own website!",
                    "Mondays after school, Room 8.",
                  ],
                },
                question: "What do we know about the club?",
                options: [
                  "It is for adults.",
                  "It is on Mondays before school.",
                  "Students learn to create web pages.",
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
                title: "Sophia",
                text: "I'm a member of a running club. We meet every Tuesday and Thursday evening and run about eight kilometres. I like it because I've made lots of friends there. Next year, I want to run my first half marathon. My mum is going to run it with me.",
              },
              {
                title: "Leo",
                text: "I build model planes. I buy kits online and put them together carefully. Some of them take weeks to finish. My favourite is a model of an old war plane. My dad is a pilot, so he helps me make the models look like the real thing.",
              },
              {
                title: "Mia",
                text: "I love baking. Every Saturday, I make cakes or cookies for my family. I've also started selling cupcakes at the school fair to raise money for new library books. Last time, I made £120! I find new recipes in old cookbooks that belonged to my great-grandmother.",
              },
            ],
            items: [
              {
                text: "will do a challenge with a parent?",
                answer: 0,
              },
              {
                text: "buys things on the internet for their hobby?",
                answer: 1,
              },
              {
                text: "makes money for their school?",
                answer: 2,
              },
              {
                text: "uses books that are very old?",
                answer: 2,
              },
              {
                text: "gets help from someone with a related job?",
                answer: 1,
              },
              {
                text: "has met new people through their hobby?",
                answer: 0,
              },
              {
                text: "spends a long time on each thing they make?",
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
              title: "Camping on the ice",
              paragraphs: [
                "Every winter, Kai and his father go camping in the mountains of Norway. 'We sleep in a tent on the snow,' says Kai, who is fifteen. 'At night, it can be minus twenty degrees!'",
                "To stay warm, Kai wears lots of layers of clothes and sleeps in a special sleeping bag. 'The hardest part is getting up in the morning,' he says. 'It's so cold that you don't want to leave your bag!'",
                "During the day, Kai and his father go skiing and look for animals. 'Last year, we saw a group of reindeer,' says Kai. 'They were only a few metres away. It was amazing.'",
                "Kai's friends think he's crazy. 'They prefer to stay at home and play video games,' he laughs. 'But I love the silence of the mountains. You can see millions of stars at night. Nothing is better than that.'",
              ],
            },
            items: [
              {
                question: "How cold can it be at night?",
                options: [
                  "minus twenty degrees",
                  "minus two degrees",
                  "zero degrees",
                ],
                answer: 0,
              },
              {
                question: "What does Kai find most difficult?",
                options: [
                  "putting up the tent",
                  "leaving his sleeping bag in the morning",
                  "skiing all day",
                ],
                answer: 1,
              },
              {
                question: "What did Kai see last year?",
                options: [
                  "some reindeer",
                  "a bear",
                  "a group of skiers",
                ],
                answer: 0,
              },
              {
                question: "What do Kai's friends think?",
                options: [
                  "They want to go with him.",
                  "He should play more games.",
                  "His hobby is strange.",
                ],
                answer: 2,
              },
              {
                question: "What does Kai love about the mountains?",
                options: [
                  "the snow",
                  "how quiet they are",
                  "meeting people",
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
            title: "Lighthouses",
            text: [
              "For hundreds of years, lighthouses have helped ships find their way {1} at night. A lighthouse is a tall tower with a very bright light at the top. It shows ships where there are dangerous rocks near the coast.",
              "In the past, a lighthouse keeper lived in each lighthouse. Their job was to keep the light {2} all night. It was a lonely life, especially on lighthouses on small islands far {3} the coast.",
              "Today, most lighthouses work {4}, so they don't need keepers. Some old lighthouses have become museums or hotels. Tourists can {5} up the stairs to the top and enjoy the view. Ships now use computers and satellites to find their way, but lighthouses are still {6} on dark and stormy nights.",
            ],
            gaps: [
              {
                options: [
                  "safe",
                  "safely",
                  "safety",
                ],
                answer: 1,
              },
              {
                options: [
                  "firing",
                  "burning",
                  "lighting",
                ],
                answer: 1,
              },
              {
                options: [
                  "off",
                  "away",
                  "from",
                ],
                answer: 2,
              },
              {
                options: [
                  "automatically",
                  "alone",
                  "themselves",
                ],
                answer: 0,
              },
              {
                options: [
                  "go",
                  "climb",
                  "walk",
                ],
                answer: 1,
              },
              {
                options: [
                  "useful",
                  "helpful",
                  "needed",
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
              "Hi Ali,",
              "Thanks for your email. You asked {1} my new school. It's great! It's a lot bigger than my old school and it's got a swimming pool.",
              "My favourite subject is history {2} the teacher is very interesting. We're learning about the Romans at the moment. Next week, we're going {3} visit an old Roman town.",
              "I've joined the football team. We practise {4} Wednesday after school. We've got our first match next Saturday. I hope we win! What about you? {5} you joined any clubs this year? Write soon and tell me all your news.",
              "{6} wishes,",
              "Jake",
            ],
            answers: [
              [
                "about",
              ],
              [
                "because",
                "as",
              ],
              [
                "to",
              ],
              [
                "every",
                "on",
                "each",
              ],
              [
                "have",
              ],
              [
                "best",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just moved to a new house. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Describe your new house.",
              "Say what you like about it.",
              "Invite Sam to visit.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nWe've just moved to a new house! It's big and it has a garden with an apple tree. I love my new bedroom because it's bigger than my old one. Would you like to visit next weekend?\n\nBye,\nSelin",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🐈🌳",
                label: "1",
              },
              {
                e: "👦🪜🌳🐈",
                label: "2",
              },
              {
                e: "👦🐈🏠😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One afternoon, Ali heard a cat crying in the garden. He looked up and saw a small cat at the top of a tall tree. It was too frightened to come down. Ali got a ladder from the garage and climbed up carefully. He picked up the cat and brought it down safely. The cat belonged to his neighbour, who was very happy and thanked Ali.",
          },
        },
      ],
    },
  ],
};
