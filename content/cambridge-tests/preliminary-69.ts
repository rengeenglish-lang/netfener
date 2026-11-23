import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 69 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_69: CambridgeTest = {
  id: "preliminary-69",
  level: "preliminary",
  no: 69,
  title: "B1 Preliminary · Practice Test 69",
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
                    "Students who need help with their homework can come to the library after school on Tuesdays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed on Tuesdays.",
                  "Students can get homework help on Tuesdays.",
                  "There's no homework on Tuesdays.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, the cinema is full tonight. Shall we go tomorrow instead? Lucy",
                  ],
                },
                question: "What does Lucy suggest?",
                options: [
                  "going to a different cinema",
                  "staying at home",
                  "going another day",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep in a cool, dry place.",
                  ],
                },
                question: "Where should you keep this?",
                options: [
                  "somewhere cool and dry",
                  "in the sun",
                  "in water",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "Don't forget to bring your passport for the trip. We'll check it at the airport. Mr Hill",
                  ],
                },
                question: "What should Tom bring?",
                options: [
                  "his tickets",
                  "his passport",
                  "money",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "We are closed on Mondays.",
                  ],
                },
                question: "When is the café closed?",
                options: [
                  "on Mondays",
                  "every day",
                  "at weekends",
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
            instruction: "The young people below all want to watch a TV programme. Read the descriptions of eight programmes. Decide which programme would be the most suitable for each person.",
            options: [
              {
                title: "Animal Planet",
                text: "Documentaries about wild animals.",
              },
              {
                title: "Cooking Show",
                text: "Professional chefs cook amazing dishes.",
              },
              {
                title: "Comedy Night",
                text: "Funny sketches and jokes.",
              },
              {
                title: "Science Hour",
                text: "Experiments and discoveries.",
              },
              {
                title: "Sports News",
                text: "The latest sports results and news.",
              },
              {
                title: "Music Live",
                text: "Live concerts by famous bands.",
              },
              {
                title: "History Detectives",
                text: "Mysteries from the past.",
              },
              {
                title: "Travel Guide",
                text: "Visiting amazing places around the world.",
              },
            ],
            items: [
              {
                text: "Elif wants to see live music.",
                answer: 5,
              },
              {
                text: "Can loves history.",
                answer: 6,
              },
              {
                text: "Zeynep wants to travel the world.",
                answer: 7,
              },
              {
                text: "Mert wants to know the football results.",
                answer: 4,
              },
              {
                text: "Asya wants to learn to cook.",
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
              title: "My first trip alone",
              paragraphs: [
                "When I was eighteen, I travelled alone for the first time. I went to London to visit my cousin, who was studying there.",
                "Before I left, I was very nervous. I'd never been on a plane alone before. My parents gave me lots of advice, and I checked my tickets many times.",
                "The flight was easy, but when I arrived in London, I got lost on the underground. I took the wrong train and ended up in the wrong part of the city! A kind woman helped me find the right train.",
                "When I finally arrived at my cousin's flat, I was very tired but happy. We spent a week visiting museums, shopping and eating in restaurants. The trip made me more confident and independent. Now I'm planning my next adventure.",
              ],
            },
            items: [
              {
                question: "Why did the writer go to London?",
                options: [
                  "to study",
                  "to visit her cousin",
                  "to work",
                  "for a holiday with friends",
                ],
                answer: 1,
              },
              {
                question: "How did the writer feel before leaving?",
                options: [
                  "nervous",
                  "excited",
                  "bored",
                  "calm",
                ],
                answer: 0,
              },
              {
                question: "What problem did the writer have?",
                options: [
                  "She missed her flight.",
                  "She lost her bag.",
                  "She got lost.",
                  "She was ill.",
                ],
                answer: 2,
              },
              {
                question: "Who helped the writer?",
                options: [
                  "her cousin",
                  "a kind woman",
                  "a police officer",
                  "her parents",
                ],
                answer: 1,
              },
              {
                question: "How has the trip changed the writer?",
                options: [
                  "She wants to stay at home.",
                  "She is more nervous.",
                  "She hasn't changed.",
                  "She is more confident.",
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
            title: "A train through the desert",
            text: [
              "In Australia, there's a train that travels across the desert from one side of the country to the other. {1} It's called the Indian Pacific.",
              "The journey is more than 4,000 kilometres long. {2} It takes about four days to complete.",
              "The train passes through some of the most remote parts of Australia. {3} Passengers can see kangaroos and emus from the windows.",
              "The train has comfortable cabins and a restaurant. {4} Passengers can relax and enjoy the views.",
              "The Indian Pacific is one of the world's great train journeys. {5} Many people say it's the best way to see Australia.",
            ],
            sentences: [
              "There are no towns for hundreds of kilometres.",
              "The journey is very short.",
              "It connects the Indian Ocean with the Pacific Ocean.",
              "It's very popular with tourists.",
              "Nobody uses the train.",
              "It's one of the longest train journeys in the world.",
              "The train is very fast.",
              "Meals are cooked fresh every day.",
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
            title: "Kangaroos",
            text: [
              "Kangaroos are found only in Australia. They are famous for their strong back legs, which they use for {1}.",
              "Kangaroos can jump up to nine metres in one jump and can travel at speeds of up to seventy kilometres an hour. They use their long tails for {2}.",
              "Female kangaroos have a pouch on their stomachs. When a baby kangaroo, called a joey, is born, it's very small, about the size of a bean. It {3} into its mother's pouch and stays there for about six months. Kangaroos live in groups called mobs. They eat grass and leaves. Kangaroos are a {4} symbol of Australia. They appear on the country's coat of arms and on some coins. There are more than fifty million kangaroos in Australia, which is more than the number of people! Unfortunately, kangaroos can be a {5} on the roads, especially at night. Drivers need to be very {6}.",
            ],
            gaps: [
              {
                options: [
                  "jumping",
                  "jump",
                  "jumped",
                  "jumper",
                ],
                answer: 0,
              },
              {
                options: [
                  "balancing",
                  "balanced",
                  "balances",
                  "balance",
                ],
                answer: 3,
              },
              {
                options: [
                  "climb",
                  "climbs",
                  "climbing",
                  "climbed",
                ],
                answer: 1,
              },
              {
                options: [
                  "national",
                  "nation",
                  "nationally",
                  "nationality",
                ],
                answer: 0,
              },
              {
                options: [
                  "dangerous",
                  "dangerously",
                  "danger",
                  "endanger",
                ],
                answer: 2,
              },
              {
                options: [
                  "care",
                  "careful",
                  "carefully",
                  "careless",
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
            title: "My grandmother",
            text: [
              "My grandmother is the most amazing person I know. She's eighty-five years old, but she's still very active {1} healthy.",
              "She grew up in a small village in the mountains. Her family was very poor, and she had to work on the farm {2} she was a child. She didn't go to school, but she taught herself to read and write.",
              "When she was twenty, she moved to the city and opened a small shop. She worked very hard, and her shop became very successful. Now she has three shops! My grandmother is also very kind. She helps her neighbours and gives money {3} charity. Every Sunday, she cooks a big lunch for the whole family. Her food is delicious! She has taught me many things, like how to cook and how to be patient. She always says that if you work hard, you can achieve anything. I hope I'll be {4} strong and kind as her when I'm older. I love her {5} much. She's my hero, and I'm very proud {6} her.",
            ],
            answers: [
              [
                "and",
              ],
              [
                "when",
              ],
              [
                "to",
              ],
              [
                "as",
              ],
              [
                "very",
                "so",
              ],
              [
                "of",
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
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "Your best friend",
              lines: [
                "Tell me about your best friend. [Describe them]",
                "How did you meet? [Tell Robin]",
                "What do you do together? [Explain]",
                "Why are they your best friend? [Give reasons]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nMy best friend is called Elif. She's tall with long dark hair and brown eyes. She's very funny and always makes me laugh.\n\nWe met when we were six years old, on our first day at primary school. We sat next to each other, and we've been best friends ever since.\n\nWe do lots of things together. We go to the cinema, play tennis and go shopping. We also study together for exams. At the weekends, we often have sleepovers at each other's houses.\n\nShe's my best friend because she's always there for me. She listens to my problems and gives me good advice. I can trust her completely.\n\nBye,\nNil",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! How to be happy",
              lines: [
                "What makes you happy?",
                "What advice would you give to someone who feels sad?",
                "Is happiness important?",
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
            sample: "Finding happiness\n\nMany things make me happy. Spending time with my family and friends is the most important. I also feel happy when I'm doing sport, listening to music or reading a good book.\n\nIf someone feels sad, I would advise them to talk to someone they trust. It's important not to keep your feelings inside. I would also suggest going for a walk outside, because nature can help you feel better. Doing something kind for someone else can also make you feel happier.\n\nI think happiness is very important. When we're happy, we're healthier and we have better relationships. Life is short, so we should try to enjoy every moment.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The museum was closing, and everyone had left except Tom.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The museum was closing, and everyone had left except Tom. He had been so interested in the dinosaur exhibition that he hadn't noticed the time.\n\nWhen he finally looked up, the lights were going off one by one. He ran to the main door, but it was locked. Tom felt scared. The big dinosaur skeletons looked frightening in the dark.\n\nThen he heard footsteps. A security guard appeared with a torch. 'What are you doing here?' he asked. Tom explained what had happened.\n\nThe guard laughed and unlocked the door. 'Don't worry,' he said. 'It happens all the time!' Tom thanked him and went home.",
          },
        },
      ],
    },
  ],
};
