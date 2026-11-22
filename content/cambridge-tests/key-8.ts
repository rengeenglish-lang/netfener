import type { CambridgeTest } from "./types";

/** A2 Key practice test 8 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_8: CambridgeTest = {
  id: "key-8",
  level: "key",
  no: 8,
  title: "A2 Key · Practice Test 8",
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
                    "LIBRARY",
                    "Children under 12 must be with an adult after 5 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Young children can't be alone in the library in the evening.",
                  "The library closes at 5 p.m.",
                  "Adults can't use the library after 5 p.m.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Tom, I'm at the shop. They don't have chocolate ice cream. Is vanilla OK? Text me back quickly! Dad",
                  ],
                },
                question: "What does Dad want to know?",
                options: [
                  "which shop he should go to",
                  "if Tom wants a different ice cream",
                  "how much ice cream to buy",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "HOTEL",
                    "Breakfast is served in the restaurant from 7 to 10 a.m.",
                    "Room service available all day.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can get food in your room at any time.",
                  "Breakfast is only available in your room.",
                  "The restaurant opens at 10 a.m.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jo,",
                    "Can you help me move my things to my new flat on Saturday? I'll buy you lunch! Please let me know by Thursday. Kim",
                  ],
                },
                question: "What does Kim want Jo to do?",
                options: [
                  "buy her lunch",
                  "come to her new flat on Thursday",
                  "help her on Saturday",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL OFFICE",
                    "Lost property is kept for one month.",
                    "After that, it is given to charity.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must pay to get lost property back.",
                  "Things that nobody collects are given away.",
                  "The office is closed for a month.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER CAMP",
                    "Ages 8–14. Swimming, climbing, art and more!",
                    "Book before 1 May and save £50.",
                  ],
                },
                question: "What do we know about the summer camp?",
                options: [
                  "It is only for teenagers.",
                  "It is cheaper if you book early.",
                  "It costs £50.",
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
                title: "Luke",
                text: "I've been learning Japanese for two years. I go to classes on Wednesday evenings, and I also practise with an app every day. Next summer, I'm going to Tokyo with my family. I can't wait to use my Japanese in real life and try lots of new food!",
              },
              {
                title: "Emma",
                text: "I make my own clothes. My mum gave me her old sewing machine for my birthday, and I taught myself using videos online. I've made three dresses and a jacket. My friends love them, and now they ask me to make things for them. Maybe I'll be a fashion designer.",
              },
              {
                title: "Ali",
                text: "I'm in a theatre group. We practise twice a week at the community centre, and we put on two shows every year. In our last show, I played a king. It was the biggest part I've ever had, and I had to learn lots of lines. My family came to watch every night.",
              },
            ],
            items: [
              {
                text: "is planning a trip abroad?",
                answer: 0,
              },
              {
                text: "got something from a parent?",
                answer: 1,
              },
              {
                text: "had to remember a lot of words?",
                answer: 2,
              },
              {
                text: "uses technology to practise?",
                answer: 0,
              },
              {
                text: "does things for their friends?",
                answer: 1,
              },
              {
                text: "performs in front of an audience?",
                answer: 2,
              },
              {
                text: "is thinking about a future job?",
                answer: 1,
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
              title: "Life on a boat",
              paragraphs: [
                "Thirteen-year-old Finn Walker doesn't live in a house. He lives on a boat with his parents and his younger sister. 'We've lived on the boat for three years,' he says. 'We've sailed to fifteen different countries!'",
                "Finn doesn't go to a normal school. His parents teach him, and he also does online lessons. 'Sometimes it's hard to concentrate when the sea is rough,' he admits. 'But I can study wherever we are.'",
                "Life on a boat isn't always easy. 'The space is very small, and I have to share a room with my sister,' says Finn. 'And when there's a storm, it can be scary.'",
                "But Finn wouldn't change his life. 'I've seen whales, dolphins and amazing places,' he says. 'And I've made friends all over the world. We keep in touch by email. One day, I'd like to sail around the world on my own.'",
              ],
            },
            items: [
              {
                question: "How long has Finn lived on the boat?",
                options: [
                  "fifteen years",
                  "since he was born",
                  "three years",
                ],
                answer: 2,
              },
              {
                question: "What does Finn say about studying?",
                options: [
                  "Bad weather can make it difficult.",
                  "He doesn't have to do any lessons.",
                  "He prefers a normal school.",
                ],
                answer: 0,
              },
              {
                question: "What is a problem for Finn?",
                options: [
                  "He gets seasick.",
                  "He doesn't have his own room.",
                  "He can't use the internet.",
                ],
                answer: 1,
              },
              {
                question: "How does Finn stay in contact with friends?",
                options: [
                  "He writes emails to them.",
                  "He visits them every year.",
                  "He phones them.",
                ],
                answer: 0,
              },
              {
                question: "What is Finn's dream?",
                options: [
                  "to live in a house",
                  "to study marine animals",
                  "to sail around the world alone",
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
            title: "Chocolate",
            text: [
              "Chocolate is made from cacao beans, which {1} on trees in hot countries. People in Central America started using cacao more than 3,000 years ago.",
              "At first, people didn't eat chocolate. They {2} it as a drink. It was bitter, not sweet, and people often {3} chilli to it. Cacao beans were so valuable that people even used them as money!",
              "When chocolate arrived in Europe, people added sugar and milk to make it {4}. The first chocolate bar was made in 1847. Today, chocolate is one of the most {5} sweets in the world. But be careful: it's best to eat it in {6} amounts!",
            ],
            gaps: [
              {
                options: [
                  "rise",
                  "build",
                  "grow",
                ],
                answer: 2,
              },
              {
                options: [
                  "ate",
                  "drank",
                  "made",
                ],
                answer: 1,
              },
              {
                options: [
                  "put",
                  "added",
                  "mixed",
                ],
                answer: 1,
              },
              {
                options: [
                  "nicer",
                  "softer",
                  "sweeter",
                ],
                answer: 2,
              },
              {
                options: [
                  "popular",
                  "common",
                  "usual",
                ],
                answer: 0,
              },
              {
                options: [
                  "short",
                  "small",
                  "little",
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
              "Hi Lucas,",
              "I'm writing to invite you to my birthday party. It's {1} Saturday 15th June at my house. It starts at four o'clock {2} finishes at eight.",
              "We're going to have a barbecue in the garden, {3} please bring a jacket in case it gets cold. My mum is making a big chocolate cake. You don't need to bring {4} present.",
              "Can you tell me {5} you can come by Wednesday? My address is 22 Hill Road. It's {6} to the post office.",
              "Hope to see you there!",
              "Amy",
            ],
            answers: [
              [
                "on",
              ],
              [
                "and",
              ],
              [
                "so",
              ],
              [
                "a",
                "any",
              ],
              [
                "if",
                "whether",
              ],
              [
                "next",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to visit your English friend, Jamie, next week. Write an email to Jamie. Write 25 words or more.",
            prompts: [
              "Say when you will arrive.",
              "Say how you will travel.",
              "Ask what you should bring.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nI'm really excited about my visit! I will arrive next Friday at about five o'clock. I'm going to travel by train. What should I bring? Do I need a warm coat?\n\nSee you soon,\nMert",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🍳🔥",
                label: "1",
              },
              {
                e: "🍳💨🚨",
                label: "2",
              },
              {
                e: "👨🍕📞😅",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last night, Dad decided to cook dinner for the family. He was cooking some fish, but then his phone rang and he forgot about the food. Soon there was smoke everywhere and the fire alarm started ringing. The fish was black! In the end, Dad laughed and ordered pizza for everyone.",
          },
        },
      ],
    },
  ],
};
