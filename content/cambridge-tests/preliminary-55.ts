import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 55 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_55: CambridgeTest = {
  id: "preliminary-55",
  level: "preliminary",
  no: 55,
  title: "B1 Preliminary · Practice Test 55",
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
                    "The sports hall will be closed for repairs until next Monday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't use the sports hall until Monday.",
                  "The sports hall is new.",
                  "The sports hall is open.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've lost my history notes. Can I borrow yours to copy? I'll give them back tomorrow. Grace",
                  ],
                },
                question: "What does Grace want?",
                options: [
                  "to buy notes",
                  "to borrow Lucy's notes",
                  "to help Lucy",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep out of direct sunlight.",
                    "Water once a week.",
                  ],
                },
                question: "What is this label for?",
                options: [
                  "a plant",
                  "a drink",
                  "a medicine",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "The cinema is showing the new superhero film on Saturday. Shall we go? Ben",
                  ],
                },
                question: "What does Ben suggest?",
                options: [
                  "staying at home",
                  "going on Sunday",
                  "going to see a film",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAMPSITE",
                    "Please don't make noise after 11 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The campsite closes at 11.",
                  "Music is allowed all night.",
                  "Campers should be quiet late at night.",
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
            instruction: "The young people below all want to buy a present for a friend. Read the descriptions of eight presents. Decide which present would be the most suitable for each person.",
            options: [
              {
                title: "Book Voucher",
                text: "Can be used in any bookshop.",
              },
              {
                title: "Concert Tickets",
                text: "Two tickets to see a popular band.",
              },
              {
                title: "Cooking Class",
                text: "A day learning to cook with a chef.",
              },
              {
                title: "Plant",
                text: "A beautiful indoor plant in a pot.",
              },
              {
                title: "Video Game",
                text: "The latest adventure game.",
              },
              {
                title: "Sports Bag",
                text: "A large bag for gym or sports kit.",
              },
              {
                title: "Art Set",
                text: "Paints, brushes and paper.",
              },
              {
                title: "Cinema Vouchers",
                text: "Free tickets for any film.",
              },
            ],
            items: [
              {
                text: "Mert's friend loves reading but has lots of books already.",
                answer: 0,
              },
              {
                text: "Ece's friend loves music and going to concerts.",
                answer: 1,
              },
              {
                text: "Kaan's friend wants to learn to cook.",
                answer: 2,
              },
              {
                text: "Zeynep's friend loves painting.",
                answer: 6,
              },
              {
                text: "Burak's friend plays lots of sports.",
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
              title: "Living abroad",
              paragraphs: [
                "When I was fifteen, my family moved to Spain because of my dad's job. I didn't speak any Spanish, and I was very worried about going to a new school.",
                "The first few months were very hard. I couldn't understand my teachers, and I didn't have any friends. I spent most lunchtimes alone.",
                "Then I joined the school basketball team. I'm good at basketball, and the other players were very friendly. They helped me with my Spanish, and I started to make friends.",
                "Now, two years later, I speak Spanish fluently, and I love living in Spain. I've learned so much about a different culture. I've also become more independent and confident. Moving abroad was the best thing that ever happened to me.",
              ],
            },
            items: [
              {
                question: "Why did the family move to Spain?",
                options: [
                  "for a holiday",
                  "to study",
                  "because of a job",
                  "to be near family",
                ],
                answer: 2,
              },
              {
                question: "What was hard at first?",
                options: [
                  "finding a house",
                  "understanding the teachers",
                  "making food",
                  "the weather",
                ],
                answer: 1,
              },
              {
                question: "What helped the writer?",
                options: [
                  "having extra lessons",
                  "watching TV",
                  "her parents",
                  "joining a sports team",
                ],
                answer: 3,
              },
              {
                question: "How has the writer changed?",
                options: [
                  "She is more shy.",
                  "She is more confident.",
                  "She wants to go home.",
                  "She hasn't changed.",
                ],
                answer: 1,
              },
              {
                question: "How does the writer feel about moving abroad?",
                options: [
                  "It was a mistake.",
                  "She doesn't like Spain.",
                  "She is still unhappy.",
                  "It was the best thing that happened to her.",
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
            title: "A city under the ground",
            text: [
              "In Turkey, there's an ancient city that was built entirely underground. {1} It's called Derinkuyu.",
              "The city was built more than 2,000 years ago. {2} It has eighteen levels and goes down about eighty-five metres.",
              "Thousands of people could live in the city at the same time. {3} There were homes, kitchens, schools and even places for animals.",
              "People built the city to protect themselves from enemies. {4} Huge stone doors could be closed to keep attackers out.",
              "The city was rediscovered in 1963 by a man who was repairing his house. {5} Today, it's a popular tourist attraction.",
            ],
            sentences: [
              "He found a secret tunnel behind one of the walls.",
              "Nobody knows exactly who built it.",
              "The city was built last century.",
              "It's one of the largest underground cities in the world.",
              "When they were in danger, they could hide there for months.",
              "Nobody can visit the city.",
              "It also had wells for water and air shafts.",
              "The city is on top of a mountain.",
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
            title: "Volcanoes",
            text: [
              "A volcano is an opening in the Earth's surface where hot liquid rock, called lava, can {1} from below.",
              "There are about 1,500 active volcanoes in the world. Many of them are around the edges of the Pacific Ocean, in an area called the 'Ring of Fire'.",
              "When a volcano {2}, it can be very dangerous. Lava, ash and gas can destroy towns and villages. In AD 79, the Italian volcano Vesuvius erupted and buried the city of Pompeii. However, volcanoes also have {3}. The soil near volcanoes is very rich, which is good for farming. Volcanoes also create new land. Hawaii and Iceland were {4} by volcanoes. In some countries, the heat from volcanoes is used to produce {5}. Scientists study volcanoes carefully to {6} when they might erupt.",
            ],
            gaps: [
              {
                options: [
                  "escaping",
                  "escape",
                  "escaped",
                  "escapes up",
                ],
                answer: 1,
              },
              {
                options: [
                  "erupts",
                  "eruption",
                  "erupting",
                  "erupted",
                ],
                answer: 0,
              },
              {
                options: [
                  "beneficial",
                  "benefited",
                  "benefits",
                  "benefiting",
                ],
                answer: 2,
              },
              {
                options: [
                  "form",
                  "formed",
                  "forming",
                  "formation",
                ],
                answer: 1,
              },
              {
                options: [
                  "electric",
                  "electrical",
                  "electrician",
                  "electricity",
                ],
                answer: 3,
              },
              {
                options: [
                  "prediction",
                  "predict",
                  "predictable",
                  "predicted",
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
            title: "A wonderful weekend",
            text: [
              "Last weekend, my best friend and I went camping {1} the first time. We camped next to a lake in the mountains.",
              "On Saturday, we set up our tent and went swimming in the lake. The water was very cold, {2} we didn't stay in for long! In the afternoon, we went hiking and saw a family of deer.",
              "In the evening, we made a fire and cooked sausages. Then we sat {3} the fire and looked at the stars. There were thousands of them! We could even see the Milky Way. We didn't sleep much because we were {4} excited. On Sunday morning, we watched the sunrise over the lake. It was beautiful. Then we packed up our tent and walked back {5} the car. It was one of the best weekends I've ever had. We're going {6} go camping again next month.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "so",
              ],
              [
                "by",
                "around",
                "near",
              ],
              [
                "so",
                "too",
              ],
              [
                "to",
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
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "A trip to the mountains",
              lines: [
                "My family is going to the mountains next month. Would you like to come? [Answer]",
                "What do you like doing in the mountains? [Tell Pat]",
                "What should I bring? [Ask]",
                "How will we get there? [Ask]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nThank you so much for inviting me! I'd love to come to the mountains with your family. I'll ask my parents tonight, but I'm sure they'll say yes.\n\nI love hiking in the mountains and looking at the beautiful views. I also enjoy swimming in lakes and taking photos of nature. If there's snow, I'd love to try skiing!\n\nWhat should I bring? Do I need special walking boots? Should I bring a warm jacket, or will it be hot?\n\nAlso, how will we get there? Will we go by car or by train? How long does the journey take?\n\nThanks again,\nMert",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Why I love music",
              lines: [
                "What kind of music do you like?",
                "Why is music important to you?",
                "Do you play an instrument?",
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
            sample: "Music is my life\n\nI love all kinds of music, but my favourite is rock. I love the energy of rock music and the sound of electric guitars. I also enjoy listening to classical music when I'm studying, because it helps me concentrate.\n\nMusic is very important to me. When I'm happy, I listen to upbeat songs and dance around my room. When I'm sad, music helps me feel better. It can change my mood completely.\n\nI play the guitar and the piano. I started learning the guitar when I was ten, and now I'm in a band with my friends. Playing music is my favourite thing to do. I can't imagine my life without it.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The ship was sinking, and there was no time to lose.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The ship was sinking, and there was no time to lose. Captain Sarah ordered everyone to get into the lifeboats.\n\nThe storm was terrible. Huge waves crashed over the ship, and the wind was howling. Sarah helped the passengers into the lifeboats one by one. Some of them were crying with fear.\n\nWhen everyone was safe, Sarah got into the last lifeboat. They watched as the ship disappeared under the waves. For hours, they waited in the dark, cold sea.\n\nAt sunrise, a rescue helicopter found them. Everyone was saved. The passengers thanked Sarah. 'You're a hero,' they said. Sarah smiled. She had only done her job.",
          },
        },
      ],
    },
  ],
};
