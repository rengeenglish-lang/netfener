import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 46 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_46: CambridgeTest = {
  id: "preliminary-46",
  level: "preliminary",
  no: 46,
  title: "B1 Preliminary · Practice Test 46",
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
                    "Students who are absent must bring a note from their parents when they return.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Parents must come to school.",
                  "Absent students can't return.",
                  "Students need a note after being away.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Emma, the shop has your size in the blue dress. Shall I buy it for you? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "what size Emma wears",
                  "which shop Emma likes",
                  "if she should buy the dress",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Shake well before drinking.",
                    "Refrigerate after opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You should mix the drink before you have it.",
                  "Keep it warm.",
                  "Don't put it in the fridge.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "I've lost my phone, so please email me instead of texting this week. Jack",
                  ],
                },
                question: "Why has Jack sent this email?",
                options: [
                  "to ask Tom for a phone",
                  "to explain how to contact him",
                  "to say he has a new number",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The tennis courts must be booked online in advance.",
                  ],
                },
                question: "How can you use the tennis courts?",
                options: [
                  "by booking on the internet",
                  "by just turning up",
                  "by phoning the park",
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
            instruction: "The young people below all want to choose a book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Mountain",
                text: "A true story of climbers who reached the top of Everest.",
              },
              {
                title: "Magic School",
                text: "A fantasy about children who learn magic at a secret school.",
              },
              {
                title: "Quick Meals",
                text: "Recipes you can make in less than twenty minutes.",
              },
              {
                title: "Ocean Life",
                text: "Facts and photos about animals that live in the sea.",
              },
              {
                title: "The Spy",
                text: "A thriller about a teenage spy on a dangerous mission.",
              },
              {
                title: "Learn Spanish",
                text: "A guide for beginners with audio and exercises.",
              },
              {
                title: "Star Gazing",
                text: "A guide to finding planets and stars at night.",
              },
              {
                title: "Famous Inventors",
                text: "The stories behind the world's greatest inventions.",
              },
            ],
            items: [
              {
                text: "Ece loves exciting stories with secret missions.",
                answer: 4,
              },
              {
                text: "Burak is going to Madrid and wants to learn some of the language.",
                answer: 5,
              },
              {
                text: "Lale is always busy but wants to cook healthy food.",
                answer: 2,
              },
              {
                text: "Mert loves magic and imaginary worlds.",
                answer: 1,
              },
              {
                text: "Selin wants to know how famous inventions were created.",
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
              title: "My life as a young farmer",
              paragraphs: [
                "I live on a farm in Wales with my parents and two brothers. We have three hundred sheep and fifty cows. I'm sixteen, and I've been helping on the farm since I was five.",
                "Every morning, I get up at six to feed the animals before school. In spring, when the lambs are born, I sometimes get up in the middle of the night to help. It's tiring, but it's amazing to see new lambs being born.",
                "After school, I help my dad with other jobs, like repairing fences and moving the sheep to different fields. At weekends, I work on the farm all day. I don't have much free time, but I don't mind.",
                "Some of my friends think farming is boring, but I love it. I love being outside and working with animals. When I finish school, I'm going to study agriculture at college. I want to learn new farming methods that are better for the environment.",
              ],
            },
            items: [
              {
                question: "How long has the writer been helping on the farm?",
                options: [
                  "for one year",
                  "since she was five",
                  "since last summer",
                  "for six months",
                ],
                answer: 1,
              },
              {
                question: "What happens in spring?",
                options: [
                  "The farm closes.",
                  "The writer goes on holiday.",
                  "The cows are sold.",
                  "Lambs are born.",
                ],
                answer: 3,
              },
              {
                question: "What does the writer do after school?",
                options: [
                  "helps her dad",
                  "does her homework",
                  "meets friends",
                  "watches TV",
                ],
                answer: 0,
              },
              {
                question: "What do some of the writer's friends think?",
                options: [
                  "Farming is exciting.",
                  "Farming is easy.",
                  "Farming is boring.",
                  "Farming is well paid.",
                ],
                answer: 2,
              },
              {
                question: "What does the writer want to learn about?",
                options: [
                  "business",
                  "cooking",
                  "environmentally friendly farming",
                  "animal medicine",
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
            title: "A hotel for bees",
            text: [
              "In many cities, people are building special homes for wild bees. {1} These are called bee hotels.",
              "Wild bees are very important because they pollinate plants. {2} But their numbers are falling because they're losing their homes.",
              "A bee hotel is usually a wooden box filled with tubes or holes. {3} Female bees lay their eggs in the holes, and the baby bees grow there.",
              "Bee hotels are easy to make at home. {4} You can use bamboo, wood or even old paper tubes.",
              "Many schools now have bee hotels in their gardens. {5} Students can watch the bees and learn about how important they are.",
            ],
            sentences: [
              "Bee hotels are very expensive to build.",
              "Many websites show you how to do it.",
              "Bee hotels are only for honey bees.",
              "Without them, many fruits and vegetables couldn't grow.",
              "They give bees a safe place to lay their eggs.",
              "It's a great way for children to learn about nature.",
              "Bees don't like bee hotels.",
              "The holes are just the right size for small bees.",
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
            title: "Recycling",
            text: [
              "Every year, people throw away billions of tonnes of rubbish. Most of it ends up in landfill sites, where it can take hundreds of years to {1}.",
              "Recycling is one of the best ways to reduce waste. When we recycle, old materials are turned into new products. This saves energy and natural {2}.",
              "Many things can be recycled, including paper, glass, plastic and metal. But it's important to clean them first and put them in the correct bin. Some countries are much better at recycling than others. In Germany, more than 60% of rubbish is recycled, {3} in some countries, the figure is less than 10%. But recycling isn't the only {4}. We also need to reduce the amount of things we buy and {5} things whenever possible. For example, we can use cloth bags instead of plastic ones. Small changes can make a big {6}.",
            ],
            gaps: [
              {
                options: [
                  "decomposition",
                  "decompose",
                  "decomposed",
                  "decomposing",
                ],
                answer: 1,
              },
              {
                options: [
                  "resourceful",
                  "resourced",
                  "resourcing",
                  "resources",
                ],
                answer: 3,
              },
              {
                options: [
                  "because",
                  "while",
                  "so",
                  "unless",
                ],
                answer: 1,
              },
              {
                options: [
                  "solve",
                  "solved",
                  "solving",
                  "solution",
                ],
                answer: 3,
              },
              {
                options: [
                  "reuse",
                  "reusing",
                  "reused",
                  "reusable",
                ],
                answer: 0,
              },
              {
                options: [
                  "different",
                  "differently",
                  "difference",
                  "differ",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A visit to a castle",
            text: [
              "Last month, my class went on a school trip to a castle. It was built more than 800 years ago, and it's one of the {1} famous castles in the country.",
              "When we arrived, a guide dressed as a knight showed us around. He told us stories about the people who had lived there. Some of the stories were quite scary, especially the one {2} the ghost who still walks through the castle at night!",
              "We climbed to the top of the tower, {3} had a fantastic view of the countryside. Then we visited the kitchen, where we saw how food was cooked in the past. After lunch, we watched a show {4} two knights fought with swords. It was very exciting. I learned a lot about history {5} the trip. I'd love to go back with my family {6} day.",
            ],
            answers: [
              [
                "most",
              ],
              [
                "about",
              ],
              [
                "which",
              ],
              [
                "where",
              ],
              [
                "on",
                "during",
              ],
              [
                "one",
                "some",
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
              subject: "A sports event",
              lines: [
                "My school is having a sports day next month. [Sounds fun!]",
                "Which sports should I take part in? [Give advice]",
                "Do you enjoy sport? [Tell Alex]",
                "Would you like to come and watch? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat sounds like a lot of fun! I love sports days.\n\nI think you should take part in the running races, because you're very fast. You could also try the high jump, since you're tall. Don't enter too many events, though, or you'll be exhausted!\n\nYes, I really enjoy sport. I play basketball for my school team and go swimming twice a week. I also like watching football on TV with my dad.\n\nI'd love to come and watch! Just tell me the date and time, and I'll ask my parents if they can take me. I'll cheer for you!\n\nBye,\nSu",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day without the internet",
              lines: [
                "Could you spend a day without the internet?",
                "What would you do?",
                "Would it be easy or difficult?",
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
            sample: "A day offline\n\nI think I could spend a day without the internet, but it wouldn't be easy. I use it every day for school, chatting with friends and watching videos.\n\nIf I had a day without the internet, I'd start by going for a long walk in the park. Then I'd meet my friends in person instead of messaging them. In the afternoon, I'd read a book or play board games with my family.\n\nIt would be difficult at first, because I'm so used to checking my phone. But I think it would also be relaxing. Maybe everyone should try having one day a week without the internet.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The phone call came at midnight.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The phone call came at midnight. Sam woke up and answered it sleepily. It was his grandmother, and she sounded worried.\n\n'Sam, I think someone is in my garden,' she whispered. 'I can hear noises.' Sam lived next door, so he quickly got dressed and went outside with a torch.\n\nHe walked slowly into his grandmother's garden. Something was moving behind the bushes. Sam shone his torch, and two bright eyes looked back at him. It was a fox! It was eating food from the bin.\n\nThe fox ran away, and Sam laughed. His grandmother was very relieved. She made him a hot chocolate before he went back to bed.",
          },
        },
      ],
    },
  ],
};
