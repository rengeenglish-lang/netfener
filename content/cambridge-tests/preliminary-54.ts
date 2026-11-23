import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 54 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_54: CambridgeTest = {
  id: "preliminary-54",
  level: "preliminary",
  no: 54,
  title: "B1 Preliminary · Practice Test 54",
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
                    "Year 7 students: your school photos will be taken on Tuesday morning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Some students will have their photos taken.",
                  "There are no lessons on Tuesday.",
                  "Photos are for sale.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, I'm at the shop. They don't have the cake you wanted. Shall I get a different one? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "which shop to go to",
                  "when Jo is coming home",
                  "if she should buy another cake",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for vegans.",
                    "No animal products.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This contains meat.",
                  "This doesn't contain animal products.",
                  "This contains milk.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "I've booked a table at the pizza restaurant for Saturday at 7. See you there! Tom",
                  ],
                },
                question: "What has Tom done?",
                options: [
                  "cancelled a booking",
                  "reserved a table",
                  "ordered pizza",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Dogs must be kept on a lead at all times.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Dogs aren't allowed in the park.",
                  "Dogs can run freely.",
                  "Dogs must always be on a lead.",
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
            instruction: "The young people below all want to visit a museum. Read the descriptions of eight museums. Decide which museum would be the most suitable for each person.",
            options: [
              {
                title: "Railway Museum",
                text: "Old trains and a model railway.",
              },
              {
                title: "Fashion Museum",
                text: "Clothes from the last 500 years.",
              },
              {
                title: "Natural History Museum",
                text: "Dinosaur skeletons and fossils.",
              },
              {
                title: "War Museum",
                text: "History of the world wars.",
              },
              {
                title: "Toy Museum",
                text: "Toys and games from the past.",
              },
              {
                title: "Maritime Museum",
                text: "Ships, sailors and the history of the sea.",
              },
              {
                title: "Computer Museum",
                text: "The history of computers and technology.",
              },
              {
                title: "Art Museum",
                text: "Paintings and sculptures from around the world.",
              },
            ],
            items: [
              {
                text: "Asya loves fashion and wants to see historical clothes.",
                answer: 1,
              },
              {
                text: "Kerem loves dinosaurs.",
                answer: 2,
              },
              {
                text: "Lale is interested in ships and the sea.",
                answer: 5,
              },
              {
                text: "Emre loves trains.",
                answer: 0,
              },
              {
                text: "Defne wants to see old games and dolls.",
                answer: 4,
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
                "When I was sixteen, I got my first job at a bookshop. I'd always loved books, so it was the perfect job for me.",
                "On my first day, I was very nervous. The manager, Mr Brown, showed me how to use the till and where everything was. I had to help customers find books and put new books on the shelves.",
                "At first, I found it difficult to remember where all the books were. Sometimes customers asked me for books I'd never heard of. But Mr Brown was very patient, and I learned quickly.",
                "Now I've been working there for a year. I love recommending books to customers, and I get a discount on books, which is great! The job has taught me a lot about working with people. I'm going to study literature at university.",
              ],
            },
            items: [
              {
                question: "Why was the bookshop job perfect for the writer?",
                options: [
                  "It was near her house.",
                  "It was well paid.",
                  "She loved books.",
                  "Her friend worked there.",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel on her first day?",
                options: [
                  "nervous",
                  "bored",
                  "confident",
                  "angry",
                ],
                answer: 0,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "using the till",
                  "talking to customers",
                  "arriving on time",
                  "remembering where the books were",
                ],
                answer: 3,
              },
              {
                question: "What does the writer enjoy about the job?",
                options: [
                  "cleaning",
                  "recommending books",
                  "working late",
                  "using the computer",
                ],
                answer: 1,
              },
              {
                question: "What does the writer want to study?",
                options: [
                  "literature",
                  "business",
                  "history",
                  "art",
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
            title: "A park in the sky",
            text: [
              "In New York, there's a park built on an old railway line. {1} It's called the High Line.",
              "The railway was built in the 1930s to carry goods. {2} But by 1980, it wasn't used any more.",
              "For many years, the railway was empty, and wild plants started growing on it. {3} Then a group of local people had the idea of turning it into a park.",
              "The High Line opened in 2009. {4} It has gardens, art and places to sit and relax.",
              "Today, about eight million people visit the High Line every year. {5} Other cities around the world are now building similar parks.",
            ],
            sentences: [
              "Nobody visits the park.",
              "It runs for more than two kilometres through the city.",
              "Trains still run on the High Line.",
              "Trains took food and other products to factories.",
              "It's about nine metres above the streets.",
              "It has become one of the city's most popular attractions.",
              "The park is under the ground.",
              "Some people wanted to destroy it.",
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
            title: "Elephants",
            text: [
              "Elephants are the largest land animals in the world. There are two main types: African elephants and Asian elephants. African elephants are larger and have {1} ears.",
              "Elephants are very intelligent. They have excellent {2} and can recognise other elephants even after many years apart. They also show emotions like happiness and sadness.",
              "Elephants live in family groups led by the oldest female. They are very {3} to each other and help to look after the babies. An elephant's trunk has about 40,000 muscles and is very useful. They use it to drink, eat, smell and greet each other. Sadly, elephants are {4}. People hunt them for their ivory tusks, and their habitats are being destroyed. In the last century, the number of African elephants has fallen {5}. Many organisations are working to protect elephants and stop the illegal {6} of ivory.",
            ],
            gaps: [
              {
                options: [
                  "bigger",
                  "big",
                  "biggest",
                  "bigness",
                ],
                answer: 0,
              },
              {
                options: [
                  "memory up",
                  "memorise",
                  "memories",
                  "memorable",
                ],
                answer: 2,
              },
              {
                options: [
                  "care",
                  "careful",
                  "caring",
                  "carefully",
                ],
                answer: 2,
              },
              {
                options: [
                  "endangered",
                  "danger",
                  "dangerous",
                  "dangerously",
                ],
                answer: 0,
              },
              {
                options: [
                  "dramatic",
                  "drama",
                  "dramatise",
                  "dramatically",
                ],
                answer: 3,
              },
              {
                options: [
                  "trader",
                  "trade",
                  "trading up",
                  "traded",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My grandfather's stories",
            text: [
              "My grandfather was a sailor {1} forty years. He travelled all over the world on big ships.",
              "When I was little, I loved listening to his stories. He told me about storms at sea, strange animals and exotic countries. My favourite story was about the time he saw a whale {2} was bigger than his ship!",
              "Now my grandfather is ninety, and he lives with us. Every evening after dinner, I sit with him and he tells me more stories. Last year, I started writing them {3}. I've already filled three notebooks! I want to make a book of his stories {4} that our family can remember them. My grandfather is very happy about this. He says he's never told anyone {5} many stories before. I think his life has been amazing. I hope I'll have {6} many adventures as him.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "that",
                "which",
              ],
              [
                "down",
              ],
              [
                "so",
              ],
              [
                "so",
              ],
              [
                "as",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A new neighbour",
              lines: [
                "A new family has moved in next door. [Interesting!]",
                "How can I make them feel welcome? [Give ideas]",
                "Do you know your neighbours well? [Tell Chris]",
                "Should I invite them for dinner? [Give your opinion]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nThat's interesting! I hope they're nice.\n\nTo make them feel welcome, you could knock on their door and introduce yourself. You could also bake a cake or some cookies for them. If they have children, you could invite them to play or show them around the area.\n\nI know my neighbours quite well. The family next door have two children, and I often play football with them. There's also an old man across the road who I help with his shopping sometimes.\n\nYes, I think you should invite them for dinner! It would be a great way to get to know them.\n\nBye,\nArda",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day in my life",
              lines: [
                "Tell us about a typical day in your life.",
                "What do you do?",
                "What's the best part of your day?",
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
            sample: "My ordinary day\n\nOn a typical day, I wake up at seven o'clock. I have breakfast with my family and then walk to school with my best friend. School starts at half past eight and finishes at three.\n\nAfter school, I usually have football training or do my homework. In the evening, I have dinner with my family. We always talk about our day. Then I read a book or watch TV before going to bed at about ten.\n\nThe best part of my day is dinner time. It's the only time when my whole family is together, and we always laugh a lot. It's a time I really enjoy.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The note said: 'Meet me at the old tree at midnight.'' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The note said: 'Meet me at the old tree at midnight.' Lily found it in her school bag. She didn't know who had written it.\n\nShe was curious, but also a bit scared. She decided to go, but she asked her brother to come with her. At midnight, they walked to the old tree in the park.\n\nThere was nobody there. They waited for ten minutes. Then they heard a noise. Lily's best friend, Emma, came out from behind the tree, laughing. 'Happy birthday!' she shouted. Behind her were all their friends with a cake and candles.\n\nLily had forgotten it was her birthday! It was the best surprise ever.",
          },
        },
      ],
    },
  ],
};
