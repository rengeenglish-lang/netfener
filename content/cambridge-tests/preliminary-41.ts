import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 41 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_41: CambridgeTest = {
  id: "preliminary-41",
  level: "preliminary",
  no: 41,
  title: "B1 Preliminary · Practice Test 41",
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
                    "Parents' evening has been moved from Tuesday to Thursday because of the school concert.",
                  ],
                },
                question: "Why has parents' evening been moved?",
                options: [
                  "There is another event on Tuesday.",
                  "Teachers are busy on Thursday.",
                  "The school is closed on Tuesday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've bought the cinema tickets. You can pay me back tomorrow. See you at 7! Ella",
                  ],
                },
                question: "What has Ella done?",
                options: [
                  "cancelled the plan",
                  "changed the time",
                  "paid for the tickets",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Avoid contact with eyes.",
                    "Wash hands after use.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Put it in your eyes.",
                  "Don't wash your hands.",
                  "Be careful not to get it in your eyes.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I'm selling my old bike. It's in good condition. Do you know anyone who might want it? Sam",
                  ],
                },
                question: "Why has Sam written this email?",
                options: [
                  "to find a buyer for his bike",
                  "to borrow a bike",
                  "to repair his bike",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Picnics are welcome, but please take your rubbish home.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Picnics are not allowed.",
                  "People should not leave rubbish.",
                  "There are bins everywhere.",
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
            instruction: "The young people below all want to join a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Astronomy Club",
                text: "Look at stars through telescopes on clear nights. Meets monthly.",
              },
              {
                title: "Board Games Club",
                text: "Play strategy games every Friday afternoon.",
              },
              {
                title: "Environmental Club",
                text: "Organise recycling and plant trees around the school.",
              },
              {
                title: "Film Club",
                text: "Watch and discuss films every Wednesday.",
              },
              {
                title: "Knitting Club",
                text: "Learn to knit scarves and hats. Beginners welcome.",
              },
              {
                title: "Debate Club",
                text: "Discuss important topics and take part in competitions.",
              },
              {
                title: "Photography Club",
                text: "Learn to take great photos and enter competitions.",
              },
              {
                title: "Running Club",
                text: "Run together three times a week to get fit.",
              },
            ],
            items: [
              {
                text: "Emre loves looking at the night sky.",
                answer: 0,
              },
              {
                text: "Asya wants to protect the environment.",
                answer: 2,
              },
              {
                text: "Burak wants to improve his fitness.",
                answer: 7,
              },
              {
                text: "Lale loves arguing about ideas and wants to compete.",
                answer: 5,
              },
              {
                text: "Kerem wants to make warm clothes for winter.",
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
              title: "How I overcame my fear",
              paragraphs: [
                "For as long as I can remember, I've been afraid of water. When I was little, I fell into a swimming pool, and I nearly drowned. After that, I refused to go near water.",
                "This meant I missed out on a lot of things. When my friends went to the beach, I stayed at home. On school trips to the pool, I sat on the side and watched.",
                "Last year, when I was fifteen, I decided enough was enough. I found a swimming teacher who specialised in helping people with a fear of water. In the first lesson, I just sat with my feet in the water. It took three months before I could put my face in.",
                "Now, a year later, I can swim fifty metres. Last summer, I swam in the sea for the first time. I was nervous, but it felt amazing. I've learned that you can overcome any fear if you take small steps.",
              ],
            },
            items: [
              {
                question: "Why was the writer afraid of water?",
                options: [
                  "She couldn't swim.",
                  "Her parents were afraid.",
                  "She saw a shark.",
                  "She had a bad experience as a child.",
                ],
                answer: 3,
              },
              {
                question: "What did the writer miss because of her fear?",
                options: [
                  "school",
                  "trips to the beach",
                  "birthday parties",
                  "holidays",
                ],
                answer: 1,
              },
              {
                question: "What did the writer do in the first lesson?",
                options: [
                  "swam a length",
                  "put her face in the water",
                  "jumped in",
                  "put her feet in the water",
                ],
                answer: 3,
              },
              {
                question: "How long did it take before she could put her face in the water?",
                options: [
                  "three months",
                  "one week",
                  "one year",
                  "one day",
                ],
                answer: 0,
              },
              {
                question: "What has the writer learned?",
                options: [
                  "Swimming is dangerous.",
                  "You should avoid what you fear.",
                  "You can overcome fear slowly.",
                  "Fear never goes away.",
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
            title: "A festival of kites",
            text: [
              "Every January, the city of Ahmedabad in India holds a huge kite festival. {1} Millions of people take part.",
              "The festival celebrates the end of winter and the beginning of spring. {2} People of all ages fly kites from their rooftops.",
              "The kites come in all shapes and sizes. {3} Some are shaped like birds, dragons or even aeroplanes.",
              "One of the most exciting parts of the festival is kite fighting. {4} The aim is to cut the strings of other people's kites.",
              "At night, people fly kites with small lights attached to them. {5} It's a spectacular sight.",
            ],
            sentences: [
              "Some are tiny, while others are several metres wide.",
              "Kites are not allowed in the city.",
              "It's one of the biggest kite festivals in the world.",
              "The sky looks like it's full of floating stars.",
              "Only children can fly kites.",
              "For two days, the sky is filled with thousands of colourful kites.",
              "The festival takes place in summer.",
              "Kite flyers use special strings covered in glass.",
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
              "Sharks have lived in the oceans for more than 400 million years. There are more than 500 {1} of shark.",
              "The biggest is the whale shark, which can grow to eighteen metres long. Despite its size, it's {2} to humans and eats only tiny plankton.",
              "Sharks have excellent senses. They can smell a drop of blood from hundreds of metres away and can feel the {3} of fish in the water. Many people are afraid of sharks because of films, but shark attacks are very {4}. In fact, humans kill about 100 million sharks every year. This is a big problem, because sharks are important for keeping the ocean {5}. Many countries have now made laws to protect sharks. We should all learn to respect these {6} animals.",
            ],
            gaps: [
              {
                options: [
                  "specie",
                  "special",
                  "species",
                  "specially",
                ],
                answer: 2,
              },
              {
                options: [
                  "harm",
                  "harmless",
                  "harmful",
                  "harming",
                ],
                answer: 1,
              },
              {
                options: [
                  "move",
                  "moving",
                  "moved",
                  "movements",
                ],
                answer: 3,
              },
              {
                options: [
                  "rarely",
                  "rare",
                  "rarity",
                  "rareness",
                ],
                answer: 1,
              },
              {
                options: [
                  "health",
                  "healthily",
                  "healthier",
                  "healthy",
                ],
                answer: 3,
              },
              {
                options: [
                  "amazing",
                  "amaze",
                  "amazed",
                  "amazement",
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
            title: "A school exchange",
            text: [
              "Last spring, I went on a school exchange to France. I stayed {1} a French family for two weeks and went to school with their daughter, Camille.",
              "At first, I was nervous because my French wasn't very good. But Camille's family was very welcoming. They spoke slowly and helped me {2} I didn't understand something.",
              "The school day in France was very different {3} mine. Lessons started at eight and finished at five! But lunch was amazing. We had a three-course meal every day. At the weekends, Camille's family took me {4} trips. We visited Paris and saw the Eiffel Tower. My French improved a lot during the two weeks. Now Camille and I are good friends, and she's coming to stay with my family {5} summer. I can't wait {6} show her my town!",
            ],
            answers: [
              [
                "with",
              ],
              [
                "when",
                "if",
              ],
              [
                "from",
              ],
              [
                "on",
              ],
              [
                "this",
                "next",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "Your weekend",
              lines: [
                "What did you do last weekend? [Tell Kim]",
                "Did you have a good time? [Explain why/why not]",
                "What are you doing next weekend? [Tell Kim]",
                "Would you like to meet up? [Suggest a plan]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nLast weekend, I went to my cousin's birthday party on Saturday. On Sunday, I stayed at home and finished a big school project.\n\nI had a really good time at the party! There was a DJ, and we danced all evening. My cousin's mum made an amazing chocolate cake. Sunday was less fun, because I had to work hard, but I was happy when I finished my project.\n\nNext weekend, I'm going to visit my grandparents on Saturday. But I'm free on Sunday.\n\nWould you like to meet up on Sunday afternoon? We could go to the park or see a film.\n\nBye,\nAsya",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Should we have more holidays?",
              lines: [
                "Do you think students should have more holidays?",
                "What are the advantages?",
                "Are there any disadvantages?",
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
            sample: "More holidays? Yes, please!\n\nMany students would love to have more holidays, and I think there are some good reasons for this. Holidays give us time to relax, spend time with our families and do hobbies we don't have time for during term.\n\nMore holidays could also help students' mental health. Many teenagers feel stressed because of exams and homework, so a break would help them feel better.\n\nHowever, there are some disadvantages. If we had more holidays, we might have to study more during the term, which could be even more stressful. Also, parents who work might find it difficult to look after their children. I think short breaks more often would be the best solution.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The bus was almost empty when Lily got on.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The bus was almost empty when Lily got on. There was only one other passenger, an old man sitting at the back, reading a newspaper.\n\nLily sat down and looked out of the window. When the bus stopped, the old man got off quickly. Lily noticed that he had left something on his seat. It was a small brown wallet.\n\nShe picked it up and jumped off the bus just before the doors closed. She ran after the old man and gave him the wallet. He was very grateful. 'My wife's photo is in here,' he said. 'Thank you so much.'\n\nLily felt warm inside. She was glad she had helped.",
          },
        },
      ],
    },
  ],
};
