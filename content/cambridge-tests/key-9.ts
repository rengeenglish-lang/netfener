import type { CambridgeTest } from "./types";

/** A2 Key practice test 9 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_9: CambridgeTest = {
  id: "key-9",
  level: "key",
  no: 9,
  title: "A2 Key · Practice Test 9",
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
                    "SWIMMING POOL",
                    "Please take a shower before you swim.",
                    "Lockers need a £1 coin – you get it back.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must pay £1 to swim.",
                  "You will get your money back after using a locker.",
                  "The showers are closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, my piano lesson has been moved to 5 o'clock, so I can't meet you at 5. Can we meet at 6.30 instead? Zoe",
                  ],
                },
                question: "Why has Zoe sent this message?",
                options: [
                  "to invite Grace to her piano lesson",
                  "to say she can't meet at all",
                  "to change the time they meet",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SUPERMARKET",
                    "Fresh bread every morning from 8 a.m.",
                    "Half price after 6 p.m.",
                  ],
                },
                question: "When is bread cheapest?",
                options: [
                  "in the evening",
                  "early in the morning",
                  "at lunchtime",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi everyone,",
                    "The art club will meet in Room 12, not the art room, this week. Bring your paintings from last week. Mr Ford",
                  ],
                },
                question: "What has changed?",
                options: [
                  "what the students need to bring",
                  "where the art club meets",
                  "the day of the art club",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "ZOO",
                    "Please do not feed the animals.",
                    "Animal food can make them ill.",
                  ],
                },
                question: "Why shouldn't you feed the animals?",
                options: [
                  "It's bad for their health.",
                  "They might bite you.",
                  "They have already eaten.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FOR SALE: Laptop, one year old, works perfectly.",
                    "Comes with case. £200. Email Lisa.",
                  ],
                },
                question: "What do we know about the laptop?",
                options: [
                  "It has some problems.",
                  "It is brand new.",
                  "It is sold with something to carry it in.",
                ],
                answer: 2,
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
                title: "Jake",
                text: "I love climbing. There's an indoor climbing wall at my local sports centre, and I go there three times a week. In the summer, my dad and I climb real rocks in the mountains. It's more exciting but also more dangerous, so we're always very careful.",
              },
              {
                title: "Mia",
                text: "I write stories. I've written more than twenty, mostly about animals and adventures. I write in a notebook every evening before bed. Last year, my teacher sent one of my stories to a competition, and it won first prize. I got a book token and my story was printed in a magazine.",
              },
              {
                title: "Sam",
                text: "I play the drums in the school orchestra. I started when I was nine. I practise at home every day, but my neighbours don't like the noise, so I use special quiet drums. Our orchestra played at the town hall last Christmas. It was amazing!",
              },
            ],
            items: [
              {
                text: "does their hobby in two different places?",
                answer: 0,
              },
              {
                text: "does their hobby at the end of the day?",
                answer: 1,
              },
              {
                text: "uses special equipment so other people aren't disturbed?",
                answer: 2,
              },
              {
                text: "won a prize?",
                answer: 1,
              },
              {
                text: "does their hobby with a parent?",
                answer: 0,
              },
              {
                text: "performed at a special time of year?",
                answer: 2,
              },
              {
                text: "got help from a teacher?",
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
              title: "A summer in the forest",
              paragraphs: [
                "Last summer, sixteen-year-old Maya Lopez spent six weeks working as a volunteer in a national park in Canada. 'I wanted to do something different,' she says. 'And I've always loved nature.'",
                "Maya stayed in a wooden cabin with five other volunteers. Every day, they repaired paths, picked up rubbish and counted birds. 'The work was tiring, but it was great to be outside all day,' she says.",
                "One afternoon, Maya saw a black bear near the river. 'I was frightened at first,' she remembers. 'But it wasn't interested in me. It was catching fish. I watched it for ten minutes. It was incredible.'",
                "Maya made good friends with the other volunteers, who came from different countries. 'We still talk every week,' she says. 'Next year, I want to go back and work in the park again.'",
              ],
            },
            items: [
              {
                question: "Why did Maya become a volunteer?",
                options: [
                  "She needed money.",
                  "She wanted a new experience.",
                  "Her school told her to.",
                ],
                answer: 1,
              },
              {
                question: "What did Maya think of the work?",
                options: [
                  "It was boring.",
                  "It made her tired, but she enjoyed it.",
                  "It was too easy.",
                ],
                answer: 1,
              },
              {
                question: "How did Maya feel when she saw the bear?",
                options: [
                  "angry",
                  "bored",
                  "scared, then amazed",
                ],
                answer: 2,
              },
              {
                question: "What do we learn about the other volunteers?",
                options: [
                  "They were from several countries.",
                  "They were all Canadian.",
                  "They were older than Maya.",
                ],
                answer: 0,
              },
              {
                question: "What does Maya want to do next year?",
                options: [
                  "visit her friends' countries",
                  "return to the same park",
                  "get a job in a city",
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
            title: "Football",
            text: [
              "Football is the most popular sport in the world. Millions of people play it, and billions {1} it on TV. Nobody knows exactly where it started, but people played games with a ball in China more than 2,000 years ago.",
              "The modern rules of football were {2} in England in 1863. Since then, the game has spread all over the world. The first World Cup {3} place in Uruguay in 1930, and Uruguay won.",
              "Today, the World Cup happens every four years. It's one of the biggest sports {4} on Earth. Football is popular because it's easy to play. You don't need much {5}, just a ball and some space. Children all over the world play it in parks, streets and {6}.",
            ],
            gaps: [
              {
                options: [
                  "see",
                  "watch",
                  "look",
                ],
                answer: 1,
              },
              {
                options: [
                  "written",
                  "done",
                  "said",
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
                  "matches",
                  "races",
                  "events",
                ],
                answer: 2,
              },
              {
                options: [
                  "equipment",
                  "things",
                  "tools",
                ],
                answer: 0,
              },
              {
                options: [
                  "gardens",
                  "playgrounds",
                  "fields",
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
            title: "A postcard",
            text: [
              "Dear Grandma,",
              "We're having a wonderful time {1} Spain! The weather is hot and sunny every day. Our hotel is right next to the beach, {2} we go swimming every morning.",
              "Yesterday we visited an old castle on a hill. It was very old, more than 800 years! We had lunch in a small restaurant and I tried paella {3} the first time. It was delicious.",
              "Tomorrow we're going {4} take a boat trip to see dolphins. I hope we see {5}! I'll show you all my photos when we get back {6} Sunday.",
              "Love, Ella",
            ],
            answers: [
              [
                "in",
              ],
              [
                "so",
                "and",
              ],
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "some",
                "them",
                "one",
                "lots",
              ],
              [
                "on",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Your class is having a party at the end of term. Write an email to your English friend, Robin. Write 25 words or more.",
            prompts: [
              "Say when the party is.",
              "Say what you will do at the party.",
              "Say what you are going to wear.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Robin' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Robin,\n\nOur class is having a party next Friday afternoon. We're going to play games, listen to music and eat lots of food. I'm going to wear my new blue shirt and jeans.\n\nSee you,\nAyşe",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🌧️🏠",
                label: "1",
              },
              {
                e: "👧📺🛋️",
                label: "2",
              },
              {
                e: "☀️👧🚲",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday morning, it was raining, so Lily couldn't go out. She was bored at home. First, she watched a film on TV and ate some popcorn. Then she read her favourite book. In the afternoon, the rain stopped and the sun came out. Lily was very happy. She got her bike and rode to the park to meet her friends.",
          },
        },
      ],
    },
  ],
};
