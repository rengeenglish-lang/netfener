import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 50 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_50: CambridgeTest = {
  id: "preliminary-50",
  level: "preliminary",
  no: 50,
  title: "B1 Preliminary · Practice Test 50",
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
                    "The school will close early on Friday at 1 p.m. for a staff meeting.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "School is closed all day on Friday.",
                  "School starts late on Friday.",
                  "Students will finish school early on Friday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, the bus to the stadium leaves at 6. Don't be late! Sam",
                  ],
                },
                question: "What does Sam remind Max?",
                options: [
                  "what time the bus leaves",
                  "where the stadium is",
                  "to buy a ticket",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Cook thoroughly before eating.",
                    "Do not eat raw.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can eat it uncooked.",
                  "You must cook it properly.",
                  "It doesn't need cooking.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Can you lend me your camera for the school trip? Mine is broken. I'll be very careful with it! Lucy",
                  ],
                },
                question: "What does Lucy want?",
                options: [
                  "to borrow a camera",
                  "to buy a camera",
                  "to repair a camera",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Barbecues are not allowed near the trees.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Barbecues aren't allowed anywhere.",
                  "You can have a barbecue anywhere.",
                  "You can't have a barbecue near the trees.",
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
            instruction: "The young people below all want to join a sports team. Read the descriptions of eight teams. Decide which team would be the most suitable for each person.",
            options: [
              {
                title: "Football Team",
                text: "Plays in a local league. Training twice a week.",
              },
              {
                title: "Hockey Team",
                text: "Girls' team for ages 12–16. Equipment provided.",
              },
              {
                title: "Rugby Team",
                text: "A tough, physical sport. Matches every Saturday.",
              },
              {
                title: "Swimming Team",
                text: "Competes in regional competitions. Early morning training.",
              },
              {
                title: "Tennis Club",
                text: "Lessons for beginners and advanced players.",
              },
              {
                title: "Rowing Club",
                text: "Train on the river and race in boats with other people.",
              },
              {
                title: "Athletics Club",
                text: "Running, jumping and throwing events.",
              },
              {
                title: "Volleyball Team",
                text: "Plays indoors in winter and on the beach in summer.",
              },
            ],
            items: [
              {
                text: "Selin is a girl who wants to play hockey but doesn't have equipment.",
                answer: 1,
              },
              {
                text: "Burak loves physical sports and isn't afraid of getting hurt.",
                answer: 2,
              },
              {
                text: "Defne loves the water and enjoys working in a team on a boat.",
                answer: 5,
              },
              {
                text: "Kaan wants to try running and jumping.",
                answer: 6,
              },
              {
                text: "Lale wants to play a sport on the beach in summer.",
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
              title: "Volunteering abroad",
              paragraphs: [
                "Last summer, I spent a month volunteering at an animal sanctuary in Thailand. The sanctuary rescues elephants that have been used in tourism or logging.",
                "My job was to help feed the elephants, clean their enclosures and take them to the river to bathe. It was very hard work, especially in the heat. But spending time with the elephants was incredible.",
                "Each elephant had its own personality. My favourite was an old female called Lucky. She'd worked for years carrying tourists, and she was very gentle. The staff told me that when she arrived, she was very thin and sad. Now she's happy and healthy.",
                "The experience changed my life. I learned how important it is to protect animals and how tourism can sometimes harm them. When I got home, I started raising money for the sanctuary. I want to go back next year.",
              ],
            },
            items: [
              {
                question: "What does the sanctuary do?",
                options: [
                  "rescues elephants",
                  "trains elephants for tourism",
                  "sells elephants",
                  "breeds elephants",
                ],
                answer: 0,
              },
              {
                question: "What was the writer's job?",
                options: [
                  "teaching tourists",
                  "building enclosures",
                  "looking after the elephants",
                  "cooking",
                ],
                answer: 2,
              },
              {
                question: "What do we learn about Lucky?",
                options: [
                  "She was very young.",
                  "She used to carry tourists.",
                  "She was aggressive.",
                  "She was born at the sanctuary.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer learn?",
                options: [
                  "Elephants are dangerous.",
                  "Thailand is too hot.",
                  "Volunteering is boring.",
                  "Tourism can harm animals.",
                ],
                answer: 3,
              },
              {
                question: "What has the writer done since returning?",
                options: [
                  "bought an elephant",
                  "raised money for the sanctuary",
                  "become a vet",
                  "started a business",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The ice road",
            text: [
              "In the far north of Canada, there are roads that only exist in winter. {1} They're built on frozen lakes and rivers.",
              "In summer, the communities in this area can only be reached by plane. {2} This makes everything very expensive.",
              "But in winter, when the lakes freeze, special roads are built across the ice. {3} Lorries can then bring food, fuel and building materials.",
              "Driving on ice roads can be dangerous. {4} Drivers must go slowly, because driving too fast can crack the ice.",
              "Because of climate change, the ice roads are open for a shorter time each year. {5} This is causing serious problems for the people who live there.",
            ],
            sentences: [
              "Ice roads are used for racing cars.",
              "Sometimes the ice cracks, and lorries fall through.",
              "Ice roads are open all year.",
              "Flying in food and supplies costs a lot of money.",
              "These are called ice roads.",
              "The winters are getting warmer, so the ice is thinner.",
              "The communities have lots of shops.",
              "The ice must be at least a metre thick.",
            ],
            answers: [
              4,
              3,
              7,
              1,
              5,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Tea",
            text: [
              "Tea is the second most popular drink in the world, after water. Billions of cups are {1} every day.",
              "Tea comes from the leaves of the tea plant, which grows in hot, wet countries like China, India and Kenya. The leaves are picked by hand and then dried. Different methods of drying {2} different types of tea, such as green tea and black tea.",
              "Tea was first drunk in China about 5,000 years ago. According to a legend, an emperor discovered it when some leaves fell into his hot water. Tea later {3} to Japan, Europe and the rest of the world. In Britain, drinking tea became very popular in the eighteenth century. Today, tea is an important part of many {4}. In Japan, there are special tea ceremonies, and in Morocco, mint tea is a sign of {5}. Scientists say that tea, especially green tea, may be good for your {6}.",
            ],
            gaps: [
              {
                options: [
                  "drink",
                  "drinking",
                  "drank",
                  "drunk",
                ],
                answer: 3,
              },
              {
                options: [
                  "production",
                  "produce",
                  "productive",
                  "producer",
                ],
                answer: 1,
              },
              {
                options: [
                  "spread",
                  "spreading",
                  "spreads",
                  "spreader",
                ],
                answer: 0,
              },
              {
                options: [
                  "culture up",
                  "cultural",
                  "cultures",
                  "culturally",
                ],
                answer: 2,
              },
              {
                options: [
                  "hospital",
                  "hospitality",
                  "hospitable",
                  "hospitably",
                ],
                answer: 1,
              },
              {
                options: [
                  "healthy",
                  "healthily",
                  "healthier",
                  "health",
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
            title: "My best holiday",
            text: [
              "The best holiday I've ever had was a trip to Iceland {1} my family two years ago. We spent ten days travelling around the country in a camper van.",
              "Iceland is an amazing country. We saw volcanoes, glaciers, waterfalls and black sand beaches. We also swam in natural hot springs, {2} were surrounded by snow. It was a strange feeling to be warm in the water while it was freezing outside!",
              "One night, we saw the Northern Lights. The sky was full of green and purple lights {3} danced above us. It was the most beautiful thing I've ever seen. We also went whale-watching and saw a humpback whale jump out of the water. The only problem was the weather. It changed very quickly, and sometimes it was very windy and cold. But that didn't stop {4} from having a fantastic time. I'd love to go back to Iceland {5} day. It's a place I'll never {6}.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "which",
              ],
              [
                "that",
                "which",
              ],
              [
                "us",
              ],
              [
                "one",
                "some",
              ],
              [
                "forget",
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
            instruction: "Read this email from your English-speaking friend Jo and the notes you have made. Write your email to Jo using all the notes. Write about 100 words.",
            input: {
              from: "Jo",
              subject: "Your town",
              lines: [
                "I'm going to visit your town next month! [Great!]",
                "What are the best things to see? [Recommend some]",
                "Where's a good place to eat? [Suggest one]",
                "What's the weather usually like? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nThat's great news! I can't wait to show you around.\n\nThe best things to see in my town are the old castle and the harbour. The castle is more than 600 years old, and you can climb to the top of the tower. The harbour is lovely, with lots of colourful boats. We could also visit the market on Saturday morning.\n\nThere's a fantastic fish restaurant by the harbour. The food is fresh and not too expensive. They also make the best ice cream in town!\n\nNext month, the weather is usually warm and sunny, but it can rain sometimes, so bring a jacket.\n\nSee you soon,\nEce",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The future of transport",
              lines: [
                "How do you think people will travel in the future?",
                "Will cars still be popular?",
                "What changes would you like to see?",
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
            sample: "Travelling in the future\n\nI think transport will change a lot in the future. Electric cars are already becoming popular, and I believe that in twenty years, most cars will be electric. Some will probably drive themselves!\n\nI also think there will be more high-speed trains, which are faster and better for the environment than planes. In cities, people might use electric scooters and bikes more often.\n\nI'd like to see more cycle lanes in cities, so cycling is safer. I'd also like public transport to be cheaper, so more people use it instead of driving. These changes would reduce pollution and make our cities cleaner and healthier places to live.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was the night before the big exam, and Sam couldn't sleep.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was the night before the big exam, and Sam couldn't sleep. He had studied for weeks, but he was still worried that he would forget everything.\n\nHe got up and went to the kitchen to get a glass of water. His grandmother was there, reading a book. 'Can't sleep?' she asked with a smile. Sam explained how nervous he was.\n\nHis grandmother told him about her own exams when she was young. 'I was terrified too,' she said. 'But I remembered that I had done my best. That's all anyone can do.'\n\nSam felt much better. He went back to bed and slept well. The next day, the exam went perfectly.",
          },
        },
      ],
    },
  ],
};
