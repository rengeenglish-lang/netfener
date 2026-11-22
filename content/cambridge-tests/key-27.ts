import type { CambridgeTest } from "./types";

/** A2 Key practice test 27 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_27: CambridgeTest = {
  id: "key-27",
  level: "key",
  no: 27,
  title: "A2 Key · Practice Test 27",
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
                    "CONCERT",
                    "Doors open at 7 p.m.",
                    "No cameras allowed inside.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The concert starts at 7 p.m.",
                  "Cameras can be bought inside.",
                  "You can't take photos at the concert.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, can you remind me what the English homework is? I forgot to write it down. Kim",
                  ],
                },
                question: "What does Kim want Jo to do?",
                options: [
                  "tell her about the homework",
                  "do her homework for her",
                  "lend her a pen",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "TOILETS",
                    "Out of order.",
                    "Please use the toilets on the second floor.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The toilets are closed for cleaning.",
                  "These toilets are not working.",
                  "There are no toilets upstairs.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Can you get some milk on your way home? We've run out. Thanks! Dad",
                  ],
                },
                question: "What does Dad want Max to do?",
                options: [
                  "buy something",
                  "come home early",
                  "make breakfast",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "Bring your own towel.",
                    "Towels are not provided.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can hire towels here.",
                  "Towels are free.",
                  "The centre doesn't give you a towel.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "CHESS TOURNAMENT",
                    "Saturday, school hall, 10 a.m.",
                    "Prizes for all winners! Enter at the office.",
                  ],
                },
                question: "How can you take part?",
                options: [
                  "just arrive on Saturday",
                  "sign up at the office",
                  "call the school",
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
                title: "Freddie",
                text: "I love playing rugby. I've been in my school team for three years. We train every Wednesday after school and play matches on Saturday mornings. It's a tough sport, and I often get bruises. But I love being part of a team and helping each other.",
              },
              {
                title: "Lucy",
                text: "I enjoy photography, especially taking pictures of people. I've got a part-time job taking photos at children's birthday parties. Last year, one of my photos was used on the front of the school magazine. I'd like to study photography at college.",
              },
              {
                title: "Kian",
                text: "My hobby is making music on my computer. I create songs using special software. I don't play any instruments, but I've learned to mix different sounds together. I've shared some songs online, and a few people have used them in their videos.",
              },
            ],
            items: [
              {
                text: "sometimes gets hurt doing their hobby?",
                answer: 0,
              },
              {
                text: "enjoys working with others?",
                answer: 0,
              },
              {
                text: "has a job connected to their hobby?",
                answer: 1,
              },
              {
                text: "had their work printed on a cover?",
                answer: 1,
              },
              {
                text: "can't play any instruments?",
                answer: 2,
              },
              {
                text: "has had their work used by other people?",
                answer: 2,
              },
              {
                text: "wants to continue studying their hobby?",
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
              title: "Speaking three languages",
              paragraphs: [
                "Fourteen-year-old Leo lives in Switzerland. He speaks three languages: German, French and English. 'My mum is French and my dad is Swiss,' he explains. 'So I spoke French and German from when I was a baby.'",
                "Leo started learning English at school when he was eight. 'It was the hardest language for me,' he says. 'The spelling is very strange! But I watched lots of English films, and that helped a lot.'",
                "Speaking three languages is very useful. 'I can talk to lots of people when I travel,' says Leo. 'And I can read books in their original language.'",
                "Now Leo wants to learn Spanish. 'My friend is from Spain, and he's going to teach me,' he says. 'In return, I'm going to help him with his German.'",
              ],
            },
            items: [
              {
                question: "How did Leo learn French and German?",
                options: [
                  "at school",
                  "from films",
                  "from his family",
                ],
                answer: 2,
              },
              {
                question: "What does Leo say about English?",
                options: [
                  "It was his first language.",
                  "It has easy spelling.",
                  "It was difficult for him.",
                ],
                answer: 2,
              },
              {
                question: "What helped Leo learn English?",
                options: [
                  "watching films",
                  "living in England",
                  "his parents",
                ],
                answer: 0,
              },
              {
                question: "Why is speaking three languages useful for Leo?",
                options: [
                  "He can get a better job.",
                  "He can communicate with more people.",
                  "He can teach at school.",
                ],
                answer: 1,
              },
              {
                question: "How will Leo learn Spanish?",
                options: [
                  "A friend will teach him.",
                  "He will take classes.",
                  "He will move to Spain.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "The Olympic Games",
            text: [
              "The Olympic Games are the world's biggest sports {1}. Athletes from more than 200 countries take part. The Summer Games and the Winter Games each happen every four years.",
              "The first Olympic Games {2} place in ancient Greece more than 2,700 years ago. Only men could take part, and there were only a few sports, like running and wrestling.",
              "The modern Olympics began in Athens in 1896. Today, there are more than forty different sports, {3} swimming, football and gymnastics. The Olympic symbol has five rings of different colours. They {4} the five continents of the world. Athletes who win get gold, silver or bronze {5}. Many athletes say that taking part in the Olympics is the biggest {6} of their lives.",
            ],
            gaps: [
              {
                options: [
                  "event",
                  "match",
                  "game",
                ],
                answer: 0,
              },
              {
                options: [
                  "had",
                  "made",
                  "took",
                ],
                answer: 2,
              },
              {
                options: [
                  "with",
                  "including",
                  "such",
                ],
                answer: 1,
              },
              {
                options: [
                  "show",
                  "represent",
                  "mean",
                ],
                answer: 1,
              },
              {
                options: [
                  "cups",
                  "prizes",
                  "medals",
                ],
                answer: 2,
              },
              {
                options: [
                  "achievement",
                  "success",
                  "win",
                ],
                answer: 0,
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
              "Hi Chloe,",
              "I hope you are having a good week. I've got some news! My family {1} moving to a new house next month. It's near the city centre, {2} I'll be able to walk to school.",
              "The house is bigger than our old one, and I'm going to have my {3} bedroom. I won't have to share with my sister any more! There's also a garden {4} we can play football.",
              "I'll be sad to leave my old neighbours, but I'm excited too. Would you like to come and see the new house {5} we move in? I'll send you the address. Speak {6} soon!",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "is",
              ],
              [
                "so",
              ],
              [
                "own",
              ],
              [
                "where",
              ],
              [
                "when",
                "after",
                "once",
              ],
              [
                "to",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just joined a new club. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say what the club is.",
              "Say who is in it.",
              "Say what you do there.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nI've just joined a drama club at the community centre. There are about fifteen people in it, and most of them are my age. We practise acting and next month we are going to do a short play.\n\nBye,\nNehir",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎒🚌",
                label: "1",
              },
              {
                e: "👧🐶🌳",
                label: "2",
              },
              {
                e: "👧🐶🏠👩",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On her way home from school, Lucy saw a small dog sitting alone under a tree. It looked lost and hungry. She looked at its collar and found an address. She took the dog to the house, and a woman opened the door. The woman was so happy to see her dog. She thanked Lucy and gave her some chocolate.",
          },
        },
      ],
    },
  ],
};
