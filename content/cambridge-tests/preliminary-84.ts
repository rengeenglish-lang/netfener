import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 84 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_84: CambridgeTest = {
  id: "preliminary-84",
  level: "preliminary",
  no: 84,
  title: "B1 Preliminary · Practice Test 84",
  papers: [
    {
      id: "reading",
      name: "Reading",
      minutes: 45,
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
                  "Students must wear a helmet on their bikes.",
                  "Helmets are sold at school.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've finished my homework. Do you want to play football in the park? Ben",
                  ],
                },
                question: "What does Ben suggest?",
                options: [
                  "playing football",
                  "doing homework",
                  "going to the cinema",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for microwave.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't put it in a microwave.",
                  "It's for the oven only.",
                  "You can use it in a microwave.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "The museum trip is on Friday, not Thursday. We'll meet at the station at 9. Mrs Clark",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the meeting place",
                  "the time",
                  "the day of the trip",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Dogs are not allowed in the children's playground.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Dogs can't go in the playground.",
                  "Dogs can play with children.",
                  "Dogs aren't allowed in the park.",
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
            instruction: "The young people below all want to go somewhere at the weekend. Read the descriptions of eight places. Decide which place would be the most suitable for each person.",
            options: [
              {
                title: "Aquarium",
                text: "See sharks, turtles and tropical fish.",
              },
              {
                title: "Theatre",
                text: "Watch a funny play.",
              },
              {
                title: "Concert Hall",
                text: "Listen to a classical music concert.",
              },
              {
                title: "Sports Centre",
                text: "Swim, play tennis or go to the gym.",
              },
              {
                title: "Shopping Centre",
                text: "Shops, restaurants and a cinema.",
              },
              {
                title: "Farm Park",
                text: "Feed animals and ride ponies.",
              },
              {
                title: "Art Gallery",
                text: "Modern art exhibitions.",
              },
              {
                title: "Adventure Park",
                text: "Zip lines and climbing.",
              },
            ],
            items: [
              {
                text: "Kaan wants to see sharks.",
                answer: 0,
              },
              {
                text: "Defne loves classical music.",
                answer: 2,
              },
              {
                text: "Mert wants to go shopping.",
                answer: 4,
              },
              {
                text: "Selin wants to ride a pony.",
                answer: 5,
              },
              {
                text: "Burak loves exciting activities.",
                answer: 7,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "My first job",
              paragraphs: [
                "When I was sixteen, I got my first job at a café. I worked there every Saturday and Sunday.",
                "At first, I was very nervous. I didn't know how to make coffee, and I was worried about making mistakes. But my manager was very kind and taught me everything.",
                "The café was always very busy, especially at lunchtime. I had to work very quickly. Sometimes I made mistakes, like bringing the wrong food to customers. But most customers were very patient.",
                "After six months, I was much more confident. I could make all kinds of coffee, and I enjoyed talking to customers. I saved enough money to buy a new bike. The job taught me a lot about working hard and being responsible.",
              ],
            },
            items: [
              {
                question: "When did the writer work?",
                options: [
                  "every day",
                  "at weekends",
                  "in the evenings",
                  "in the holidays",
                ],
                answer: 1,
              },
              {
                question: "Why was the writer nervous at first?",
                options: [
                  "She didn't like the manager.",
                  "The café was too big.",
                  "She didn't like coffee.",
                  "She didn't know how to make coffee.",
                ],
                answer: 3,
              },
              {
                question: "When was the café busiest?",
                options: [
                  "in the morning",
                  "at lunchtime",
                  "in the evening",
                  "at night",
                ],
                answer: 1,
              },
              {
                question: "What mistakes did the writer make?",
                options: [
                  "breaking cups",
                  "being late",
                  "forgetting to pay",
                  "bringing the wrong food",
                ],
                answer: 3,
              },
              {
                question: "What did the writer buy?",
                options: [
                  "a bike",
                  "a phone",
                  "clothes",
                  "a laptop",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A city on water",
            text: [
              "Venice is a city in Italy that is built on water. {1} Instead of roads, it has canals.",
              "The city is built on more than a hundred small islands. {2} The islands are connected by more than 400 bridges.",
              "People in Venice travel by boat. {3} The most famous boats are the gondolas, which are long and black.",
              "Venice is a very popular tourist destination. {4} Every year, more than twenty million people visit.",
              "However, Venice faces a serious problem. {5} When the water rises, parts of the city are flooded.",
            ],
            sentences: [
              "Venice has lots of roads.",
              "It's one of the most beautiful cities in the world.",
              "Some people worry there are too many tourists.",
              "Venice is in the mountains.",
              "It was built more than 1,500 years ago.",
              "Nobody visits Venice.",
              "There are water buses and water taxis.",
              "The city is slowly sinking.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Sleep",
            text: [
              "Sleep is very important for our health. When we sleep, our bodies {1} themselves and our brains store what we have learned.",
              "Teenagers need between eight and ten hours of sleep every night. However, many teenagers don't get enough sleep. This can make them feel tired and {2}.",
              "One reason teenagers don't get enough sleep is technology. Many teenagers use their phones in bed, and the light from the screen makes it {3} to fall asleep. Experts recommend turning off screens at least an hour before bed. Another reason is that teenagers' body clocks are different from adults'. They naturally feel more {4} at night and want to sleep later in the morning. Some schools have started lessons later so that students can get more sleep. The {5} have been very positive. Students are more alert and get better {6}.",
            ],
            gaps: [
              {
                options: [
                  "repair",
                  "repairing",
                  "repaired",
                  "repairs",
                ],
                answer: 0,
              },
              {
                options: [
                  "mood",
                  "moods",
                  "moody",
                  "moodily",
                ],
                answer: 2,
              },
              {
                options: [
                  "hard",
                  "harder",
                  "hardest",
                  "hardly",
                ],
                answer: 1,
              },
              {
                options: [
                  "awaken",
                  "awakened",
                  "awaking",
                  "awake",
                ],
                answer: 3,
              },
              {
                options: [
                  "result up",
                  "results",
                  "resulted",
                  "resulting",
                ],
                answer: 1,
              },
              {
                options: [
                  "marked",
                  "marker",
                  "marking",
                  "marks",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My favourite place",
            text: [
              "My favourite place is my grandmother's garden. She lives in a small village in the countryside, and I visit her {1} summer.",
              "Her garden is full of flowers, fruit trees and vegetables. There's a big apple tree in the middle, and I love sitting under it {2} read.",
              "When I was little, my grandmother taught me how to plant seeds and look after plants. Now I help her in the garden every day when I visit. We pick fruit and vegetables, and she uses them to cook delicious meals. My favourite is her apple pie, {3} she makes with apples from the tree. In the evenings, we sit in the garden and watch the sunset. It's very peaceful. There's no noise from cars or people, only the sound of birds. I feel very relaxed {4} I'm there. My grandmother's garden is special to me because it reminds me of happy times {5} her. I hope I'll always be able to visit {6}.",
            ],
            answers: [
              [
                "every",
                "each",
                "in",
              ],
              [
                "to",
              ],
              [
                "which",
              ],
              [
                "when",
                "whenever",
              ],
              [
                "with",
              ],
              [
                "it",
                "her",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      minutes: 45,
      parts: [
        {
          title: "Part 1 · Email",
          task: {
            kind: "writing",
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "A cooking competition",
              lines: [
                "I want to enter a cooking competition. [Great idea!]",
                "What dish should I make? [Suggest one]",
                "How should I prepare? [Give advice]",
                "Will you come and watch? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nWhat a great idea! You're a fantastic cook, so I'm sure you'll do well.\n\nI think you should make your famous lasagne. Everyone loves it, and it looks very impressive. You could also make a chocolate dessert, because judges usually love chocolate!\n\nTo prepare, you should practise making the dish several times before the competition. Ask your family to taste it and give you feedback. Make sure you know the recipe very well, so you don't make mistakes on the day.\n\nOf course I'll come and watch! Just tell me when and where. I'll cheer for you!\n\nGood luck!\nOnur",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A famous person I'd like to meet",
              lines: [
                "Which famous person would you like to meet?",
                "Why would you like to meet them?",
                "What would you ask them?",
                "Send us your article!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "Meeting a space hero\n\nThe famous person I'd most like to meet is an astronaut who has been to the International Space Station. I've always been fascinated by space, and I'd love to hear about life in space.\n\nI'd like to meet an astronaut because they've done something very few people have done. They've seen the Earth from space and floated in zero gravity. That must be an incredible experience!\n\nI would ask them how they trained to become an astronaut and what it feels like to look at the Earth from space. I'd also ask them what they ate and how they slept. Maybe they'd inspire me to become an astronaut too!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The snow had been falling all night.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The snow had been falling all night. When Lily woke up, the whole town was white. She looked out of her window and smiled.\n\nThe radio said that schools were closed because of the snow. Lily was so happy! She got dressed quickly and ran outside with her brother.\n\nThey built a huge snowman in the garden and gave it a carrot nose and their dad's old hat. Then they had a snowball fight with the neighbours' children. Everyone was laughing.\n\nIn the afternoon, they went sledging on the hill near their house. When they got home, their mum made them hot chocolate. It was the best snow day ever.",
          },
        },
      ],
    },
  ],
};
