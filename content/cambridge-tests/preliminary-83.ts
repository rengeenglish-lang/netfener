import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 83 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_83: CambridgeTest = {
  id: "preliminary-83",
  level: "preliminary",
  no: 83,
  title: "B1 Preliminary · Practice Test 83",
  papers: [
    {
      id: "reading",
      name: "Reading",
      minutes: 45,
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
                    "Students can use the computer room at lunchtime.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The computer room is closed.",
                  "Only teachers can use computers.",
                  "Students can use computers at lunch.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've forgotten my lunch. Can you share yours with me? Lucy",
                  ],
                },
                question: "What does Lucy want?",
                options: [
                  "to buy lunch",
                  "some of Grace's lunch",
                  "to go home",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for vegetarians.",
                  ],
                },
                question: "Who shouldn't eat this?",
                options: [
                  "children",
                  "vegetarians",
                  "adults",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "The basketball match on Saturday has been cancelled. We'll play next week instead. Coach",
                  ],
                },
                question: "What has happened?",
                options: [
                  "The match is earlier.",
                  "The match is at a different place.",
                  "The match has been cancelled.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Tickets are cheaper on Tuesdays.",
                  ],
                },
                question: "When are tickets cheaper?",
                options: [
                  "on Tuesdays",
                  "at weekends",
                  "every day",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to choose a summer course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Sailing",
                text: "Learn to sail on the sea.",
              },
              {
                title: "Drama",
                text: "Act in a play.",
              },
              {
                title: "Coding",
                text: "Build your own app.",
              },
              {
                title: "Cooking",
                text: "Learn to cook Italian food.",
              },
              {
                title: "Art",
                text: "Learn to paint and draw.",
              },
              {
                title: "Music",
                text: "Learn to play the guitar.",
              },
              {
                title: "Sport",
                text: "Football, tennis and swimming.",
              },
              {
                title: "Science",
                text: "Experiments and robotics.",
              },
            ],
            items: [
              {
                text: "Elif wants to be an actress.",
                answer: 1,
              },
              {
                text: "Can wants to make an app.",
                answer: 2,
              },
              {
                text: "Zeynep loves the sea.",
                answer: 0,
              },
              {
                text: "Mert wants to learn the guitar.",
                answer: 5,
              },
              {
                text: "Asya loves cooking.",
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "A year abroad",
              paragraphs: [
                "Last year, I spent a year at a school in Canada. I lived with a Canadian family in a small town near Toronto.",
                "At first, it was very difficult. Everything was different: the food, the school and the weather. In winter, it was very cold, sometimes minus thirty degrees!",
                "My host family was very kind. They took me to lots of interesting places, like Niagara Falls. I also made friends at school. They taught me how to ice skate and play ice hockey.",
                "By the end of the year, my English had improved a lot. I'd also learned to be more independent. I still keep in touch with my host family and friends. I hope to go back to Canada one day.",
              ],
            },
            items: [
              {
                question: "Where did the writer stay?",
                options: [
                  "with a Canadian family",
                  "in a hotel",
                  "in a flat",
                  "in a school",
                ],
                answer: 0,
              },
              {
                question: "What was the weather like in winter?",
                options: [
                  "warm",
                  "rainy",
                  "hot",
                  "very cold",
                ],
                answer: 3,
              },
              {
                question: "Where did the host family take the writer?",
                options: [
                  "New York",
                  "Niagara Falls",
                  "the beach",
                  "the mountains",
                ],
                answer: 1,
              },
              {
                question: "What did the writer's friends teach her?",
                options: [
                  "ice skating",
                  "swimming",
                  "skiing",
                  "cooking",
                ],
                answer: 0,
              },
              {
                question: "What has the writer learned?",
                options: [
                  "to cook",
                  "to drive",
                  "to be more independent",
                  "to sail",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The longest train journey",
            text: [
              "The Trans-Siberian Railway in Russia is the longest railway in the world. {1} It goes from Moscow to Vladivostok, a distance of more than 9,000 kilometres.",
              "The journey takes about seven days. {2} The train passes through eight time zones.",
              "Passengers can see amazing scenery along the way. {3} The most beautiful part is Lake Baikal, the deepest lake in the world.",
              "The train has sleeping cabins and a restaurant. {4} Passengers can also buy food from people at the stations.",
              "Many tourists dream of travelling on the Trans-Siberian Railway. {5} It's one of the greatest train journeys in the world.",
            ],
            sentences: [
              "They say it's a once-in-a-lifetime experience.",
              "Passengers sleep on the train.",
              "The train is very fast.",
              "It was built more than a hundred years ago.",
              "Meals are served three times a day.",
              "Nobody travels on the train.",
              "They pass through forests, mountains and rivers.",
              "The journey is very short.",
            ],
            answers: [
              3,
              1,
              6,
              4,
              0,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Dolphins",
            text: [
              "Dolphins are very intelligent animals. They live in groups called pods and {1} with each other using clicks and whistles.",
              "Dolphins are mammals, which means they breathe air. They have to come to the surface of the water to breathe through a hole on the top of their heads.",
              "Dolphins are famous for being friendly and {2}. They often swim next to boats and jump out of the water. There are many stories of dolphins helping humans who were in danger at sea. Dolphins use a special {3} called echolocation to find food. They make sounds that bounce off objects. This helps them find fish in the dark. Sadly, dolphins face many {4}. Many are caught in fishing nets, and pollution is damaging their {5}. We need to {6} these amazing animals.",
            ],
            gaps: [
              {
                options: [
                  "communication",
                  "communicative",
                  "communicate",
                  "communicator",
                ],
                answer: 2,
              },
              {
                options: [
                  "play",
                  "playing",
                  "playful",
                  "player",
                ],
                answer: 2,
              },
              {
                options: [
                  "skill",
                  "skilful",
                  "skilled",
                  "skilfully",
                ],
                answer: 0,
              },
              {
                options: [
                  "dangerous",
                  "dangerously",
                  "endanger",
                  "dangers",
                ],
                answer: 3,
              },
              {
                options: [
                  "habit",
                  "habitats",
                  "habitat up",
                  "inhabit",
                ],
                answer: 1,
              },
              {
                options: [
                  "protect",
                  "protection",
                  "protective",
                  "protected",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My first concert",
            text: [
              "Last month, I went to my first concert. It was {1} famous pop singer, and I'd been waiting for months.",
              "The concert was in a big stadium. There were more than fifty thousand people! When the singer came on stage, everyone screamed.",
              "She sang all her famous songs, and I sang along {2} every one. There were amazing lights and fireworks. At one point, she came down from the stage and walked {3} the crowd. She was very close to me! I was so excited. The concert lasted two hours, but it felt {4} only ten minutes. When it finished, I was very tired but happy. I bought a T-shirt {5} a souvenir. It was the best night of my life. I can't wait {6} go to another concert.",
            ],
            answers: [
              [
                "a",
              ],
              [
                "to",
              ],
              [
                "through",
                "into",
                "among",
              ],
              [
                "like",
              ],
              [
                "as",
              ],
              [
                "to",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      minutes: 45,
      parts: [
        {
          title: "Part 1 · Email",
          task: {
            kind: "writing",
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A birthday party",
              lines: [
                "It's my birthday next week! [Happy birthday!]",
                "What should I do to celebrate? [Give ideas]",
                "What would be a good present? [Suggest something]",
                "Will you come to my party? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nHappy birthday in advance! I hope you have a fantastic day.\n\nTo celebrate, you could have a party at home with your friends. You could watch films, play games and eat lots of pizza. Or you could go bowling or to the cinema. If the weather is nice, a picnic in the park would be fun.\n\nI think a good present would be a book by your favourite author or some concert tickets. You could also ask for money to save for something special.\n\nOf course I'll come to your party! Just tell me when and where. I'll bring a present!\n\nBye,\nDeniz",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My best memory",
              lines: [
                "What is your best memory?",
                "What happened?",
                "Why is it special to you?",
                "Send us your article!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "A day at the circus\n\nMy best memory is when my grandfather took me to the circus when I was seven years old. It was my first time at a circus, and I was very excited.\n\nThere were clowns, acrobats and jugglers. My favourite part was the trapeze artists, who flew through the air high above us. I held my breath every time they jumped! My grandfather bought me candyfloss and a balloon.\n\nThis memory is special because my grandfather died two years ago. I remember how happy we were that day, laughing together. Whenever I think about it, I feel close to him. It reminds me to enjoy every moment with the people I love.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The old castle had been empty for a hundred years.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The old castle had been empty for a hundred years. Everyone in the village said it was haunted. But Emma didn't believe in ghosts.\n\nOne night, she decided to explore it with her torch. She climbed over the gate and walked inside. It was very dark and cold. She could hear the wind blowing through the broken windows.\n\nSuddenly, she heard footsteps behind her. She turned around quickly and shone her torch. It was an old man with a long white beard! 'What are you doing here?' he asked.\n\nThe man was the castle's caretaker. He showed Emma around and told her the castle's history. It wasn't haunted after all.",
          },
        },
      ],
    },
  ],
};
