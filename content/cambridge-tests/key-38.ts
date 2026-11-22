import type { CambridgeTest } from "./types";

/** A2 Key practice test 38 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_38: CambridgeTest = {
  id: "key-38",
  level: "key",
  no: 38,
  title: "A2 Key · Practice Test 38",
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
                    "New books every month!",
                    "Check the board by the entrance for this month's list.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed this month.",
                  "You must buy the new books.",
                  "You can find out about new books near the door.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Tom, can you water my plants while I'm on holiday? I'll leave the key under the mat. Thanks! Ann",
                  ],
                },
                question: "What does Ann want Tom to do?",
                options: [
                  "look after her plants",
                  "buy her some new plants",
                  "bring her key back",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO CYCLING",
                    "Please walk your bike through the town centre.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Bikes are not allowed in town.",
                  "You must not ride your bike here.",
                  "You can park your bike here.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "The football match on Saturday has been cancelled because of the snow. We'll play next week instead. Coach",
                  ],
                },
                question: "Why has the match been cancelled?",
                options: [
                  "because of the weather",
                  "because the coach is ill",
                  "because the other team can't come",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Free parking for customers for up to 3 hours.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Parking costs £3.",
                  "The car park closes at 3.",
                  "Customers can park without paying for a while.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "TUTOR AVAILABLE",
                    "Help with maths and science for secondary school students.",
                    "Evenings and weekends.",
                  ],
                },
                question: "What does the advertisement offer?",
                options: [
                  "a job at a school",
                  "books for students",
                  "extra lessons in some subjects",
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
                title: "Felix",
                text: "I love writing music. I play the piano and I compose songs for my school's choir. Last Christmas, the choir sang one of my songs at the end-of-term concert. My parents cried! I want to write music for films when I'm older.",
              },
              {
                title: "Hazel",
                text: "I'm a keen swimmer. I train with my club five mornings a week before school, from six to seven thirty. It's tiring, but I love racing. Last year, I swam for my region at the national championships. I didn't win, but I got my best time ever.",
              },
              {
                title: "Kyle",
                text: "I enjoy fixing old computers. People give me computers they don't want, and I repair them. Then I give them to families who can't afford one. So far, I've given away twelve computers. I learned how to do it from videos online and from my uncle, who's an engineer.",
              },
            ],
            items: [
              {
                text: "had their work performed?",
                answer: 0,
              },
              {
                text: "has a dream job?",
                answer: 0,
              },
              {
                text: "does their hobby before lessons?",
                answer: 1,
              },
              {
                text: "improved their personal record?",
                answer: 1,
              },
              {
                text: "helps people who don't have much money?",
                answer: 2,
              },
              {
                text: "learned from a relative and from the internet?",
                answer: 2,
              },
              {
                text: "represented their area?",
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
              title: "A school in the forest",
              paragraphs: [
                "At Oakwood Forest School, students spend one day every week learning outside in the woods. Eleven-year-old Mia loves it. 'It's my favourite day of the week,' she says.",
                "In the forest, the students learn about plants, animals and the weather. 'We build shelters, cook on fires and look for insects,' explains Mia. 'It's much more fun than sitting at a desk.'",
                "The students go outside in all weather, even when it's raining or snowing. 'You just need the right clothes,' says Mia. 'I wear waterproof trousers and boots.'",
                "The teachers say that forest school helps students to work together and solve problems. 'I've learned so much,' says Mia. 'I'm not scared of spiders any more!'",
              ],
            },
            items: [
              {
                question: "How often do students go to the forest?",
                options: [
                  "every day",
                  "once a week",
                  "once a month",
                ],
                answer: 1,
              },
              {
                question: "What do students do in the forest?",
                options: [
                  "They sit at desks.",
                  "They watch videos.",
                  "They do practical activities.",
                ],
                answer: 2,
              },
              {
                question: "What happens when the weather is bad?",
                options: [
                  "The students still go outside.",
                  "The students stay in the classroom.",
                  "The forest school closes.",
                ],
                answer: 0,
              },
              {
                question: "What do the teachers say about forest school?",
                options: [
                  "It is too dangerous.",
                  "It helps students cooperate.",
                  "It is only for young children.",
                ],
                answer: 1,
              },
              {
                question: "How has Mia changed?",
                options: [
                  "She's less afraid of insects.",
                  "She doesn't like the forest any more.",
                  "She has become a teacher.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Dolphins",
            text: [
              "Dolphins are some of the most {1} animals in the sea. They can learn tricks, solve problems and even recognise themselves in a mirror.",
              "Dolphins live in groups called pods. They {2} to each other using clicks and whistles. Each dolphin has its own special whistle, like a name.",
              "Dolphins are mammals, not fish. This means they breathe air and give birth to live babies. They have to {3} to the surface of the water to breathe. Dolphins love to play. They often jump out of the water and {4} the waves made by boats. Sadly, some kinds of dolphin are in danger because of pollution and fishing nets. Many people are {5} to protect them. If you're lucky, you might see dolphins in the wild. It's an amazing {6}!",
            ],
            gaps: [
              {
                options: [
                  "intelligent",
                  "wise",
                  "clear",
                ],
                answer: 0,
              },
              {
                options: [
                  "say",
                  "tell",
                  "talk",
                ],
                answer: 2,
              },
              {
                options: [
                  "go out",
                  "get in",
                  "come up",
                ],
                answer: 2,
              },
              {
                options: [
                  "ride",
                  "drive",
                  "catch",
                ],
                answer: 0,
              },
              {
                options: [
                  "doing",
                  "working",
                  "making",
                ],
                answer: 1,
              },
              {
                options: [
                  "experience",
                  "event",
                  "feeling",
                ],
                answer: 0,
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
              "Hi Jack,",
              "Guess what? I'm going {1} be in a TV programme! It's a quiz show for teenagers, and I'm in a team with two other students from my school.",
              "We had to do a test to get {2} the show. It was very difficult, but we passed! The filming is next month in London. We're going to stay in a hotel {3} two nights.",
              "I'm a bit nervous because I've never been {4} TV before. I hope I don't forget all the answers! The programme will be on TV in June. I'll tell you the date {5} you can watch it. Wish me {6}!",
              "Ben",
            ],
            answers: [
              [
                "to",
              ],
              [
                "on",
                "into",
              ],
              [
                "for",
              ],
              [
                "on",
              ],
              [
                "so",
              ],
              [
                "luck",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Your English friend, Charlie, is ill. Write an email to Charlie. Write 25 words or more.",
            prompts: [
              "Say you are sorry Charlie is ill.",
              "Tell Charlie some news from school.",
              "Offer to help Charlie.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nI'm really sorry you're ill. I hope you feel better soon! At school, we started a new art project today. If you want, I can bring you the homework tomorrow.\n\nTake care,\nEce",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🛍️🏪",
                label: "1",
              },
              {
                e: "👧👛⬇️🚶",
                label: "2",
              },
              {
                e: "👵👛👧😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last Saturday, Rosa went shopping in town. While she was walking, her purse fell out of her bag, but she didn't notice. An old woman saw it on the ground and picked it up. She ran after Rosa and gave it back to her. Rosa was very grateful and bought the woman a cup of coffee to say thank you.",
          },
        },
      ],
    },
  ],
};
