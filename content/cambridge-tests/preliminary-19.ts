import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 19 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_19: CambridgeTest = {
  id: "preliminary-19",
  level: "preliminary",
  no: 19,
  title: "B1 Preliminary · Practice Test 19",
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
                    "Swimming lessons for adults are now available on Wednesday evenings. Ask at reception for details.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Adults can now have swimming lessons.",
                  "The pool is closed on Wednesdays.",
                  "Only children can have lessons.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I'm sorry, but I can't lend you my bike this weekend. My brother needs it. Sam",
                  ],
                },
                question: "Why can't Sam lend his bike?",
                options: [
                  "It is broken.",
                  "Someone else needs it.",
                  "He needs it himself.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Wash before eating.",
                    "Grown in Spain.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You should clean the food first.",
                  "The food is ready to eat.",
                  "The food was grown locally.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I've booked a table at the Italian restaurant for six people on Saturday at eight. Can you tell the others? Thanks, Kate",
                  ],
                },
                question: "What does Kate want Lucy to do?",
                options: [
                  "book a restaurant",
                  "cook dinner",
                  "pass on information",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Large bags must be left in the lockers at the entrance. Lockers are free.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lockers cost money.",
                  "Bags are not allowed in the building.",
                  "You can't take big bags into the museum.",
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
            instruction: "The young people below all want to take part in a competition. Read the descriptions of eight competitions. Decide which one would be the most suitable for each person.",
            options: [
              {
                title: "Young Chef",
                text: "Cook a healthy meal in one hour. The winner gets a day at a top restaurant.",
              },
              {
                title: "Photo Challenge",
                text: "Send us your best photo of nature. Prizes for three age groups.",
              },
              {
                title: "Story Writing",
                text: "Write a short story of up to 1,000 words. The winning story will be published.",
              },
              {
                title: "Science Project",
                text: "Present an experiment or invention to a panel of scientists.",
              },
              {
                title: "Talent Show",
                text: "Sing, dance or perform anything you like on stage in front of an audience.",
              },
              {
                title: "Debate Club",
                text: "Teams argue about important topics. Good for confident speakers.",
              },
              {
                title: "Robot Build",
                text: "Design and build a robot that can complete a task. Teams of three.",
              },
              {
                title: "Art Prize",
                text: "Paint a picture on the theme 'My City'. Winners displayed in the town hall.",
              },
            ],
            items: [
              {
                text: "Ömer loves building things and working with friends.",
                answer: 6,
              },
              {
                text: "Lale wants to be a writer and would love to see her work in print.",
                answer: 2,
              },
              {
                text: "Kerem enjoys arguing and is very good at speaking in public.",
                answer: 5,
              },
              {
                text: "Ece has invented a machine that cleans plastic from water.",
                answer: 3,
              },
              {
                text: "Zehra loves taking pictures of animals and plants.",
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
              title: "Running a school newspaper",
              paragraphs: [
                "Last year, my friends and I started a newspaper at our school. We'd noticed that students didn't know much about what was happening in other classes, so we wanted to share news and stories.",
                "At first, it was very difficult. None of us knew how to design a newspaper, and we spent hours arguing about what to include. Our first edition was only four pages, and we printed just fifty copies.",
                "But students loved it. They started sending us stories, photos and ideas. We interviewed teachers, reviewed school events and even had a puzzle page. By the end of the year, we were printing three hundred copies every month.",
                "Running the newspaper has taught me a lot. I've learned how to write clearly, work in a team and meet deadlines. I'd like to study journalism at university, and I'm sure this experience will help me.",
              ],
            },
            items: [
              {
                question: "Why did the writer start the newspaper?",
                options: [
                  "to make money",
                  "because the teacher asked",
                  "to share information between students",
                  "to win a prize",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at the beginning?",
                options: [
                  "Students didn't like it.",
                  "They didn't know how to make a newspaper.",
                  "They had no computer.",
                  "Teachers wouldn't help.",
                ],
                answer: 1,
              },
              {
                question: "What happened after the first edition?",
                options: [
                  "The newspaper closed.",
                  "Teachers stopped it.",
                  "Nobody read it.",
                  "Students started contributing.",
                ],
                answer: 3,
              },
              {
                question: "How had the newspaper changed by the end of the year?",
                options: [
                  "It had fewer pages.",
                  "They printed many more copies.",
                  "It was only online.",
                  "It was written by teachers.",
                ],
                answer: 1,
              },
              {
                question: "What does the writer want to study?",
                options: [
                  "teaching",
                  "design",
                  "photography",
                  "journalism",
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
              "In the mountains of California, there's a tree that is more than 4,800 years old. {1} It is a bristlecone pine, and it's the oldest known living tree in the world.",
              "Bristlecone pines grow in very difficult conditions. {2} The cold, dry air and poor soil mean they grow extremely slowly.",
              "Because they grow so slowly, their wood is very hard. {3} This is one reason why they can survive for thousands of years.",
              "Scientists keep the exact location of the oldest tree a secret. {4} They are worried that visitors might damage it.",
              "Studying these trees can help us understand how the climate has changed over thousands of years. {5} Each ring in the tree's trunk shows one year of its life.",
            ],
            sentences: [
              "In dry years, the rings are thinner than in wet years.",
              "They are found high up in the mountains, where there is very little rain.",
              "Tourists often take wood from the tree.",
              "That means it was already old when the Egyptians built the pyramids.",
              "Only a few people know exactly where it is.",
              "The tree was planted by scientists.",
              "Insects and diseases can't easily damage it.",
              "Bristlecone pines grow very fast.",
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
            title: "Honey",
            text: [
              "Honey is a sweet food made by bees from the nectar of flowers. People have been eating honey for thousands of years. Cave paintings in Spain show people {1} honey more than 8,000 years ago.",
              "Bees work very hard to make honey. To make just one jar, bees need to {2} about two million flowers!",
              "Honey is very special because it never goes bad. Archaeologists have found honey in ancient Egyptian tombs that was still {3} to eat after 3,000 years. Honey is also used as medicine. Many people {4} it with lemon and hot water when they have a cold. The colour and taste of honey {5} depending on the flowers the bees visit. Some honey is light and sweet, while other honey is dark and strong. Without bees, we wouldn't have honey, so it's important to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "catching",
                  "collecting",
                  "growing",
                  "making",
                ],
                answer: 1,
              },
              {
                options: [
                  "visit",
                  "see up",
                  "go up",
                  "look",
                ],
                answer: 0,
              },
              {
                options: [
                  "safety",
                  "safely",
                  "safe",
                  "save",
                ],
                answer: 2,
              },
              {
                options: [
                  "eat up",
                  "drink",
                  "make up",
                  "have up",
                ],
                answer: 1,
              },
              {
                options: [
                  "move",
                  "turn up",
                  "make",
                  "change",
                ],
                answer: 3,
              },
              {
                options: [
                  "save up",
                  "protect",
                  "keep up",
                  "guard on",
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
            title: "A visit to the dentist",
            text: [
              "I've always been afraid of the dentist. Ever since I was a child, I've felt nervous {1} I have to go for a check-up.",
              "Last month, I had terrible toothache, so I had no choice. I had to go. The dentist was a young woman {2} name was Dr Patel. She was very kind and explained everything she was going to do.",
              "She told me I needed a filling. I was terrified, but she gave me some music to listen {3} while she worked. It didn't hurt at all! Afterwards, she gave me some advice about looking after my teeth. She said I should brush them twice a day and eat {4} sugar. I've followed her advice, and I'm not as scared {5} I used to be. I'm even looking forward {6} my next check-up!",
            ],
            answers: [
              [
                "when",
                "whenever",
              ],
              [
                "whose",
              ],
              [
                "to",
              ],
              [
                "less",
              ],
              [
                "as",
              ],
              [
                "to",
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
              subject: "An English course",
              lines: [
                "I'm thinking of doing an English course in England next summer. [Good idea]",
                "Have you ever studied abroad? [Tell Chris]",
                "Which city do you think I should choose? [Recommend one]",
                "What should I do in my free time? [Give suggestions]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nThat's a great idea! Studying abroad is the best way to improve your English quickly.\n\nI haven't studied abroad yet, but my sister did a course in Oxford two years ago. She loved it, and her English improved a lot.\n\nI think you should choose Brighton. It's by the sea, so you can go to the beach after lessons, and it's not too expensive. It's also close to London, so you could visit at the weekend.\n\nIn your free time, you should try to make friends from other countries and speak English as much as possible. You could also join a sports club.\n\nBye,\nYağmur",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A place I'd love to visit",
              lines: [
                "Is there a place in the world you'd love to visit?",
                "Why does it interest you?",
                "What would you do there?",
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
            sample: "Dreaming of Iceland\n\nThe place I'd most love to visit is Iceland. I've seen so many photos of its amazing landscapes: volcanoes, glaciers, waterfalls and black sand beaches. It looks like another planet!\n\nI'd love to go there in winter to see the Northern Lights. I've always wanted to watch the sky dance with green and purple colours. I'd also like to swim in one of the natural hot springs, even when it's snowing.\n\nIn the summer, I'd go hiking and whale-watching. I know Iceland is expensive, so I'm saving my pocket money. I hope I'll be able to go there one day.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The storm started just as we reached the top of the mountain.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The storm started just as we reached the top of the mountain. Dark clouds covered the sky, and heavy rain began to fall.\n\nMy friend Ali and I looked at each other. We knew we had to get down quickly, but the path was becoming very slippery. Lightning flashed across the sky.\n\nWe found a small shelter made of stones and waited inside. We were cold and wet, but we shared our chocolate and told jokes to stay positive.\n\nAfter an hour, the storm passed, and the sun came out. We walked slowly back down the mountain. It was an adventure we would never forget.",
          },
        },
      ],
    },
  ],
};
