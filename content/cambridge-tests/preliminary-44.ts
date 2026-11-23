import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 44 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_44: CambridgeTest = {
  id: "preliminary-44",
  level: "preliminary",
  no: 44,
  title: "B1 Preliminary · Practice Test 44",
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
                    "LIBRARY",
                    "Children's books are on the ground floor. Adult books are upstairs.",
                  ],
                },
                question: "Where can you find children's books?",
                options: [
                  "on the ground floor",
                  "upstairs",
                  "in the basement",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've just seen the film you recommended. It was brilliant! Thanks! Ella",
                  ],
                },
                question: "Why has Ella sent this message?",
                options: [
                  "to invite Lucy to the cinema",
                  "to thank Lucy for a recommendation",
                  "to recommend a film",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains alcohol.",
                    "Keep away from flames.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This should not be near fire.",
                  "This can be used near fire.",
                  "This contains no alcohol.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "Our team meeting has been changed to Wednesday at 4. Please let everyone know. Coach",
                  ],
                },
                question: "What does the coach want Tom to do?",
                options: [
                  "organise the meeting",
                  "cancel the meeting",
                  "tell the others about the change",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOTEL",
                    "Check-out time is 11 a.m. Late check-out available for an extra charge.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must leave before 10.",
                  "You can leave later if you pay more.",
                  "Late check-out is free.",
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
            instruction: "The young people below all want to take up a new sport. Read the descriptions of eight sports clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Sailing Club",
                text: "Learn to sail on the lake. Life jackets provided. Summer only.",
              },
              {
                title: "Judo Club",
                text: "Learn self-defence and discipline. All ages welcome.",
              },
              {
                title: "Golf Club",
                text: "Learn to play golf on a beautiful course. Clubs can be hired.",
              },
              {
                title: "Archery Club",
                text: "Learn to shoot arrows at targets. Indoor and outdoor.",
              },
              {
                title: "Volleyball Club",
                text: "Friendly team that plays on the beach in summer.",
              },
              {
                title: "Cycling Club",
                text: "Long rides every Sunday. You need your own bike.",
              },
              {
                title: "Badminton Club",
                text: "Indoor courts. Rackets provided. Evenings.",
              },
              {
                title: "Diving Club",
                text: "Learn to scuba dive in a pool and then in the sea.",
              },
            ],
            items: [
              {
                text: "Asya wants to explore underwater.",
                answer: 7,
              },
              {
                text: "Burak loves being on the water and is free in summer.",
                answer: 0,
              },
              {
                text: "Emre wants to learn how to protect himself.",
                answer: 1,
              },
              {
                text: "Lale wants an indoor sport and doesn't have any equipment.",
                answer: 6,
              },
              {
                text: "Kerem has a bike and wants to explore the countryside.",
                answer: 5,
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
              title: "A night in the forest",
              paragraphs: [
                "Last summer, I went on a survival course in the forest with my school. We had to spend a night outside without tents or sleeping bags. I was terrified!",
                "Our instructor, Mark, taught us how to build a shelter from branches and leaves. He also showed us how to make a fire without matches. It took me nearly an hour, but I finally did it!",
                "When it got dark, we sat around the fire and cooked our dinner. We'd caught some fish in the river earlier. They tasted amazing, probably because we'd worked so hard for them.",
                "The night was cold, and I didn't sleep much. But in the morning, I felt really proud of myself. I'd never thought I could survive a night in the forest. The course taught me that I'm stronger than I think.",
              ],
            },
            items: [
              {
                question: "How did the writer feel about the course at first?",
                options: [
                  "terrified",
                  "excited",
                  "bored",
                  "happy",
                ],
                answer: 0,
              },
              {
                question: "What did Mark teach them?",
                options: [
                  "how to swim",
                  "how to climb trees",
                  "how to build a shelter",
                  "how to catch birds",
                ],
                answer: 2,
              },
              {
                question: "How long did it take the writer to make a fire?",
                options: [
                  "a few minutes",
                  "all day",
                  "about an hour",
                  "she couldn't do it",
                ],
                answer: 2,
              },
              {
                question: "What did they eat for dinner?",
                options: [
                  "fish",
                  "sandwiches",
                  "meat",
                  "fruit",
                ],
                answer: 0,
              },
              {
                question: "What did the course teach the writer?",
                options: [
                  "She doesn't like the forest.",
                  "Survival is easy.",
                  "She should stay at home.",
                  "She is stronger than she thought.",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A city of bicycles",
            text: [
              "In Copenhagen, the capital of Denmark, there are more bicycles than people. {1} About 62% of people cycle to work or school every day.",
              "The city has built more than 380 kilometres of cycle lanes. {2} Some of them are even wider than the roads for cars.",
              "Cyclists also have their own traffic lights and bridges. {3} There's even a special bridge that goes over the harbour.",
              "In winter, the city clears snow from the cycle lanes before the roads. {4} This shows how important cycling is to the people of Copenhagen.",
              "Other cities around the world are now copying Copenhagen's ideas. {5} They hope that more cycling will reduce traffic and pollution.",
            ],
            sentences: [
              "Most people in Copenhagen drive cars.",
              "It's often called the most bicycle-friendly city in the world.",
              "Even when it's very cold, many people still cycle.",
              "The cycle lanes are closed in winter.",
              "They are separated from the traffic to make cycling safer.",
              "Bicycles are not allowed in the city centre.",
              "These make it easier and faster to cycle around the city.",
              "Paris and London have both built many new cycle lanes.",
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
            title: "Chocolate",
            text: [
              "Chocolate is loved by people all over the world. It's made from the beans of the cacao tree, which grows in {1} countries near the equator.",
              "The ancient Maya people were the first to make chocolate drinks about 2,500 years ago. They believed cacao was a {2} from the gods.",
              "When chocolate arrived in Europe in the 1500s, it was a luxury that only rich people could {3}. It was mixed with sugar and spices to make a sweet drink. The first chocolate bar was made in 1847. Since then, chocolate has become one of the world's most popular treats. Today, the biggest {4} of cacao are Ivory Coast and Ghana. However, many cacao farmers are very poor. Some organisations are working to make sure farmers {5} a fair price for their beans. When you buy chocolate, look for the Fairtrade logo. It means the farmers have been paid {6}.",
            ],
            gaps: [
              {
                options: [
                  "tropic",
                  "tropical",
                  "tropics",
                  "tropically",
                ],
                answer: 1,
              },
              {
                options: [
                  "gifted",
                  "gifting",
                  "gifts up",
                  "gift",
                ],
                answer: 3,
              },
              {
                options: [
                  "afford",
                  "affordable",
                  "affording",
                  "afforded",
                ],
                answer: 0,
              },
              {
                options: [
                  "produce",
                  "production",
                  "producers",
                  "productive",
                ],
                answer: 2,
              },
              {
                options: [
                  "reception",
                  "receiver",
                  "receive",
                  "received up",
                ],
                answer: 2,
              },
              {
                options: [
                  "fairly",
                  "fair",
                  "fairness",
                  "fairer",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My first day at work",
            text: [
              "Last summer, I got a job at a café near the beach. My first day was a disaster! I arrived {1} because I missed the bus.",
              "My manager, Lisa, wasn't happy, but she gave me a uniform and showed me what to do. My first job was making coffee. I'd never used a coffee machine before, {2} I made lots of mistakes. One customer complained that his coffee was cold!",
              "Then I dropped a tray of cakes on the floor. Everyone looked at me, and I felt so embarrassed. At the end of the day, I thought Lisa would {3} me. But she just laughed and said everyone has a bad first day. The next day, I arrived early and tried {4} best. Things got better, and by the end of the summer, I was the {5} coffee maker in the café! I learned that mistakes are part of learning. Now I'm not afraid of making {6}.",
            ],
            answers: [
              [
                "late",
              ],
              [
                "so",
              ],
              [
                "sack",
                "fire",
              ],
              [
                "my",
              ],
              [
                "best",
              ],
              [
                "them",
                "mistakes",
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "Visiting a museum",
              lines: [
                "I'm going to visit a museum with my class next week. [Interesting!]",
                "Do you like museums? [Tell Jamie]",
                "What's the best museum you've ever visited? [Describe]",
                "What should I look for at the museum? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nThat sounds really interesting! School trips are always fun.\n\nI really like museums, especially ones about history and science. I think they're a great way to learn new things.\n\nThe best museum I've ever visited is the Natural History Museum in London. There's a huge whale skeleton in the main hall, and there's a room where you can feel what an earthquake is like! I spent the whole day there.\n\nAt the museum, you should look for the most famous objects first, because they're usually the most interesting. Don't forget to take some photos and ask the guides questions.\n\nHave fun!\nOnur",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! What I learned from failure",
              lines: [
                "Tell us about a time when something didn't go well.",
                "What happened?",
                "What did you learn?",
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
            sample: "Learning from failure\n\nLast year, I tried out for the school football team, and I didn't get in. I was really upset, because I'd been playing football since I was six, and I thought I was good enough.\n\nAt first, I wanted to give up football completely. But my dad told me that failure is part of life and that I should use it to improve. So I started training harder. I practised every day after school and asked the coach what I needed to work on.\n\nThis year, I tried out again, and I got into the team! I learned that failure isn't the end. It's a chance to learn and get better.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Sophie had never seen so many people in one place.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Sophie had never seen so many people in one place. She was at a music festival with her older brother, and there were more than fifty thousand people there.\n\nThe music was loud, and everyone was dancing and singing. Sophie was having a great time until she realised she had lost her brother. She looked everywhere, but she couldn't see him.\n\nShe started to panic. Then she remembered what her brother had said: 'If we get lost, meet at the big tree near the entrance.' She went there, and a few minutes later, her brother arrived.\n\nThey hugged and laughed. 'Let's stay together from now on,' he said.",
          },
        },
      ],
    },
  ],
};
