import type { CambridgeTest } from "./types";

/** A2 Key practice test 46 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_46: CambridgeTest = {
  id: "key-46",
  level: "key",
  no: 46,
  title: "A2 Key · Practice Test 46",
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
                    "SCHOOL HALL",
                    "Concert tickets on sale at lunchtime this week.",
                    "£4 adults, £2 children.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Tickets are only sold after school.",
                  "The concert is free.",
                  "Children's tickets are cheaper.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ben, I'm going to be home late. Please take the dog for a walk when you get back from school. Mum",
                  ],
                },
                question: "What does Mum want Ben to do?",
                options: [
                  "feed the dog",
                  "wait for her at school",
                  "exercise the dog",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SKATE PARK",
                    "Helmets must be worn.",
                    "No bikes allowed.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Skaters have to protect their heads.",
                  "Bikes and skateboards are welcome.",
                  "Helmets can be hired here.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jo,",
                    "I'm having problems with my laptop. Can your brother look at it? He's good with computers. Kim",
                  ],
                },
                question: "What does Kim want?",
                options: [
                  "to borrow Jo's laptop",
                  "help from Jo's brother",
                  "to sell her laptop",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "TRAIN",
                    "This train does not stop at Bridge Street.",
                    "Change at Central Station.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Passengers for Bridge Street need another train.",
                  "Bridge Street station is closed.",
                  "This train only goes to Bridge Street.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "GARDEN HELP",
                    "Grass cutting, weeding and planting.",
                    "Reasonable prices. Call Pete.",
                  ],
                },
                question: "What does Pete offer?",
                options: [
                  "to sell plants",
                  "to teach gardening",
                  "to do garden work",
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
                title: "Ellie",
                text: "I love writing stories. I write every day in a notebook. Last year, I sent a story to a competition for young writers, and it won second prize. The prize was a day with a famous author. She gave me lots of good advice. I'm now writing my first novel.",
              },
              {
                title: "Jake",
                text: "I'm into motorbikes. I can't ride one yet because I'm too young, but I help my uncle repair old motorbikes in his garage. I've learned a lot about engines. When I'm seventeen, I'm going to take my test. My uncle has promised to give me one of his bikes.",
              },
              {
                title: "Priya",
                text: "I play cricket for a girls' team. We practise twice a week in summer. I'm the best bowler in the team. Last summer, we won the county cup. Cricket is getting more popular with girls in my area, and our team has doubled in size this year.",
              },
            ],
            items: [
              {
                text: "spent time with a professional?",
                answer: 0,
              },
              {
                text: "is working on a big project?",
                answer: 0,
              },
              {
                text: "isn't old enough to do something yet?",
                answer: 1,
              },
              {
                text: "has been promised a gift?",
                answer: 1,
              },
              {
                text: "is the best at one skill in a group?",
                answer: 2,
              },
              {
                text: "plays a sport that more people are trying?",
                answer: 2,
              },
              {
                text: "does their hobby every day?",
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
              title: "A different kind of school",
              paragraphs: [
                "Fourteen-year-old Noah goes to school on a ship. The school sails around the world for a year, and students study while they travel.",
                "'We have normal lessons in the morning,' explains Noah. 'But in the afternoon, we help sail the ship. I've learned to tie knots, read maps and steer the boat.'",
                "When the ship stops in a new country, the students go on trips. 'We've visited eleven countries so far,' says Noah. 'My favourite was Brazil. We went to the rainforest and saw monkeys and parrots.'",
                "Life on the ship isn't always easy. 'Sometimes the sea is rough and people feel ill,' says Noah. 'And I miss my family. But it's the best experience of my life. I've grown up a lot.'",
              ],
            },
            items: [
              {
                question: "What is unusual about Noah's school?",
                options: [
                  "It is on a ship.",
                  "It has no teachers.",
                  "It is only open in summer.",
                ],
                answer: 0,
              },
              {
                question: "What do students do in the afternoon?",
                options: [
                  "study maths",
                  "sleep",
                  "help with the ship",
                ],
                answer: 2,
              },
              {
                question: "What did Noah enjoy most?",
                options: [
                  "sailing in storms",
                  "studying on the ship",
                  "visiting a rainforest",
                ],
                answer: 2,
              },
              {
                question: "What is difficult about life on the ship?",
                options: [
                  "Bad weather can make people sick.",
                  "The food is bad.",
                  "There are no trips.",
                ],
                answer: 0,
              },
              {
                question: "How has Noah changed?",
                options: [
                  "He wants to go home.",
                  "He has become more mature.",
                  "He doesn't like travelling.",
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
            title: "The Northern Lights",
            text: [
              "The Northern Lights are one of nature's most beautiful {1}. They are colourful lights that appear in the night sky in places near the North Pole, like Norway, Iceland and Canada.",
              "The lights are usually green, but they can also be pink, red or purple. They {2} when tiny pieces from the Sun hit the gases in the Earth's air.",
              "The best time to see the Northern Lights is in winter, when the nights are long and dark. You need a clear sky with no {3}. Many tourists travel to the far north every year to see them. Some people stay in special hotels with glass roofs, so they can {4} the lights from their beds! In the past, people told many stories about the lights. Some {5} they were the spirits of animals. Today, we know the science, but they are still {6} to see.",
            ],
            gaps: [
              {
                options: [
                  "views",
                  "sights",
                  "shows",
                ],
                answer: 1,
              },
              {
                options: [
                  "happen",
                  "make",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "rains",
                  "winds",
                  "clouds",
                ],
                answer: 2,
              },
              {
                options: [
                  "look",
                  "watch",
                  "view at",
                ],
                answer: 1,
              },
              {
                options: [
                  "knew",
                  "believed",
                  "learned",
                ],
                answer: 1,
              },
              {
                options: [
                  "amazed",
                  "amazement",
                  "amazing",
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
              "Hi Max,",
              "How was your weekend? I went {1} a football match with my dad on Saturday. Our team won 3–0! It was so exciting.",
              "We sat very close to the field, {2} we could see the players really well. After the match, I got a photo {3} my favourite player. He was really friendly.",
              "Next month, there's another match. Would you like {4} come with us? My dad says he can get an extra ticket. The match is {5} Saturday afternoon. Let me know {6} you want to come.",
              "See you,",
              "Leo",
            ],
            answers: [
              [
                "to",
              ],
              [
                "so",
              ],
              [
                "with",
                "of",
              ],
              [
                "to",
              ],
              [
                "on",
              ],
              [
                "if",
                "whether",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to start a new hobby. Write an email to your English friend, Jamie. Write 25 words or more.",
            prompts: [
              "Say what the hobby is.",
              "Say why you chose it.",
              "Say what equipment you need.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nI'm going to start rock climbing! I chose it because I want to do something exciting and get fitter. I need special shoes and a harness, but I can borrow them at the climbing centre.\n\nBye,\nMert",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦📱🛋️",
                label: "1",
              },
              {
                e: "👦📱🔋❌",
                label: "2",
              },
              {
                e: "👦📚😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One evening, Tom was playing games on his phone on the sofa. Suddenly, the battery died and he couldn't find his charger. At first, he was bored and didn't know what to do. Then he saw an old book on the shelf. He started reading it and it was really interesting. He read until bedtime and forgot all about his phone.",
          },
        },
      ],
    },
  ],
};
