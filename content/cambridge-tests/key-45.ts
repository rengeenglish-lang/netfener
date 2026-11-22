import type { CambridgeTest } from "./types";

/** A2 Key practice test 45 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_45: CambridgeTest = {
  id: "key-45",
  level: "key",
  no: 45,
  title: "A2 Key · Practice Test 45",
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
                    "LIBRARY",
                    "Children's story time: every Monday at 10 a.m.",
                    "Free. No need to book.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must pay for story time.",
                  "Children can just come along to story time.",
                  "Story time is on Monday afternoons.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Mum, the school trip is £15, not £10. Can you give me the extra money tomorrow? Ella",
                  ],
                },
                question: "Why has Ella sent this message?",
                options: [
                  "She lost her money.",
                  "The trip has been cancelled.",
                  "The trip costs more than she thought.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "SHOPPING CENTRE",
                    "Lost children: please go to the information desk.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "There is a place where lost children can go.",
                  "Children aren't allowed here alone.",
                  "You can buy information here.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "I've finished with my old video games. Do you want any of them? You can come and choose. Jack",
                  ],
                },
                question: "What is Jack offering?",
                options: [
                  "to buy Tom's games",
                  "to give Tom some games",
                  "to lend Tom a console",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Barbecues allowed only in this area.",
                    "Please take your rubbish home.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You shouldn't leave any rubbish behind.",
                  "Barbecues are not allowed in the park.",
                  "There are bins for rubbish.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PHOTOGRAPHY COMPETITION",
                    "Theme: 'My Town'. Open to ages 11–18.",
                    "First prize: a new camera!",
                  ],
                },
                question: "What do we know about the competition?",
                options: [
                  "It is for adults.",
                  "You can take photos of anything.",
                  "The winner will get a camera.",
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
                title: "Oscar",
                text: "I'm crazy about trains. I've got a model railway in my bedroom with lots of tracks, trains and tiny buildings. I've been building it for four years. I also take photos of real trains at the station. My dream is to go on a train journey across Canada.",
              },
              {
                title: "Emily",
                text: "I love singing. I'm in a choir, and I also take singing lessons once a week. Last year, I sang a solo at a concert in front of five hundred people. I was terrified, but it went really well. I want to study music at university.",
              },
              {
                title: "Jamal",
                text: "My hobby is basketball. I play for a club, and we train three times a week. I'm quite tall, which helps! Last season, I was the top scorer in the team. A coach from a famous academy wants me to try out for their team next month.",
              },
            ],
            items: [
              {
                text: "has been working on something for years?",
                answer: 0,
              },
              {
                text: "would like to travel to another country?",
                answer: 0,
              },
              {
                text: "performed alone in front of a big audience?",
                answer: 1,
              },
              {
                text: "felt very nervous?",
                answer: 1,
              },
              {
                text: "has a physical advantage?",
                answer: 2,
              },
              {
                text: "has an opportunity coming soon?",
                answer: 2,
              },
              {
                text: "takes photos of their hobby?",
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
              title: "Teenagers and phones",
              paragraphs: [
                "A school in Scotland has tried something new: for one month, students weren't allowed to use their phones during the school day. Sixteen-year-old Kirsty thought it was a terrible idea at first.",
                "'I was really angry,' she admits. 'I use my phone for everything. I thought I would be so bored at lunchtime.'",
                "But after a week, things changed. 'We started talking to each other more,' says Kirsty. 'We played games and went for walks. I made new friends!'",
                "The teachers noticed that students were more focused in lessons. 'My grades got better,' says Kirsty. 'Now I don't use my phone as much, even at home. I feel more relaxed.'",
              ],
            },
            items: [
              {
                question: "What did the school do?",
                options: [
                  "It gave students new phones.",
                  "It stopped students using phones at school.",
                  "It closed for a month.",
                ],
                answer: 1,
              },
              {
                question: "How did Kirsty feel at first?",
                options: [
                  "She was happy.",
                  "She didn't like the idea.",
                  "She didn't care.",
                ],
                answer: 1,
              },
              {
                question: "What happened after a week?",
                options: [
                  "Students were bored.",
                  "Students stopped coming to school.",
                  "Students talked more.",
                ],
                answer: 2,
              },
              {
                question: "What did teachers notice?",
                options: [
                  "Students concentrated better.",
                  "Students were more tired.",
                  "Students were angry.",
                ],
                answer: 0,
              },
              {
                question: "How has Kirsty changed?",
                options: [
                  "She has bought a new phone.",
                  "She uses her phone less.",
                  "She doesn't talk to her friends.",
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
            title: "Giraffes",
            text: [
              "Giraffes are the tallest animals in the world. An adult giraffe can be up to six metres tall. That's {1} than a double-decker bus!",
              "Giraffes live in Africa, in areas with grass and trees. They use their long necks to {2} leaves at the tops of trees. Their tongues are about fifty centimetres long and are dark blue!",
              "Giraffes don't need much sleep. They usually sleep for only about thirty minutes a day, often standing up. Baby giraffes are about two metres tall when they are born. They can {3} up and walk within an hour. Every giraffe has a different pattern of spots on its skin, like a fingerprint. Giraffes are usually quiet animals, but they can {4} sounds like humming at night. Sadly, the number of giraffes is {5} because people are destroying their homes. Many organisations are working to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "higher",
                  "taller",
                  "longer",
                ],
                answer: 1,
              },
              {
                options: [
                  "reach",
                  "arrive",
                  "catch up",
                ],
                answer: 0,
              },
              {
                options: [
                  "get",
                  "rise",
                  "stand",
                ],
                answer: 2,
              },
              {
                options: [
                  "do",
                  "give",
                  "make",
                ],
                answer: 2,
              },
              {
                options: [
                  "falling",
                  "going",
                  "losing",
                ],
                answer: 0,
              },
              {
                options: [
                  "care",
                  "protect",
                  "guard",
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
              "Thank you so much {1} the lovely present! I love the necklace. I'm wearing it now.",
              "My birthday party was great. Ten friends came, and we went bowling. I was the worst player, {2} it was really fun! After that, we went back to my house and had pizza and cake.",
              "I'm sorry you couldn't come. I hope you're feeling better {3}. When can we meet? Maybe we could go shopping together next weekend. There's a new clothes shop {4} the high street. I've heard it's very good. Let me know {5} you're free. I miss you! See you {6}.",
              "Love,",
              "Zoe",
            ],
            answers: [
              [
                "for",
              ],
              [
                "but",
              ],
              [
                "now",
              ],
              [
                "on",
                "in",
              ],
              [
                "when",
                "if",
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
            instruction: "You want to sell something online. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say what you want to sell.",
              "Describe it.",
              "Say how much it costs.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nI want to sell my old guitar online. It's brown and it's in very good condition. I'm selling it for £50. Do you know anyone who wants to buy it?\n\nThanks,\nEmre",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🌊🏊",
                label: "1",
              },
              {
                e: "👧🏊🐬",
                label: "2",
              },
              {
                e: "👧🐬📸😍",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Mia went to the beach with her family. While she was swimming, she saw something grey in the water. At first, she was scared, but then she saw it was a dolphin! It swam next to her for a few minutes. Her dad took a photo from the beach. It was the most amazing day of her holiday.",
          },
        },
      ],
    },
  ],
};
