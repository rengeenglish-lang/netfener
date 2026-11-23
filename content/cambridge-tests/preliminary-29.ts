import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 29 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_29: CambridgeTest = {
  id: "preliminary-29",
  level: "preliminary",
  no: 29,
  title: "B1 Preliminary · Practice Test 29",
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
                    "TRAIN",
                    "This train will not stop at Hill Street today because of repairs. Passengers should get off at Park Road.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Passengers for Hill Street need to get off at another station.",
                  "The train will stop at Hill Street.",
                  "There are no trains today.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Kate, I've lost my maths book. Can I borrow yours to do the homework? I'll give it back tomorrow. Amy",
                  ],
                },
                question: "What does Amy want?",
                options: [
                  "to buy a book",
                  "to help Kate",
                  "to borrow a book",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for all skin types.",
                    "Use morning and evening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It's only for dry skin.",
                  "Use it once a week.",
                  "You can use this twice a day.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi team,",
                    "Don't forget our team meeting tomorrow at 4 in Room 3. We need to choose a new captain. Mr Hill",
                  ],
                },
                question: "What will happen at the meeting?",
                options: [
                  "They will choose a leader.",
                  "They will play a match.",
                  "They will buy new kits.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Closing down sale! Everything must go. Up to 70% off.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop is opening soon.",
                  "The shop is closing and prices are low.",
                  "Prices will go up.",
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
            instruction: "The young people below all want to choose a music lesson. Read the descriptions of eight lessons. Decide which lesson would be the most suitable for each person.",
            options: [
              {
                title: "Rock Guitar",
                text: "Learn to play rock songs on the electric guitar. Group lessons.",
              },
              {
                title: "Classical Piano",
                text: "One-to-one lessons focusing on classical music. Exams available.",
              },
              {
                title: "Singing for Beginners",
                text: "Learn to sing with confidence in a small, friendly group.",
              },
              {
                title: "DJ Skills",
                text: "Learn to mix music using professional equipment.",
              },
              {
                title: "Drum Workshop",
                text: "Learn rhythms on African drums. No experience needed.",
              },
              {
                title: "Songwriting",
                text: "Write your own lyrics and melodies with a professional songwriter.",
              },
              {
                title: "Violin",
                text: "Lessons for children aged 6–12. Instruments can be borrowed.",
              },
              {
                title: "Jazz Band",
                text: "Join a band of experienced musicians. You must already play an instrument.",
              },
            ],
            items: [
              {
                text: "Emir wants to play the guitar in a band with his friends.",
                answer: 0,
              },
              {
                text: "Lale wants to take music exams on the piano.",
                answer: 1,
              },
              {
                text: "Can already plays the saxophone and wants to play jazz with others.",
                answer: 7,
              },
              {
                text: "Ece wants to learn how to mix songs at parties.",
                answer: 3,
              },
              {
                text: "Zehra writes poems and wants to turn them into songs.",
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
              title: "My grandfather's stories",
              paragraphs: [
                "My grandfather was a sailor for forty years. He travelled all over the world on cargo ships, and he has the most amazing stories.",
                "When I was little, I used to sit on his knee and listen to him talk about storms at sea, strange islands and the people he met. I always thought he was making some of them up.",
                "Last year, I decided to record his stories. Every Sunday, I visited him with my phone and asked him to tell me about his life. He talked for hours, and I recorded everything.",
                "Then I checked some of the stories online, and I was amazed. They were all true! He really had been shipwrecked near Madagascar and rescued by fishermen. I've now made a podcast of his stories, and thousands of people have listened to it. My grandfather is very proud.",
              ],
            },
            items: [
              {
                question: "What was the writer's grandfather's job?",
                options: [
                  "fisherman",
                  "teacher",
                  "pilot",
                  "sailor",
                ],
                answer: 3,
              },
              {
                question: "What did the writer think when she was little?",
                options: [
                  "The stories were boring.",
                  "Some of the stories might not be true.",
                  "Her grandfather was a pirate.",
                  "She would become a sailor.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer do every Sunday last year?",
                options: [
                  "went sailing",
                  "checked stories online",
                  "visited Madagascar",
                  "recorded her grandfather's stories",
                ],
                answer: 3,
              },
              {
                question: "What did the writer discover?",
                options: [
                  "The stories were true.",
                  "Her grandfather had lied.",
                  "The stories were from a book.",
                  "Her grandfather had never been to sea.",
                ],
                answer: 0,
              },
              {
                question: "What has happened to the podcast?",
                options: [
                  "Nobody has listened to it.",
                  "It has been deleted.",
                  "Many people have listened to it.",
                  "It won a prize.",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The underwater restaurant",
            text: [
              "In the Maldives, there's a restaurant that is five metres under the sea. {1} It's made of a clear glass tunnel.",
              "The restaurant was opened in 2005. {2} It took the builders more than a year to finish it.",
              "Diners sit at tables inside the glass tunnel and can see fish, sharks and turtles swimming all around them. {3} Some people say it's like eating inside an aquarium.",
              "The restaurant serves only fourteen people at a time. {4} Meals are very expensive, but most guests say it's worth it.",
              "The restaurant is also used for special events. {5} Couples from all over the world have got married there.",
            ],
            sentences: [
              "The colourful coral reef makes the view even more beautiful.",
              "Diners can swim during their meal.",
              "Diners can enjoy a meal while watching sea life.",
              "It's a very popular place for weddings.",
              "The glass often breaks.",
              "It was the first restaurant of its kind in the world.",
              "The restaurant is in a big city.",
              "Reservations must be made several months in advance.",
            ],
            answers: [
              2,
              5,
              0,
              7,
              3,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Coffee",
            text: [
              "Coffee is one of the most popular drinks in the world. It is made from the {1} of a plant that grows in tropical countries.",
              "According to a legend, coffee was discovered in Ethiopia more than 1,000 years ago by a goat herder. He noticed that his goats became very energetic after eating the berries. The drink later {2} to the Middle East and then to Europe.",
              "Today, Brazil is the world's {3} producer of coffee. Coffee contains caffeine, which helps people feel more alert. That's why many people drink a cup in the morning to {4} them wake up. However, drinking too much coffee can make it difficult to sleep and can make some people feel nervous. Doctors recommend that adults {5} their coffee to about four cups a day. In many countries, coffee shops are popular places to meet friends or work. Some people {6} hours there!",
            ],
            gaps: [
              {
                options: [
                  "leaves",
                  "flowers",
                  "seeds",
                  "roots",
                ],
                answer: 2,
              },
              {
                options: [
                  "went up",
                  "spread",
                  "moved up",
                  "grew up",
                ],
                answer: 1,
              },
              {
                options: [
                  "large",
                  "larger",
                  "largely",
                  "largest",
                ],
                answer: 3,
              },
              {
                options: [
                  "make up",
                  "help",
                  "let up",
                  "allow",
                ],
                answer: 1,
              },
              {
                options: [
                  "stop up",
                  "end",
                  "finish",
                  "limit",
                ],
                answer: 3,
              },
              {
                options: [
                  "spend",
                  "pass up",
                  "use up",
                  "take up",
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
            title: "Volunteering at a hospital",
            text: [
              "Every Saturday, I volunteer at the children's hospital in my town. I started doing it {1} my little brother was ill last year and spent two months there.",
              "I noticed that the children often felt bored and lonely, especially when their parents had to go to work. So I asked {2} I could help.",
              "Now I spend three hours there every week. I read stories, play board games and help the children with their homework. Some of them are very ill, {3} they always try to smile. I've learned so much from them. They're very brave. My favourite part is when a child I've been visiting gets better and goes home. It makes me {4} happy. The nurses say that my visits help the children feel better. I'm thinking about studying medicine {5} university, {6} I want to keep helping people.",
            ],
            answers: [
              [
                "after",
                "because",
                "when",
              ],
              [
                "if",
                "whether",
              ],
              [
                "but",
              ],
              [
                "so",
                "very",
                "really",
              ],
              [
                "at",
              ],
              [
                "because",
                "as",
                "since",
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
            instruction: "Read this email from your English-speaking friend Sam and the notes you have made. Write your email to Sam using all the notes. Write about 100 words.",
            input: {
              from: "Sam",
              subject: "A cooking class",
              lines: [
                "I've started a cooking class! [Cool!]",
                "What dish do you think I should learn to make? [Suggest one]",
                "Do you like cooking? [Tell Sam]",
                "Would you like to come for dinner when I've learned? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Sam,\n\nThat's so cool! I think everyone should learn how to cook.\n\nI think you should learn to make lasagne. It's delicious, and it's perfect for cooking for lots of people. You could also try making fresh bread, because it smells amazing and it's not as difficult as people think.\n\nI really enjoy cooking, although I'm not very good at it yet. I often help my mum in the kitchen at the weekend. My best dish is a vegetable soup that my grandmother taught me.\n\nI'd love to come for dinner! Just tell me when, and I'll bring dessert.\n\nSee you soon,\nArda",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Our planet's future",
              lines: [
                "What are the biggest problems facing our planet?",
                "What can young people do to help?",
                "Are you hopeful about the future?",
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
            sample: "Can we save our planet?\n\nIn my opinion, the biggest problems facing our planet are climate change and plastic pollution. Temperatures are rising, ice is melting, and the oceans are full of plastic.\n\nYoung people can do a lot to help. We can use less plastic, recycle more and walk or cycle instead of using cars. We can also tell our families and friends about these problems and encourage them to change their habits.\n\nI'm hopeful about the future because more and more young people care about the environment. If we all work together, I believe we can make a real difference and protect our planet for future generations.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Jake had been waiting for this day for months.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Jake had been waiting for this day for months. Today was the final of the school chess tournament, and he was playing against the best player in the school.\n\nHe sat down at the table nervously. His opponent, an older boy called Max, looked very confident. The game started, and for the first hour, Max seemed to be winning.\n\nBut Jake didn't give up. He remembered everything his grandfather had taught him and thought carefully about every move. Slowly, he started to gain an advantage.\n\nAfter two hours, Jake made the winning move. Everyone clapped. He couldn't wait to tell his grandfather the good news.",
          },
        },
      ],
    },
  ],
};
