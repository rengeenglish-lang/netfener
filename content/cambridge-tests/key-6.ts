import type { CambridgeTest } from "./types";

/** A2 Key practice test 6 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_6: CambridgeTest = {
  id: "key-6",
  level: "key",
  no: 6,
  title: "A2 Key · Practice Test 6",
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
                    "The gym is closed on Sunday for cleaning.",
                    "The pool is open as usual.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can go swimming on Sunday.",
                  "The sports centre is closed all weekend.",
                  "You must clean the gym after using it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jack, the bus is late, so I'll meet you at the cinema at 7.15, not 7. Buy the tickets if you get there first! Leo",
                  ],
                },
                question: "What does Leo want Jack to do?",
                options: [
                  "Wait for Leo at the bus stop.",
                  "Choose a different film.",
                  "Get the tickets before Leo arrives.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM SHOP",
                    "Show your museum ticket and get 10% off everything today.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You need a ticket to go into the shop.",
                  "Museum visitors can pay less in the shop today.",
                  "Everything in the shop costs ten pounds.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear parents,",
                    "The school trip to the farm is on Thursday. Children should bring a packed lunch and wear old clothes. Mrs Hill",
                  ],
                },
                question: "What should the children do?",
                options: [
                  "buy lunch at the farm",
                  "bring their own food",
                  "wear their school uniform",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BOOK CLUB",
                    "We meet every second Tuesday in the library café.",
                    "New members welcome – no need to book!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The book club meets every week.",
                  "You must buy a book to join the club.",
                  "You can just come along to the book club.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "GUITAR LESSONS",
                    "For beginners aged 10–16",
                    "First lesson free! Call Sophie on 07788 123456",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "You don't have to pay for the first one.",
                  "They are only for adults.",
                  "You need to have your own guitar.",
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
                title: "Mark",
                text: "I've always loved cooking. My grandmother taught me how to make bread when I was seven. Now I cook dinner for my family twice a week. I watch cooking programmes on TV and I try their recipes. One day, I'd like to open a small restaurant.",
              },
              {
                title: "Jenny",
                text: "I go running every morning before school with my older sister. Last spring, we ran a ten-kilometre race together for a children's hospital and collected over £500. I want to run a marathon when I'm older, but I need to train a lot first.",
              },
              {
                title: "Tom",
                text: "I collect old coins. I've got more than four hundred from thirty different countries. My uncle, who travels a lot for work, often brings me new ones. I keep them in special books. I'm a member of a coin club, and we meet online every month.",
              },
            ],
            items: [
              {
                text: "learned their hobby from an older family member?",
                answer: 0,
              },
              {
                text: "raised money for other people?",
                answer: 1,
              },
              {
                text: "gets help with their hobby from someone who travels?",
                answer: 2,
              },
              {
                text: "does their hobby very early in the day?",
                answer: 1,
              },
              {
                text: "talks to other people with the same hobby on the internet?",
                answer: 2,
              },
              {
                text: "hopes to have their own business?",
                answer: 0,
              },
              {
                text: "needs to practise more to reach a goal?",
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
              title: "A school in the clouds",
              paragraphs: [
                "Hannah Price, fourteen, goes to one of the highest schools in Europe. Her village is in the Alps, about 2,000 metres above the sea. 'In winter, there's snow from November to April,' she says. 'Some days, the clouds are below us!'",
                "There are only twenty-three students at the school, and they are all different ages. 'I'm in the same class as my little brother,' laughs Hannah. 'The teachers give us different work, so it's OK.'",
                "In winter, many students ski to school. 'It's quicker than walking,' explains Hannah. 'But when there's too much snow, the school closes and we have lessons online.'",
                "Next year, Hannah will move to a bigger school in the town in the valley. 'I'm excited, but a bit nervous too,' she says. 'I'll miss the mountains, but I'll come home every weekend.'",
              ],
            },
            items: [
              {
                question: "What does Hannah say about her village?",
                options: [
                  "It is near the sea.",
                  "It is sometimes higher than the clouds.",
                  "It has snow all year.",
                ],
                answer: 1,
              },
              {
                question: "What is unusual about Hannah's class?",
                options: [
                  "The students are of different ages.",
                  "There is only one teacher for the whole school.",
                  "It has more than twenty students.",
                ],
                answer: 0,
              },
              {
                question: "Why do some students ski to school?",
                options: [
                  "Their parents tell them to.",
                  "There are no roads.",
                  "It is faster.",
                ],
                answer: 2,
              },
              {
                question: "What happens when there is too much snow?",
                options: [
                  "The teachers ski to the students' houses.",
                  "Students study from home.",
                  "The students stay at the school.",
                ],
                answer: 1,
              },
              {
                question: "How does Hannah feel about next year?",
                options: [
                  "only sad",
                  "happy but also worried",
                  "not interested",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Giant pandas",
            text: [
              "Giant pandas are one of the world's most {1} animals. They live in the mountains of central China, where there are lots of bamboo forests.",
              "Pandas spend about twelve hours a day eating. An adult panda can {2} up to thirty-eight kilos of bamboo every day! They have a special bone in their hand that helps them {3} the bamboo.",
              "Fifty years ago, there were very few pandas left in the wild. Today, the {4} is better. There are more than 1,800 wild pandas, thanks to the hard {5} of scientists. Many pandas live in special parks where they are {6} from danger.",
            ],
            gaps: [
              {
                options: [
                  "liked",
                  "loved",
                  "enjoyed",
                ],
                answer: 1,
              },
              {
                options: [
                  "take",
                  "have",
                  "eat",
                ],
                answer: 2,
              },
              {
                options: [
                  "hold",
                  "catch",
                  "keep",
                ],
                answer: 0,
              },
              {
                options: [
                  "condition",
                  "situation",
                  "position",
                ],
                answer: 1,
              },
              {
                options: [
                  "work",
                  "job",
                  "practice",
                ],
                answer: 0,
              },
              {
                options: [
                  "secure",
                  "careful",
                  "safe",
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
              "Hi Sara,",
              "Thanks for your email. I'm glad you enjoyed your holiday. I've just come back {1} my grandparents' house in the country. I stayed there {2} two weeks. Every morning, I helped my grandpa with the animals.",
              "{3} you ever been to a farm? It's hard work, but it's fun. My grandma taught me how {4} make cheese! I'll bring some to school for you to try.",
              "We start school again next Monday. I can't believe the holidays are {5} over! See you {6} Monday.",
              "Lily",
            ],
            answers: [
              [
                "from",
              ],
              [
                "for",
              ],
              [
                "have",
              ],
              [
                "to",
              ],
              [
                "nearly",
                "almost",
                "already",
              ],
              [
                "on",
                "next",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have a new bike. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Describe your new bike.",
              "Say who gave it to you.",
              "Say where you want to ride it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nI've got a new bike! It's red and black and it's really fast. My parents gave it to me for my birthday. I want to ride it in the park near my house at the weekend. Do you want to come?\n\nBye,\nEmre",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🐕🌳",
                label: "1",
              },
              {
                e: "🐕🏃🐿️",
                label: "2",
              },
              {
                e: "👦🔍🐕😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last Sunday, Ben took his dog, Max, for a walk in the park. Suddenly, Max saw a squirrel and ran after it into the trees. Ben called him, but Max didn't come back. Ben looked for him for a long time and felt very worried. Finally, he found Max sitting under a tree, waiting for the squirrel to come down.",
          },
        },
      ],
    },
  ],
};
