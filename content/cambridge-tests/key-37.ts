import type { CambridgeTest } from "./types";

/** A2 Key practice test 37 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_37: CambridgeTest = {
  id: "key-37",
  level: "key",
  no: 37,
  title: "A2 Key · Practice Test 37",
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
                    "Lane 1 is for fast swimmers only.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lane 1 is closed.",
                  "One part of the pool is for quick swimmers.",
                  "Only children can use Lane 1.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Sophie, I'm at the bus stop. Have you left yet? The bus comes in 5 minutes. Hurry! Mia",
                  ],
                },
                question: "Why has Mia sent this message?",
                options: [
                  "to make sure Sophie isn't late",
                  "to say she has missed the bus",
                  "to tell Sophie to wait for her",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BUS STOP",
                    "Buses do not stop here on Sundays.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Buses only come on Sundays.",
                  "This bus stop is closed.",
                  "There is no bus service here on one day.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Emma,",
                    "Do you still want to sell your old bike? My brother is looking for one. Can he come and see it on Saturday? Rose",
                  ],
                },
                question: "What does Rose want to know?",
                options: [
                  "how much the bike costs",
                  "if her brother can look at the bike",
                  "if Emma wants to buy a bike",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Parents' evening: Thursday 6–8 p.m.",
                    "Please book a time with your child's teacher.",
                  ],
                },
                question: "What should parents do?",
                options: [
                  "come to school on Thursday morning",
                  "arrange a time to meet the teacher",
                  "call the school office",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "COOKING CLASSES",
                    "Learn to make Italian food!",
                    "Wednesday evenings. All ingredients provided.",
                  ],
                },
                question: "What do we know about the classes?",
                options: [
                  "They are on Mondays.",
                  "They are only for chefs.",
                  "You don't need to bring food.",
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
                title: "Ivy",
                text: "I love skateboarding. I go to the skate park every day after school. I've been skating for three years, and I can do lots of tricks now. Last summer, I entered my first competition and came fourth. I was a bit disappointed, but I'm practising hard for the next one.",
              },
              {
                title: "Rex",
                text: "My hobby is astronomy. My parents bought me a telescope for my birthday, and I use it every clear night. I've taken photos of the Moon and some planets. I'm in an online group for young astronomers, and we share our photos and talk about what we've seen.",
              },
              {
                title: "Clara",
                text: "I play the harp. It's a very big instrument, so I can't take it anywhere easily! I practise at home every day. I'm in a group with two violinists, and we play at weddings and special events. It's a nice way to earn some money.",
              },
            ],
            items: [
              {
                text: "wasn't happy with a result?",
                answer: 0,
              },
              {
                text: "does their hobby every day?",
                answer: 0,
              },
              {
                text: "got equipment as a present?",
                answer: 1,
              },
              {
                text: "communicates with others on the internet?",
                answer: 1,
              },
              {
                text: "has an instrument that is difficult to move?",
                answer: 2,
              },
              {
                text: "gets paid for their hobby?",
                answer: 2,
              },
              {
                text: "is preparing for a competition?",
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
              title: "The young beekeeper",
              paragraphs: [
                "When fourteen-year-old Ellie Brown was ten, she saw a programme about bees on TV. 'I learned that bees were disappearing,' she says. 'I wanted to help them.'",
                "So Ellie asked her parents for a beehive for her birthday. 'They were surprised,' she laughs. 'But they agreed, as long as I learned how to look after the bees properly.'",
                "Ellie took a beekeeping course and read lots of books. Now she has three hives in her garden. 'The bees are very calm,' she says. 'I've only been stung twice!'",
                "Every summer, Ellie collects about thirty jars of honey. She gives some to her neighbours and sells the rest. 'I spend the money on flowers for the bees,' she explains.",
              ],
            },
            items: [
              {
                question: "Why did Ellie want bees?",
                options: [
                  "to help them",
                  "to sell honey",
                  "to win a prize",
                ],
                answer: 0,
              },
              {
                question: "What did Ellie's parents say?",
                options: [
                  "She couldn't have bees.",
                  "She had to learn about bees first.",
                  "She had to pay for the hive herself.",
                ],
                answer: 1,
              },
              {
                question: "What does Ellie say about her bees?",
                options: [
                  "They are not aggressive.",
                  "They sting her often.",
                  "They are difficult to look after.",
                ],
                answer: 0,
              },
              {
                question: "What does Ellie do with the honey?",
                options: [
                  "She eats it all.",
                  "She sends it to a factory.",
                  "She gives some away and sells some.",
                ],
                answer: 2,
              },
              {
                question: "What does Ellie buy with her money?",
                options: [
                  "new hives",
                  "plants for the bees",
                  "books",
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
            title: "Trains",
            text: [
              "The first passenger railway in the world {1} in England in 1825. The trains used steam engines and travelled at about twenty-five kilometres an hour.",
              "Trains quickly became very popular. They made it possible for people to travel long {2} quickly and cheaply. Railways were built all over the world.",
              "Today, trains are much faster. In Japan, the 'bullet train' can {3} at more than 300 kilometres an hour. In China, some trains are even faster. Many people think trains are better for the environment than planes or cars, because they {4} less pollution. In Europe, more and more people are choosing to {5} by train instead of flying. Some trains even have beds, so you can sleep while you travel. It's a {6} way to see the world!",
            ],
            gaps: [
              {
                options: [
                  "began",
                  "opened",
                  "rose",
                ],
                answer: 1,
              },
              {
                options: [
                  "ways",
                  "distances",
                  "lengths",
                ],
                answer: 1,
              },
              {
                options: [
                  "drive",
                  "fly",
                  "travel",
                ],
                answer: 2,
              },
              {
                options: [
                  "produce",
                  "give",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "journey",
                  "travel",
                  "trip",
                ],
                answer: 1,
              },
              {
                options: [
                  "great",
                  "big",
                  "large",
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
              "Hi Ruby,",
              "I'm sorry, but I have {1} cancel our plans for Saturday. My grandma is ill, and we're going to visit her.",
              "I was really looking forward {2} going to the cinema with you. Could we go next weekend instead? The film will still be on.",
              "My mum says you can come {3} our house for dinner one evening next week too. She's going to make her famous lasagne! Let me know which day is best {4} you. I hope you're {5} too disappointed. See you {6} school on Monday.",
              "Love,",
              "Molly",
            ],
            answers: [
              [
                "to",
              ],
              [
                "to",
              ],
              [
                "to",
              ],
              [
                "for",
              ],
              [
                "not",
              ],
              [
                "at",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to take part in a school competition. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say what the competition is.",
              "Say how you are preparing for it.",
              "Say how you feel about it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nNext month, I'm taking part in a school science competition. I'm preparing by doing experiments at home every evening. I'm excited but also a bit nervous because there are lots of good students.\n\nBye,\nArda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🧳✈️",
                label: "1",
              },
              {
                e: "👨📷🗼",
                label: "2",
              },
              {
                e: "👨🏠🎁👧",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last month, Mr Black went to Paris for work. He stayed there for a week. In his free time, he visited the Eiffel Tower and took lots of photos. He also bought a present for his daughter. When he got home, he gave her a small model of the Eiffel Tower. She was very happy and put it on her shelf.",
          },
        },
      ],
    },
  ],
};
