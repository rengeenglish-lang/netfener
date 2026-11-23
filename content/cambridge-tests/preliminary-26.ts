import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 26 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_26: CambridgeTest = {
  id: "preliminary-26",
  level: "preliminary",
  no: 26,
  title: "B1 Preliminary · Practice Test 26",
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
                    "SCHOOL TRIP",
                    "The coach will leave at 7.30 a.m. sharp. Anyone who is late will not be able to join the trip.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The coach will wait for late students.",
                  "The trip starts in the afternoon.",
                  "Students must arrive on time to go on the trip.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lisa, I've got two spare tickets for the theatre on Friday. Would you and your sister like them? Anna",
                  ],
                },
                question: "What is Anna offering?",
                options: [
                  "tickets for a show",
                  "a lift to the theatre",
                  "to meet Lisa's sister",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Serve chilled.",
                    "Best enjoyed within 3 days of opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It should be heated before drinking.",
                  "It's best to drink it cold.",
                  "It can be kept for weeks after opening.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "The volleyball training is now on Mondays instead of Thursdays, because the hall is being used on Thursdays. Coach",
                  ],
                },
                question: "Why has the training day changed?",
                options: [
                  "The hall isn't available on Thursdays.",
                  "The coach is busy on Thursdays.",
                  "More players are free on Mondays.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free Wi-Fi for customers. Ask staff for the password.",
                  ],
                },
                question: "How can customers use the internet?",
                options: [
                  "by paying at the counter",
                  "by bringing their own router",
                  "by getting the password from staff",
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
            instruction: "The young people below all want to join a website for teenagers. Read the descriptions of eight websites. Decide which website would be the most suitable for each person.",
            options: [
              {
                title: "PenPals Online",
                text: "Connect with teenagers from other countries and practise languages by writing messages.",
              },
              {
                title: "Young Writers",
                text: "Share your stories and poems and get comments from other writers.",
              },
              {
                title: "Science Questions",
                text: "Ask any science question and get answers from real scientists.",
              },
              {
                title: "Craft Corner",
                text: "Videos showing how to make things from recycled materials.",
              },
              {
                title: "Film Fans",
                text: "Reviews and discussions about the latest films.",
              },
              {
                title: "Healthy Teens",
                text: "Advice on exercise, healthy eating and sleep.",
              },
              {
                title: "Volunteer Now",
                text: "Find local volunteering opportunities for young people.",
              },
              {
                title: "Space Watch",
                text: "Live videos from telescopes and news about space missions.",
              },
            ],
            items: [
              {
                text: "Ece wants to improve her Spanish by talking to people in Spain.",
                answer: 0,
              },
              {
                text: "Kerem wants to help people in his community in his free time.",
                answer: 6,
              },
              {
                text: "Lale has written some poems and wants to know what others think of them.",
                answer: 1,
              },
              {
                text: "Burak likes making things and wants to use old bottles and boxes.",
                answer: 3,
              },
              {
                text: "Mert wants to get fitter and eat better.",
                answer: 5,
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
              title: "A summer without screens",
              paragraphs: [
                "Last summer, my parents sent me to a camp in the mountains where phones, tablets and computers were not allowed. I was fifteen, and I was horrified. How could I survive for three weeks without my phone?",
                "The first few days were very difficult. I kept reaching for my pocket, and I felt anxious that I was missing messages from my friends. The other campers felt the same, so we complained together.",
                "Then something changed. Without screens, we started talking to each other properly. We went hiking, swam in the lake and played music around the campfire in the evenings. I learned to play the guitar from one of the counsellors.",
                "By the end of the camp, I didn't want to go home. I'd made some of the best friends of my life, and I felt healthier and happier than I had for years. Now I try to spend at least one day a week without my phone.",
              ],
            },
            items: [
              {
                question: "How did the writer feel about going to the camp?",
                options: [
                  "shocked",
                  "excited",
                  "calm",
                  "pleased",
                ],
                answer: 0,
              },
              {
                question: "What did the campers do in the first few days?",
                options: [
                  "They went hiking.",
                  "They played music.",
                  "They complained together.",
                  "They phoned their friends.",
                ],
                answer: 2,
              },
              {
                question: "What happened when the campers stopped thinking about screens?",
                options: [
                  "They became bored.",
                  "They started talking more.",
                  "They went home.",
                  "They argued.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer learn at the camp?",
                options: [
                  "to swim",
                  "to cook",
                  "to take photos",
                  "to play an instrument",
                ],
                answer: 3,
              },
              {
                question: "How has the writer changed?",
                options: [
                  "She has stopped using her phone completely.",
                  "She has a day each week without her phone.",
                  "She uses her phone more.",
                  "She wants to work at the camp.",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The man who walked around the world",
            text: [
              "In 1999, a Canadian man called Jean Béliveau left his home to go for a walk. {1} He didn't come back for eleven years.",
              "Jean had been unhappy for some time. {2} So he decided to walk around the world to promote peace and help children.",
              "He walked through sixty-four countries and wore out fifty-four pairs of shoes. {3} Most nights, he slept in the homes of people he met along the way.",
              "Jean faced many difficulties during his journey. {4} But he also met thousands of kind people who gave him food and somewhere to stay.",
              "When he finally returned home in 2011, he was welcomed by crowds of people. {5} He has since written a book about his amazing journey.",
            ],
            sentences: [
              "He decided to stop after a year.",
              "He was ill several times and was once attacked by dogs.",
              "He travelled most of the way by plane.",
              "His business had failed, and he wanted to do something meaningful with his life.",
              "He was forty-five years old at the time.",
              "His wife, who had supported him throughout, was waiting for him.",
              "He walked alone without meeting anyone.",
              "He pushed a small cart with all his belongings in it.",
            ],
            answers: [
              4,
              3,
              7,
              1,
              5,
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
              "Dolphins are famous for being some of the most intelligent animals on Earth. They live in groups called pods and {1} with each other using whistles and clicks.",
              "Each dolphin has its own special whistle, which works like a {2}. Other dolphins use it to call that dolphin.",
              "Dolphins are very social animals. They play together, hunt together and even help injured members of their group. There are many stories of dolphins helping humans, such as {3} swimmers from sharks. Dolphins use a system called echolocation to find food. They send out sounds and listen for the echoes, which tell them where fish are. Sadly, dolphins face many {4}, including pollution and fishing nets. Many countries now have laws to {5} them, and some tourist companies offer boat trips where people can watch dolphins in the wild {6} disturbing them.",
            ],
            gaps: [
              {
                options: [
                  "speak up",
                  "talk up",
                  "say",
                  "communicate",
                ],
                answer: 3,
              },
              {
                options: [
                  "title",
                  "name",
                  "word up",
                  "label up",
                ],
                answer: 1,
              },
              {
                options: [
                  "protecting",
                  "guarding up",
                  "keeping up",
                  "saving up",
                ],
                answer: 0,
              },
              {
                options: [
                  "dangerous",
                  "danger up",
                  "dangers",
                  "risky",
                ],
                answer: 2,
              },
              {
                options: [
                  "guard up",
                  "protect",
                  "keep up",
                  "save up",
                ],
                answer: 1,
              },
              {
                options: [
                  "except",
                  "unless",
                  "instead",
                  "without",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My first trip abroad",
            text: [
              "Last summer, I went abroad for the first time. My aunt invited me {1} stay with her in Barcelona for two weeks.",
              "I'd never been on a plane before, so I was quite nervous. But the flight was only two hours, and I spent most of it looking out of the window.",
              "Barcelona was amazing. My aunt took me to see some incredible buildings designed by an architect called Gaudí. My favourite was a huge church {2} has been under construction for more than a hundred years! We also spent a lot of time {3} the beach. I tried lots of new food, including paella and tapas. I even learned a few words of Spanish. I didn't want to go home {4} the end of the two weeks. I'm already saving money {5} I can go back next year. It was the best holiday I've {6} had.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "that",
                "which",
              ],
              [
                "on",
                "at",
              ],
              [
                "at",
              ],
              [
                "so",
              ],
              [
                "ever",
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
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "A sports day",
              lines: [
                "Our school is having a sports day next week! [Sounds fun]",
                "Which events should I take part in? [Give advice]",
                "Do you have a sports day at your school? [Tell Robin]",
                "What's your favourite sport? [Explain why]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThat sounds really fun! I love sports days, because everyone is outside and having a good time.\n\nI think you should take part in the running races, because you're very fast. You could also try the long jump. Don't do too many events, though, or you'll be really tired!\n\nYes, we have a sports day every June. Last year, I came second in the 200 metres, and our class won the relay race.\n\nMy favourite sport is basketball. I love it because it's a team sport and it's very fast. I play for my school team every Tuesday.\n\nGood luck!\nAhmet",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A skill I'd like to learn",
              lines: [
                "Is there a skill you would love to learn?",
                "Why does it interest you?",
                "How would you learn it?",
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
            sample: "Learning to cook like a chef\n\nThe skill I'd most like to learn is cooking. At the moment, I can only make a few simple dishes, like pasta and eggs. But I love food, and I'd like to be able to cook delicious meals for my family and friends.\n\nI'm interested in cooking because it's creative and useful. You can try food from different countries without leaving home. It's also a skill you need when you live alone.\n\nI'd like to take a cooking course at a local college. I could also watch videos online and practise at home. Maybe one day I'll be as good as my grandmother!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was the first snow of the winter, and everything looked magical.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was the first snow of the winter, and everything looked magical. Lily looked out of her bedroom window at the white garden and smiled.\n\nShe got dressed quickly and ran outside with her little brother. They built a huge snowman and gave it a carrot nose and their dad's old hat. Then they had a snowball fight with their neighbours.\n\nAfter an hour, their fingers were frozen. Their mother called them inside and made them hot chocolate with marshmallows. They sat by the fire and watched the snow falling outside.\n\nLily thought it was the most perfect day of the year.",
          },
        },
      ],
    },
  ],
};
