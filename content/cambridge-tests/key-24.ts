import type { CambridgeTest } from "./types";

/** A2 Key practice test 24 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_24: CambridgeTest = {
  id: "key-24",
  level: "key",
  no: 24,
  title: "A2 Key · Practice Test 24",
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
                    "The swimming pool is closed this week.",
                    "PE lessons will be in the sports hall.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are no PE lessons this week.",
                  "PE will be in a different place this week.",
                  "Students must bring swimming things.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Dad, I've finished early at the library. Could you collect me at 5 instead of 6? Thanks! Sam",
                  ],
                },
                question: "What does Sam want his dad to do?",
                options: [
                  "pick him up earlier",
                  "bring him a book",
                  "come to the library at 6",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO SWIMMING",
                    "Strong currents. Dangerous water.",
                  ],
                },
                question: "Why can't you swim here?",
                options: [
                  "The beach is private.",
                  "The water is too cold.",
                  "The water is not safe.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ruby,",
                    "Can you bring your camera on the school trip? Mine is broken. I'll pay for any photos you print! Lucy",
                  ],
                },
                question: "What does Lucy want?",
                options: [
                  "Ruby to repair her camera",
                  "Ruby to buy her a camera",
                  "Ruby to bring her camera",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Return books here when the library is closed.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can give back books at any time.",
                  "The library is closed today.",
                  "You can't return books here.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DRAMA CLUB",
                    "New members wanted for our summer show!",
                    "Ages 12–16. No experience necessary.",
                  ],
                },
                question: "What do we know about the drama club?",
                options: [
                  "It is only for adults.",
                  "You don't need to have acted before.",
                  "It is full.",
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
                title: "George",
                text: "I'm a keen footballer. I play for a local team, and we train on Tuesday and Thursday evenings. I'm the goalkeeper. Last season, I didn't let in a single goal for five matches! A coach from a big club came to watch me last month. I'm hoping he'll ask me to join his academy.",
              },
              {
                title: "Hannah",
                text: "I love knitting. My grandmother taught me when I was eight. I've made scarves, hats and even a sweater for my dog! I also knit small blankets and give them to the hospital for new babies. I usually knit while I'm watching TV in the evening.",
              },
              {
                title: "Ryan",
                text: "I'm into science. I do experiments at home in the kitchen, with my parents' permission! I've made a volcano and a rocket from a plastic bottle. I watch science videos every day. My dream is to work for a space agency.",
              },
            ],
            items: [
              {
                text: "plays in a particular position?",
                answer: 0,
              },
              {
                text: "is hoping for an important opportunity?",
                answer: 0,
              },
              {
                text: "does their hobby while doing something else?",
                answer: 1,
              },
              {
                text: "makes things for people they don't know?",
                answer: 1,
              },
              {
                text: "needs to ask for permission?",
                answer: 2,
              },
              {
                text: "wants to work in space science?",
                answer: 2,
              },
              {
                text: "learned from a grandparent?",
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
              title: "A year without plastic",
              paragraphs: [
                "Last year, the Hill family from Bristol decided to live without plastic for one year. 'We saw a documentary about plastic in the sea,' explains fifteen-year-old Jack Hill. 'It was terrible. We wanted to do something.'",
                "At first, it was very difficult. 'Almost everything in the supermarket is in plastic,' says Jack. 'So we started shopping at markets and bringing our own bags and boxes.'",
                "The family also made their own things, like toothpaste and soap. 'Some of it was a disaster,' laughs Jack. 'My first toothpaste tasted horrible!'",
                "After a year, the family only had one small bag of plastic rubbish. 'Now we can't go back,' says Jack. 'It's easier than people think. Everyone should try it for a week.'",
              ],
            },
            items: [
              {
                question: "Why did the family decide to stop using plastic?",
                options: [
                  "They watched a film about the problem.",
                  "Their school told them to.",
                  "Plastic was too expensive.",
                ],
                answer: 0,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "finding a market",
                  "finding food without plastic",
                  "making their own bags",
                ],
                answer: 1,
              },
              {
                question: "What does Jack say about his first toothpaste?",
                options: [
                  "It was not very good.",
                  "It was better than shop toothpaste.",
                  "It was easy to make.",
                ],
                answer: 0,
              },
              {
                question: "What happened after a year?",
                options: [
                  "They stopped the project.",
                  "They started using plastic again.",
                  "They had very little plastic rubbish.",
                ],
                answer: 2,
              },
              {
                question: "What does Jack suggest?",
                options: [
                  "that people never go to supermarkets",
                  "that people make all their own food",
                  "that people try living without plastic for a short time",
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
            title: "Owls",
            text: [
              "Owls are birds that usually hunt at night. They have very big eyes, which help them see in the {1}. They can also turn their heads almost all the way round!",
              "Owls have excellent hearing. They can {2} a mouse moving under the snow. Their feathers are very soft, so they can fly {3} making any noise.",
              "There are about 200 kinds of owl in the world. They {4} on every continent except Antarctica. The smallest owl is only about thirteen centimetres tall, but the largest has wings that are almost two metres {5}. In many stories, owls are clever and wise. But in real life, they are not more {6} than other birds!",
            ],
            gaps: [
              {
                options: [
                  "black",
                  "night",
                  "dark",
                ],
                answer: 2,
              },
              {
                options: [
                  "hear",
                  "listen",
                  "sound",
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
              {
                options: [
                  "live",
                  "stay",
                  "exist",
                ],
                answer: 0,
              },
              {
                options: [
                  "long",
                  "large",
                  "wide",
                ],
                answer: 2,
              },
              {
                options: [
                  "clever",
                  "intelligent",
                  "quick",
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
              "Hi Ben,",
              "How {1} your holiday? I hope you had a great time! I stayed at home, but I had fun too.",
              "I went to the cinema with my cousins a few times, and I read three books. I also started {2} new hobby: rock climbing! There's a climbing wall at the sports centre, and I go there twice a week. It's really hard, {3} I love it.",
              "Would you like {4} try it with me? We could go together next Saturday. You don't need any special equipment because you can borrow {5} there. Let me know if you're {6}!",
              "Bye,",
              "Adam",
            ],
            answers: [
              [
                "was",
              ],
              [
                "a",
              ],
              [
                "but",
              ],
              [
                "to",
              ],
              [
                "it",
                "everything",
                "some",
                "them",
              ],
              [
                "free",
                "interested",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have a new pet. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say what kind of pet it is.",
              "Describe your pet.",
              "Say how you look after it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nI've got a new pet! It's a rabbit called Snowy. She's white with long ears and pink eyes. I give her fresh vegetables and water every day, and I clean her cage on Saturdays.\n\nBye,\nIrem",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👴🌳🍎",
                label: "1",
              },
              {
                e: "👦🪜🍎",
                label: "2",
              },
              {
                e: "👴👦🥧😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Grandpa had a big apple tree in his garden, but he was too old to climb up and pick the apples. His grandson, Tom, offered to help. He climbed a ladder and picked lots of red apples. Then they went into the kitchen and made an apple pie together. It was delicious, and Grandpa was very happy.",
          },
        },
      ],
    },
  ],
};
