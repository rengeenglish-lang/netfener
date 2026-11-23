import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 9 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_9: CambridgeTest = {
  id: "preliminary-9",
  level: "preliminary",
  no: 9,
  title: "B1 Preliminary · Practice Test 9",
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
                    "SCHOOL OFFICE",
                    "Lost property not collected by the end of term will be given to charity.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost property is sold at the end of term.",
                  "Students should collect their lost things before the holidays.",
                  "The office is closed during the holidays.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, the match has been cancelled because the pitch is flooded. We'll play next Saturday instead. Coach",
                  ],
                },
                question: "Why has the match been cancelled?",
                options: [
                  "The coach is ill.",
                  "The other team can't come.",
                  "The ground is too wet.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Best before: see top of tin.",
                    "Once opened, transfer to a covered container and keep in the fridge.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't keep the food in the tin after opening it.",
                  "The food must be eaten immediately.",
                  "The date is on the bottom.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Thanks for offering to help at the charity sale. Could you bring some cakes and arrive at nine to help set up? Rachel",
                  ],
                },
                question: "What does Rachel ask Ella to do?",
                options: [
                  "sell the cakes",
                  "bring food and come early",
                  "organise the sale",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "TRAIN STATION",
                    "Due to engineering work, there will be no trains between Oakley and Westford this weekend. Buses will replace trains.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Passengers will need to take a bus for part of the journey.",
                  "There are no trains or buses this weekend.",
                  "Trains will be late this weekend.",
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
            instruction: "The young people below all want to do a part-time job. Read the descriptions of eight jobs. Decide which job would be the most suitable for each person.",
            options: [
              {
                title: "Café Assistant",
                text: "Serve drinks and cakes at a busy café. Weekends only. Must be friendly and able to work quickly.",
              },
              {
                title: "Dog Walker",
                text: "Walk dogs for busy owners in the afternoons. You must love animals and not mind bad weather.",
              },
              {
                title: "Library Helper",
                text: "Help put books on shelves and assist with children's reading sessions. Tuesday and Thursday evenings.",
              },
              {
                title: "Swimming Teacher Assistant",
                text: "Help teach young children to swim on Saturday mornings. You must be a strong swimmer.",
              },
              {
                title: "Shop Assistant",
                text: "Work in a sports shop on Saturdays. Some knowledge of sports equipment is useful.",
              },
              {
                title: "Tutor",
                text: "Help younger students with maths homework online. Flexible hours, work from home.",
              },
              {
                title: "Farm Worker",
                text: "Pick fruit on a local farm during the summer holidays. Early mornings, outdoor work.",
              },
              {
                title: "Leaflet Delivery",
                text: "Deliver leaflets to houses in your area. Work when you want. Good for people who like walking.",
              },
            ],
            items: [
              {
                text: "Can is very good at maths and wants to work from home in his free time.",
                answer: 5,
              },
              {
                text: "Defne loves animals and is free every afternoon after school.",
                answer: 1,
              },
              {
                text: "Mehmet plays lots of sports and knows a lot about equipment. He's free on Saturdays.",
                answer: 4,
              },
              {
                text: "Selin is a great swimmer and enjoys working with small children.",
                answer: 3,
              },
              {
                text: "Ece loves reading and is free on weekday evenings.",
                answer: 2,
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
              title: "A life in music",
              paragraphs: [
                "I started playing the violin when I was five, because my mother was a music teacher. At first, I hated practising. I wanted to play outside with my friends, not spend an hour every day doing scales.",
                "Everything changed when I was twelve. My mother took me to a concert by a famous orchestra. I'd never heard anything so beautiful. On the way home, I told her I wanted to play in an orchestra like that one day.",
                "From then on, I practised for three hours a day. It wasn't easy. Sometimes my fingers bled, and I often felt I wasn't making any progress. But my teacher always encouraged me.",
                "Last year, at the age of nineteen, I got a place in the same orchestra I'd seen when I was twelve. On my first night, I looked out at the audience and wondered if there was a young person there who would be inspired like I was.",
              ],
            },
            items: [
              {
                question: "Why did the writer start playing the violin?",
                options: [
                  "Her friends played.",
                  "Her mother was a music teacher.",
                  "She saw a concert.",
                  "Her school offered lessons.",
                ],
                answer: 1,
              },
              {
                question: "How did the writer feel about practising at first?",
                options: [
                  "She didn't like it.",
                  "She loved it.",
                  "She found it easy.",
                  "She didn't do any.",
                ],
                answer: 0,
              },
              {
                question: "What happened when the writer was twelve?",
                options: [
                  "She stopped playing the violin.",
                  "She joined an orchestra.",
                  "She went to a concert that changed her mind.",
                  "She met a famous musician.",
                ],
                answer: 2,
              },
              {
                question: "What does the writer say about practising for three hours?",
                options: [
                  "It was easy.",
                  "It was sometimes painful.",
                  "It was boring.",
                  "It was too short.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer think about on her first night?",
                options: [
                  "her mother",
                  "her old teacher",
                  "the music",
                  "young people in the audience",
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
            title: "The library under the sea",
            text: [
              "Off the coast of Portugal, divers can visit something very unusual: an underwater library. {1}",
              "The library was created by a local artist who wanted to make people think about the ocean. {2} The books are made of special plastic, so they don't get damaged by the water.",
              "Each 'book' contains information about the plants and animals that live in the area. {3} Divers can pick them up and read them while they swim.",
              "The project has been very popular with tourists. {4} Local schools also take students there to learn about marine life.",
              "The artist hopes the library will encourage people to protect the sea. {5} She is now planning a second library in another part of the coast.",
            ],
            sentences: [
              "Some of the pages also explain the dangers of pollution.",
              "Most visitors prefer the beach to the library.",
              "It's about ten metres below the surface, and you need diving equipment to get there.",
              "Fish and other sea creatures have also started living on the shelves.",
              "The library is open from Monday to Friday.",
              "She placed shelves on the sea floor and filled them with books.",
              "Unfortunately, the books are too heavy to lift.",
              "More than two thousand divers visited it in the first year.",
            ],
            answers: [
              2,
              5,
              0,
              7,
              3,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Ice skating",
            text: [
              "Ice skating is a popular winter activity in many countries. People have been skating on frozen lakes for {1} 3,000 years. The first skates were made from animal bones.",
              "Today, most people skate at indoor rinks, where the ice is kept {2} all year round. Beginners often hold onto the side of the rink until they feel more confident.",
              "Figure skating, where skaters perform jumps and spins to music, is one of the most popular events at the Winter Olympics. It requires a lot of strength and {3}. Speed skating is also very exciting. Skaters can {4} speeds of more than fifty kilometres an hour. If you want to try skating, it's a good idea to {5} a lesson first. And don't worry if you fall over; everyone does at the {6}!",
            ],
            gaps: [
              {
                options: [
                  "about",
                  "near",
                  "close",
                  "nearby",
                ],
                answer: 0,
              },
              {
                options: [
                  "freeze",
                  "froze",
                  "ice",
                  "frozen",
                ],
                answer: 3,
              },
              {
                options: [
                  "weight",
                  "balance",
                  "level",
                  "stand",
                ],
                answer: 1,
              },
              {
                options: [
                  "reach",
                  "get",
                  "arrive",
                  "make",
                ],
                answer: 0,
              },
              {
                options: [
                  "do",
                  "make",
                  "take",
                  "give",
                ],
                answer: 2,
              },
              {
                options: [
                  "starting",
                  "beginning",
                  "first",
                  "opening",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Volunteering at an animal shelter",
            text: [
              "Every Saturday, I volunteer at an animal shelter near my home. The shelter looks after dogs and cats {1} have been left by their owners.",
              "My job is to clean the cages, feed the animals and take the dogs {2} walks. It's hard work, but I love it.",
              "Some of the animals are very nervous when they arrive. It can take weeks {3} them to trust people. My favourite dog is called Biscuit. When he arrived, he was so scared that he wouldn't come out of his bed. Now he runs to me as {4} as I arrive. Last week, a family came to meet him, and they're going to give him a new home. I'll miss him, but I'm happy {5} him. I'd recommend volunteering to anyone {6} loves animals.",
            ],
            answers: [
              [
                "that",
                "which",
              ],
              [
                "for",
                "on",
              ],
              [
                "for",
              ],
              [
                "soon",
              ],
              [
                "for",
              ],
              [
                "who",
                "that",
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
              subject: "Summer holiday plans",
              lines: [
                "I'm so glad the school year is nearly over! [Me too!]",
                "What are you going to do during the summer holidays? [Tell Chris]",
                "I'm going to visit my cousins in London. Have you ever been there? [Answer]",
                "Shall we meet before I go? [Suggest when]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nMe too! I'm really tired and I'm looking forward to having a rest.\n\nThis summer, I'm going to spend two weeks at my grandparents' house by the sea. I'm also going to do a sailing course, which I'm really excited about because I've never sailed before.\n\nYou're lucky to be visiting London! I went there two years ago with my school. We visited the British Museum and went on the London Eye. You should definitely do those things.\n\nShall we meet next Saturday afternoon? We could go for a pizza.\n\nSee you soon,\nAyşe",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Technology in our lives",
              lines: [
                "How do you use technology every day?",
                "Do you think we use too much technology?",
                "What would life be like without it?",
                "Write an article and send it to us!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "Can we live without technology?\n\nLike most teenagers, I use technology all the time. I use my phone to talk to friends, listen to music and do research for homework. I also play games on my computer at the weekend.\n\nHowever, I think we sometimes use it too much. Many people look at their phones when they're with their friends, and they don't talk to each other properly.\n\nLife without technology would be very difficult, especially for school. But I think it would also be calmer. Maybe we should all try to have one day a week without screens. I'd like to try it!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Sarah knew that today was going to be different.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Sarah knew that today was going to be different. When she arrived at school, her teacher asked her to go to the head teacher's office.\n\nSarah was worried. She couldn't think of anything she had done wrong. She knocked on the door nervously and went in.\n\nThe head teacher was smiling. 'Sarah, I have some good news,' she said. 'Your story has won a national writing competition. The prize is a trip to London to meet some famous writers!'\n\nSarah couldn't believe it. She had almost forgotten about the competition. She ran home after school to tell her parents. It was the best day of her life.",
          },
        },
      ],
    },
  ],
};
