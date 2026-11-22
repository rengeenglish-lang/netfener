import type { CambridgeTest } from "./types";

/** A2 Key practice test 11 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_11: CambridgeTest = {
  id: "key-11",
  level: "key",
  no: 11,
  title: "A2 Key · Practice Test 11",
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
                    "BUS STATION",
                    "Buses to the airport leave every 30 minutes.",
                    "Buy your ticket from the driver.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There is one bus a day to the airport.",
                  "Tickets are sold at the airport.",
                  "You pay on the bus.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Mum, the match finished early. Can you pick me up at 4 instead of 5? I'll wait outside the sports hall. Leo",
                  ],
                },
                question: "What does Leo want?",
                options: [
                  "to stay at the match longer",
                  "to be collected earlier",
                  "to walk home",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "GARDEN CENTRE",
                    "All plants half price this weekend.",
                    "Café closed until Monday.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The garden centre is closed this weekend.",
                  "Plants are cheaper this weekend.",
                  "The café is half price.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Olivia,",
                    "Thanks for the photos from the party! Can you send me the one of us with the cake? I want to print it for my grandma. Ruby",
                  ],
                },
                question: "What does Ruby want Olivia to do?",
                options: [
                  "print a photo for her",
                  "bake a cake for her grandma",
                  "send her a particular photo",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Mobile phones must be switched off during lessons.",
                    "You may use them at lunchtime.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can use phones at certain times.",
                  "Students can't bring phones to school.",
                  "Phones must be left at home.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DANCE CLASSES",
                    "Every Wednesday at the community centre",
                    "No experience needed. Just bring comfortable shoes!",
                  ],
                },
                question: "What do we know about the classes?",
                options: [
                  "You need special dance shoes.",
                  "Beginners are welcome.",
                  "They are every day.",
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
                title: "Ella",
                text: "I've played tennis since I was six. I train with a coach four times a week, and I play in competitions at weekends. Last year, I won the regional junior championship. It was the best day of my life! My dream is to play at Wimbledon one day.",
              },
              {
                title: "Noah",
                text: "My hobby is gardening. I have a small vegetable garden behind our house, where I grow tomatoes, beans and potatoes. My grandad taught me everything. We sell some of the vegetables to our neighbours, and my mum uses the rest in her cooking.",
              },
              {
                title: "Zara",
                text: "I love making videos. I film my friends doing funny things and then edit the videos on my laptop. I've got a channel online with about two hundred followers. My parents check everything before I share it, to make sure it's safe.",
              },
            ],
            items: [
              {
                text: "has an adult who looks at their work first?",
                answer: 2,
              },
              {
                text: "learned from a grandparent?",
                answer: 1,
              },
              {
                text: "has a big ambition?",
                answer: 0,
              },
              {
                text: "does their hobby with a trainer?",
                answer: 0,
              },
              {
                text: "makes something that other people eat?",
                answer: 1,
              },
              {
                text: "uses a computer for their hobby?",
                answer: 2,
              },
              {
                text: "was successful in a competition?",
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
              title: "The boy who reads to dogs",
              paragraphs: [
                "Every Saturday morning, eleven-year-old Dylan Jones goes to an animal shelter in his town. But he doesn't go to walk the dogs. He goes to read to them.",
                "'Some of the dogs are very nervous when they arrive,' explains Dylan. 'They've had difficult lives. When I read to them, they relax. They like the sound of a calm voice.'",
                "Dylan started reading at the shelter a year ago, after he saw a programme about it on TV. 'At first, the dogs stayed at the back of their cages,' he says. 'But now, lots of them come and lie down next to me.'",
                "The shelter manager says it really helps. 'Calm dogs find new homes more quickly,' she says. Dylan's favourite books to read are adventure stories. 'I think the dogs like them too,' he laughs.",
              ],
            },
            items: [
              {
                question: "What does Dylan do at the animal shelter?",
                options: [
                  "He reads books to the dogs.",
                  "He takes the dogs for walks.",
                  "He cleans the cages.",
                ],
                answer: 0,
              },
              {
                question: "Why does reading help the dogs?",
                options: [
                  "It teaches them new words.",
                  "It makes them hungry.",
                  "It makes them feel calmer.",
                ],
                answer: 2,
              },
              {
                question: "How did Dylan get the idea?",
                options: [
                  "His teacher told him about it.",
                  "He watched a TV programme.",
                  "He read about it in a book.",
                ],
                answer: 1,
              },
              {
                question: "How have the dogs changed?",
                options: [
                  "They don't like Dylan's voice.",
                  "Many of them now come close to Dylan.",
                  "They stay at the back of their cages.",
                ],
                answer: 1,
              },
              {
                question: "What does the manager say?",
                options: [
                  "Dylan should read more slowly.",
                  "The dogs prefer funny stories.",
                  "Relaxed dogs get adopted faster.",
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
            title: "Antarctica",
            text: [
              "Antarctica is the coldest place on Earth. The lowest temperature ever {1} there was minus 89 degrees! It is also very windy and very dry. In fact, it is the largest desert in the world.",
              "Nobody lives in Antarctica all the time. But about 4,000 scientists {2} there in the summer to do research. They study the ice, the weather and the animals.",
              "Penguins, seals and whales live in and around Antarctica. They have special ways to {3} warm. Penguins have thick feathers and a layer of fat. Every year, more tourists {4} Antarctica on ships. But scientists are worried that too many visitors could {5} the environment. There are strict rules to {6} the animals and the ice.",
            ],
            gaps: [
              {
                options: [
                  "written",
                  "noted",
                  "recorded",
                ],
                answer: 2,
              },
              {
                options: [
                  "stay",
                  "live",
                  "remain",
                ],
                answer: 0,
              },
              {
                options: [
                  "hold",
                  "keep",
                  "make",
                ],
                answer: 1,
              },
              {
                options: [
                  "visit",
                  "travel",
                  "go",
                ],
                answer: 0,
              },
              {
                options: [
                  "break",
                  "hit",
                  "damage",
                ],
                answer: 2,
              },
              {
                options: [
                  "save",
                  "help",
                  "protect",
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
              "Hi Emma,",
              "I hope you're well. I'm writing {1} ask you a favour. My family is going on holiday next week, and we need someone to look {2} our cat, Tiger.",
              "Could you come to our house once a day to give him food and water? He's very friendly and he won't be any trouble. I'll leave the key {3} our neighbour, Mrs Green.",
              "We'll be away {4} Monday to Friday. I'll bring you a present {5} Italy! Let me know if you {6} help.",
              "Thanks,",
              "Sophie",
            ],
            answers: [
              [
                "to",
              ],
              [
                "after",
              ],
              [
                "with",
              ],
              [
                "from",
              ],
              [
                "from",
              ],
              [
                "can",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to borrow a book from your English friend, Ashley. Write an email to Ashley. Write 25 words or more.",
            prompts: [
              "Say which book you want to borrow.",
              "Say why you want to read it.",
              "Say when you will give it back.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Ashley' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Ashley,\n\nCould I borrow your book about the history of space travel? I want to read it because we are doing a project about planets at school. I will give it back to you next Friday.\n\nThanks,\nBerk",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎨🖼️",
                label: "1",
              },
              {
                e: "👧🖼️🏫🏆",
                label: "2",
              },
              {
                e: "👧🏅👨‍👩‍👧",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last month, Sara painted a picture of her village for a school art competition. She worked on it every evening for two weeks. Then she took it to school and the teachers put it on the wall with all the other pictures. A week later, the head teacher said Sara was the winner! Her parents were very proud and they took her out for dinner to celebrate.",
          },
        },
      ],
    },
  ],
};
