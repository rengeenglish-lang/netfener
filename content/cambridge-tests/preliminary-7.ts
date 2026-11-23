import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 7 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_7: CambridgeTest = {
  id: "preliminary-7",
  level: "preliminary",
  no: 7,
  title: "B1 Preliminary · Practice Test 7",
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
                    "SCHOOL CANTEEN",
                    "From Monday, students must bring their own reusable cups. Paper cups will no longer be available.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students will need to bring something to drink from.",
                  "Drinks will no longer be sold.",
                  "The canteen will close on Monday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, the dentist called. Your appointment is now on Thursday at four, not Wednesday. Can you go after school? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "which dentist Lucy prefers",
                  "if Lucy can go to a new appointment",
                  "if Lucy has finished school",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Machine wash at 30°C.",
                    "Do not tumble dry. Iron on a low heat.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You shouldn't dry it in a machine.",
                  "You must wash it by hand.",
                  "You shouldn't iron it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear parents,",
                    "Please remember that students need warm clothes and strong shoes for the geography field trip on Tuesday. Mrs Allen",
                  ],
                },
                question: "Why has Mrs Allen written this email?",
                options: [
                  "to change the date of a trip",
                  "to ask parents to help on the trip",
                  "to remind parents what students should wear",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Under-12s free. Group tickets (10 or more people) 20% off.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children under 12 must be with a group.",
                  "Everyone pays 20% less on Sundays.",
                  "Large groups pay less.",
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
            instruction: "The young people below all want to read a book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Last Lighthouse",
                text: "A thrilling mystery set on a lonely island. A teenage girl tries to discover why ships keep disappearing near her home.",
              },
              {
                title: "Kitchen Science",
                text: "Fun experiments you can do at home with things from the kitchen. Each one explains the science behind it in simple language.",
              },
              {
                title: "Run Your Best",
                text: "A champion athlete gives advice on training, eating well and staying motivated. Includes plans for beginners.",
              },
              {
                title: "Lost in Tokyo",
                text: "A funny travel diary by a young writer who spent a year in Japan without speaking any Japanese.",
              },
              {
                title: "Stars Above",
                text: "A beautifully illustrated guide to the night sky, with maps showing where to find planets and constellations.",
              },
              {
                title: "The Dragon's Promise",
                text: "The first book in a fantasy series about a boy who discovers he can talk to dragons. Perfect for fans of magic and adventure.",
              },
              {
                title: "Our Changing Planet",
                text: "A clear, serious look at climate change and what young people can do about it, with real stories from around the world.",
              },
              {
                title: "Comic Kings",
                text: "The history of comic books, with interviews with famous artists and tips on drawing your own characters.",
              },
            ],
            items: [
              {
                text: "Tom loves exciting stories with a puzzle to solve. He likes books that are set by the sea.",
                answer: 0,
              },
              {
                text: "Selin wants to start running and would like some practical advice about getting fit.",
                answer: 2,
              },
              {
                text: "Ben enjoys drawing and wants to learn how professionals create their stories.",
                answer: 7,
              },
              {
                text: "Zeynep is interested in the environment and wants to know how she can help.",
                answer: 6,
              },
              {
                text: "Ali loves reading about other countries, especially if the book makes him laugh.",
                answer: 3,
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
              title: "Working at a summer camp",
              paragraphs: [
                "Last summer, I worked as an assistant at a summer camp for children aged eight to twelve. I'd never worked with children before, and on the first morning I was terrified. Sixty children arrived, and they were all shouting and running around.",
                "My job was to organise games and help with art activities. At first, the children didn't listen to me at all. One of the older leaders, Marcus, gave me some advice: 'Don't try to be their friend straight away. Be clear about the rules first.'",
                "I followed his advice, and things got better. By the end of the first week, the children knew what I expected, and we were having fun. I discovered that I was good at thinking of new games, and the children loved them.",
                "On the last day, a shy girl called Lily gave me a card she had made. It said, 'Thank you for being the best leader.' I nearly cried. That summer showed me that I want to be a teacher.",
              ],
            },
            items: [
              {
                question: "How did the writer feel on the first morning?",
                options: [
                  "excited",
                  "bored",
                  "very frightened",
                  "confident",
                ],
                answer: 2,
              },
              {
                question: "What was Marcus's advice?",
                options: [
                  "Be friendly with the children.",
                  "Make the rules clear first.",
                  "Let the children choose the games.",
                  "Shout at the children.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer discover?",
                options: [
                  "She didn't like art.",
                  "She preferred older children.",
                  "She was bad at organising.",
                  "She was good at inventing games.",
                ],
                answer: 3,
              },
              {
                question: "Why did the writer nearly cry?",
                options: [
                  "A child was hurt.",
                  "A child gave her a kind message.",
                  "The camp was finished.",
                  "She lost her job.",
                ],
                answer: 1,
              },
              {
                question: "What did the summer show the writer?",
                options: [
                  "that she doesn't like children",
                  "that camps are boring",
                  "how to make cards",
                  "what job she wants",
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
            title: "The bike library",
            text: [
              "In many cities, you can borrow books from a library. But in one Dutch town, you can also borrow bicycles. {1}",
              "The idea came from a group of students who noticed how many old bikes were left at the train station. {2} They asked the town council if they could repair them and lend them to people.",
              "The council agreed, and the bike library opened in 2015. {3} You can keep a bike for up to a month, and it doesn't cost anything.",
              "The library is especially popular with people who have just moved to the town. {4} Some people borrow a bike while they save money to buy their own.",
              "The students who started the project are now training local teenagers to repair bikes. {5} Other towns in the Netherlands are now planning similar libraries.",
            ],
            sentences: [
              "This gives young people useful skills and helps the library grow.",
              "Most of them had been there for months, and nobody seemed to want them.",
              "The library also sells books about cycling.",
              "The idea is simple, but it has changed many people's lives.",
              "Many of them don't have a car and can't afford public transport.",
              "Unfortunately, the council decided to close it after a year.",
              "Anyone who lives in the town can borrow one by showing their ID.",
              "Bikes are more popular than cars in most Dutch cities.",
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
            title: "Spiders",
            text: [
              "Many people are {1} of spiders, but most spiders are harmless to humans. In fact, they are very useful, because they eat insects that {2} damage to crops.",
              "There are about 45,000 different kinds of spider. Not all of them make webs, but those that do produce a silk that is extremely strong. {3} its size, spider silk is stronger than steel!",
              "Scientists are studying spider silk because it could be used to make {4} materials for clothes and medicine. Spiders have lived on Earth for more than 300 million years, so they have had a long time to {5}. Next time you see a spider in your house, try not to {6} it. It is probably helping you!",
            ],
            gaps: [
              {
                options: [
                  "fear",
                  "afraid",
                  "worried",
                  "terrible",
                ],
                answer: 1,
              },
              {
                options: [
                  "cause",
                  "make",
                  "do",
                  "give",
                ],
                answer: 0,
              },
              {
                options: [
                  "With",
                  "By",
                  "For",
                  "At",
                ],
                answer: 2,
              },
              {
                options: [
                  "young",
                  "new",
                  "fresh",
                  "recent",
                ],
                answer: 1,
              },
              {
                options: [
                  "grow",
                  "increase",
                  "build",
                  "develop",
                ],
                answer: 3,
              },
              {
                options: [
                  "break",
                  "hurt",
                  "spoil",
                  "ruin",
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
            title: "A new hobby",
            text: [
              "About six months ago, I started learning to play the ukulele. It's a small guitar {1} comes from Hawaii. I chose it because it's cheaper and easier to learn than a guitar.",
              "At first, my fingers hurt {2} lot, but after a few weeks it got easier. I watch videos online and practise for twenty minutes every evening.",
              "Now I can play about fifteen songs. Last month, I played {3} front of my class for the first time. I was nervous, but everyone clapped. My friend Ella liked it so much that she has bought a ukulele {4}. We're thinking {5} starting a band. I'd recommend the ukulele to anyone who wants to learn an instrument {6} spending too much money.",
            ],
            answers: [
              [
                "which",
                "that",
              ],
              [
                "a",
              ],
              [
                "in",
              ],
              [
                "too",
              ],
              [
                "about",
                "of",
              ],
              [
                "without",
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
              subject: "School project",
              lines: [
                "Thanks for agreeing to help me with my project about life in your country! [No problem]",
                "Could you tell me about a typical school day for you? [Describe]",
                "What do teenagers in your town usually do at the weekend? [Explain]",
                "Can we talk on a video call next week? [Suggest a day]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nIt's no problem at all. I'm happy to help with your project!\n\nA typical school day for me starts at half past eight and finishes at three. We have seven lessons, and there's a long break for lunch. After school, I usually do my homework and go to basketball training.\n\nAt the weekend, most teenagers in my town meet friends in the shopping centre or go to the cinema. In summer, lots of people go to the beach.\n\nWe can definitely have a video call. Would Thursday evening at seven o'clock be good for you?\n\nBest wishes,\nDeniz",
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
                "What would your perfect weekend be like?",
                "Where would you go, and who would you be with?",
                "What would you do?",
                "Send us your article and we'll publish the best ones.",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "My dream weekend\n\nMy perfect weekend would start on Friday evening with pizza and a film at home with my family. On Saturday, I'd get up early and go to the mountains with my best friends. We'd walk to a lake, have a picnic and swim in the cold water.\n\nIn the evening, we'd camp by the lake and cook dinner on a fire. I love looking at the stars when there are no city lights.\n\nOn Sunday, I'd come home, sleep for a few hours and then visit my grandparents. My grandmother always makes the best cakes!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Leo had never been so nervous in his life.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Leo had never been so nervous in his life. In five minutes, he would walk onto the stage and play the piano in front of five hundred people.\n\nHe had practised the piece every day for months, but now his hands were shaking. He looked out at the audience and saw his parents sitting in the front row. His mother smiled at him.\n\nWhen his name was called, Leo walked slowly to the piano and took a deep breath. As soon as he started playing, he forgot about the audience. At the end, everyone stood up and clapped. Leo felt prouder than ever before.",
          },
        },
      ],
    },
  ],
};
