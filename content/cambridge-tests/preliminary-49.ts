import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 49 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_49: CambridgeTest = {
  id: "preliminary-49",
  level: "preliminary",
  no: 49,
  title: "B1 Preliminary · Practice Test 49",
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
                    "Students who want to join the school trip to Paris must pay a deposit by Friday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The trip is free.",
                  "Students must pay some money soon to go on the trip.",
                  "The trip is on Friday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Kate, I've lost my maths homework. Can you send me a photo of yours? Thanks! Amy",
                  ],
                },
                question: "What does Amy want?",
                options: [
                  "a picture of Kate's homework",
                  "help with maths",
                  "a new homework sheet",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains nuts.",
                    "May not be suitable for people with allergies.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This doesn't contain nuts.",
                  "Everyone can eat this.",
                  "Some people shouldn't eat this.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The match tomorrow has been moved to 3 p.m. because of the weather forecast. Coach",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the place of the match",
                  "the time of the match",
                  "the team",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "We are closed on Sundays and public holidays.",
                  ],
                },
                question: "When is the shop closed?",
                options: [
                  "every day",
                  "on Sundays and holidays",
                  "on Saturdays",
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
            instruction: "The young people below all want to watch a TV programme tonight. Read the descriptions of eight programmes. Decide which programme would be the most suitable for each person.",
            options: [
              {
                title: "Wildlife Rescue",
                text: "Follows vets who help injured wild animals.",
              },
              {
                title: "Great Bake",
                text: "Amateur bakers compete to make the best cakes.",
              },
              {
                title: "Quiz Night",
                text: "Contestants answer questions to win money.",
              },
              {
                title: "Space Today",
                text: "News about space exploration and new discoveries.",
              },
              {
                title: "Comedy Hour",
                text: "Stand-up comedians tell jokes.",
              },
              {
                title: "Mystery Island",
                text: "A drama about people stranded on an island.",
              },
              {
                title: "Fashion Show",
                text: "Behind the scenes at a big fashion event.",
              },
              {
                title: "Car Talk",
                text: "Reviews of new cars and driving tips.",
              },
            ],
            items: [
              {
                text: "Ece wants to become a vet.",
                answer: 0,
              },
              {
                text: "Can loves baking.",
                answer: 1,
              },
              {
                text: "Zeynep wants to laugh.",
                answer: 4,
              },
              {
                text: "Mert is interested in cars.",
                answer: 7,
              },
              {
                text: "Asya loves answering questions and testing her knowledge.",
                answer: 2,
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
              title: "My first concert",
              paragraphs: [
                "When I was fourteen, I went to my first concert. It was my favourite band, and I'd been waiting for months. My dad bought the tickets as a birthday present.",
                "The concert was in a huge stadium with more than fifty thousand people. When we arrived, there was a very long queue. We waited for two hours before we could go in.",
                "When the band came on stage, everyone screamed. The music was so loud that I could feel it in my chest. I sang along to every song. My dad, who doesn't usually like pop music, was dancing too!",
                "The concert lasted three hours, and it was the best night of my life. When we got home, I couldn't sleep because I was so excited. Since then, I've been to five more concerts, but none of them was as special as the first one.",
              ],
            },
            items: [
              {
                question: "Who bought the concert tickets?",
                options: [
                  "her mum",
                  "her friend",
                  "her dad",
                  "she did",
                ],
                answer: 2,
              },
              {
                question: "How long did they wait to go in?",
                options: [
                  "ten minutes",
                  "three hours",
                  "two hours",
                  "all day",
                ],
                answer: 2,
              },
              {
                question: "What surprised the writer about her dad?",
                options: [
                  "He was dancing.",
                  "He knew all the songs.",
                  "He left early.",
                  "He was bored.",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel after the concert?",
                options: [
                  "tired",
                  "disappointed",
                  "bored",
                  "very excited",
                ],
                answer: 3,
              },
              {
                question: "What does the writer say about other concerts?",
                options: [
                  "They were all better.",
                  "The first one was the most special.",
                  "She hasn't been to any more.",
                  "She didn't enjoy them.",
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
            title: "The tallest waterfall",
            text: [
              "Angel Falls in Venezuela is the tallest waterfall in the world. {1} The water falls 979 metres from the top of a mountain.",
              "The waterfall is in a national park in the middle of the rainforest. {2} Visitors usually travel there by plane and then by boat.",
              "The waterfall was named after an American pilot called Jimmie Angel. {3} He was the first person from outside the area to see it from the air.",
              "In the dry season, the waterfall can become much smaller. {4} The best time to visit is during the rainy season, from June to December.",
              "Angel Falls is a popular destination for adventure tourists. {5} Some brave people even try to climb up the cliff next to it.",
            ],
            sentences: [
              "He flew over it in 1933.",
              "It's easy to drive to the waterfall.",
              "It's about fifteen times taller than Niagara Falls.",
              "They come to see the waterfall and explore the rainforest.",
              "The waterfall is very small.",
              "There are no roads that go there.",
              "The waterfall is in a big city.",
              "Sometimes the water turns into mist before it reaches the ground.",
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
            title: "Bees",
            text: [
              "Bees are among the most important creatures on our planet. Without them, many plants would not be able to {1}.",
              "Bees collect nectar and pollen from flowers. As they move from flower to flower, they carry pollen with them. This process, called pollination, helps plants to make {2} and fruit.",
              "About one third of the food we eat depends on bees. This includes apples, strawberries, almonds and many vegetables. Bees also make honey, which humans have been eating for thousands of years. However, bee populations are {3} in many parts of the world. Scientists believe this is caused by pesticides, disease and the loss of {4}. To help bees, people can plant flowers in their gardens and avoid using {5} chemicals. Some cities are even building bee hotels. If we don't protect bees, we could face serious food {6}.",
            ],
            gaps: [
              {
                options: [
                  "reproduction",
                  "reproductive",
                  "reproduced",
                  "reproduce",
                ],
                answer: 3,
              },
              {
                options: [
                  "seeds",
                  "seed up",
                  "seeding",
                  "seeded",
                ],
                answer: 0,
              },
              {
                options: [
                  "decrease",
                  "decreased",
                  "decreasing",
                  "decreases",
                ],
                answer: 2,
              },
              {
                options: [
                  "habit",
                  "habitation",
                  "habitats",
                  "inhabit",
                ],
                answer: 2,
              },
              {
                options: [
                  "harmful",
                  "harm",
                  "harmless",
                  "harmfully",
                ],
                answer: 0,
              },
              {
                options: [
                  "short",
                  "shortly",
                  "shorten",
                  "shortages",
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
            title: "A hobby I love",
            text: [
              "My favourite hobby is photography. I started taking photos {1} I was twelve, when my uncle gave me an old camera.",
              "At first, I took photos of everything: my friends, my family, my pets and the places I visited. Then I started to focus on nature photography. I love taking photos of birds, flowers and landscapes.",
              "Every weekend, I go to the countryside or the beach with my camera. Sometimes I wait {2} hours to get the perfect photo of a bird. It requires a lot of patience, but it's worth it. Last year, one of my photos won a competition {3} a nature magazine. It was a photo of a kingfisher catching a fish. I was so proud! The prize was a new lens {4} my camera. Now I want to study photography at university. My dream is to work {5} a wildlife photographer and travel around the {6}.",
            ],
            answers: [
              [
                "when",
              ],
              [
                "for",
              ],
              [
                "in",
                "from",
                "by",
              ],
              [
                "for",
              ],
              [
                "as",
              ],
              [
                "world",
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
            instruction: "Read this email from your English-speaking friend Charlie and the notes you have made. Write your email to Charlie using all the notes. Write about 100 words.",
            input: {
              from: "Charlie",
              subject: "A school trip",
              lines: [
                "I've just come back from a school trip. [How was it?]",
                "Where do you think I went? [Guess]",
                "What's the best school trip you've been on? [Tell Charlie]",
                "Is your school planning any trips? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Charlie,\n\nHow was your trip? I want to hear all about it!\n\nI think you probably went to the science museum, because you've been talking about it for weeks. Or maybe you went to the zoo? Tell me in your next email!\n\nThe best school trip I've been on was to a national park last year. We went hiking, saw lots of wild animals and stayed in a big cabin by a lake. In the evenings, we had a campfire and sang songs. It was so much fun.\n\nYes, my school is planning a trip to the mountains next month. I'm really excited!\n\nBye,\nDila",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The importance of reading",
              lines: [
                "Why is reading important?",
                "What kind of books do you enjoy?",
                "How can we encourage young people to read more?",
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
            sample: "Why reading matters\n\nReading is very important for many reasons. It helps us learn new words and improve our writing. It also teaches us about different places, cultures and ideas. Most importantly, it allows us to escape into other worlds.\n\nI enjoy reading fantasy and adventure books, because they're exciting and full of imagination. My favourite series is about a group of children who discover a magical land.\n\nTo encourage young people to read more, schools could have more interesting books in their libraries and give students time to read every day. Parents could also read with their children. Book clubs are another great idea, because they make reading social and fun.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Mia was walking home when she heard someone calling for help.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Mia was walking home when she heard someone calling for help. She looked around and saw an old woman lying on the ground near the river.\n\nMia ran over to her. The woman had fallen and hurt her leg. She couldn't stand up. Mia stayed calm and called an ambulance on her phone. She took off her coat and put it around the woman to keep her warm.\n\nWhile they waited, the woman told Mia that she had been walking her dog, which had run away. Mia found the dog nearby and brought it back.\n\nWhen the ambulance arrived, the woman thanked Mia. 'You're a hero,' she said.",
          },
        },
      ],
    },
  ],
};
