import type { CambridgeTest } from "./types";

/** A2 Key practice test 72 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_72: CambridgeTest = {
  id: "key-72",
  level: "key",
  no: 72,
  title: "A2 Key · Practice Test 72",
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
                    "CAFÉ",
                    "Please order at the counter.",
                    "We'll bring your food to your table.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must collect your food.",
                  "You order at the counter and staff will bring the food.",
                  "Waiters will take your order at the table.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, are you coming to the party? Everyone's here! Don't forget to bring the music. Zoe",
                  ],
                },
                question: "What does Zoe remind Lucy to do?",
                options: [
                  "bring something",
                  "buy a present",
                  "come early",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE DO NOT SIT ON THE WALL",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The wall is new.",
                  "You can sit here.",
                  "Don't sit on the wall.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "My dad can drive us to the football match on Saturday. We'll pick you up at 1. Ben",
                  ],
                },
                question: "What is Ben's dad going to do?",
                options: [
                  "play in the match",
                  "buy tickets",
                  "take them to the match",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "The library will close early today at 3 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library will close earlier than usual today.",
                  "The library is closed all day.",
                  "The library opens at 3 p.m.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "LOST: Silver watch near the park on Sunday.",
                    "Reward for anyone who finds it.",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "A watch is for sale.",
                  "The owner will give something to the finder.",
                  "Someone found a watch.",
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
                title: "Lily",
                text: "I'm a keen runner. I run with a club three times a week. Last year, I ran my first half marathon and finished in under two hours! I'm now training for a full marathon. My mum and I are going to run it together next spring.",
              },
              {
                title: "Jake",
                text: "My hobby is music production. I make electronic music on my computer. I've put some songs online, and lots of people listen to them. A DJ in my town played one of my songs at a club last month! I'd love to make music for films.",
              },
              {
                title: "Mia",
                text: "I love painting. I paint landscapes and animals. I go to an art class every Saturday. Last summer, I sold some of my paintings at a market. I made enough money to buy a new set of paints. My art teacher thinks I should apply to art school.",
              },
            ],
            items: [
              {
                text: "is training for a big event?",
                answer: 0,
              },
              {
                text: "will do something with a parent?",
                answer: 0,
              },
              {
                text: "had their work played in public?",
                answer: 1,
              },
              {
                text: "hopes to make music for movies?",
                answer: 1,
              },
              {
                text: "sold their work?",
                answer: 2,
              },
              {
                text: "has been advised to continue studying?",
                answer: 2,
              },
              {
                text: "goes to a class every week?",
                answer: 2,
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
              title: "Saving the sea turtles",
              paragraphs: [
                "Every summer, sixteen-year-old Diego volunteers on a beach in Mexico. He helps to protect sea turtle eggs.",
                "'Sea turtles come to the beach at night to lay their eggs in the sand,' explains Diego. 'But people and animals sometimes dig up the eggs. So we move them to a safe place.'",
                "When the baby turtles are born, Diego helps them get to the sea. 'They're so small,' he says. 'They need to reach the water quickly, before birds catch them.'",
                "Diego has helped thousands of baby turtles. 'It's the best feeling in the world when you see them swim away,' he says. 'I want to study marine biology at university so I can protect turtles all my life.'",
              ],
            },
            items: [
              {
                question: "When do turtles lay their eggs?",
                options: [
                  "at night",
                  "in the morning",
                  "in the afternoon",
                ],
                answer: 0,
              },
              {
                question: "Why do volunteers move the eggs?",
                options: [
                  "to sell them",
                  "to keep them safe",
                  "to study them",
                ],
                answer: 1,
              },
              {
                question: "What do baby turtles need to do quickly?",
                options: [
                  "get to the sea",
                  "eat food",
                  "find their mother",
                ],
                answer: 0,
              },
              {
                question: "How does Diego feel when the turtles swim away?",
                options: [
                  "sad",
                  "worried",
                  "very happy",
                ],
                answer: 2,
              },
              {
                question: "What does Diego want to do in the future?",
                options: [
                  "be a teacher",
                  "work in a hotel",
                  "study sea animals",
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
            title: "The Olympic Games",
            text: [
              "The Olympic Games are the biggest sports event in the world. Athletes from more than 200 countries {1} part.",
              "The ancient Olympic Games started in Greece about 2,800 years ago. They were held every four years in a place called Olympia. Only men could {2} part, and the winners got a crown made of olive leaves.",
              "The modern Olympic Games started in 1896 in Athens. Today, there are Summer and Winter Olympics. The Summer Games {3} sports like swimming, athletics and gymnastics. The Winter Games have sports like skiing and ice skating. The Olympic flag has five coloured rings. They {4} the five continents of the world coming together. Athletes train for many years to {5} in the Olympics. For many of them, winning a gold medal is the biggest {6} of their lives.",
            ],
            gaps: [
              {
                options: [
                  "make",
                  "have",
                  "take",
                ],
                answer: 2,
              },
              {
                options: [
                  "take",
                  "make",
                  "have",
                ],
                answer: 0,
              },
              {
                options: [
                  "contain up",
                  "include",
                  "hold up",
                ],
                answer: 1,
              },
              {
                options: [
                  "represent",
                  "show up",
                  "mean up",
                ],
                answer: 0,
              },
              {
                options: [
                  "fight",
                  "play up",
                  "compete",
                ],
                answer: 2,
              },
              {
                options: [
                  "win up",
                  "achievement",
                  "success up",
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
              "Hi Tom,",
              "I'm sorry I haven't written {1} a long time. I've been really busy with school and football.",
              "Our team is doing really well this season. We've won six matches and lost only one. I've scored five goals! The coach says I'm the best player {2} the team.",
              "Next month, we're playing in a big tournament in another city. We'll stay in a hotel {3} two nights. I'm so excited! What about you? Are you still playing basketball? Write back and tell me {4} your news. I hope you're well. Say hello {5} your family {6} me.",
              "Bye,",
              "Ben",
            ],
            answers: [
              [
                "for",
              ],
              [
                "in",
                "on",
              ],
              [
                "for",
              ],
              [
                "all",
                "about",
              ],
              [
                "to",
              ],
              [
                "from",
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to invite your English friend, Chris, to a concert. Write an email to Chris. Write 25 words or more.",
            prompts: [
              "Say who is playing.",
              "Say when and where it is.",
              "Say how much the tickets are.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Chris' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Chris,\n\nWould you like to come to a concert with me? My favourite pop singer is playing at the city stadium next Friday evening. Tickets cost £25 each.\n\nBye,\nGül",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩📚🏫",
                label: "1",
              },
              {
                e: "👩👩‍🏫📝😟",
                label: "2",
              },
              {
                e: "👩🎓😊👨‍👩‍👧",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Anna always wanted to go to university, but her family didn't have much money. So she worked hard at school and studied every evening. In her last year, she took a very difficult exam. She was very nervous, but she did her best. A few months later, she got a letter. She had won a place at university and a scholarship to pay for it! Her family was very proud.",
          },
        },
      ],
    },
  ],
};
