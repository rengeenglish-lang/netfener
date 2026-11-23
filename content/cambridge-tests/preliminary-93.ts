import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 93 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_93: CambridgeTest = {
  id: "preliminary-93",
  level: "preliminary",
  no: 93,
  title: "B1 Preliminary · Practice Test 93",
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
                    "SCHOOL OFFICE",
                    "Lost property will be given to charity at the end of term.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost property is sold.",
                  "Collect lost things before the end of term.",
                  "The office is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Aylin, I can't come to the gym today. I've hurt my ankle. Let's go next week instead. Nazlı",
                  ],
                },
                question: "Why can't Nazlı go to the gym?",
                options: [
                  "She's busy.",
                  "The gym is closed.",
                  "She has hurt her ankle.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for vegetarians.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "People who don't eat meat can eat this.",
                  "It contains meat.",
                  "It's only for children.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Burak,",
                    "I found your gloves in my car. I'll leave them with your mum tomorrow. Mert",
                  ],
                },
                question: "What will Mert do?",
                options: [
                  "keep the gloves",
                  "give the gloves to Burak's mum",
                  "buy new gloves",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Photos are allowed, but please don't use flash.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can take photos without flash.",
                  "Photos are not allowed.",
                  "You must use flash.",
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
            instruction: "The young people below all want to buy a magazine. Read the descriptions of eight magazines. Decide which magazine would be the most suitable for each person.",
            options: [
              {
                title: "Game On",
                text: "Reviews of the latest video games.",
              },
              {
                title: "Green World",
                text: "News about nature and the environment.",
              },
              {
                title: "Style Now",
                text: "Teenage fashion and make-up.",
              },
              {
                title: "Kick Off",
                text: "All about football.",
              },
              {
                title: "Star Gazer",
                text: "Astronomy and space.",
              },
              {
                title: "Cook Up",
                text: "Easy recipes for teenagers.",
              },
              {
                title: "Pet Pals",
                text: "Caring for your pets.",
              },
              {
                title: "Rock Sound",
                text: "Interviews with bands.",
              },
            ],
            items: [
              {
                text: "Arda wants to read about new video games.",
                answer: 0,
              },
              {
                text: "Damla wants to know how to look after her rabbit.",
                answer: 6,
              },
              {
                text: "Toprak loves reading about planets.",
                answer: 4,
              },
              {
                text: "Ada wants to read interviews with bands.",
                answer: 7,
              },
              {
                text: "Umut wants to help protect the environment.",
                answer: 1,
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
              title: "A summer job at the beach",
              paragraphs: [
                "Last summer, I worked as an assistant at a surf school by the sea. I'd been surfing for four years, so I knew a lot about it already.",
                "My job was to help the instructors. I carried the boards to the water, gave out wetsuits and helped beginners stand up on their boards. On busy days, there were over fifty students.",
                "The hardest part was being patient. Some students fell off again and again and got very frustrated. I tried to encourage them and tell them that I fell off a lot when I started, too.",
                "I earned enough money to buy a new board, but the best thing was seeing people's faces when they caught their first wave. Next year, I want to become a proper instructor.",
              ],
            },
            items: [
              {
                question: "Why was the job suitable for the writer?",
                options: [
                  "He lived near the school.",
                  "He already knew how to surf.",
                  "His father owned the school.",
                  "It was well paid.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer do?",
                options: [
                  "helped the instructors",
                  "taught advanced students alone",
                  "cooked lunch",
                  "drove the bus",
                ],
                answer: 0,
              },
              {
                question: "What was the hardest part?",
                options: [
                  "carrying boards",
                  "waking up early",
                  "being patient",
                  "the cold water",
                ],
                answer: 2,
              },
              {
                question: "What did the writer buy?",
                options: [
                  "a wetsuit",
                  "a new board",
                  "a car",
                  "a camera",
                ],
                answer: 1,
              },
              {
                question: "What does the writer want to do next year?",
                options: [
                  "stop surfing",
                  "work in a shop",
                  "travel abroad",
                  "become an instructor",
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
            title: "The world's oldest tree",
            text: [
              "In the mountains of California, there's a tree that is nearly 5,000 years old. {1} It's a type of pine tree called a bristlecone.",
              "Scientists found out its age by counting the rings inside the trunk. {2} Each ring shows one year of growth.",
              "The exact location of the tree is kept secret. {3} The scientists are afraid that people might damage it.",
              "Bristlecone pines grow in very difficult conditions. {4} They can survive strong winds, very little rain and freezing temperatures.",
              "The tree was already old when the pyramids in Egypt were built. {5} It is a living piece of history.",
            ],
            sentences: [
              "Only a few experts know exactly where it is.",
              "It's in the middle of a busy city.",
              "It's believed to be one of the oldest living things on Earth.",
              "It has seen thousands of years of change.",
              "Bristlecones only live for fifty years.",
              "They used a special tool that doesn't hurt the tree.",
              "The tree was cut down last year.",
              "They grow very slowly, which helps them to live a long time.",
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
            title: "Sleep",
            text: [
              "Sleep is very important for our health. While we sleep, our bodies repair themselves and our brains {1} the information we've learned during the day.",
              "Teenagers need between eight and ten hours of sleep every night. However, many teenagers sleep much less than this. One reason is that their body clocks change, so they feel {2} later in the evening.",
              "Another reason is technology. The light from phone and computer screens makes it more {3} to fall asleep. Doctors recommend switching off screens an hour before bed. Not getting enough sleep can cause problems. People who are tired find it hard to concentrate and may feel {4} or sad. They are also more likely to get ill. There are some simple ways to sleep better. Go to bed at the same time every night, keep your bedroom dark and cool, and avoid drinks with caffeine in the {5}. Some schools have even started lessons later in the morning so that students can get more {6}.",
            ],
            gaps: [
              {
                options: [
                  "organise",
                  "organisation",
                  "organised",
                  "organiser",
                ],
                answer: 0,
              },
              {
                options: [
                  "sleep",
                  "sleepily",
                  "asleep",
                  "sleepy",
                ],
                answer: 3,
              },
              {
                options: [
                  "difficulty",
                  "difficult",
                  "difficultly",
                  "differ",
                ],
                answer: 1,
              },
              {
                options: [
                  "angry",
                  "anger",
                  "angrily",
                  "angered",
                ],
                answer: 0,
              },
              {
                options: [
                  "even",
                  "evenly",
                  "evening",
                  "evens",
                ],
                answer: 2,
              },
              {
                options: [
                  "restful",
                  "rest",
                  "restless",
                  "resting",
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
            title: "Helping at the animal shelter",
            text: [
              "Every Saturday morning, I help at an animal shelter near my home. I started going there {1} months ago, after my family adopted a dog from the shelter.",
              "There are usually about thirty dogs and twenty cats. My job is to feed the animals, clean their cages and take the dogs for walks. It's hard work, {2} I love it.",
              "My favourite dog is called Pamuk. She's a big white dog who was found on the street last winter. She was very scared of people at first, but now she runs to meet me {3} soon as I arrive. Sadly, nobody has adopted her yet. Many people prefer puppies, {4} older dogs like Pamuk often wait a long time for a home. I hope someone will choose her soon. Working at the shelter has taught me a lot {5} responsibility. When I'm older, I'd like to become a vet so I can help even {6} animals.",
            ],
            answers: [
              [
                "six",
                "two",
                "three",
                "four",
                "five",
                "seven",
                "eight",
                "nine",
                "ten",
                "several",
                "some",
                "few",
              ],
              [
                "but",
              ],
              [
                "as",
              ],
              [
                "so",
              ],
              [
                "about",
              ],
              [
                "more",
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
              subject: "A school trip",
              lines: [
                "We're going on a school trip to a museum next week! [Reply]",
                "Have you been to a museum recently? [Tell Jo]",
                "What should I look for at the museum? [Suggest]",
                "Shall we meet up after the trip? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nThat sounds great! School trips are always more fun than normal lessons.\n\nI went to the history museum with my parents last month. It was really interesting, especially the part about ancient Rome. They had real coins and jewellery from two thousand years ago.\n\nIf you're going to the science museum, you should look for the room about space. You can see a real piece of a meteorite! There's also a café on the top floor with an amazing view of the city.\n\nYes, let's meet after the trip! You can tell me everything you saw. How about Friday after school at the park?\n\nBye,\nSarp",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The perfect weekend",
              lines: [
                "Describe your perfect weekend.",
                "Who would you spend it with?",
                "Where would you go?",
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
            sample: "My perfect weekend\n\nMy perfect weekend would start with a long sleep on Saturday morning. I'd wake up at about ten and have pancakes for breakfast with my family. After that, I'd meet my two best friends and go cycling along the coast.\n\nIn the afternoon, we'd have a picnic on the beach and go swimming. In the evening, we'd go to the cinema to see a funny film and then eat ice cream in the park.\n\nOn Sunday, I'd visit my grandparents in their village. My grandmother is a wonderful cook, so we'd have a big lunch together. Then I'd relax at home, read a good book and get ready for the week. It sounds simple, but that's what makes it perfect.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When the lights went out, the whole stadium went quiet.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When the lights went out, the whole stadium went quiet. It was the final of the school basketball competition, and there were only five minutes left.\n\nFor a moment, nobody moved. Then hundreds of people turned on the torches on their phones. Soon the stadium was full of little lights, like stars in the night sky. Everyone started cheering.\n\nThe referee decided that the game could continue in the phone light. It was difficult to see the ball, but the players didn't care. They were laughing as they played.\n\nOur team won by two points. Nobody remembers the score now, but everyone still talks about the night we played basketball by phone light.",
          },
        },
      ],
    },
  ],
};
