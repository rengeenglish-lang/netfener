import type { CambridgeTest } from "./types";

/** A2 Key practice test 23 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_23: CambridgeTest = {
  id: "key-23",
  level: "key",
  no: 23,
  title: "A2 Key · Practice Test 23",
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
                    "HOTEL",
                    "Please leave your key at reception when you go out.",
                  ],
                },
                question: "What should guests do?",
                options: [
                  "take their key with them",
                  "leave their key in the room",
                  "give their key to the hotel staff when they leave",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ella, I can't find the address of the party. Can you text it to me? Thanks. Jo",
                  ],
                },
                question: "What does Jo need?",
                options: [
                  "a lift to the party",
                  "information about where to go",
                  "an invitation",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLAYGROUND",
                    "For children under 12 only.",
                    "Adults must stay with their children.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Adults can use the playground.",
                  "Parents should not leave their children alone here.",
                  "Children over 12 are welcome.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear parents,",
                    "Please make sure your child brings a coat on Friday, as we'll be walking to the park. Mrs Wood",
                  ],
                },
                question: "What should the children bring on Friday?",
                options: [
                  "a packed lunch",
                  "some money",
                  "something warm to wear",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Back in 10 minutes.",
                    "Sorry for any trouble.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop assistant will return soon.",
                  "The shop is closed today.",
                  "The shop opens in the afternoon.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "YOGA FOR TEENS",
                    "Relax and get fit!",
                    "Thursdays 5 p.m. at the town hall. Bring a mat.",
                  ],
                },
                question: "What do you need to take to the class?",
                options: [
                  "special clothes",
                  "a mat",
                  "a towel",
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
                title: "Charlie",
                text: "I'm in the school choir. We practise every lunchtime on Mondays and Wednesdays. At Christmas, we sing in the town square and collect money for a homeless charity. Last year, we collected over £800! I also sing in my bedroom all the time, which my sister hates.",
              },
              {
                title: "Freya",
                text: "I love sailing. My family has a small boat, and we sail on the lake near our house every weekend in summer. Last year, I started racing. I came third in my first race! I want to sail across the sea to France one day.",
              },
              {
                title: "Noah",
                text: "My hobby is learning languages. I speak English and Polish, and now I'm learning Spanish and Japanese. I use apps on my phone every day and I watch films in other languages. I've got pen friends in Spain and Japan. We write to each other every week.",
              },
            ],
            items: [
              {
                text: "raises money for others?",
                answer: 0,
              },
              {
                text: "annoys a family member?",
                answer: 0,
              },
              {
                text: "does their hobby only at one time of year?",
                answer: 1,
              },
              {
                text: "has an ambition to travel?",
                answer: 1,
              },
              {
                text: "communicates with people abroad?",
                answer: 2,
              },
              {
                text: "uses technology every day?",
                answer: 2,
              },
              {
                text: "did well in their first competition?",
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
              title: "The library on wheels",
              paragraphs: [
                "In a small town in Wales, there's no library. So fourteen-year-old Megan Price decided to start one. 'I love reading,' she says. 'And I was sad that younger children in my town didn't have books.'",
                "Megan asked people to give her their old books. 'In two weeks, I had more than five hundred!' she says. Then her dad helped her turn an old trailer into a mobile library.",
                "Every Saturday, Megan and her dad drive the library to different villages. Children can borrow books for free. 'They get really excited when they see us coming,' says Megan.",
                "Megan's library has become very popular. A newspaper wrote a story about her, and now people from all over the country send her books. 'I'd like to become a librarian one day,' she says.",
              ],
            },
            items: [
              {
                question: "Why did Megan start the library?",
                options: [
                  "Children in her town had nowhere to borrow books.",
                  "She wanted to sell books.",
                  "Her school asked her to.",
                ],
                answer: 0,
              },
              {
                question: "How did Megan get books?",
                options: [
                  "She bought them.",
                  "Her dad wrote them.",
                  "People gave them to her.",
                ],
                answer: 2,
              },
              {
                question: "How did Megan's dad help?",
                options: [
                  "He gave her all his books.",
                  "He made a library from a trailer.",
                  "He read to the children.",
                ],
                answer: 1,
              },
              {
                question: "How do the children feel when the library arrives?",
                options: [
                  "nervous",
                  "very excited",
                  "bored",
                ],
                answer: 1,
              },
              {
                question: "What happened after the newspaper story?",
                options: [
                  "Megan stopped the library.",
                  "Megan got a job.",
                  "People in other places sent books.",
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
            title: "Snow",
            text: [
              "Snow is made of tiny pieces of ice called snowflakes. Snowflakes {1} when water in clouds becomes very cold and freezes.",
              "Every snowflake has six sides, but no two snowflakes are exactly the {2}. Some are like stars, and others are like small plates.",
              "Snow is usually white, but sometimes it can look blue or even pink! In some places, like the Arctic, there is snow all year {3}. In other places, it only snows in winter.",
              "Snow is very important for many animals. It keeps them warm in the cold weather, and some animals {4} under it. People also love playing in the snow. They go skiing, build snowmen and have snowball {5}. But too much snow can be dangerous. It can {6} roads and make driving difficult.",
            ],
            gaps: [
              {
                options: [
                  "make",
                  "build",
                  "form",
                ],
                answer: 2,
              },
              {
                options: [
                  "same",
                  "equal",
                  "like",
                ],
                answer: 0,
              },
              {
                options: [
                  "long",
                  "round",
                  "full",
                ],
                answer: 1,
              },
              {
                options: [
                  "sleep",
                  "dream",
                  "lie",
                ],
                answer: 0,
              },
              {
                options: [
                  "games",
                  "matches",
                  "fights",
                ],
                answer: 2,
              },
              {
                options: [
                  "stop",
                  "shut",
                  "block",
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
              "I hope you are well. I'm writing because I need your help {1} something. My mum's birthday is next week, and I want {2} buy her a present. But I don't know what to get!",
              "You always have great ideas. What do you think she would like? She loves gardening and reading, and she enjoys cooking {3} well.",
              "Could you come shopping with me {4} Saturday? We could go to the new shopping centre. Then we could have lunch together {5} the café there. Write back and tell me {6} you're free.",
              "Thanks,",
              "Lily",
            ],
            answers: [
              [
                "with",
              ],
              [
                "to",
              ],
              [
                "as",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "at",
                "in",
              ],
              [
                "if",
                "whether",
                "when",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going on holiday next week. Write an email to your English friend, Max. Write 25 words or more.",
            prompts: [
              "Say where you are going.",
              "Say who you are going with.",
              "Say what you will do there.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Max' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Max,\n\nNext week, I'm going on holiday to Antalya. I'm going with my parents and my little brother. We will swim in the sea every day and visit some old ruins.\n\nSee you when I get back,\nCan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧📚🏫",
                label: "1",
              },
              {
                e: "👧📝😰",
                label: "2",
              },
              {
                e: "👧📝🅰️😀",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last month, Ayşe had a very important maths test. She was worried, so she studied for two hours every evening for a week. On the day of the test, she felt very nervous, but she tried her best. A few days later, her teacher gave the tests back. Ayşe got the highest mark in the class! She was very proud of herself.",
          },
        },
      ],
    },
  ],
};
