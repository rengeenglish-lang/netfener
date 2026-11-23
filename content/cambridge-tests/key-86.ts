import type { CambridgeTest } from "./types";

/** A2 Key practice test 86 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_86: CambridgeTest = {
  id: "key-86",
  level: "key",
  no: 86,
  title: "A2 Key · Practice Test 86",
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
                    "The school play has been cancelled because the main actor is ill.",
                  ],
                },
                question: "Why has the play been cancelled?",
                options: [
                  "The hall is closed.",
                  "Not enough people bought tickets.",
                  "An actor is unwell.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, I've baked too many cookies. Do you want some? I'll bring them to school tomorrow. Emma",
                  ],
                },
                question: "What is Emma offering?",
                options: [
                  "some cookies",
                  "to bake with Grace",
                  "a recipe",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MOUNTAIN PATH",
                    "Difficult walk. Wear strong shoes.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The path is easy.",
                  "You need good shoes for this path.",
                  "Shoes are not allowed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Leo,",
                    "The match on Saturday will start at 2 instead of 3. Please arrive at 1.30. Coach",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the start time",
                  "the place",
                  "the day",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Silent study area. No phones.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can make calls here.",
                  "This area is for groups.",
                  "Phones aren't allowed in this area.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FOR SALE",
                    "Children's bike, red, 5 years old. Good condition. £20.",
                  ],
                },
                question: "What do we know about the bike?",
                options: [
                  "It is new.",
                  "It costs £50.",
                  "It is in good condition.",
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
                title: "Ollie",
                text: "I love golf. My grandfather taught me to play when I was seven. Now I play every Saturday with him at a club near our town. Last year, I won the junior championship at our club. My grandfather was very proud of me.",
              },
              {
                title: "Sara",
                text: "My hobby is painting with watercolours. I paint flowers and birds. I go to an art class once a week. Last month, I had my first exhibition at the local library. I sold four paintings! I want to have a bigger exhibition next year.",
              },
              {
                title: "Jamie",
                text: "I'm a keen gamer. I play strategy games online with friends from all over the world. Last year, my team won an international online tournament. We won some money and new computers. My parents were surprised!",
              },
            ],
            items: [
              {
                text: "learned from a grandparent?",
                answer: 0,
              },
              {
                text: "won at a club?",
                answer: 0,
              },
              {
                text: "had their first exhibition?",
                answer: 1,
              },
              {
                text: "sold some work?",
                answer: 1,
              },
              {
                text: "plays with people from other countries?",
                answer: 2,
              },
              {
                text: "surprised their parents?",
                answer: 2,
              },
              {
                text: "goes to a class every week?",
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
              title: "A summer in Iceland",
              paragraphs: [
                "Last summer, sixteen-year-old Ben spent a month in Iceland with his uncle, who is a scientist. 'He studies volcanoes,' says Ben. 'I helped him collect information.'",
                "Ben saw lots of amazing things. 'I saw hot water shooting out of the ground,' he says. 'It's called a geyser. It was incredible!'",
                "In Iceland in summer, the sun doesn't go down at night. 'That was strange,' says Ben. 'It was light all the time. I found it hard to sleep at first.'",
                "The best part was seeing a volcano erupt. 'We watched from a safe distance,' says Ben. 'The lava was bright orange. It was the most amazing thing I've ever seen. Now I want to study geology.'",
              ],
            },
            items: [
              {
                question: "Who did Ben stay with?",
                options: [
                  "his parents",
                  "his uncle",
                  "his teacher",
                ],
                answer: 1,
              },
              {
                question: "What is a geyser?",
                options: [
                  "a type of volcano",
                  "a big lake",
                  "hot water coming out of the ground",
                ],
                answer: 2,
              },
              {
                question: "What did Ben find strange?",
                options: [
                  "It was light at night.",
                  "It was very cold.",
                  "There were no people.",
                ],
                answer: 0,
              },
              {
                question: "Where did they watch the volcano from?",
                options: [
                  "very close",
                  "a safe place",
                  "a plane",
                ],
                answer: 1,
              },
              {
                question: "What does Ben want to study?",
                options: [
                  "geology",
                  "biology",
                  "history",
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
            title: "Penguins",
            text: [
              "Penguins are birds that can't fly, but they are excellent swimmers. They use their wings like {1} to move through the water.",
              "There are eighteen kinds of penguin. They all live in the southern half of the world. The Emperor penguin is the {2}. It can be more than one metre tall.",
              "Penguins eat fish, squid and krill. They can dive very deep to catch their food. Some penguins can stay underwater for more than twenty minutes! Penguins live in big groups called colonies. In some colonies, there are more than a million penguins. Penguin parents take turns to look {3} their eggs and babies. Sadly, penguins are in danger because of climate change. The ice where they live is {4}. People also catch too many fish, so penguins can't find {5} food. Scientists are working hard to {6} penguins.",
            ],
            gaps: [
              {
                options: [
                  "flippers",
                  "feet up",
                  "hands up",
                ],
                answer: 0,
              },
              {
                options: [
                  "bigger",
                  "big",
                  "biggest",
                ],
                answer: 2,
              },
              {
                options: [
                  "for",
                  "at",
                  "after",
                ],
                answer: 2,
              },
              {
                options: [
                  "melting",
                  "burning",
                  "breaking up",
                ],
                answer: 0,
              },
              {
                options: [
                  "many",
                  "enough",
                  "lot",
                ],
                answer: 1,
              },
              {
                options: [
                  "protect",
                  "keep up",
                  "guard on",
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
              "Hi Emma,",
              "I'm writing to tell you about my new pet. It's a rabbit! Her name is Snowy, {1} she's white with grey ears.",
              "She lives {2} a big cage in our garden. Every day, I give her fresh vegetables and clean her cage. She loves carrots and lettuce.",
              "At the weekend, I let her run around the garden. She's very fast! Would you like {3} come and see her? You could come {4} Saturday afternoon. My mum says you can stay for dinner. Let me know {5} you can come. I'm sure you'll love {6}!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "and",
              ],
              [
                "in",
              ],
              [
                "to",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "if",
                "whether",
              ],
              [
                "her",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to have a picnic. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say where the picnic will be.",
              "Say what food you will take.",
              "Ask Sam to bring something.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nOn Sunday, I'm going to have a picnic in the park by the river. I'm going to take sandwiches, fruit and lemonade. Could you bring a ball so we can play football?\n\nBye,\nAli",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎸🎵",
                label: "1",
              },
              {
                e: "👦🎸💔😢",
                label: "2",
              },
              {
                e: "👦🎸🎁😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Tom loved playing the guitar. One day, he dropped it and it broke. He was very sad because he couldn't play anymore, and he didn't have enough money for a new one. His parents saw how sad he was. For his birthday, they gave him a new guitar. Tom was so happy that he played it all day.",
          },
        },
      ],
    },
  ],
};
