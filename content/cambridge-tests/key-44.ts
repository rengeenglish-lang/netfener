import type { CambridgeTest } from "./types";

/** A2 Key practice test 44 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_44: CambridgeTest = {
  id: "key-44",
  level: "key",
  no: 44,
  title: "A2 Key · Practice Test 44",
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
                    "Uniform shop open Wednesdays 3–5 p.m.",
                  ],
                },
                question: "When can you buy school clothes?",
                options: [
                  "on one afternoon a week",
                  "every day",
                  "in the morning",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, the bus is very full. I'll get the next one, so I'll be at the café at 3.30. Mia",
                  ],
                },
                question: "Why will Mia be late?",
                options: [
                  "She missed the bus.",
                  "She couldn't get on the first bus.",
                  "She went to the wrong café.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MOUNTAIN PATH",
                    "Closed due to snow.",
                    "Please use the lower path.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "People should take a different path.",
                  "The path is open in winter.",
                  "You can walk in the snow.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Amy,",
                    "I'm going to the library to study this afternoon. Do you want to come with me? Kate",
                  ],
                },
                question: "Why has Kate written this email?",
                options: [
                  "to ask Amy for a book",
                  "to say the library is closed",
                  "to invite Amy to study with her",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOTEL",
                    "Check-out time is 11 a.m.",
                    "Late check-out available for £20.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must leave before 10.",
                  "You can leave after 11 if you pay extra.",
                  "Late check-out is free.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER SCHOOL",
                    "English courses for teenagers in Oxford.",
                    "Two or four weeks. Book now!",
                  ],
                },
                question: "What do we know about the course?",
                options: [
                  "It is for adults.",
                  "You can choose how long to stay.",
                  "It is in London.",
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
                title: "Thomas",
                text: "I love playing the drums. I'm in a band with three friends from school. We practise in my garage every Friday night. We've played at two school parties and a local festival. We're recording our first song next month at a real studio.",
              },
              {
                title: "Sophie",
                text: "My hobby is making pottery. I go to classes at an art centre every Thursday. I've made cups, plates and bowls. Some of them aren't very good, but I'm getting better! My family uses my bowls every day. I'd like to have my own pottery studio one day.",
              },
              {
                title: "Lucas",
                text: "I'm into rock climbing. I climb at an indoor centre twice a week. It's a great way to keep fit. Last year, I competed in the national youth championships and came tenth. My coach says I need to get stronger, so I'm doing extra training at the gym.",
              },
            ],
            items: [
              {
                text: "will soon do something for the first time?",
                answer: 0,
              },
              {
                text: "performs at events?",
                answer: 0,
              },
              {
                text: "makes things that family members use?",
                answer: 1,
              },
              {
                text: "hopes to have their own workplace?",
                answer: 1,
              },
              {
                text: "is working on getting fitter?",
                answer: 2,
              },
              {
                text: "took part in a national competition?",
                answer: 2,
              },
              {
                text: "practises at home?",
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
              title: "Saving a river",
              paragraphs: [
                "When fifteen-year-old Ben Hughes went fishing in his local river, he couldn't catch any fish. 'I used to catch lots of fish here,' he says. 'But now there were none. Something was wrong.'",
                "Ben told his science teacher, and they tested the water. 'We found that the water was very dirty,' explains Ben. 'A factory near the river was putting chemicals into it.'",
                "Ben wrote a letter to the local newspaper. Then he started a campaign online. 'Thousands of people signed my petition,' he says. 'Finally, the factory agreed to stop.'",
                "Now, two years later, the river is clean again. 'The fish have come back,' says Ben. 'I'm so happy. It shows that young people can change things.'",
              ],
            },
            items: [
              {
                question: "What did Ben notice about the river?",
                options: [
                  "The water was too cold.",
                  "It was very full.",
                  "There were no fish.",
                ],
                answer: 2,
              },
              {
                question: "Who did Ben go to for help first?",
                options: [
                  "his science teacher",
                  "the newspaper",
                  "the factory",
                ],
                answer: 0,
              },
              {
                question: "What was the problem with the river?",
                options: [
                  "There were too many fishermen.",
                  "A factory was polluting it.",
                  "It had no water.",
                ],
                answer: 1,
              },
              {
                question: "What happened after Ben's campaign?",
                options: [
                  "The factory stopped polluting.",
                  "Ben got a job at the factory.",
                  "The river was closed.",
                ],
                answer: 0,
              },
              {
                question: "What does Ben believe?",
                options: [
                  "Factories are always bad.",
                  "Fishing is the best hobby.",
                  "Young people can make a difference.",
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
            title: "Ice skating",
            text: [
              "Ice skating is a popular winter sport. People have been skating for thousands of years. The first skates were made from animal {1} and were used to travel across frozen lakes.",
              "Today, skates have metal blades. You can skate {2} outdoor lakes in winter or at indoor ice rinks all year round.",
              "There are many kinds of skating. Figure skaters do jumps and spins to music. Speed skaters {3} around a track as fast as they can. Ice hockey players skate while they try to hit a small puck into a goal. Skating is great {4}. It's good for your legs and your balance. But be careful! It's easy to fall over, so beginners should wear a helmet and {5} the edge of the rink until they feel more confident. With practice, you'll soon be able to skate {6} falling!",
            ],
            gaps: [
              {
                options: [
                  "skins",
                  "hairs",
                  "bones",
                ],
                answer: 2,
              },
              {
                options: [
                  "in",
                  "on",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "run",
                  "race",
                  "drive",
                ],
                answer: 1,
              },
              {
                options: [
                  "sport",
                  "training",
                  "exercise",
                ],
                answer: 2,
              },
              {
                options: [
                  "hold",
                  "catch",
                  "stand",
                ],
                answer: 0,
              },
              {
                options: [
                  "except",
                  "without",
                  "with",
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
              "I'm going to be in a play at my school next month! It's called 'The Lost Island'. I'm playing the part {1} a pirate. I have to wear a big hat and an eye patch!",
              "We practise every Monday and Wednesday after school. I have to learn {2} of lines. My mum helps me at home. She reads the other parts.",
              "The play is {3} the 20th and 21st of March. Would you like {4} come and watch? Tickets are £3. I can get one {5} you if you want. I really hope you can come. Write back {6} let me know.",
              "Love,",
              "Ruby",
            ],
            answers: [
              [
                "of",
              ],
              [
                "lots",
              ],
              [
                "on",
              ],
              [
                "to",
              ],
              [
                "for",
              ],
              [
                "and",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You went on a school trip last week. Write an email to your English friend, Chris. Write 25 words or more.",
            prompts: [
              "Say where you went.",
              "Say what you did there.",
              "Say what you liked best.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Chris' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Chris,\n\nLast week, my class went on a trip to a farm outside the city. We saw lots of animals and helped the farmer feed the goats. I liked the baby lambs best because they were so cute.\n\nBye,\nAda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦⚽🏃",
                label: "1",
              },
              {
                e: "⚽🥅👏",
                label: "2",
              },
              {
                e: "👦🏆😀",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday, Leo played in an important football match for his school team. The score was 1–1, and there were only two minutes left. Leo got the ball and ran towards the goal. He kicked it as hard as he could and scored! Everyone cheered. Leo's team won the cup, and he felt like a hero.",
          },
        },
      ],
    },
  ],
};
