import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 51 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_51: CambridgeTest = {
  id: "preliminary-51",
  level: "preliminary",
  no: 51,
  title: "B1 Preliminary · Practice Test 51",
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
                    "Students must not use the lift unless they have an injury.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The lift is broken.",
                  "Everyone must use the lift.",
                  "Only injured students can use the lift.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ella, I've got your scarf. You left it in my car. I'll give it back tomorrow. Mum",
                  ],
                },
                question: "What does Mum tell Ella?",
                options: [
                  "She has found Ella's scarf.",
                  "She has bought a new scarf.",
                  "She has lost the car keys.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Store below 25°C.",
                    "Protect from light.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it in the sun.",
                  "Keep it somewhere cool and dark.",
                  "Keep it somewhere hot.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The school play needs more actors. Are you interested? Rehearsals are on Mondays. Mrs Smith",
                  ],
                },
                question: "Why has Mrs Smith written to Tom?",
                options: [
                  "to invite him to act",
                  "to cancel the play",
                  "to sell tickets",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free water available at the counter.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Water costs money.",
                  "There's no water.",
                  "You can get water without paying.",
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
            instruction: "The young people below all want to visit a website for a school project. Read the descriptions of eight websites. Decide which website would be the most suitable for each person.",
            options: [
              {
                title: "Ancient Egypt",
                text: "Information about pyramids, pharaohs and mummies.",
              },
              {
                title: "Weather World",
                text: "Explains how weather works and why climate is changing.",
              },
              {
                title: "Planet Explorer",
                text: "Facts about all the planets in our solar system.",
              },
              {
                title: "Human Body",
                text: "How the heart, lungs and brain work.",
              },
              {
                title: "Famous Artists",
                text: "The lives and works of great painters.",
              },
              {
                title: "World Music",
                text: "Traditional music from different countries.",
              },
              {
                title: "Inventions",
                text: "The history of important inventions.",
              },
              {
                title: "Animal Kingdom",
                text: "Facts about animals from around the world.",
              },
            ],
            items: [
              {
                text: "Mert is doing a project on Mars and Jupiter.",
                answer: 2,
              },
              {
                text: "Ece needs to learn about pyramids.",
                answer: 0,
              },
              {
                text: "Kaan is studying the heart.",
                answer: 3,
              },
              {
                text: "Defne is researching Van Gogh.",
                answer: 4,
              },
              {
                text: "Lale is writing about climate change.",
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
              title: "Starting a band",
              paragraphs: [
                "When I was fifteen, I started a band with three friends from school. I play the guitar, Ali plays the drums, Selin sings and Can plays the bass.",
                "At first, we weren't very good. We practised in Ali's garage every weekend, but we often argued about which songs to play. Ali's neighbours also complained about the noise!",
                "After a few months, we started writing our own songs. Selin wrote the words, and I wrote the music. Our first song was about friendship. We recorded it on my phone and put it online. We were amazed when more than a thousand people listened to it.",
                "Last month, we played our first concert at a café in town. About fifty people came, including our families and friends. We were very nervous, but it went really well. Now we're planning to record an album.",
              ],
            },
            items: [
              {
                question: "What does the writer play?",
                options: [
                  "the drums",
                  "the bass",
                  "the piano",
                  "the guitar",
                ],
                answer: 3,
              },
              {
                question: "What problem did the band have at first?",
                options: [
                  "They argued about songs.",
                  "They had nowhere to practise.",
                  "They had no instruments.",
                  "Nobody could sing.",
                ],
                answer: 0,
              },
              {
                question: "Who wrote the words for the songs?",
                options: [
                  "the writer",
                  "Ali",
                  "Selin",
                  "Can",
                ],
                answer: 2,
              },
              {
                question: "What surprised the band?",
                options: [
                  "how bad their song was",
                  "the neighbours' complaints",
                  "how many people listened to their song",
                  "the café's size",
                ],
                answer: 2,
              },
              {
                question: "What is the band planning?",
                options: [
                  "to record an album",
                  "to stop playing",
                  "to find a new singer",
                  "to play in a stadium",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A village made of colour",
            text: [
              "In Mexico, there's a village where every house is painted a different bright colour. {1} It's become a popular place for tourists and photographers.",
              "Ten years ago, the village looked very grey and sad. {2} Many young people had left to find work in the cities.",
              "Then the local government had an idea. {3} They paid artists to paint all the houses in bright colours and patterns.",
              "The project has changed the village completely. {4} Crime has also gone down, and people say they feel happier.",
              "Now other villages are copying the idea. {5} The villagers are proud that their home has become famous.",
            ],
            sentences: [
              "They hope it will bring new life to their communities too.",
              "The houses were old, and nobody wanted to live there.",
              "Tourists aren't allowed to visit.",
              "From above, it looks like a giant rainbow.",
              "Tourists now visit, and new shops and cafés have opened.",
              "The paint was very expensive.",
              "They wanted to make the village more attractive.",
              "The houses are all painted white.",
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
              "Penguins are birds, but they can't fly. Instead, they are excellent swimmers and spend most of their lives in the {1}.",
              "There are eighteen different {2} of penguin. They all live in the Southern Hemisphere, from the icy coasts of Antarctica to the warm beaches of the Galápagos Islands.",
              "The Emperor penguin is the largest. It can grow to more than one metre tall and weigh up to forty kilograms. Emperor penguins live in Antarctica, where temperatures can {3} below minus fifty degrees. To stay warm, they huddle together in large groups. The father penguin looks after the egg for about two months, keeping it warm on his feet. During this time, he doesn't eat anything! Sadly, many penguins are in danger because of climate change, {4} the ice they live on is melting. Overfishing also means there's less food for them. Scientists are working hard to protect penguins and their {5}. We can help by reducing our {6} of plastic.",
            ],
            gaps: [
              {
                options: [
                  "oceanic",
                  "oceans up",
                  "oceanly",
                  "ocean",
                ],
                answer: 3,
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
                  "falling",
                  "fell",
                  "fallen",
                  "fall",
                ],
                answer: 3,
              },
              {
                options: [
                  "because",
                  "although",
                  "but",
                  "so",
                ],
                answer: 0,
              },
              {
                options: [
                  "habit",
                  "habitat up",
                  "habitats",
                  "inhabit",
                ],
                answer: 2,
              },
              {
                options: [
                  "useful",
                  "using",
                  "use",
                  "used",
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
            title: "My first day at a new school",
            text: [
              "When I was twelve, my family moved to a new city, and I had to start at a new school. I was very nervous {1} my first day.",
              "When I walked into the classroom, everyone looked at me. I felt really shy and didn't know {2} to sit. Then a girl called Mia smiled and said I could sit next to her.",
              "Mia was very friendly. She showed me around the school and introduced me to her friends. At lunch, we sat together and talked about our favourite films and books. We found out that we had a lot {3} common. By the end of the day, I felt much better. Mia and I became best friends, and we still are today, four years later. I'm so grateful {4} her kindness on that first day. Now, whenever a new student joins our class, I try to make {5} feel welcome, just like Mia did {6} me.",
            ],
            answers: [
              [
                "on",
              ],
              [
                "where",
              ],
              [
                "in",
              ],
              [
                "for",
              ],
              [
                "them",
              ],
              [
                "for",
                "with",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "A film",
              lines: [
                "I've just seen a great film! [Tell me about it]",
                "What's your favourite film? [Tell Kim]",
                "Do you prefer watching films at home or at the cinema? [Explain why]",
                "Shall we watch a film together next weekend? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nI'd love to hear about the film you saw! What was it called? Was it a comedy or an action film?\n\nMy favourite film is 'Spirited Away'. It's an animated film from Japan about a girl who enters a magical world. The story is amazing, and the pictures are beautiful. I've watched it about ten times!\n\nI prefer watching films at the cinema, because the screen is bigger and the sound is better. It feels more exciting. But watching films at home is cheaper and more comfortable.\n\nYes, let's watch a film together next weekend! We could go to the cinema on Saturday afternoon.\n\nBye,\nAda",
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
                "What's your favourite season?",
                "Why do you like it?",
                "What do you usually do at that time of year?",
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
            sample: "Why I love winter\n\nMy favourite season is winter. Many people prefer summer, but I love the cold weather and the snow.\n\nI like winter because everything looks so beautiful when it's covered in snow. I also love the feeling of being warm inside when it's cold outside. There's nothing better than drinking hot chocolate by the fire while watching the snow fall.\n\nIn winter, my family usually goes skiing in the mountains. We stay in a small wooden hotel, and we ski every day. In the evenings, we play board games and eat delicious food. Winter is also the time of my birthday, which makes it even more special.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Jake woke up, he didn't recognise the room.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Jake woke up, he didn't recognise the room. Then he remembered: he was staying at a hotel in Paris with his parents. It was their first family holiday abroad.\n\nHe jumped out of bed and opened the curtains. From his window, he could see the Eiffel Tower! He was so excited that he woke up his parents immediately.\n\nThey had breakfast at a small café and then took the lift to the top of the Eiffel Tower. The view was incredible. Jake could see the whole city.\n\nIn the evening, they took a boat trip along the river. Jake thought it was the best holiday ever.",
          },
        },
      ],
    },
  ],
};
