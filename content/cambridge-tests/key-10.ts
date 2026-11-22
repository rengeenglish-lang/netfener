import type { CambridgeTest } from "./types";

/** A2 Key practice test 10 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_10: CambridgeTest = {
  id: "key-10",
  level: "key",
  no: 10,
  title: "A2 Key · Practice Test 10",
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
                    "CINEMA",
                    "Tickets are cheaper on Tuesdays.",
                    "Students get an extra 20% off with a student card.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The cinema is closed on Tuesdays.",
                  "Only students can buy tickets on Tuesdays.",
                  "Students can pay less if they show their card.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Sophie – I've finished the book you lent me. It was great! I'll give it back tomorrow at school. Have you got the second one? Nina",
                  ],
                },
                question: "What does Nina want to know?",
                options: [
                  "if Sophie liked the book",
                  "when they can meet at school",
                  "if Sophie has the next book",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "Photos allowed, but please don't use flash.",
                    "No food or drinks in the galleries.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can take pictures without a flash.",
                  "Photos are not allowed.",
                  "You can eat in the galleries.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I'm going to the beach on Sunday with my family. There's space in the car for you if you'd like to come. We're leaving at nine. Dan",
                  ],
                },
                question: "What is Dan doing?",
                options: [
                  "asking Max for a lift",
                  "inviting Max to go with his family",
                  "telling Max about a trip he took",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL CANTEEN",
                    "From Monday, all meals will include fruit or a salad.",
                    "Sweets will no longer be sold.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The canteen will stop selling sweets.",
                  "Meals will cost more from Monday.",
                  "Students must bring their own fruit.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BABYSITTER WANTED",
                    "For two children aged 4 and 6. Friday evenings 6–10 p.m. Must have experience.",
                  ],
                },
                question: "What do we know about the job?",
                options: [
                  "It is every evening.",
                  "It is for one child.",
                  "You need to have done this kind of work before.",
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
                title: "Holly",
                text: "I love horses. I go riding every Sunday at a farm near my village. I've been riding for four years, and last summer I started jumping. I don't have my own horse, but my favourite horse at the farm is called Rocket. I help the farmer clean the stables, so my lessons are cheaper.",
              },
              {
                title: "Ben",
                text: "I'm into computer games, but I don't just play them; I make them too. I learned how to code at an after-school club. My first game was very simple, but my latest one has ten levels. I shared it online, and more than a thousand people have downloaded it!",
              },
              {
                title: "Clara",
                text: "I sing in a choir. We practise every Thursday evening at the church in my town. There are about forty people in the choir, and I'm the youngest. We sing all kinds of music, from very old songs to pop. Next month, we're going to sing on local radio.",
              },
            ],
            items: [
              {
                text: "works to pay less for their hobby?",
                answer: 0,
              },
              {
                text: "learned their skill at a club?",
                answer: 1,
              },
              {
                text: "is younger than everyone else in their group?",
                answer: 2,
              },
              {
                text: "has made something many people have used?",
                answer: 1,
              },
              {
                text: "will be heard by lots of people soon?",
                answer: 2,
              },
              {
                text: "started doing something new last year?",
                answer: 0,
              },
              {
                text: "does their hobby with a large group?",
                answer: 2,
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
              title: "Teenager starts a business",
              paragraphs: [
                "Fifteen-year-old Oscar Hill has started his own business selling honey. 'My grandfather kept bees,' says Oscar. 'When he got too old, he gave me his beehives. I didn't want them to disappear.'",
                "At first, Oscar knew very little about bees. 'I read lots of books and watched videos,' he says. 'A local beekeeper also helped me a lot. I was stung many times at the beginning!'",
                "Now Oscar has six beehives in his parents' garden. Last year, he collected more than eighty jars of honey. He sells them at the village market every Saturday and online. 'People like it because it's local,' he explains.",
                "Oscar spends some of the money on new equipment, and he saves the rest. 'I want to study biology at university,' he says. 'Bees are amazing, and I want to learn more about how to protect them.'",
              ],
            },
            items: [
              {
                question: "Why did Oscar start keeping bees?",
                options: [
                  "He wanted to continue his grandfather's work.",
                  "His parents asked him to.",
                  "He needed money for university.",
                ],
                answer: 0,
              },
              {
                question: "How did Oscar learn about bees?",
                options: [
                  "at school",
                  "from his grandfather only",
                  "from books, videos and an expert",
                ],
                answer: 2,
              },
              {
                question: "Where does Oscar keep his bees?",
                options: [
                  "at the market",
                  "on a farm",
                  "at his parents' home",
                ],
                answer: 2,
              },
              {
                question: "Why do people buy Oscar's honey?",
                options: [
                  "It comes from nearby.",
                  "It is very cheap.",
                  "It is in special jars.",
                ],
                answer: 0,
              },
              {
                question: "What does Oscar do with his money?",
                options: [
                  "He gives it to his grandfather.",
                  "He uses part of it and keeps part of it.",
                  "He spends it all on equipment.",
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
            title: "Cycling to school",
            text: [
              "In the Netherlands, about three quarters of children cycle to school. In many other countries, the number is much {1}. So why do Dutch children cycle so much?",
              "One reason is that the Netherlands is very flat, so cycling is easy. Another reason is that there are special cycle paths {2} the country. These paths are {3} from the roads, so children can cycle safely.",
              "Cycling to school has lots of {4}. It's good exercise, it's free, and it doesn't cause pollution. Children who cycle also learn to be more independent. Some schools in other countries are trying to {5} more students to cycle. They are building bike sheds and giving cycling lessons. Maybe one day, cycling to school will be {6} everywhere!",
            ],
            gaps: [
              {
                options: [
                  "fewer",
                  "lower",
                  "shorter",
                ],
                answer: 1,
              },
              {
                options: [
                  "across",
                  "through",
                  "along",
                ],
                answer: 0,
              },
              {
                options: [
                  "different",
                  "alone",
                  "separate",
                ],
                answer: 2,
              },
              {
                options: [
                  "goods",
                  "advantages",
                  "helps",
                ],
                answer: 1,
              },
              {
                options: [
                  "make",
                  "encourage",
                  "let",
                ],
                answer: 1,
              },
              {
                options: [
                  "ordinary",
                  "regular",
                  "normal",
                ],
                answer: 2,
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
              "Hi Jack,",
              "How are you? I'm sorry I didn't reply sooner. I've been really busy {1} school. We had exams last week, but now they're finished!",
              "This weekend, I'm going camping {2} my scout group. We're going to stay in the forest {3} two nights. I've never slept in a tent before, so I'm a bit nervous!",
              "{4} you like camping? Maybe you could come with us next time. It would be great {5} see you. Write back soon and tell me {6} you're doing.",
              "Lucy",
            ],
            answers: [
              [
                "at",
                "with",
              ],
              [
                "with",
              ],
              [
                "for",
              ],
              [
                "do",
              ],
              [
                "to",
              ],
              [
                "what",
                "how",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You lost your jacket at school. Write an email to your English teacher, Mr Brown. Write 25 words or more.",
            prompts: [
              "Describe your jacket.",
              "Say where you last saw it.",
              "Ask Mr Brown to help you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Mr Brown' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Mr Brown,\n\nI've lost my jacket at school. It's dark green with a black hood. I last saw it in the sports hall on Tuesday afternoon. Could you please ask the other students if they have seen it?\n\nThank you,\nCan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎂🏪",
                label: "1",
              },
              {
                e: "🎂⬇️💥😱",
                label: "2",
              },
              {
                e: "👦👩🎂🎨😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "It was Mum's birthday, so Tom went to the shop and bought a beautiful cake. On the way home, he tripped over a stone and dropped the cake on the ground. It was ruined, and Tom felt terrible. When he got home, he told Mum what happened. She wasn't angry. They decided to make a new cake together, and it was even better than the first one.",
          },
        },
      ],
    },
  ],
};
