import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 91 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_91: CambridgeTest = {
  id: "preliminary-91",
  level: "preliminary",
  no: 91,
  title: "B1 Preliminary · Practice Test 91",
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
                    "Please switch your phone to silent before entering.",
                  ],
                },
                question: "What does the notice ask you to do?",
                options: [
                  "Make your phone quiet before going in.",
                  "Leave your phone outside.",
                  "Use your phone to pay.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Deniz, my piano lesson has finished early. Can you pick me up at 5 instead of 6? Ela",
                  ],
                },
                question: "What does Ela want?",
                options: [
                  "to have a longer lesson",
                  "to be collected an hour earlier",
                  "to walk home",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not iron. Dry flat.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't use an iron and dry it lying down.",
                  "Iron it on high.",
                  "Hang it up to dry.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kerem,",
                    "I've joined the photography club. The first meeting is on Tuesday. Do you want to come too? Arda",
                  ],
                },
                question: "Why is Arda writing?",
                options: [
                  "to sell a camera",
                  "to cancel a meeting",
                  "to invite Kerem to a club",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "Lockers need a one-lira coin. You get the coin back.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lockers are free without coins.",
                  "Lockers cost one lira a day.",
                  "You need a coin for a locker, but you get it back.",
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
            instruction: "The young people below all want to visit a place at the weekend. Read the descriptions of eight places. Decide which place would be the most suitable for each person.",
            options: [
              {
                title: "Science Museum",
                text: "Hands-on experiments and a planetarium.",
              },
              {
                title: "Adventure Park",
                text: "Zip wires and climbing in the trees.",
              },
              {
                title: "Art Gallery",
                text: "Modern paintings and a drawing workshop.",
              },
              {
                title: "Aquarium",
                text: "Sharks, rays and a touch pool.",
              },
              {
                title: "Castle",
                text: "A medieval castle with guided tours.",
              },
              {
                title: "Farm",
                text: "Feed the animals and ride a pony.",
              },
              {
                title: "Ice Rink",
                text: "Skating lessons for beginners.",
              },
              {
                title: "Botanical Garden",
                text: "Rare plants and a tropical glasshouse.",
              },
            ],
            items: [
              {
                text: "Ece wants to look at the stars.",
                answer: 0,
              },
              {
                text: "Oğuz wants to learn to skate.",
                answer: 6,
              },
              {
                text: "Melis wants to see sharks.",
                answer: 3,
              },
              {
                text: "Batu loves history and knights.",
                answer: 4,
              },
              {
                text: "Nehir wants to climb trees.",
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
              title: "Learning to code",
              paragraphs: [
                "When I was twelve, my uncle gave me an old laptop. I didn't have any games on it, so I started looking for things to do online. That's how I found a free coding course.",
                "At first, I didn't understand anything. The instructions seemed like a foreign language. But I kept trying, and after a few weeks I made my first simple program. It only said 'Hello', but I was really proud.",
                "Now I'm fifteen, and I've made three small games. My friends play them at school. Last month, I entered a coding competition for teenagers and came fourth out of eighty.",
                "I'd like to study computer science at university. My advice to anyone who wants to code is simple: don't give up when it's difficult. Every programmer makes mistakes.",
              ],
            },
            items: [
              {
                question: "How did the writer start coding?",
                options: [
                  "by taking lessons at school",
                  "by reading her uncle's books",
                  "by finding a free course online",
                  "by copying games",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel at first?",
                options: [
                  "bored",
                  "confused",
                  "excited",
                  "angry",
                ],
                answer: 1,
              },
              {
                question: "What did the first program do?",
                options: [
                  "It played music.",
                  "It was a game.",
                  "It drew a picture.",
                  "It said 'Hello'.",
                ],
                answer: 3,
              },
              {
                question: "What happened at the competition?",
                options: [
                  "She won.",
                  "She came fourth.",
                  "She came last.",
                  "She didn't finish.",
                ],
                answer: 1,
              },
              {
                question: "What is the writer's advice?",
                options: [
                  "Buy a new laptop.",
                  "Only work alone.",
                  "Never make mistakes.",
                  "Don't give up.",
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
            title: "A library on a bike",
            text: [
              "In a town in Colombia, a teacher brings books to children on a bicycle. {1} He started the idea more than ten years ago.",
              "Many children in the villages near the town had no books at home. {2} The teacher wanted to change this.",
              "Every Saturday, he fills two big boxes with books. {3} Then he cycles to a different village.",
              "When he arrives, children run to meet him. {4} Sometimes he reads stories aloud to the younger ones.",
              "The project has become famous across the country. {5} Now there are bicycle libraries in several other towns.",
            ],
            sentences: [
              "Other teachers have copied his idea.",
              "The nearest library was too far away.",
              "The children don't like reading.",
              "People call him 'the book cyclist'.",
              "They choose books and return the ones they've finished.",
              "He drives a big lorry.",
              "He ties them to the back of his bike.",
              "He sells the books for money.",
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
            title: "Penguins",
            text: [
              "Penguins are birds, but they can't fly. Instead, they are excellent swimmers. Their wings have {1} into flippers that help them move quickly through the water.",
              "Most penguins live in the southern half of the world. Some live in Antarctica, where it is extremely cold, but others live on warm beaches in Africa and South America.",
              "Penguins have thick feathers and a layer of fat that keeps them {2}. In the coldest places, they stand close together in large groups to share heat. Penguins eat fish, squid and small sea animals. They can dive {3} to catch their food. The emperor penguin can stay underwater for more than twenty minutes. Penguin parents take turns to look after their eggs. The father emperor penguin keeps the egg warm on his feet for about two months, without eating! Sadly, some penguin {4} are in danger because of climate change and overfishing. Scientists are {5} penguin colonies to understand how to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "change",
                  "changed",
                  "changing",
                  "changes",
                ],
                answer: 1,
              },
              {
                options: [
                  "warm",
                  "warmth",
                  "warmly",
                  "warming",
                ],
                answer: 0,
              },
              {
                options: [
                  "depth",
                  "deeply",
                  "deep",
                  "deepen",
                ],
                answer: 2,
              },
              {
                options: [
                  "specie",
                  "species",
                  "special",
                  "specially",
                ],
                answer: 1,
              },
              {
                options: [
                  "study",
                  "studied",
                  "studious",
                  "studying",
                ],
                answer: 3,
              },
              {
                options: [
                  "helpful",
                  "help",
                  "helping",
                  "helpless",
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
            title: "My first camping trip",
            text: [
              "Last summer, I went camping {1} the first time with my cousins. We stayed by a lake in the forest for three nights.",
              "Putting up the tent was harder than I'd expected. It took us almost an hour, and it fell down twice! But we finally managed {2} do it.",
              "In the evenings, we cooked dinner over a small fire and told stories. We could hear owls in the trees. At night, the sky was full {3} stars. I'd never seen so many before. On the second day, it rained all afternoon. We stayed inside the tent and played cards. It wasn't the best weather, {4} we still had fun. On the last morning, we got up early to watch the sunrise over the lake. It was beautiful. I enjoyed the trip so much that I'm going camping again next summer. This time, I'll know how to put {5} the tent! I'd recommend camping to anyone {6} loves nature.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "of",
              ],
              [
                "but",
              ],
              [
                "up",
              ],
              [
                "who",
                "that",
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
              subject: "A new phone",
              lines: [
                "I'm going to buy a new phone. [Say something nice]",
                "Which phone do you have? [Tell Sam]",
                "What should I check before I buy one? [Give advice]",
                "Can you come to the shop with me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Sam,\n\nThat's exciting! A new phone is always fun.\n\nI've got quite an old phone, but it still works well. It has a good camera, which is the most important thing for me because I love taking photos.\n\nBefore you buy one, you should check how long the battery lasts and how much storage it has. It's also a good idea to read some reviews online and compare prices in different shops. Don't forget to buy a case to protect it!\n\nOf course I can come with you. I'm free on Saturday afternoon. Shall we meet outside the shopping centre at two?\n\nSee you,\nMira",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My favourite season",
              lines: [
                "Which season do you like best?",
                "What do you do at that time of year?",
                "Is there anything you don't like about it?",
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
            sample: "Why I love autumn\n\nMy favourite season is autumn. I love the colours of the leaves when they turn red, orange and yellow. The weather is cooler than in summer, but it isn't cold yet, so it's perfect for walking.\n\nIn autumn, my family often goes to the forest at the weekend. We collect chestnuts and take photos of the trees. When we get home, we roast the chestnuts and drink hot chocolate. It's also the start of the school year, so I see my friends every day again.\n\nThe only thing I don't like is that the days get shorter. It gets dark very early, and sometimes it rains for days. But I still think autumn is the most beautiful season.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Nobody knew who had left the box outside the school gate.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Nobody knew who had left the box outside the school gate. It was big and brown, and someone had written 'For the students' on the top in large letters.\n\nThe head teacher carried it inside and opened it carefully in front of everyone. Inside, there were dozens of new books, footballs and art materials. There was also a short letter.\n\nThe letter was from a man who had been a student at the school fifty years earlier. He wrote that the school had changed his life, and he wanted to say thank you.\n\nThe students were amazed. They decided to write him a letter back, and the art class painted a picture of the school to send with it.",
          },
        },
      ],
    },
  ],
};
