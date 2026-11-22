import type { CambridgeTest } from "./types";

/** A2 Key practice test 33 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_33: CambridgeTest = {
  id: "key-33",
  level: "key",
  no: 33,
  title: "A2 Key · Practice Test 33",
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
                    "SCIENCE LAB",
                    "Do not eat or drink in this room.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can have lunch here.",
                  "Food is not allowed here.",
                  "Drinks are sold here.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Mia, I'm stuck in traffic. Can you start cooking dinner? There's pasta in the cupboard. Dad",
                  ],
                },
                question: "What does Dad want Mia to do?",
                options: [
                  "buy some pasta",
                  "wait for him to cook",
                  "begin making the meal",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THEME PARK",
                    "You must be 1.4 metres tall to go on this ride.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Short children can't use this ride.",
                  "Only adults can go on this ride.",
                  "Children must be with an adult.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "The yoga class is cancelled tonight because the teacher is ill. It will be on again next week. Sue",
                  ],
                },
                question: "Why is the class cancelled?",
                options: [
                  "The room isn't free.",
                  "The teacher isn't well.",
                  "Not enough people booked.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "All tickets £5 before 5 p.m.",
                  ],
                },
                question: "When are tickets cheaper?",
                options: [
                  "in the afternoon",
                  "at weekends",
                  "in the evening",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DOG WALKER",
                    "Busy? I'll walk your dog every day.",
                    "Experienced and reliable. £10 per walk.",
                  ],
                },
                question: "What does the advertisement offer?",
                options: [
                  "dogs for sale",
                  "dog training classes",
                  "someone to exercise your dog",
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
                title: "Poppy",
                text: "I've been playing the violin since I was five. I practise for two hours every day. Last year, I passed my grade eight exam with the highest mark. I play in a youth orchestra, and next summer we're going on tour to Japan. I'm so excited!",
              },
              {
                title: "Jacob",
                text: "I love mountain biking. I ride in the hills near my village every weekend with my friends. It's quite dangerous, so we always wear helmets and pads. Last month, I fell off and broke my wrist. I can't ride for six weeks, which is really frustrating.",
              },
              {
                title: "Sienna",
                text: "My hobby is reading. I read about three books a week, mostly fantasy and adventure stories. I've also started writing my own novel. It's about a girl who can talk to animals. I write a little every evening. My English teacher is helping me with it.",
              },
            ],
            items: [
              {
                text: "will travel abroad with a group?",
                answer: 0,
              },
              {
                text: "did very well in an exam?",
                answer: 0,
              },
              {
                text: "has been injured?",
                answer: 1,
              },
              {
                text: "can't do their hobby at the moment?",
                answer: 1,
              },
              {
                text: "is creating a long story?",
                answer: 2,
              },
              {
                text: "gets help from a teacher?",
                answer: 2,
              },
              {
                text: "does their hobby with friends?",
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
              title: "A different kind of holiday",
              paragraphs: [
                "Last summer, the Evans family didn't go to the beach for their holiday. Instead, they spent two weeks helping to build a school in a village in Kenya.",
                "'My parents wanted us to see a different way of life,' says fourteen-year-old Megan Evans. 'At first, I wasn't sure. I wanted to go somewhere relaxing!'",
                "The family worked with local people every day. 'We carried bricks and painted walls,' says Megan. 'It was hard work in the hot sun, but everyone was so friendly.'",
                "Megan made friends with a girl called Amani. 'She taught me some Swahili, and I taught her some English,' she says. 'We still write to each other. It was the best holiday ever. I'd love to go back.'",
              ],
            },
            items: [
              {
                question: "What did the family do in Kenya?",
                options: [
                  "They went on safari.",
                  "They helped to build a school.",
                  "They stayed at a beach hotel.",
                ],
                answer: 1,
              },
              {
                question: "How did Megan feel about the holiday at first?",
                options: [
                  "She was very excited.",
                  "She had doubts about it.",
                  "She was angry.",
                ],
                answer: 1,
              },
              {
                question: "What does Megan say about the work?",
                options: [
                  "It was easy.",
                  "It was boring.",
                  "It was difficult but the people were kind.",
                ],
                answer: 2,
              },
              {
                question: "What did Megan and Amani do?",
                options: [
                  "They taught each other languages.",
                  "They went to school together.",
                  "They painted pictures.",
                ],
                answer: 0,
              },
              {
                question: "How does Megan feel about the holiday now?",
                options: [
                  "She is glad it is over.",
                  "She thinks it was wonderful.",
                  "She wants to go to the beach next time.",
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
              "Football is the most popular sport in the world. More than 250 million people {1} it, and billions watch it on TV.",
              "Games similar to football were played in China more than 2,000 years ago. But the modern game started in England in the nineteenth century. The first official {2} were written in 1863.",
              "The biggest football competition is the World Cup. It takes {3} every four years. The first World Cup was in 1930 in Uruguay. Brazil has won the World Cup more times than any other country. Football is popular because it's easy to {4}. You only need a ball and some space. Children all over the world play it in streets, parks and {5}. Women's football is also becoming more and more popular, with millions of fans {6} the world.",
            ],
            gaps: [
              {
                options: [
                  "do",
                  "play",
                  "make",
                ],
                answer: 1,
              },
              {
                options: [
                  "rules",
                  "laws",
                  "orders",
                ],
                answer: 0,
              },
              {
                options: [
                  "part",
                  "time",
                  "place",
                ],
                answer: 2,
              },
              {
                options: [
                  "make",
                  "do",
                  "play",
                ],
                answer: 2,
              },
              {
                options: [
                  "playgrounds",
                  "fields",
                  "gardens",
                ],
                answer: 0,
              },
              {
                options: [
                  "about",
                  "around",
                  "over",
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
              "Hi Ella,",
              "Thank you for inviting me to stay with you {1} the summer. I'd love to come! My parents say I can stay {2} a week.",
              "I'm really excited about seeing your city. I've heard there are lots {3} interesting museums and parks. Could we go to the zoo? I love animals.",
              "What should I bring with me? Is it hot in the summer {4} you live? I'll bring my swimming things in case we go to the beach. Also, what does your family like? I'd like {5} bring them a present. Write back soon {6} tell me!",
              "Love,",
              "Lucy",
            ],
            answers: [
              [
                "in",
                "during",
                "for",
                "this",
              ],
              [
                "for",
              ],
              [
                "of",
              ],
              [
                "where",
              ],
              [
                "to",
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
            instruction: "You are going to a sports event next weekend. Write an email to your English friend, Robin. Write 25 words or more.",
            prompts: [
              "Say what the event is.",
              "Say who you are going with.",
              "Invite Robin to come too.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Robin' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Robin,\n\nNext Sunday, I'm going to watch a basketball match at the sports centre in the city. I'm going with my dad and my brother. Would you like to come with us? We have an extra ticket.\n\nBye,\nKaan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎂👩‍🍳",
                label: "1",
              },
              {
                e: "🎂🔥💨😱",
                label: "2",
              },
              {
                e: "👧🧁😊👨‍👩‍👧",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Ella wanted to make a birthday cake for her dad. She put it in the oven and then went to watch TV. She forgot about it, and soon there was smoke coming from the kitchen. The cake was burnt! Ella felt terrible. So she made some small cupcakes instead. Her dad loved them and said they were the best present ever.",
          },
        },
      ],
    },
  ],
};
