import type { CambridgeTest } from "./types";

/** A2 Key practice test 34 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_34: CambridgeTest = {
  id: "key-34",
  level: "key",
  no: 34,
  title: "A2 Key · Practice Test 34",
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
                    "PLEASE NOTE",
                    "This shop will close at 3 p.m. on Christmas Eve.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop is closed at Christmas.",
                  "The shop opens at 3 p.m.",
                  "The shop will close early on one day.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Josh, can you bring your football to the park? I've lost mine. See you at 4. Harry",
                  ],
                },
                question: "What does Harry want Josh to do?",
                options: [
                  "help him find his football",
                  "buy a new football",
                  "bring something to the park",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE DO NOT DISTURB",
                    "Exam in progress.",
                  ],
                },
                question: "Why shouldn't you go into the room?",
                options: [
                  "Students are taking a test.",
                  "The room is being cleaned.",
                  "Teachers are having a meeting.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jessica,",
                    "I've got a new phone number. Please save it and delete the old one. Speak soon! Amy",
                  ],
                },
                question: "Why has Amy sent this email?",
                options: [
                  "to ask Jessica for her number",
                  "to give her new contact details",
                  "to say she lost her phone",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL OFFICE",
                    "Lost something? Check the lost property box by the main door.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost things are kept near the entrance.",
                  "You must pay to get lost things back.",
                  "The office has closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER SALE",
                    "All swimwear half price this week only!",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "All clothes are half price.",
                  "The sale is for the whole summer.",
                  "Swimming clothes are cheaper for a short time.",
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
                title: "Isaac",
                text: "I'm a big fan of computer programming. I go to a coding club at my school every Tuesday. I've created a simple app that helps students remember their homework. My classmates use it every day. I'd like to work for a big technology company one day.",
              },
              {
                title: "Ruby",
                text: "I love baking bread. My grandfather was a baker, and he taught me before he retired. Every Sunday, I bake bread for my whole family. I'm trying new recipes all the time. Last month, I made bread with olives and cheese. It was delicious!",
              },
              {
                title: "Theo",
                text: "I enjoy fishing in the sea. My uncle has a small boat, and we go out together during the summer holidays. We catch lots of different fish. My uncle has taught me the names of all of them. In winter, I read books about fish and the sea.",
              },
            ],
            items: [
              {
                text: "has made something that people at school use?",
                answer: 0,
              },
              {
                text: "has an idea for their career?",
                answer: 0,
              },
              {
                text: "does their hobby weekly?",
                answer: 1,
              },
              {
                text: "experiments with new ideas?",
                answer: 1,
              },
              {
                text: "only does their hobby at certain times of year?",
                answer: 2,
              },
              {
                text: "learns about their hobby from books?",
                answer: 2,
              },
              {
                text: "was taught by a grandparent?",
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
              title: "Running for a reason",
              paragraphs: [
                "Last month, thirteen-year-old Joe Peters ran ten kilometres every day for thirty days. He did it to raise money for a hospital that looked after his little brother.",
                "'My brother was very ill last year,' explains Joe. 'The doctors and nurses were amazing. I wanted to say thank you.'",
                "At first, running every day was very hard. 'After a week, my legs really hurt,' says Joe. 'But my friends started running with me, and that made it easier.'",
                "Joe hoped to raise £500, but he raised more than £8,000! 'I couldn't believe it,' he says. 'So many people gave money. The hospital is going to use it to buy toys and games for the children's ward.'",
              ],
            },
            items: [
              {
                question: "Why did Joe run every day?",
                options: [
                  "to collect money for a hospital",
                  "to win a race",
                  "to get fit",
                ],
                answer: 0,
              },
              {
                question: "Why did Joe choose that hospital?",
                options: [
                  "His mother works there.",
                  "It is near his house.",
                  "It had helped his brother.",
                ],
                answer: 2,
              },
              {
                question: "What helped Joe when running was hard?",
                options: [
                  "He got new shoes.",
                  "He ran more slowly.",
                  "His friends ran with him.",
                ],
                answer: 2,
              },
              {
                question: "How much money did Joe raise?",
                options: [
                  "much more than he expected",
                  "exactly £500",
                  "less than he hoped",
                ],
                answer: 0,
              },
              {
                question: "What will the hospital buy with the money?",
                options: [
                  "new beds",
                  "things for children to play with",
                  "medicine",
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
            title: "Volcanoes",
            text: [
              "A volcano is an opening in the Earth's surface. When a volcano erupts, hot liquid rock, gas and ash come out of it. The hot rock is {1} lava.",
              "There are about 1,500 active volcanoes in the world. Many of them are around the Pacific Ocean, in an area called the Ring of Fire. Some volcanoes {2} every few years, but others haven't erupted for thousands of years.",
              "Volcanoes can be very dangerous. In AD 79, a volcano called Vesuvius in Italy erupted and {3} the town of Pompeii. Today, scientists study volcanoes carefully so they can {4} people before an eruption. But volcanoes can also be useful. The ground near them is very good for {5} plants. In Iceland, people use the heat from volcanoes to {6} electricity and warm their homes.",
            ],
            gaps: [
              {
                options: [
                  "named",
                  "called",
                  "said",
                ],
                answer: 1,
              },
              {
                options: [
                  "erupt",
                  "explode",
                  "break",
                ],
                answer: 0,
              },
              {
                options: [
                  "broke",
                  "killed",
                  "destroyed",
                ],
                answer: 2,
              },
              {
                options: [
                  "tell",
                  "warn",
                  "inform",
                ],
                answer: 1,
              },
              {
                options: [
                  "making",
                  "growing",
                  "building",
                ],
                answer: 1,
              },
              {
                options: [
                  "do",
                  "give",
                  "produce",
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
              "I've just finished reading the book you lent me. It was brilliant! I couldn't stop reading it. I finished it {1} two days.",
              "My favourite character was the old wizard. He was {2} funny and clever. I didn't expect the ending at all. I was so surprised!",
              "Is there another book in the series? If there is, could I borrow {3} too? I'll give you this one back {4} school tomorrow. Also, have you read any other good books {5}? I need some ideas for the holidays. Thanks again {6} lending it to me!",
              "Sam",
            ],
            answers: [
              [
                "in",
              ],
              [
                "very",
                "really",
                "so",
              ],
              [
                "it",
              ],
              [
                "at",
              ],
              [
                "recently",
                "lately",
              ],
              [
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to borrow something from your English friend, Jo. Write an email to Jo. Write 25 words or more.",
            prompts: [
              "Say what you want to borrow.",
              "Say why you need it.",
              "Say when you will return it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nCould I borrow your tent, please? My family is going camping next weekend and our tent is broken. I will give it back to you on Monday after school.\n\nThanks a lot,\nEge",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎮📺",
                label: "1",
              },
              {
                e: "👦🎮😴🕐",
                label: "2",
              },
              {
                e: "👦🏫😩⏰",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Sunday night, Tom played video games until very late. He didn't go to bed until two o'clock in the morning. The next day, he didn't hear his alarm and woke up very late. He ran to school, but he was still late for his first lesson. He was very tired all day and decided to go to bed early from now on.",
          },
        },
      ],
    },
  ],
};
