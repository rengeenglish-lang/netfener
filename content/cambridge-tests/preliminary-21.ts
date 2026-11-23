import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 21 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_21: CambridgeTest = {
  id: "preliminary-21",
  level: "preliminary",
  no: 21,
  title: "B1 Preliminary · Practice Test 21",
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
                    "Hot meals are available from 12 to 1.30. After that, only sandwiches and fruit will be served.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The canteen closes at 1.30.",
                  "You can't get a hot meal after 1.30.",
                  "Sandwiches are only available before 12.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Dad, my phone battery is nearly dead. I'll call you from Sara's house when I get there. Mia",
                  ],
                },
                question: "Why has Mia written this message?",
                options: [
                  "to ask Dad to pick her up",
                  "to say she's going home",
                  "to explain why she might not answer her phone",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Cook from frozen.",
                    "Do not refreeze once defrosted.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You shouldn't freeze it again after it has defrosted.",
                  "You must defrost it before cooking.",
                  "You can freeze it many times.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jake,",
                    "The basketball tournament has been moved to the new sports hall because the old one is being repaired. Same time. Coach",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the time of the tournament",
                  "the place of the tournament",
                  "the coach",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "THEATRE",
                    "Latecomers will not be admitted until the interval.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "If you arrive late, you'll have to wait to go in.",
                  "The show starts late.",
                  "There is no interval.",
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
            instruction: "The young people below all want to do a course in the summer holidays. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Mountain Biking",
                text: "Three days of riding forest trails. Bikes and helmets provided. Must be over 12.",
              },
              {
                title: "Jewellery Making",
                text: "Learn to make necklaces and bracelets from beads and silver. Take home everything you make.",
              },
              {
                title: "First Aid",
                text: "Learn how to help in an emergency. Get a certificate at the end. One day.",
              },
              {
                title: "Animation",
                text: "Create your own cartoon on the computer. Five mornings. Some drawing skills useful.",
              },
              {
                title: "Surf School",
                text: "A week of surfing lessons on the beach. You must be a confident swimmer.",
              },
              {
                title: "Songwriting",
                text: "Write and record your own song with professional musicians.",
              },
              {
                title: "Astronomy Nights",
                text: "Learn about stars and planets and use powerful telescopes. Evenings only.",
              },
              {
                title: "Survival Skills",
                text: "Learn to build shelters, find water and make fires in the forest. Two nights camping.",
              },
            ],
            items: [
              {
                text: "Can wants to learn useful skills that could help someone who is hurt.",
                answer: 2,
              },
              {
                text: "Ece loves drawing and wants to make her pictures move.",
                answer: 3,
              },
              {
                text: "Arda loves the outdoors and wants to learn how to survive in nature.",
                answer: 7,
              },
              {
                text: "Zeynep plays the guitar and wants to create her own music.",
                answer: 5,
              },
              {
                text: "Burak is a strong swimmer and wants to try a water sport.",
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
              title: "Learning to be patient",
              paragraphs: [
                "I've always been an impatient person. I want everything immediately, and I hate waiting. So when my grandmother suggested that I try fishing with her, I laughed. Sitting by a lake for hours waiting for a fish? It sounded like my worst nightmare.",
                "But my grandmother insisted, and one Saturday morning I found myself sitting next to her by a quiet lake. For the first hour, I complained constantly. I checked my phone, walked around and asked when we could go home.",
                "Then my grandmother told me to put my phone away and just look around. I noticed things I'd never seen before: the birds, the reflections on the water, the sound of the wind. I started to relax.",
                "I didn't catch a single fish that day, but I didn't care. I've been fishing with my grandmother every month since then. It's taught me that sometimes the best things in life take time. I'm still impatient sometimes, but I'm getting better.",
              ],
            },
            items: [
              {
                question: "How did the writer react to her grandmother's idea?",
                options: [
                  "She was excited.",
                  "She thought it was funny.",
                  "She agreed immediately.",
                  "She was angry.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer do in the first hour?",
                options: [
                  "She complained a lot.",
                  "She caught fish.",
                  "She read a book.",
                  "She slept.",
                ],
                answer: 0,
              },
              {
                question: "What happened when the writer put her phone away?",
                options: [
                  "She got bored.",
                  "She went home.",
                  "She noticed her surroundings.",
                  "She caught a fish.",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel about not catching a fish?",
                options: [
                  "She was disappointed.",
                  "She didn't mind.",
                  "She was angry.",
                  "She cried.",
                ],
                answer: 1,
              },
              {
                question: "What has fishing taught the writer?",
                options: [
                  "Fishing is boring.",
                  "Phones are important.",
                  "She should be more impatient.",
                  "Good things can take time.",
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
            title: "The robot that cleans the beach",
            text: [
              "On a beach in Italy, there's a new worker that never gets tired. {1} It's a robot that collects plastic rubbish from the sand.",
              "The robot was designed by a group of university students. {2} They had seen how much plastic was washing up on the beaches near their town.",
              "The robot moves slowly along the beach using cameras to find rubbish. {3} It can tell the difference between plastic and natural objects like shells and seaweed.",
              "In its first summer, the robot collected more than two tonnes of plastic. {4} It works at night, so it doesn't disturb people on the beach.",
              "The students hope to build more robots for beaches around the world. {5} They also want to use the robot to teach people about plastic pollution.",
            ],
            sentences: [
              "When it finds something, it picks it up with a mechanical arm.",
              "Most tourists didn't like the robot.",
              "It doesn't need a break, and it doesn't get paid.",
              "Several towns in Spain and Greece have already asked for one.",
              "The robot was very expensive to build.",
              "They wanted to do something about the problem.",
              "The robot also cleans the sea.",
              "That's more than a team of ten people could collect.",
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
            title: "Sharks",
            text: [
              "Sharks have lived in the world's oceans for more than 400 million years. That's {1} than dinosaurs!",
              "There are more than 500 kinds of shark. They {2} in size from the dwarf lantern shark, which is about twenty centimetres long, to the whale shark, which can be eighteen metres long.",
              "Many people are afraid of sharks because of films, but shark attacks are actually very {3}. You are more likely to be hit by lightning. In fact, humans are much more dangerous to sharks {4} sharks are to humans. Millions of sharks are killed every year, mainly for their fins. As a result, many kinds of shark are now in {5}. Sharks are very important for the health of the ocean because they keep the numbers of other fish {6} balance.",
            ],
            gaps: [
              {
                options: [
                  "longer",
                  "more",
                  "higher",
                  "further",
                ],
                answer: 0,
              },
              {
                options: [
                  "change",
                  "differ up",
                  "move",
                  "vary",
                ],
                answer: 3,
              },
              {
                options: [
                  "few",
                  "rare",
                  "little",
                  "seldom",
                ],
                answer: 1,
              },
              {
                options: [
                  "than",
                  "as",
                  "that",
                  "then",
                ],
                answer: 0,
              },
              {
                options: [
                  "dangerous",
                  "risk up",
                  "danger",
                  "fear",
                ],
                answer: 2,
              },
              {
                options: [
                  "at",
                  "in",
                  "on",
                  "by",
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
            title: "My favourite museum",
            text: [
              "My favourite museum is the Natural History Museum in London. I've been there at {1} ten times, and I still find something new every visit.",
              "The first thing you see {2} you walk in is a huge skeleton of a blue whale hanging from the ceiling. It's absolutely amazing.",
              "My favourite part is the dinosaur gallery. There's a moving model of a T-rex {3} roars at visitors! When I was little, I was really scared of it. The museum also has an earthquake room, {4} you can feel what an earthquake is like. The best thing is that entry is free, so you can go as often {5} you like. If you ever visit London, you {6} definitely go there.",
            ],
            answers: [
              [
                "least",
              ],
              [
                "when",
                "as",
              ],
              [
                "that",
                "which",
              ],
              [
                "where",
              ],
              [
                "as",
              ],
              [
                "should",
                "must",
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
              subject: "A party",
              lines: [
                "I'm having a party for my birthday next month! [Sounds great]",
                "Would you like to help me organise it? [Answer]",
                "What kind of food should I have? [Suggest something]",
                "What music do you think people will like? [Give ideas]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Sam,\n\nThat sounds great! I love parties, especially birthday parties.\n\nOf course I'd like to help you organise it. I'm good at decorating, so I could make some posters and buy balloons. Just tell me what you need.\n\nI think you should have lots of different snacks, like pizza, crisps and small sandwiches. Everyone loves pizza! And you must have a big chocolate cake, of course.\n\nI think most people will like pop music, because it's good for dancing. Maybe we could make a playlist together with everyone's favourite songs.\n\nSee you soon,\nBeren",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Learning from mistakes",
              lines: [
                "Tell us about a mistake you made.",
                "What happened?",
                "What did you learn from it?",
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
            sample: "The day I forgot my lines\n\nLast year, I had the main part in our school play. I was so busy with football and homework that I didn't practise my lines enough. I thought I'd be fine on the night.\n\nI was wrong. As soon as I walked on stage, I forgot everything. There was a terrible silence, and I could feel my face going red. Luckily, my friend whispered the line to me, and I managed to continue.\n\nI learned that preparation is really important. Now I always plan my time carefully, and I never leave things until the last minute. It was embarrassing, but it was a valuable lesson.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The old man on the bench looked lonely.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The old man on the bench looked lonely. Every day, Ella walked past him on her way to school. He always sat in the same place, feeding the pigeons.\n\nOne morning, she decided to say hello. The old man smiled and told her his name was George. He had been a sailor and had travelled all over the world.\n\nAfter that, Ella stopped to talk to George every day. He told her amazing stories about storms at sea and faraway countries. She brought him cakes that her mother made.\n\nThey became good friends. Ella realised that sometimes a simple hello can make a big difference to someone's life.",
          },
        },
      ],
    },
  ],
};
