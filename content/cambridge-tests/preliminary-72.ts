import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 72 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_72: CambridgeTest = {
  id: "preliminary-72",
  level: "preliminary",
  no: 72,
  title: "B1 Preliminary · Practice Test 72",
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
                    "SWIMMING POOL",
                    "The pool will open late on Monday because of cleaning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed on Monday.",
                  "The pool will open later than usual.",
                  "The pool will close early.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I can't find my phone charger. Can I borrow yours tonight? Grace",
                  ],
                },
                question: "What does Grace want?",
                options: [
                  "to borrow a charger",
                  "to buy a charger",
                  "to borrow a phone",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not for children under 12.",
                  ],
                },
                question: "Who shouldn't use this?",
                options: [
                  "adults",
                  "everyone",
                  "children under 12",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The match on Saturday will start at 3 instead of 2. Don't be late! Coach",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the place",
                  "the day",
                  "the time of the match",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Free guided tours every hour.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are free tours regularly.",
                  "Tours cost money.",
                  "There are no tours.",
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
            instruction: "The young people below all want to watch a film. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              {
                title: "The Lost Treasure",
                text: "An adventure about pirates.",
              },
              {
                title: "Funny Friends",
                text: "A comedy about four friends.",
              },
              {
                title: "Ocean Life",
                text: "A documentary about the sea.",
              },
              {
                title: "Space Mission",
                text: "A science-fiction film about astronauts.",
              },
              {
                title: "The Ghost",
                text: "A scary horror film.",
              },
              {
                title: "Dancing Stars",
                text: "A musical about dancers.",
              },
              {
                title: "Cartoon Fun",
                text: "An animated film for children.",
              },
              {
                title: "True Hero",
                text: "The true story of a firefighter.",
              },
            ],
            items: [
              {
                text: "Kaan loves pirate stories.",
                answer: 0,
              },
              {
                text: "Defne wants to watch something scary.",
                answer: 4,
              },
              {
                text: "Mert loves space.",
                answer: 3,
              },
              {
                text: "Selin wants to watch with her little sister.",
                answer: 6,
              },
              {
                text: "Burak likes true stories.",
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
              title: "A dream come true",
              paragraphs: [
                "Ever since I was a child, I'd dreamed of becoming a pilot. I loved watching planes take off and land at the airport near my house.",
                "When I was eighteen, I started flying lessons. It was very expensive, so I worked in a supermarket at weekends to pay for them.",
                "The lessons were very difficult. I had to learn a lot about weather, navigation and how planes work. Sometimes I felt like giving up. But my instructor always encouraged me.",
                "After two years of hard work, I finally got my pilot's licence. Last month, I flew a plane on my own for the first time. It was the best feeling in the world. Now I'm training to become a commercial pilot. I want to fly big planes all over the world.",
              ],
            },
            items: [
              {
                question: "What did the writer dream of being?",
                options: [
                  "a teacher",
                  "a pilot",
                  "a doctor",
                  "an engineer",
                ],
                answer: 1,
              },
              {
                question: "How did the writer pay for lessons?",
                options: [
                  "her parents paid",
                  "she won a prize",
                  "the airport paid",
                  "by working in a supermarket",
                ],
                answer: 3,
              },
              {
                question: "What was difficult about the lessons?",
                options: [
                  "the instructor",
                  "learning lots of information",
                  "flying at night",
                  "the noise",
                ],
                answer: 1,
              },
              {
                question: "How long did it take to get a licence?",
                options: [
                  "two months",
                  "five years",
                  "one year",
                  "two years",
                ],
                answer: 3,
              },
              {
                question: "What is the writer training for now?",
                options: [
                  "to be a commercial pilot",
                  "to be an instructor",
                  "to be an engineer",
                  "to fly helicopters",
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
            title: "A city of gardens",
            text: [
              "Singapore is a small country in Asia, but it's famous for its gardens. {1} It's often called the 'Garden City'.",
              "The most famous garden is Gardens by the Bay. {2} It has huge metal structures called 'supertrees', which are covered in plants.",
              "The supertrees are up to fifty metres tall. {3} At night, they're lit up with colourful lights.",
              "Singapore also has many green buildings. {4} Some buildings have gardens on their roofs and walls.",
              "The government wants Singapore to become a 'City in Nature'. {5} They're planting more trees and creating new parks.",
            ],
            sentences: [
              "There are no gardens in Singapore.",
              "There are parks and gardens everywhere.",
              "This helps to keep the city cool.",
              "Singapore is a very big country.",
              "It opened in 2012 and covers 101 hectares.",
              "The supertrees are real trees.",
              "They collect rainwater and produce solar energy.",
              "They hope this will make the city healthier.",
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
              "Chocolate is one of the world's favourite sweets. It's made from cacao beans, which grow on trees in hot, tropical {1}.",
              "The ancient Maya people of Central America were the first to make chocolate. They made a {2} drink from cacao beans and spices.",
              "When chocolate came to Europe in the sixteenth century, people added sugar to make it sweeter. The first chocolate bar was made in 1847. Today, chocolate is {3} all over the world. The country that eats the most chocolate is Switzerland. Dark chocolate contains less sugar than milk chocolate and is {4} for you. Some scientists believe that eating a small amount of dark chocolate can be good for your {5}. However, eating too much chocolate can cause health problems. It's best to eat it in {6}.",
            ],
            gaps: [
              {
                options: [
                  "countries",
                  "country up",
                  "countryside",
                  "countrified",
                ],
                answer: 0,
              },
              {
                options: [
                  "bitterly",
                  "bitterness",
                  "bitter",
                  "bitten",
                ],
                answer: 2,
              },
              {
                options: [
                  "eat",
                  "eaten",
                  "ate",
                  "eating",
                ],
                answer: 1,
              },
              {
                options: [
                  "healthy",
                  "health",
                  "healthily",
                  "healthier",
                ],
                answer: 3,
              },
              {
                options: [
                  "hearty",
                  "heart",
                  "heartily",
                  "heartless",
                ],
                answer: 1,
              },
              {
                options: [
                  "moderate",
                  "moderately",
                  "modern",
                  "moderation",
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
            title: "A wonderful teacher",
            text: [
              "My favourite teacher is Mrs Clark, who teaches me English. She's been teaching {1} more than twenty years.",
              "Mrs Clark makes her lessons very interesting. She uses games, songs and videos to help us learn. She also encourages us to speak a lot, even if we make mistakes.",
              "What I like most about Mrs Clark is that she believes {2} every student. When I was struggling with my writing, she gave me extra help after school. Because of her, my English has improved a lot. Mrs Clark also runs a book club {3} lunchtime. We read a book every month and discuss it. I've discovered lots of great books {4} the club. Last year, Mrs Clark organised a trip to London for our class. We visited the theatre and saw a play by Shakespeare. It was amazing! I hope I'll be {5} good a teacher as Mrs Clark one day. She's inspired me {6} much.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "in",
              ],
              [
                "at",
              ],
              [
                "through",
                "thanks",
                "in",
              ],
              [
                "as",
              ],
              [
                "so",
                "very",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "A day at the beach",
              lines: [
                "Would you like to come to the beach with my family on Saturday? [Answer]",
                "What do you like doing at the beach? [Tell Alex]",
                "What should you bring? [Ask]",
                "How will we get there? [Ask]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThank you so much for inviting me! I'd love to come to the beach with your family on Saturday.\n\nI love swimming in the sea and playing volleyball on the sand. I also enjoy building sandcastles and looking for shells. If there are rocks, I like exploring rock pools to find crabs.\n\nWhat should I bring? I'll bring my swimming costume, a towel and sun cream. Should I bring some food for a picnic? I could make some sandwiches.\n\nAlso, how will we get there? Will we go by car or by train? What time should I be ready?\n\nSee you on Saturday!\nZehra",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day I'll always remember",
              lines: [
                "Tell us about a day you'll never forget.",
                "What happened?",
                "Why was it so special?",
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
            sample: "My first day at secondary school\n\nOne day I'll never forget is my first day at secondary school. I was eleven, and I was very nervous. The school was much bigger than my primary school, and I didn't know anyone.\n\nWhen I arrived, I got lost and couldn't find my classroom. I was close to tears. Then a girl from my class saw me and helped me. Her name was Mia, and she was very kind. We sat together in every lesson, and she introduced me to her friends.\n\nThat day was special because I met my best friend. Mia and I have been best friends ever since. I'm so grateful she helped me.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Jack had always wanted to see a real volcano.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Jack had always wanted to see a real volcano. So when his parents said they were going to Iceland for a holiday, he was very excited.\n\nOn the third day, they joined a tour to see an active volcano. The guide warned them to stay on the path because the ground was very hot.\n\nWhen they reached the top of a hill, Jack saw it. Red lava was flowing slowly down the side of the volcano. Smoke was rising into the sky. It was the most incredible thing he had ever seen.\n\nJack took lots of photos. When he got home, he showed them to his class. Everyone was amazed.",
          },
        },
      ],
    },
  ],
};
