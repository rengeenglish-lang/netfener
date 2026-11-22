import type { CambridgeTest } from "./types";

/** A2 Key practice test 7 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_7: CambridgeTest = {
  id: "key-7",
  level: "key",
  no: 7,
  title: "A2 Key · Practice Test 7",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
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
                    "TRAIN STATION",
                    "Platform 3 is closed today.",
                    "Trains to London will leave from Platform 5.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "London trains are using a different platform today.",
                  "There are no trains to London today.",
                  "Platform 5 is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Mum, I forgot my PE kit! Can you bring it to school before 11? It's on my bed. Thanks! Ella",
                  ],
                },
                question: "Why has Ella sent this message?",
                options: [
                  "She wants to go home early.",
                  "She needs her mother to bring something.",
                  "She can't find her PE kit.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PARK",
                    "Dogs must be kept on a lead near the children's playground.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Dogs can't run freely in one part of the park.",
                  "Dogs aren't allowed in the park.",
                  "Children mustn't play with dogs.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "I've got two tickets for the basketball game on Friday, but my brother can't come now. Do you want his ticket? It's free! Sam",
                  ],
                },
                question: "What is Sam offering Ben?",
                options: [
                  "the chance to play in a basketball team",
                  "a ticket for his brother",
                  "a ticket he doesn't need to pay for",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free Wi-Fi for customers.",
                    "Ask at the counter for the password.",
                  ],
                },
                question: "What should you do to use the internet?",
                options: [
                  "Buy a special ticket.",
                  "Bring your own computer.",
                  "Get the password from a member of staff.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "ROOM TO RENT",
                    "Large room in friendly family house. Near the university. Students only. £400 a month.",
                  ],
                },
                question: "Who can rent the room?",
                options: [
                  "someone studying",
                  "a family",
                  "anyone who works nearby",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Anna",
                text: "I volunteer at an animal shelter every Saturday. I clean the cages, feed the cats and take the dogs for walks. It's hard work, but I love it. Some of the animals have been there for months. When one of them finds a new home, I feel so happy.",
              },
              {
                title: "David",
                text: "I play chess. I started when I was eight, when my dad taught me. Now I'm in the school chess team and we play against other schools. Last month, I came third in a national competition for under-fifteens. I practise online for an hour every evening.",
              },
              {
                title: "Rosa",
                text: "I love taking photos of nature, especially birds. I bought my first camera with money from my summer job. I often go to the lake near my town early in the morning, when it's quiet. A magazine printed one of my photos last year.",
              },
            ],
            items: [
              {
                text: "does their hobby at the same time each week?",
                answer: 0,
              },
              {
                text: "used money they earned?",
                answer: 2,
              },
              {
                text: "has been successful in a competition?",
                answer: 1,
              },
              {
                text: "plays against people in other places?",
                answer: 1,
              },
              {
                text: "had their work published?",
                answer: 2,
              },
              {
                text: "feels good when something happens to an animal?",
                answer: 0,
              },
              {
                text: "prefers a time when there aren't many people around?",
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "The girl who builds robots",
              paragraphs: [
                "When Priya Shah was ten, she found an old radio in her grandfather's garage. 'I took it apart to see how it worked,' she says. 'I couldn't put it back together, but I was hooked!'",
                "Now fifteen, Priya builds robots in her bedroom. Her latest robot can sort rubbish into paper, plastic and glass. 'I got the idea when I saw how much rubbish my family throws away,' she explains.",
                "Priya learns most things from videos and books, but she also goes to a robot club at a local university once a month. 'The students there are really helpful,' she says. 'They answer all my questions.'",
                "Last year, Priya's robot won a prize at a national science competition. She used the prize money to buy better parts. 'One day, I'd like to design robots that help old people at home,' she says.",
              ],
            },
            items: [
              {
                question: "What happened when Priya took the radio apart?",
                options: [
                  "She repaired it for her grandfather.",
                  "She broke something important.",
                  "She became very interested in machines.",
                ],
                answer: 2,
              },
              {
                question: "Why did Priya build the rubbish robot?",
                options: [
                  "She noticed how much her family threw away.",
                  "Her teacher asked her to.",
                  "She wanted to win a prize.",
                ],
                answer: 0,
              },
              {
                question: "How does Priya learn about robots?",
                options: [
                  "only at school",
                  "mainly by herself",
                  "from her grandfather",
                ],
                answer: 1,
              },
              {
                question: "What did Priya do with the prize money?",
                options: [
                  "She bought things for her robots.",
                  "She gave it to the robot club.",
                  "She saved it for university.",
                ],
                answer: 0,
              },
              {
                question: "What would Priya like to do in the future?",
                options: [
                  "teach at a university",
                  "work at a recycling centre",
                  "help older people",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Ice hotels",
            text: [
              "Every winter, in the north of Sweden, workers build a hotel that is made {1} of ice and snow. It takes about six weeks to build, and it {2} until the spring.",
              "Inside, everything is made of ice: the walls, the beds and even the glasses. The temperature is always about minus five degrees, so guests sleep in special warm sleeping bags on {3} skins.",
              "Every year, artists from around the world {4} the hotel's rooms. Each room has a different design. In April, when the weather gets warmer, the hotel slowly melts and the ice {5} to the river. Then, the next winter, the workers {6} again.",
            ],
            gaps: [
              {
                options: [
                  "totally",
                  "fully",
                  "completely",
                ],
                answer: 2,
              },
              {
                options: [
                  "stays",
                  "keeps",
                  "lasts",
                ],
                answer: 2,
              },
              {
                options: [
                  "animal",
                  "beast",
                  "creature",
                ],
                answer: 0,
              },
              {
                options: [
                  "plan",
                  "design",
                  "draw",
                ],
                answer: 1,
              },
              {
                options: [
                  "returns",
                  "goes back",
                  "comes",
                ],
                answer: 0,
              },
              {
                options: [
                  "begin",
                  "open",
                  "start",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A note",
            text: [
              "Dear Max,",
              "I'm going to be late home today {1} I have a meeting after work. There's some pasta {2} the fridge for your dinner. You only need to heat it {3} for three minutes in the microwave.",
              "Please don't forget to feed the cat and take {4} the rubbish. Your dad will be home at about six. If you need anything, call me {5} my mobile.",
              "See you later. Have a good day {6} school!",
              "Mum",
            ],
            answers: [
              [
                "because",
                "as",
                "since",
              ],
              [
                "in",
              ],
              [
                "up",
              ],
              [
                "out",
              ],
              [
                "on",
              ],
              [
                "at",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You went to a concert last weekend. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say who you went with.",
              "Say what the music was like.",
              "Say what you did after the concert.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nLast Saturday, I went to a concert with my cousin. The band played rock music and it was very loud but great! After the concert, we went to a café and had pizza.\n\nBye for now,\nDeniz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🚌🎒",
                label: "1",
              },
              {
                e: "🚌👋🎒😮",
                label: "2",
              },
              {
                e: "🧑🎒🏃👩",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Kate got off the bus to go to work. When the bus left, she realised she didn't have her bag. She was very worried because her phone and money were in it. Then a young man ran towards her with her bag. He had seen it on the seat and got off at the next stop to bring it back to her. Kate thanked him.",
          },
        },
      ],
    },
  ],
};
