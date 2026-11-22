import type { CambridgeTest } from "./types";

/** A2 Key practice test 83 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_83: CambridgeTest = {
  id: "key-83",
  level: "key",
  no: 83,
  title: "A2 Key · Practice Test 83",
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
                    "SCHOOL",
                    "Students may not leave school at lunchtime without permission.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can leave anytime.",
                  "There's no lunch break.",
                  "Students need permission to go out at lunch.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Kate, I've just arrived at the airport. My flight is on time. See you in two hours! Lucy",
                  ],
                },
                question: "What does Lucy tell Kate?",
                options: [
                  "Her flight is cancelled.",
                  "Her flight is not late.",
                  "She's missed her flight.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SLOW DOWN",
                    "Children crossing.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Children shouldn't cross here.",
                  "Drivers should be careful of children.",
                  "There's a school bus stop.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Shall we cycle to the lake on Sunday instead of taking the bus? The weather will be good. Dan",
                  ],
                },
                question: "What does Dan suggest?",
                options: [
                  "going to a different place",
                  "going on Saturday",
                  "travelling a different way",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Free bags for shopping over £50.",
                  ],
                },
                question: "Who can get a free bag?",
                options: [
                  "people who spend more than £50",
                  "everyone",
                  "nobody",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "CHESS LESSONS",
                    "Learn to play chess with a champion!",
                    "Beginners welcome. £10 per lesson.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "They are free.",
                  "People who have never played can join.",
                  "They are only for good players.",
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
                title: "Isabel",
                text: "I love running. I'm in the athletics club at school. My best event is the 400 metres. Last month, I ran in the national championships and came fourth. I was a bit disappointed, but my coach said I did very well.",
              },
              {
                title: "Harry",
                text: "My hobby is fishing. I go fishing with my grandfather every weekend. He's taught me everything I know. We always put the fish back. My favourite place is a quiet lake in the mountains. I love the peace and quiet there.",
              },
              {
                title: "Lucy",
                text: "I'm interested in fashion. I draw designs for clothes and make some of them myself. Last year, I entered a fashion design competition and won. My dress was shown at a fashion show in London. I want to study fashion design at university.",
              },
            ],
            items: [
              {
                text: "felt disappointed with a result?",
                answer: 0,
              },
              {
                text: "competed at a national level?",
                answer: 0,
              },
              {
                text: "learned from a grandparent?",
                answer: 1,
              },
              {
                text: "likes quiet places?",
                answer: 1,
              },
              {
                text: "had their work shown at an event?",
                answer: 2,
              },
              {
                text: "knows what they want to study?",
                answer: 2,
              },
              {
                text: "lets animals go free?",
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
              title: "A hotel made of ice",
              paragraphs: [
                "In the north of Sweden, there is a hotel made completely of ice and snow. Every winter, it is built again, and every spring, it melts.",
                "'Everything is made of ice,' says hotel guide Anna. 'The walls, the beds, the chairs and even the glasses in the bar!' The temperature inside is always about minus five degrees.",
                "Guests sleep on ice beds covered with animal skins. They wear special warm clothes and sleep in thick sleeping bags. 'Most people only stay one night,' laughs Anna. 'It's an amazing experience, but it's very cold!'",
                "Artists from all over the world come to design the rooms. Each room is different. 'One year, there was a room that looked like the inside of a whale,' says Anna. 'Every year, the hotel is a surprise.'",
              ],
            },
            items: [
              {
                question: "What happens to the hotel in spring?",
                options: [
                  "It melts.",
                  "It closes for cleaning.",
                  "It gets bigger.",
                ],
                answer: 0,
              },
              {
                question: "What is the temperature inside?",
                options: [
                  "very warm",
                  "about zero degrees",
                  "about minus five degrees",
                ],
                answer: 2,
              },
              {
                question: "How long do most guests stay?",
                options: [
                  "one week",
                  "one night",
                  "one month",
                ],
                answer: 1,
              },
              {
                question: "Who designs the rooms?",
                options: [
                  "the guests",
                  "artists from different countries",
                  "Anna",
                ],
                answer: 1,
              },
              {
                question: "What does Anna say about the hotel?",
                options: [
                  "It is always the same.",
                  "It is too cold to visit.",
                  "It is different every year.",
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
            title: "Football",
            text: [
              "Football is the most popular sport in the world. About four billion people {1} football, either playing or watching it.",
              "The modern game started in England in the 1860s. The first international match was between England and Scotland in 1872. It {2} 0–0!",
              "The FIFA World Cup is the biggest football competition. It happens every four years. Brazil has won the World Cup five times, more than any {3} country. Women's football is also very popular. The first Women's World Cup was in 1991. Today, millions of girls {4} football all over the world. Football is a simple game. You only {5} a ball and some space. That's why it's so popular in poor countries as well as rich ones. Many famous players started playing football in the streets when they were {6}.",
            ],
            gaps: [
              {
                options: [
                  "see up",
                  "look",
                  "follow",
                ],
                answer: 2,
              },
              {
                options: [
                  "finished",
                  "ended up",
                  "stopped",
                ],
                answer: 0,
              },
              {
                options: [
                  "another",
                  "other",
                  "others",
                ],
                answer: 1,
              },
              {
                options: [
                  "play",
                  "do",
                  "make",
                ],
                answer: 0,
              },
              {
                options: [
                  "want up",
                  "have up",
                  "need",
                ],
                answer: 2,
              },
              {
                options: [
                  "younger",
                  "youth",
                  "young",
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
              "I hope you're having a great holiday in Italy! I'm writing because I need {1} help.",
              "I'm making a costume for the school play, but I'm not very good {2} sewing. You're really good at it! Could you help me when you get back?",
              "The play is in two weeks, {3} I don't have much time. I need to make a pirate costume with a big hat and a long coat. If you can help, I'll buy you lunch {4} say thank you! Let me know when you're back. Enjoy the rest of your holiday. Speak {5} you {6}!",
              "Love,",
              "Lily",
            ],
            answers: [
              [
                "your",
                "some",
              ],
              [
                "at",
              ],
              [
                "so",
              ],
              [
                "to",
              ],
              [
                "to",
              ],
              [
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have finished a big school project. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say what the project was about.",
              "Say how long it took.",
              "Say how you feel now.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nI've just finished a big school project about the history of my town. It took me three weeks to finish it. I feel really happy and relieved now!\n\nBye,\nMert",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧📱🚶",
                label: "1",
              },
              {
                e: "👧📱🌳💥",
                label: "2",
              },
              {
                e: "👧🤕📵😅",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Lily was walking home from school and looking at her phone. She wasn't looking where she was going, and she walked into a tree! She hurt her head, and her friends laughed. Lily laughed too, but she learned an important lesson. Now she always puts her phone in her bag when she's walking.",
          },
        },
      ],
    },
  ],
};
