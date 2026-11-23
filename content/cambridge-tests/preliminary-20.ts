import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 20 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_20: CambridgeTest = {
  id: "preliminary-20",
  level: "preliminary",
  no: 20,
  title: "B1 Preliminary · Practice Test 20",
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
                    "The school will be closed on Monday for teacher training. Lessons will start again on Tuesday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are no lessons on Monday.",
                  "Teachers will be absent on Tuesday.",
                  "School will start late on Monday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Emma, my mum can drive us to the concert, but we'll need to leave at six. Can you be at my house by then? Lily",
                  ],
                },
                question: "What does Lily want Emma to do?",
                options: [
                  "drive to the concert",
                  "arrive at a certain time",
                  "buy concert tickets",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Once opened, use within one month.",
                    "Close the lid tightly after use.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You should use the product quickly after opening it.",
                  "The product lasts for a year after opening.",
                  "You should leave the lid open.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "The school trip to the museum is full. You're on the waiting list. I'll let you know if a place becomes free. Mr Black",
                  ],
                },
                question: "What does Mr Black tell Tom?",
                options: [
                  "He can't go on the trip.",
                  "He has a place on the trip.",
                  "He might get a place later.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Cyclists please use the path on the left. The path on the right is for walkers only.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Bicycles are not allowed in the park.",
                  "Cyclists and walkers should use different paths.",
                  "Everyone must use the left path.",
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
            instruction: "The young people below all want to join a sports club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Tennis Club",
                text: "Lessons for all levels on outdoor courts. Equipment can be borrowed. Weekday evenings.",
              },
              {
                title: "Swimming Squad",
                text: "Early morning training for competitive swimmers. Must swim 1,000 metres.",
              },
              {
                title: "Climbing Centre",
                text: "Indoor climbing wall with instructors. Open every day. Beginners welcome.",
              },
              {
                title: "Football Academy",
                text: "Training for serious players who want to play professionally. Trials required.",
              },
              {
                title: "Yoga Studio",
                text: "Relaxing classes to improve flexibility and reduce stress. All ages.",
              },
              {
                title: "Cycling Club",
                text: "Long rides in the countryside every Sunday. You need your own bike.",
              },
              {
                title: "Basketball Team",
                text: "Friendly team that plays in a local league. Training on Tuesday and Thursday.",
              },
              {
                title: "Martial Arts",
                text: "Learn karate and self-defence. Classes on Saturday mornings.",
              },
            ],
            items: [
              {
                text: "Elif has been feeling stressed about exams and wants to relax.",
                answer: 4,
              },
              {
                text: "Burak is a very good footballer and dreams of playing for a big team.",
                answer: 3,
              },
              {
                text: "Selin has her own bike and loves exploring the countryside.",
                answer: 5,
              },
              {
                text: "Mehmet wants to try a new sport and isn't afraid of heights.",
                answer: 2,
              },
              {
                text: "Asya wants to learn how to protect herself and is free on Saturdays.",
                answer: 7,
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
              title: "My life as a young farmer",
              paragraphs: [
                "I live on a dairy farm in the north of England. My family has been farming here for four generations, and I'm hoping to take over the farm one day.",
                "Every morning, I get up at five to help my dad milk the cows. We have two hundred of them, so it takes about two hours. Then I have breakfast and go to school. After school, I help with other jobs, like feeding the calves or cleaning the barns.",
                "It's hard work, and I don't have much free time. My friends often go to the cinema or shopping at the weekend, but I usually have to work. Sometimes I feel a bit jealous of them.",
                "But I love the farm. I love being outside and working with animals. I'm going to study agriculture at college next year. I want to learn new ways to make farming better for the environment, because I think that's the future.",
              ],
            },
            items: [
              {
                question: "How long has the writer's family been farming?",
                options: [
                  "for four generations",
                  "for two years",
                  "since last year",
                  "for a few months",
                ],
                answer: 0,
              },
              {
                question: "What does the writer do before school?",
                options: [
                  "feeds the calves",
                  "cleans the barns",
                  "helps with the milking",
                  "goes shopping",
                ],
                answer: 2,
              },
              {
                question: "How does the writer sometimes feel about her friends?",
                options: [
                  "angry",
                  "bored",
                  "jealous",
                  "sorry for them",
                ],
                answer: 2,
              },
              {
                question: "What does the writer love about the farm?",
                options: [
                  "working outside with animals",
                  "getting up early",
                  "having lots of free time",
                  "going to the cinema",
                ],
                answer: 0,
              },
              {
                question: "What does the writer want to learn at college?",
                options: [
                  "how to sell milk",
                  "how to be a vet",
                  "business",
                  "better farming methods for the environment",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A lighthouse hotel",
            text: [
              "On a small island off the coast of Scotland, an old lighthouse has been turned into a hotel. {1} It has only four bedrooms.",
              "The lighthouse was built in 1830 to warn ships about dangerous rocks. {2} When the light became automatic in 1998, the keepers left.",
              "For many years, the building was empty. {3} Then a couple from Edinburgh bought it and spent three years repairing it.",
              "Now guests can stay in rooms with amazing views of the sea. {4} In the evenings, they can climb to the top of the tower to watch the sunset.",
              "The island has no shops or restaurants, so the owners cook all the meals. {5} Many guests say it's the most peaceful place they have ever stayed.",
            ],
            sentences: [
              "The lighthouse is still working today with keepers.",
              "It's one of the most unusual hotels in Britain.",
              "They often see seals and dolphins from their windows.",
              "Most guests prefer to stay in the city.",
              "For more than 150 years, keepers lived there and looked after the light.",
              "The hotel has a big swimming pool.",
              "It slowly fell into bad condition.",
              "They use fish caught by local fishermen and vegetables from their own garden.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Chess",
            text: [
              "Chess is one of the oldest board games in the world. It probably {1} in India about 1,500 years ago and then spread to Persia and Europe.",
              "The game is played by two people on a board with sixty-four squares. Each player has sixteen pieces, and the aim is to trap the {2} king.",
              "Chess requires a lot of concentration and planning. Players need to think several moves {3}. Many schools teach chess because it helps children develop problem-solving skills. In recent years, computers have become very good at chess. In 1997, a computer {4} the world champion for the first time. Today, millions of people play chess online against people from all over the world. Some people play just for fun, while others {5} in international tournaments. The best players can play several games at the same time {6} looking at the boards!",
            ],
            gaps: [
              {
                options: [
                  "opened",
                  "began",
                  "made",
                  "did",
                ],
                answer: 1,
              },
              {
                options: [
                  "opponent",
                  "opposite",
                  "opposition",
                  "opponent's",
                ],
                answer: 3,
              },
              {
                options: [
                  "ahead",
                  "forward up",
                  "before",
                  "after",
                ],
                answer: 0,
              },
              {
                options: [
                  "won",
                  "passed",
                  "beat",
                  "defeated up",
                ],
                answer: 2,
              },
              {
                options: [
                  "fight",
                  "race",
                  "compete",
                  "play up",
                ],
                answer: 2,
              },
              {
                options: [
                  "without",
                  "except",
                  "unless",
                  "instead",
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
            title: "A week without my phone",
            text: [
              "Last month, my school organised a challenge: a week without mobile phones. I didn't think I {1} be able to do it, because I use my phone all the time.",
              "The first day was very strange. I kept reaching for my phone, even though it wasn't there. I felt bored and didn't know what to do {2} the bus.",
              "But by the third day, things were getting better. I started reading a book on the bus instead. I also talked to my family {3} more at dinner. My little sister and I played board games every evening, {4} we hadn't done for years. At the end of the week, I felt calmer and I'd slept much better. Now I try to put my phone away for an hour every evening. I'd recommend the challenge to everyone, {5} it showed me how much time I was wasting. Why don't you try it {6}?",
            ],
            answers: [
              [
                "would",
                "could",
              ],
              [
                "on",
              ],
              [
                "much",
              ],
              [
                "which",
                "something",
              ],
              [
                "because",
                "as",
                "since",
              ],
              [
                "too",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "A school trip",
              lines: [
                "Our class is going on a school trip next month. [Lucky you!]",
                "We can choose between a museum or a theme park. Which do you think is better? [Give your opinion]",
                "What should I bring with me? [Give advice]",
                "Have you ever been on a school trip? [Tell Alex]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nLucky you! School trips are always so much fun.\n\nI think you should choose the theme park. Museums are interesting, but a theme park is more exciting, and it's a great way to spend time with friends. You'll remember it for a long time!\n\nYou should bring a packed lunch, lots of water and some money for snacks. Don't forget to wear comfortable shoes, because you'll walk a lot. A raincoat might also be a good idea.\n\nLast year, my class went on a trip to an old castle. We learned about knights and had a picnic in the castle gardens. It was great!\n\nBye,\nAhmet",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! What makes a good friend?",
              lines: [
                "What qualities should a good friend have?",
                "Tell us about one of your friends.",
                "Why is friendship important?",
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
            sample: "The secret of friendship\n\nI think a good friend is someone you can trust completely. They should listen to you when you have problems and tell you the truth, even when it's difficult to hear.\n\nMy best friend, Deniz, is like that. We've known each other since we were five. When my grandfather died last year, Deniz was always there for me. She never got tired of listening.\n\nFriendship is important because life can be hard sometimes, and good friends make everything easier. They also make the happy times even better. I'm lucky to have a friend like Deniz.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Everyone in the village was talking about the new neighbours.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Everyone in the village was talking about the new neighbours. Nobody had seen them, but a big lorry had arrived at the empty house on the hill.\n\nMaya was curious, so she decided to take them some of her mother's cake. She knocked on the door nervously. An old man opened it and smiled warmly.\n\nInside, the house was full of strange musical instruments. The man explained that he was a famous musician who had moved to the village to find peace and quiet.\n\nHe offered to teach Maya to play the violin. Now she visits him every week, and they have become great friends.",
          },
        },
      ],
    },
  ],
};
