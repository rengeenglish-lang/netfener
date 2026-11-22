import type { CambridgeTest } from "./types";

/** A2 Key practice test 43 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_43: CambridgeTest = {
  id: "key-43",
  level: "key",
  no: 43,
  title: "A2 Key · Practice Test 43",
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
                    "SPORTS CENTRE",
                    "Badminton courts can be booked up to one week in advance.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can book a court a few days before you play.",
                  "You can only book on the same day.",
                  "Badminton is not available.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jake, I've lost my phone charger. Can I borrow yours tonight? I'll give it back tomorrow. Sam",
                  ],
                },
                question: "What does Sam want?",
                options: [
                  "to buy a charger",
                  "to use Jake's charger",
                  "to give Jake a charger",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "This room is closed for repairs.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can't go into this room at the moment.",
                  "The museum is closed.",
                  "This room is new.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Emily,",
                    "I'm having a barbecue on Sunday. Can you bring some salad? Let me know if you can't come. Holly",
                  ],
                },
                question: "What does Holly ask Emily to do?",
                options: [
                  "cook the barbecue",
                  "invite her friends",
                  "bring some food",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Please switch off your phones during the film.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Phones are not allowed in the cinema.",
                  "You can buy phones here.",
                  "Phones must be turned off when the film is on.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BIRTHDAY PARTIES",
                    "Let us organise your child's party!",
                    "Games, food and a magician. Call for prices.",
                  ],
                },
                question: "What does the advertisement offer?",
                options: [
                  "a service for children's parties",
                  "a magic class",
                  "a free party",
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
                title: "Isabella",
                text: "I love animals, so I volunteer at a cat rescue centre every weekend. I clean the cages and play with the cats. Some of them are very shy because they've had a hard life. It's wonderful when a shy cat starts to trust you. Last month, I adopted a cat called Pepper.",
              },
              {
                title: "Charlie",
                text: "My hobby is magic. I learned my first tricks from a book when I was eight. Now I perform at children's birthday parties. People pay me to do a magic show! My favourite trick is making a coin disappear. I'm saving my money to buy more magic equipment.",
              },
              {
                title: "Grace",
                text: "I'm a keen cyclist. I ride my bike to school every day, and at weekends I go on long rides with my dad. Last summer, we cycled 500 kilometres from London to Paris to raise money for a hospital. It took five days. It was hard, but amazing.",
              },
            ],
            items: [
              {
                text: "now has a pet?",
                answer: 0,
              },
              {
                text: "works with frightened animals?",
                answer: 0,
              },
              {
                text: "learned their hobby from a book?",
                answer: 1,
              },
              {
                text: "earns money from their hobby?",
                answer: 1,
              },
              {
                text: "travelled to another country?",
                answer: 2,
              },
              {
                text: "uses their hobby to get to school?",
                answer: 2,
              },
              {
                text: "collected money for a good cause?",
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
              title: "The girl who swims with sharks",
              paragraphs: [
                "Eighteen-year-old Lily Evans is a marine biologist in training. She has been swimming with sharks since she was fourteen. 'People think sharks are dangerous,' she says. 'But most of them aren't interested in people at all.'",
                "Lily first saw a shark on a family holiday in Australia. 'I was snorkelling, and a small shark swam past me,' she remembers. 'I wasn't scared. I thought it was beautiful.'",
                "Now Lily helps scientists study sharks. She takes photos of them and records how many there are. 'Some kinds of shark are in danger,' she explains. 'We need to learn about them so we can protect them.'",
                "Lily gives talks at schools about sharks. 'I want young people to understand that sharks are important for the ocean,' she says. 'We shouldn't be afraid of them.'",
              ],
            },
            items: [
              {
                question: "What does Lily say about most sharks?",
                options: [
                  "They are very dangerous.",
                  "They are friendly.",
                  "They don't care about people.",
                ],
                answer: 2,
              },
              {
                question: "Where did Lily first see a shark?",
                options: [
                  "on holiday in Australia",
                  "in a zoo",
                  "in a book",
                ],
                answer: 0,
              },
              {
                question: "How did Lily feel when she first saw a shark?",
                options: [
                  "She was frightened.",
                  "She thought it was lovely.",
                  "She swam away.",
                ],
                answer: 1,
              },
              {
                question: "What does Lily do to help scientists?",
                options: [
                  "She photographs and counts sharks.",
                  "She catches sharks.",
                  "She feeds sharks.",
                ],
                answer: 0,
              },
              {
                question: "What does Lily want young people to know?",
                options: [
                  "Sharks are dangerous.",
                  "Sharks are easy to find.",
                  "Sharks are important.",
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
            title: "Coffee",
            text: [
              "Coffee is one of the most popular drinks in the world. People drink more than two billion cups {1} day!",
              "Coffee comes from the seeds of a plant that grows in hot countries. The seeds are called beans. They are {2} and then ground into a powder.",
              "According to a story, coffee was discovered in Ethiopia more than 1,000 years ago. A man noticed that his goats had lots of {3} after eating the berries from a coffee plant. Today, Brazil produces more coffee than any other country. Coffee contains caffeine, which makes people feel more awake. But too much caffeine can {4} you feel nervous and stop you sleeping. Doctors say children shouldn't drink coffee. Adults should {5} no more than four cups a day. Many people like their coffee with milk and sugar, but others {6} it black.",
            ],
            gaps: [
              {
                options: [
                  "many",
                  "all",
                  "every",
                ],
                answer: 2,
              },
              {
                options: [
                  "burnt",
                  "boiled",
                  "roasted",
                ],
                answer: 2,
              },
              {
                options: [
                  "energy",
                  "power",
                  "strength",
                ],
                answer: 0,
              },
              {
                options: [
                  "do",
                  "make",
                  "give",
                ],
                answer: 1,
              },
              {
                options: [
                  "drink",
                  "eat",
                  "take up",
                ],
                answer: 0,
              },
              {
                options: [
                  "choose to",
                  "love to",
                  "prefer",
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
            title: "Email",
            text: [
              "Hi Daniel,",
              "I'm sorry I wasn't {1} school today. I had a terrible headache, so I stayed in bed.",
              "Can you tell me what we did in English? I know we had a test on Friday, but I'm not sure what it's {2}.",
              "Also, did Mr Brown give us any homework? I don't want to fall behind. If you have time, could you send me a photo of your notes? I'll do the same {3} you when you're ill! I hope I'll be {4} tomorrow. Thanks {5} much for your help. See you {6}!",
              "Josh",
            ],
            answers: [
              [
                "at",
                "in",
              ],
              [
                "about",
              ],
              [
                "for",
              ],
              [
                "back",
                "better",
              ],
              [
                "very",
                "so",
              ],
              [
                "soon",
                "tomorrow",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to learn to swim. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say where you are going to learn.",
              "Say when the lessons are.",
              "Say how you feel about it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nI'm going to learn to swim at the sports centre near my school! The lessons are every Wednesday evening at six. I'm a bit nervous because I can't swim at all, but I'm also very excited.\n\nBye,\nOğuz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🍰🏪",
                label: "1",
              },
              {
                e: "👩🎂👶🎉",
                label: "2",
              },
              {
                e: "👶🎂😋👩😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last week, Sarah bought a big chocolate cake for her son's first birthday. At the party, she put the cake in front of him. Everyone sang 'Happy Birthday'. Then the baby put both his hands in the cake and got chocolate all over his face! Everyone laughed and took lots of photos.",
          },
        },
      ],
    },
  ],
};
