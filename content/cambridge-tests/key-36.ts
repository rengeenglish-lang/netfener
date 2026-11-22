import type { CambridgeTest } from "./types";

/** A2 Key practice test 36 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_36: CambridgeTest = {
  id: "key-36",
  level: "key",
  no: 36,
  title: "A2 Key · Practice Test 36",
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
                    "SCHOOL TRIP",
                    "Coach leaves at 7.30 a.m. sharp.",
                    "Late students will not be able to go.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The coach will wait for late students.",
                  "Students must arrive on time.",
                  "The trip starts in the afternoon.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Leo, I've got a cold, so I'm staying at home today. Can you get me the maths homework? Thanks, Jack",
                  ],
                },
                question: "What does Jack ask Leo to do?",
                options: [
                  "find out about some schoolwork",
                  "bring him medicine",
                  "stay at home with him",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BOOKSHOP",
                    "Buy 3 books, get the cheapest one free.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "All books are free today.",
                  "You can only buy three books.",
                  "You don't pay for one book if you buy three.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear Mr Smith,",
                    "Your new glasses are ready. You can collect them from Monday. Vision Opticians",
                  ],
                },
                question: "Why has the shop sent this email?",
                options: [
                  "to make an eye test appointment",
                  "to ask Mr Smith to pay",
                  "to say Mr Smith's order is ready",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK CAFÉ",
                    "Dogs welcome on the terrace.",
                    "Not allowed inside.",
                  ],
                },
                question: "Where can you sit with your dog?",
                options: [
                  "outside the café",
                  "inside the café",
                  "nowhere in the café",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SINGERS WANTED",
                    "Join our new rock band!",
                    "Practice every Thursday. Must be 15–18.",
                  ],
                },
                question: "What do we know about the band?",
                options: [
                  "It plays every day.",
                  "It is looking for teenagers.",
                  "It wants guitar players.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Leon",
                text: "I'm a big fan of motor racing. I don't drive, of course, but I build remote-control cars and race them with my friends in the park. I've built five cars. My newest one can go very fast. My dad and I are building a racing track in our garden.",
              },
              {
                title: "Grace",
                text: "I love acting. I've been in three plays at my school, and last summer I was in a short film made by a local company. I only had a small part, but it was really exciting to work with professional actors. I'd love to go to drama school.",
              },
              {
                title: "Max",
                text: "My hobby is making things from wood. My grandfather was a carpenter, and he's teaching me. So far, I've made a bird house, a small table and a box for my mum's jewellery. I'm now making a chair for my little sister.",
              },
            ],
            items: [
              {
                text: "is building something with a parent?",
                answer: 0,
              },
              {
                text: "competes with friends?",
                answer: 0,
              },
              {
                text: "has worked with experts in their field?",
                answer: 1,
              },
              {
                text: "wants to study their hobby?",
                answer: 1,
              },
              {
                text: "makes presents for family members?",
                answer: 2,
              },
              {
                text: "is learning from an older relative?",
                answer: 2,
              },
              {
                text: "has made several of the same kind of thing?",
                answer: 0,
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
              title: "The boy who loves maps",
              paragraphs: [
                "Twelve-year-old Sam Lee loves maps. He has more than two hundred maps in his bedroom, from old paper maps to modern city maps.",
                "'I started collecting them when I was six,' says Sam. 'My grandpa gave me an old map of our town. I loved seeing how different it was a hundred years ago.'",
                "Sam doesn't just collect maps; he draws them too. 'I draw maps of places in my favourite books,' he explains. 'And sometimes I invent my own countries, with mountains, rivers and cities.'",
                "Last year, Sam won a national competition for young map-makers. His prize was a trip to a museum with thousands of maps. 'It was like heaven,' he laughs. 'I want to be a geographer when I grow up.'",
              ],
            },
            items: [
              {
                question: "When did Sam start his collection?",
                options: [
                  "when he was six",
                  "last year",
                  "when he was twelve",
                ],
                answer: 0,
              },
              {
                question: "What did Sam's grandpa give him?",
                options: [
                  "a book about maps",
                  "an old map of his town",
                  "a new map of the world",
                ],
                answer: 1,
              },
              {
                question: "What kind of maps does Sam draw?",
                options: [
                  "maps of imaginary places",
                  "maps of his school",
                  "maps for his teacher",
                ],
                answer: 0,
              },
              {
                question: "What was Sam's prize?",
                options: [
                  "some money",
                  "a new book",
                  "a visit to a museum",
                ],
                answer: 2,
              },
              {
                question: "What does Sam want to be?",
                options: [
                  "an artist",
                  "a writer",
                  "a geographer",
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
            title: "Kangaroos",
            text: [
              "Kangaroos live in Australia. They are famous for their strong back legs, which they use to {1} along the ground. Some kangaroos can jump nine metres in one jump!",
              "Kangaroos also have long, strong tails. They use them to {2} their balance when they jump. Female kangaroos have a pocket on their stomach called a pouch. When a baby kangaroo is born, it is very small, about the {3} of a bean. It lives in its mother's pouch for about six months.",
              "Kangaroos usually live in groups called mobs. They eat grass and leaves, and they don't need to drink much water. In hot weather, they {4} in the shade during the day and come out at night. There are more kangaroos than people in Australia! They are a national {5}, and you can see a kangaroo on Australian coins. But be careful if you see one in the wild: they can {6} if they feel in danger.",
            ],
            gaps: [
              {
                options: [
                  "walk",
                  "fly",
                  "jump",
                ],
                answer: 2,
              },
              {
                options: [
                  "keep",
                  "hold",
                  "stay",
                ],
                answer: 0,
              },
              {
                options: [
                  "length",
                  "size",
                  "height",
                ],
                answer: 1,
              },
              {
                options: [
                  "rest",
                  "run",
                  "jump",
                ],
                answer: 0,
              },
              {
                options: [
                  "sign",
                  "mark",
                  "symbol",
                ],
                answer: 2,
              },
              {
                options: [
                  "hit",
                  "fight",
                  "beat",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Hi Lily,",
              "I'm writing to tell you about our school's sports day. It was {1} Friday, and it was so much fun! The weather was sunny and warm.",
              "I took part {2} three races. I came first in the 100 metres and second in the relay. My mum and dad came {3} watch, and they were very proud.",
              "My best friend, Eva, won the long jump. Afterwards, there was a barbecue {4} everyone. Next year, you should come and watch. Do you have a sports day {5} your school? Tell me about it {6} you write back.",
              "Bye,",
              "Amy",
            ],
            answers: [
              [
                "on",
                "last",
              ],
              [
                "in",
              ],
              [
                "to",
              ],
              [
                "for",
              ],
              [
                "at",
              ],
              [
                "when",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just finished reading a good book. Write an email to your English friend, Jamie. Write 25 words or more.",
            prompts: [
              "Say what the book is called.",
              "Say what it is about.",
              "Say why Jamie should read it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nI've just read a great book called The Secret Garden. It's about a girl who finds a hidden garden and makes it beautiful again. You should read it because the story is exciting and the characters are interesting.\n\nBye,\nNil",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🏖️🏰",
                label: "1",
              },
              {
                e: "🌊🏰😢",
                label: "2",
              },
              {
                e: "👦👨🏰🌞",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Jack spent all morning building a huge sandcastle on the beach. He was very proud of it. But in the afternoon, the sea came in and a big wave destroyed it. Jack was very sad. His dad saw this and helped him build a new sandcastle further from the water. This time, it stayed there all day.",
          },
        },
      ],
    },
  ],
};
