import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 35 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_35: CambridgeTest = {
  id: "preliminary-35",
  level: "preliminary",
  no: 35,
  title: "B1 Preliminary · Practice Test 35",
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
                    "Lost property will be displayed in the main hall on Friday. Anything not collected will be given to charity.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost property is kept forever.",
                  "The main hall is closed on Friday.",
                  "Students can collect lost things on Friday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I can't make it to the cinema tonight. I've got too much homework. Can we go tomorrow? Ella",
                  ],
                },
                question: "What does Ella want?",
                options: [
                  "to cancel completely",
                  "to change the day",
                  "to choose a different film",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "May contain nuts.",
                    "Suitable for vegetarians.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This has no nuts.",
                  "People who don't eat meat can eat this.",
                  "This contains meat.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "The match has been cancelled because of the snow. We'll play next week instead. Coach",
                  ],
                },
                question: "Why was the match cancelled?",
                options: [
                  "because the coach is ill",
                  "because the pitch is being repaired",
                  "because of the weather",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Self-service checkouts are now available. Staff can help if needed.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Customers can now pay without a cashier.",
                  "There are no staff at the checkouts.",
                  "The supermarket is closed.",
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
            instruction: "The young people below all want to choose a film to watch. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              {
                title: "The Lost Kingdom",
                text: "An adventure film about explorers who find an ancient city in the jungle.",
              },
              {
                title: "Laugh Out Loud",
                text: "A comedy about a family on a disastrous holiday.",
              },
              {
                title: "Deep Blue",
                text: "A documentary about life in the deepest parts of the ocean.",
              },
              {
                title: "Night Shadows",
                text: "A horror film about a haunted house. Very scary!",
              },
              {
                title: "Champion",
                text: "The true story of a young athlete who overcame difficulties to win.",
              },
              {
                title: "Space Odyssey",
                text: "A science-fiction film about astronauts travelling to a distant planet.",
              },
              {
                title: "Love in Paris",
                text: "A romantic film about two students who meet in Paris.",
              },
              {
                title: "The Dancer",
                text: "A musical about a girl who dreams of becoming a ballet star.",
              },
            ],
            items: [
              {
                text: "Mehmet loves science fiction and space.",
                answer: 5,
              },
              {
                text: "Defne wants to laugh and relax.",
                answer: 1,
              },
              {
                text: "Can loves the sea and wants to learn about sea creatures.",
                answer: 2,
              },
              {
                text: "Asya loves dancing and music.",
                answer: 7,
              },
              {
                text: "Arda likes films about real people who achieve their dreams.",
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
              title: "My life as a twin",
              paragraphs: [
                "I have an identical twin sister called Emma. We look exactly the same, and even our parents sometimes get us confused! But although we look the same, we're very different people.",
                "Emma is very confident and loves being the centre of attention. She wants to be an actress. I'm much quieter and prefer reading books and painting. I want to be an artist.",
                "When we were younger, we did everything together. We wore the same clothes and had the same friends. But when we started secondary school, we decided to be in different classes. It was hard at first, but it helped us become more independent.",
                "Now we're sixteen, and we're best friends. We still argue sometimes, like all sisters, but we always help each other. Having a twin is special. There's always someone who understands you completely.",
              ],
            },
            items: [
              {
                question: "What does the writer say about how she and Emma look?",
                options: [
                  "They look exactly the same.",
                  "They look very different.",
                  "They have different hair colours.",
                  "Emma is taller.",
                ],
                answer: 0,
              },
              {
                question: "How is Emma different from the writer?",
                options: [
                  "She is quieter.",
                  "She likes painting.",
                  "She reads more books.",
                  "She is more confident.",
                ],
                answer: 3,
              },
              {
                question: "What happened when they started secondary school?",
                options: [
                  "They went to different schools.",
                  "They chose to be in different classes.",
                  "They stopped being friends.",
                  "They wore the same clothes.",
                ],
                answer: 1,
              },
              {
                question: "How did the change help them?",
                options: [
                  "They became more independent.",
                  "They became more similar.",
                  "They made fewer friends.",
                  "They argued more.",
                ],
                answer: 0,
              },
              {
                question: "What does the writer say about having a twin?",
                options: [
                  "It's always difficult.",
                  "She doesn't like it.",
                  "There's always someone who understands you.",
                  "It's boring.",
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
            title: "A café run by robots",
            text: [
              "In Tokyo, there's a café where the waiters are robots. {1} But they're not controlled by computers; they're controlled by people.",
              "The robots are operated by people with disabilities who can't leave their homes. {2} They control the robots from home using a computer.",
              "The idea came from a company that wanted to help disabled people find work. {3} Many of the operators have serious illnesses that make it difficult for them to travel.",
              "Customers can talk to the operators through the robots. {4} Many customers say it's a unique and moving experience.",
              "The café has been so successful that the company plans to open more. {5} They hope it will change the way people think about disability.",
            ],
            sentences: [
              "Other countries have also shown interest in the idea.",
              "Some of them live hundreds of kilometres away.",
              "Most customers don't like the robots.",
              "They take orders, bring drinks and chat with customers.",
              "They often ask the operators about their lives.",
              "The café is only open at night.",
              "The café gives them the chance to earn money and meet people.",
              "The robots work without any human control.",
            ],
            answers: [
              3,
              1,
              6,
              4,
              0,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Trees",
            text: [
              "Trees are essential for life on Earth. They produce the oxygen we breathe and {1} carbon dioxide from the air, which helps to fight climate change.",
              "Trees also provide homes for millions of animals, birds and insects. In tropical rainforests, a single tree can be home to thousands of different {2}.",
              "Trees are important for people too. They give us wood, fruit and medicine, and they help to prevent floods by {3} up rainwater. In cities, trees provide shade and help to keep the air cool and clean. Studies have shown that people who live near trees are often happier and {4}. Sadly, millions of trees are cut down every year. This is called deforestation, and it's a serious {5} for the planet. Many organisations are now planting new trees to {6} the forests that have been lost.",
            ],
            gaps: [
              {
                options: [
                  "take in up",
                  "eat up",
                  "absorb",
                  "drink",
                ],
                answer: 2,
              },
              {
                options: [
                  "special",
                  "specials",
                  "species",
                  "specie up",
                ],
                answer: 2,
              },
              {
                options: [
                  "soaking",
                  "drinking",
                  "taking",
                  "eating",
                ],
                answer: 0,
              },
              {
                options: [
                  "health",
                  "healthy",
                  "healthily",
                  "healthier",
                ],
                answer: 3,
              },
              {
                options: [
                  "trouble up",
                  "problem",
                  "question",
                  "issue up",
                ],
                answer: 1,
              },
              {
                options: [
                  "replace",
                  "change up",
                  "exchange",
                  "switch",
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
            title: "Learning to drive",
            text: [
              "I passed my driving test last month, at the age of seventeen. I'd been looking forward {1} it for years!",
              "I started having lessons as soon as I was old enough. My instructor was very patient, {2} I was quite nervous at first. I kept forgetting to check my mirrors, and once I stopped the car in the middle of a busy road.",
              "After about twenty lessons, I started to feel more confident. My dad also took me out {3} practise at weekends. He wasn't as patient as my instructor, though! The test was the most stressful thing I've ever done. I was {4} nervous that my hands were shaking. But I drove carefully and didn't make any serious mistakes. When the examiner told me I'd passed, I almost cried with happiness. Now I can drive {5} to school and visit my friends whenever I want. It's given me so much {6}.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "but",
                "and",
              ],
              [
                "to",
              ],
              [
                "so",
              ],
              [
                "myself",
              ],
              [
                "freedom",
                "independence",
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
              subject: "A charity event",
              lines: [
                "Our school is organising a charity event next month. [Great idea!]",
                "What kind of event do you think we should have? [Suggest one]",
                "Which charity should we support? [Give your opinion]",
                "Could you help us with the event? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nWhat a great idea! It's really important to help people who need it.\n\nI think you should have a sponsored walk. Students could ask their families and friends to give money for every kilometre they walk. It's easy to organise, and everyone can take part.\n\nI think you should support a charity that helps children in hospital. Many children have to spend a long time there, and they often feel bored and lonely. The money could buy toys and books for them.\n\nOf course I'd love to help! I could make posters or help organise the route.\n\nSee you soon,\nAylin",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An animal I love",
              lines: [
                "What's your favourite animal?",
                "Why do you like it?",
                "What interesting facts do you know about it?",
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
            sample: "The amazing octopus\n\nMy favourite animal is the octopus. Most people think octopuses are strange or even scary, but I think they're amazing.\n\nOctopuses are incredibly intelligent. They can solve puzzles, open jars and even escape from their tanks in aquariums! They also have three hearts and blue blood.\n\nOne of the most interesting facts about octopuses is that they can change colour in less than a second. They use this skill to hide from enemies and communicate with each other.\n\nI love octopuses because they show us how clever and unusual animals can be. I hope to see one in the wild one day.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Mia saw the poster, she knew she had to enter the competition.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Mia saw the poster, she knew she had to enter the competition. It was a baking contest, and the prize was a trip to Paris to visit a famous bakery.\n\nMia had loved baking since she was a little girl. She practised every day for a month, trying different recipes. Finally, she decided to make a chocolate and raspberry cake.\n\nOn the day of the competition, there were thirty other bakers. Mia was very nervous, but she concentrated on her cake. When the judges tasted it, they smiled.\n\nA week later, Mia received a phone call. She had won! She was going to Paris.",
          },
        },
      ],
    },
  ],
};
