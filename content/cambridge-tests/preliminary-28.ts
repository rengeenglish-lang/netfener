import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 28 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_28: CambridgeTest = {
  id: "preliminary-28",
  level: "preliminary",
  no: 28,
  title: "B1 Preliminary · Practice Test 28",
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
                    "Students who cycle to school must lock their bikes in the bike shed. Bikes left elsewhere will be removed.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can't cycle to school.",
                  "Bikes must be kept in a special place.",
                  "The bike shed is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Mum, the bus is very late. I'll probably be home about seven. Don't wait for me for dinner. Ella",
                  ],
                },
                question: "What does Ella tell her mum?",
                options: [
                  "She has missed the bus.",
                  "She will be home late.",
                  "She is going to a friend's house.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains caffeine.",
                    "Not recommended for children.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This is a children's drink.",
                  "This drink has no caffeine.",
                  "Children shouldn't really drink this.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "Can you send me the photos from the school trip? I'd like to print some for my scrapbook. Thanks! Ben",
                  ],
                },
                question: "What does Ben want?",
                options: [
                  "some photos",
                  "a scrapbook",
                  "to go on a trip",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Photography is allowed in most areas, but not in the special exhibition.",
                  ],
                },
                question: "Where can't you take photos?",
                options: [
                  "anywhere in the museum",
                  "in one particular exhibition",
                  "in the café",
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
            instruction: "The young people below all want to get a part-time job. Read the descriptions of eight jobs. Decide which job would be the most suitable for each person.",
            options: [
              {
                title: "Pet Sitter",
                text: "Look after pets while their owners are on holiday. Flexible hours.",
              },
              {
                title: "Car Washer",
                text: "Wash cars at a busy garage on Saturdays. Outdoor work.",
              },
              {
                title: "Waiter",
                text: "Serve customers in a restaurant on Friday and Saturday evenings.",
              },
              {
                title: "Computer Helper",
                text: "Help older people learn to use computers at the library. Tuesday afternoons.",
              },
              {
                title: "Music Teacher Assistant",
                text: "Help teach young children to play the piano. You must play well.",
              },
              {
                title: "Garden Helper",
                text: "Help an elderly couple with their garden. Weekend mornings.",
              },
              {
                title: "Shop Assistant",
                text: "Work in a bookshop. Must enjoy reading. Sunday afternoons.",
              },
              {
                title: "Delivery Rider",
                text: "Deliver newspapers by bike every morning before school.",
              },
            ],
            items: [
              {
                text: "Emre is good at technology and is free on Tuesday afternoons.",
                answer: 3,
              },
              {
                text: "Asya plays the piano well and loves young children.",
                answer: 4,
              },
              {
                text: "Burak loves animals and can work at different times.",
                answer: 0,
              },
              {
                text: "Defne loves books and is free on Sundays.",
                answer: 6,
              },
              {
                text: "Mehmet enjoys gardening and wants to help older people.",
                answer: 5,
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
              title: "Saving my local park",
              paragraphs: [
                "Last year, I heard that the local council was planning to sell the park near my house to build new flats. I was really upset. I'd played in that park since I was a little child, and lots of families used it every day.",
                "I decided to do something. With some friends, I started a petition to save the park. We stood outside the supermarket every Saturday and asked people to sign it. We also created a page online.",
                "The response was amazing. More than five thousand people signed the petition. A local newspaper wrote about our campaign, and a TV station interviewed me. I was very nervous, but I explained why the park was so important.",
                "In the end, the council changed its mind. The park was saved, and they even promised to build a new playground. I learned that if you really care about something, you can make a difference, even if you're young.",
              ],
            },
            items: [
              {
                question: "Why was the writer upset?",
                options: [
                  "The park was dirty.",
                  "She couldn't go to the park.",
                  "The playground was broken.",
                  "The park might be sold.",
                ],
                answer: 3,
              },
              {
                question: "What did the writer and her friends do?",
                options: [
                  "built a playground",
                  "collected signatures",
                  "bought the park",
                  "sold flats",
                ],
                answer: 1,
              },
              {
                question: "How many people signed the petition?",
                options: [
                  "more than five thousand",
                  "about five hundred",
                  "fifty",
                  "ten thousand",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel about the TV interview?",
                options: [
                  "bored",
                  "angry",
                  "nervous",
                  "relaxed",
                ],
                answer: 2,
              },
              {
                question: "What did the council decide?",
                options: [
                  "to sell the park",
                  "to keep the park",
                  "to build flats",
                  "to close the playground",
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
            title: "A hotel made of salt",
            text: [
              "In Bolivia, there is a hotel made almost entirely of salt. {1} It stands on the edge of the world's largest salt flat.",
              "The salt flat, called Salar de Uyuni, covers more than 10,000 square kilometres. {2} It looks like a huge white desert.",
              "The hotel's walls, floors and even furniture are made from blocks of salt. {3} Guests are asked not to lick the walls!",
              "The hotel has a restaurant, a spa and thirty bedrooms. {4} Many guests come to see the amazing views of the salt flat at sunset.",
              "During the rainy season, a thin layer of water covers the salt. {5} It creates a perfect reflection of the sky, making it look like you're walking on clouds.",
            ],
            sentences: [
              "The hotel is very cheap.",
              "It's one of the most unusual places to stay in the world.",
              "It's very popular with photographers.",
              "Nobody visits the hotel in winter.",
              "It was once a lake, but the water dried up thousands of years ago.",
              "The salt flat is in the middle of a city.",
              "Workers cut the blocks from the salt flat around the hotel.",
              "This turns the whole area into a giant mirror.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
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
              "Penguins are birds, but they can't fly. Instead, they are amazing swimmers. Some kinds can swim at up to thirty-five kilometres an hour and {1} to depths of more than 500 metres.",
              "Most penguins live in the Southern Hemisphere. The Emperor penguin, the {2} of all, lives in Antarctica, where temperatures can fall below minus fifty degrees.",
              "To survive the cold, Emperor penguins stand close together in large groups. They take turns standing in the middle, where it's {3}. Penguins have a thick layer of fat and feathers that keep them warm. Their black and white colouring also helps protect them from {4}. From above, their black backs blend in with the dark water, and from below, their white fronts blend in with the bright sky. Sadly, climate change is a serious {5} to penguins because it is melting the ice where they live. Scientists are working hard to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "fall",
                  "drop up",
                  "dive",
                  "sink up",
                ],
                answer: 2,
              },
              {
                options: [
                  "largest",
                  "larger",
                  "large",
                  "largely",
                ],
                answer: 0,
              },
              {
                options: [
                  "warm",
                  "warmer",
                  "warmly",
                  "warmest",
                ],
                answer: 3,
              },
              {
                options: [
                  "friends",
                  "enemies",
                  "enemy up",
                  "foes up",
                ],
                answer: 1,
              },
              {
                options: [
                  "threat",
                  "threaten",
                  "threatening",
                  "dangerous",
                ],
                answer: 0,
              },
              {
                options: [
                  "save up",
                  "keep up",
                  "protect",
                  "guard up",
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
            title: "My best friend",
            text: [
              "My best friend is called Ali. We've known each other {1} we were five years old, when we started primary school together.",
              "Ali is very funny and always makes me laugh, even when I'm feeling sad. He's also very loyal. When I broke my leg last year, he visited me every day and brought me my homework.",
              "We have a lot in common. We both love football and play {2} the same team. We also enjoy playing video games and watching action films. But we're also quite different. Ali is very confident and loves talking to new people, {3} I'm quite shy. I think that's why we get on so well. He helps me to be more outgoing, and I help him to be more patient. I hope we'll stay friends {4} the rest of our lives. Everyone needs a friend {5} Ali. I'm very lucky to have {6}.",
            ],
            answers: [
              [
                "since",
              ],
              [
                "for",
                "in",
              ],
              [
                "while",
                "but",
                "whereas",
              ],
              [
                "for",
              ],
              [
                "like",
              ],
              [
                "him",
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
              subject: "A new student",
              lines: [
                "There's a new student in our class from another country. [Interesting!]",
                "How can we help her feel welcome? [Give ideas]",
                "What was it like when you started at a new school? [Tell Jo]",
                "Should we invite her to the cinema with us? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nThat's really interesting! Where is she from? It must be difficult for her to start at a new school in a new country.\n\nI think we should introduce her to our friends and sit with her at lunch. We could also show her around the school and explain how everything works. If she doesn't speak much English, we should speak slowly and clearly.\n\nWhen I started at a new school two years ago, I felt very lonely at first. I didn't know anyone, and I was too shy to talk to people.\n\nYes, I think we should invite her to the cinema! It would be a great way to get to know her.\n\nSee you soon,\nYağmur",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A book everyone should read",
              lines: [
                "Which book would you recommend?",
                "What is it about?",
                "Why should everyone read it?",
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
            sample: "A book that changed me\n\nThe book I'd recommend to everyone is 'Wonder' by R.J. Palacio. It's about a boy called Auggie who was born with a face that looks different from other people's. When he starts going to school for the first time, he has to deal with people's reactions.\n\nThe story is told by Auggie and several other characters, so you see things from different points of view. It's funny, sad and very moving.\n\nEveryone should read it because it teaches us to be kind and not to judge people by how they look. After reading it, I tried to be more thoughtful towards others.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Mia had always been afraid of the dark.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Mia had always been afraid of the dark. So when the power went off during a storm, she froze.\n\nShe was alone at home because her parents had gone to the shops. The wind was howling outside, and the house was completely dark. Mia found a torch in the kitchen drawer, but the batteries were dead.\n\nThen she remembered the candles her mum kept for emergencies. She found them, and with shaking hands, she lit one. The soft light filled the room, and Mia began to feel calmer.\n\nWhen her parents came home, they found her reading a book by candlelight. She wasn't afraid any more.",
          },
        },
      ],
    },
  ],
};
