import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 53 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_53: CambridgeTest = {
  id: "preliminary-53",
  level: "preliminary",
  no: 53,
  title: "B1 Preliminary · Practice Test 53",
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
                    "Mobile phones must be switched off during lessons.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Phones must be off during lessons.",
                  "Phones are not allowed in school.",
                  "You can use your phone in lessons.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I'm ill today, so I can't come to football practice. Please tell the coach. Ben",
                  ],
                },
                question: "What does Ben want Max to do?",
                options: [
                  "bring him medicine",
                  "play instead of him",
                  "give a message to the coach",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep in the fridge.",
                    "Use within 3 days of opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It lasts for weeks.",
                  "Keep it warm.",
                  "You should finish it quickly after opening.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "Can you help me with my maths homework tonight? I don't understand question 3. Emma",
                  ],
                },
                question: "What does Emma want?",
                options: [
                  "help with homework",
                  "Lucy's homework",
                  "a new book",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "The museum café is closed today.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The museum is closed.",
                  "You can't eat at the museum café today.",
                  "The café opens later.",
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
            instruction: "The young people below all want to choose a holiday. Read the descriptions of eight holidays. Decide which holiday would be the most suitable for each person.",
            options: [
              {
                title: "Beach Holiday",
                text: "Relax on sunny beaches and swim in warm seas.",
              },
              {
                title: "City Break",
                text: "Visit museums, galleries and restaurants in Paris.",
              },
              {
                title: "Safari",
                text: "See lions, elephants and giraffes in Africa.",
              },
              {
                title: "Ski Trip",
                text: "Ski and snowboard in the Alps.",
              },
              {
                title: "Cruise",
                text: "Sail around the Mediterranean on a luxury ship.",
              },
              {
                title: "Camping",
                text: "Sleep in tents in a national park.",
              },
              {
                title: "Cultural Tour",
                text: "Visit ancient temples and learn about history in Asia.",
              },
              {
                title: "Adventure Holiday",
                text: "Rafting, hiking and climbing in the mountains.",
              },
            ],
            items: [
              {
                text: "Kaan wants to see wild animals.",
                answer: 2,
              },
              {
                text: "Defne loves art and wants to visit galleries.",
                answer: 1,
              },
              {
                text: "Mert loves winter sports.",
                answer: 3,
              },
              {
                text: "Selin wants to relax in the sun.",
                answer: 0,
              },
              {
                text: "Burak loves history and ancient buildings.",
                answer: 6,
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
              title: "Learning to cook",
              paragraphs: [
                "When I was fourteen, my mum started working long hours, so I decided to learn to cook. At first, I could only make toast and boiled eggs!",
                "I started by watching cooking videos online. I tried simple recipes, like pasta with tomato sauce. My first attempts weren't very good. Once, I burned the rice so badly that the kitchen was full of smoke!",
                "But I kept practising. My grandmother, who is a fantastic cook, taught me some of her recipes. She showed me how to make traditional dishes from our country, like stuffed peppers.",
                "Now I cook dinner for my family three times a week. They say my food is delicious! Cooking has become my favourite hobby. I'm thinking of studying to become a chef when I finish school.",
              ],
            },
            items: [
              {
                question: "Why did the writer start learning to cook?",
                options: [
                  "She wanted to be a chef.",
                  "Her school had a class.",
                  "She was bored.",
                  "Her mum was working a lot.",
                ],
                answer: 3,
              },
              {
                question: "How did the writer learn at first?",
                options: [
                  "from a book",
                  "from videos",
                  "from a teacher",
                  "from her mum",
                ],
                answer: 1,
              },
              {
                question: "What happened when the writer cooked rice?",
                options: [
                  "It was perfect.",
                  "She forgot to cook it.",
                  "It was too salty.",
                  "She burned it.",
                ],
                answer: 3,
              },
              {
                question: "What did the writer's grandmother teach her?",
                options: [
                  "traditional recipes",
                  "how to make toast",
                  "how to bake cakes",
                  "how to use the internet",
                ],
                answer: 0,
              },
              {
                question: "What might the writer do in the future?",
                options: [
                  "become a teacher",
                  "open a shop",
                  "become a chef",
                  "write a cookbook",
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
            title: "An island of books",
            text: [
              "In Norway, there's a small island where almost every building is a bookshop. {1} It's called the 'Book Town'.",
              "The village used to be a busy fishing village. {2} When the fishing industry declined, many people left.",
              "In the 1990s, some villagers came up with an idea. {3} They opened second-hand bookshops in old buildings.",
              "Today, the island has more than a dozen bookshops. {4} Book lovers from all over the world visit.",
              "Every summer, there's a book festival on the island. {5} Writers come to talk about their books, and there are events for children.",
            ],
            sentences: [
              "They wanted to bring life back to the village.",
              "Books are not sold on the island.",
              "There are about 100,000 books for sale.",
              "It attracts thousands of visitors every year.",
              "Nobody visits the island.",
              "Most people worked in the fishing industry.",
              "The island has no bookshops.",
              "They are in old houses, barns and even a boat.",
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
            title: "Football",
            text: [
              "Football is the world's most popular sport. More than four billion people around the world are {1} of football.",
              "The game has a long history. Similar games were played in ancient China more than 2,000 years ago. But the modern game was developed in England in the nineteenth century. The first official {2} were written in 1863.",
              "The FIFA World Cup is the biggest football competition. It takes place every four years, and teams from all over the world {3}. Brazil has won the World Cup five times, more than any other country. Football is popular because it's easy to play. You only need a ball and some space. In many countries, children play football in the streets every day. Women's football is also becoming increasingly {4}. The Women's World Cup attracts millions of {5}. Football brings people together, whatever their age, nationality or {6}.",
            ],
            gaps: [
              {
                options: [
                  "fan up",
                  "fanatic",
                  "fans",
                  "fanciful",
                ],
                answer: 2,
              },
              {
                options: [
                  "rule up",
                  "rules",
                  "ruler",
                  "ruling",
                ],
                answer: 1,
              },
              {
                options: [
                  "competition",
                  "competitive",
                  "competitor",
                  "compete",
                ],
                answer: 3,
              },
              {
                options: [
                  "popularity",
                  "popular",
                  "popularly",
                  "populate",
                ],
                answer: 1,
              },
              {
                options: [
                  "view",
                  "viewing",
                  "viewed",
                  "viewers",
                ],
                answer: 3,
              },
              {
                options: [
                  "background",
                  "backed",
                  "backing",
                  "backward",
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
            title: "A great teacher",
            text: [
              "My favourite teacher was Mrs Green, who taught me English {1} I was eleven. She made me fall in love with books.",
              "Before I was in her class, I didn't like reading. I thought books were boring. But Mrs Green read stories to us every day, and she made them come alive. She used different voices {2} each character.",
              "She also encouraged us to write our own stories. She said that everyone has a story to tell. When I wrote my first story, she said it was very good and read it to the whole class. I felt so proud! Because of Mrs Green, I now read {3} the time. I've also started writing a novel. I want to be a writer when I grow {4}. Last year, I went back to my old school to visit Mrs Green. I told her {5} much she had inspired me. She was very happy. Every student deserves a teacher {6} her.",
            ],
            answers: [
              [
                "when",
              ],
              [
                "for",
              ],
              [
                "all",
              ],
              [
                "up",
              ],
              [
                "how",
              ],
              [
                "like",
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
              subject: "A birthday party",
              lines: [
                "My birthday party is next Saturday! Can you come? [Answer]",
                "What would you like to do at the party? [Give ideas]",
                "What food do you like? [Tell Robin]",
                "Can you help me prepare? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThank you for inviting me! Of course I can come. I wouldn't miss it!\n\nAt the party, we could play games and listen to music. Maybe we could have a karaoke competition? That would be really fun. We could also watch a film later in the evening.\n\nI like most food, but my favourites are pizza and burgers. I also love chocolate cake! Please don't make anything with mushrooms, though, because I don't like them.\n\nYes, I'd be happy to help you prepare. I could come on Saturday morning and help you decorate the house with balloons.\n\nSee you soon,\nZehra",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A good friend",
              lines: [
                "What makes someone a good friend?",
                "Tell us about your best friend.",
                "Why is friendship important?",
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
            sample: "What makes a true friend?\n\nI think a good friend is someone who is always there for you, in good times and bad. They should be honest, loyal and kind.\n\nMy best friend is called Elif. We met when we were six, and we've been best friends ever since. She's funny, clever and always makes me laugh. When I'm sad, she always knows how to make me feel better.\n\nFriendship is important because life can be difficult sometimes, and friends help us through those times. They also make the good times even better. I believe that a true friend is one of the most valuable things you can have.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Tom saw the advert in the newspaper, he knew it was his chance.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Tom saw the advert in the newspaper, he knew it was his chance. A famous football club was looking for new young players.\n\nTom had been playing football since he was four. He practised every day after school. He called the club and booked a trial.\n\nOn the day of the trial, there were more than a hundred boys. Tom was very nervous. But when he started playing, he forgot his nerves. He scored two goals and made several good passes.\n\nA week later, the club called. They wanted Tom to join their academy! He was so happy that he jumped around the room. His dream was coming true.",
          },
        },
      ],
    },
  ],
};
