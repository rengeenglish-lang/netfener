import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 13 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_13: CambridgeTest = {
  id: "preliminary-13",
  level: "preliminary",
  no: 13,
  title: "B1 Preliminary · Practice Test 13",
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
                    "Students taking exams next week should arrive 15 minutes early and bring two pens.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Exams start 15 minutes late.",
                  "Students need to be early for exams.",
                  "Students should bring pencils.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grandma, I've left my jacket at your house. Could you bring it when you come on Sunday? Thanks! Lily",
                  ],
                },
                question: "What does Lily want Grandma to do?",
                options: [
                  "bring something on Sunday",
                  "buy her a new jacket",
                  "visit her today",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains nuts.",
                    "Not suitable for people with nut allergies.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This doesn't contain nuts.",
                  "Everyone can eat this.",
                  "Some people shouldn't eat this.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "The cinema has changed the film time to 7.30, so let's meet at seven instead of six thirty. Ben",
                  ],
                },
                question: "Why has Ben sent this email?",
                options: [
                  "to cancel the film",
                  "to change the meeting time",
                  "to change the cinema",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM SHOP",
                    "Members receive 10% off all purchases. Ask about joining today!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop is only for members.",
                  "Members pay less in the shop.",
                  "Joining is free today.",
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
            instruction: "The young people below all want to go to a summer festival. Read the descriptions of eight festivals. Decide which festival would be the most suitable for each person.",
            options: [
              {
                title: "Jazz in the Park",
                text: "Three evenings of live jazz music outdoors. Bring a picnic and a blanket.",
              },
              {
                title: "Comic Con",
                text: "Meet famous comic artists, buy rare comics and dress up as your favourite character.",
              },
              {
                title: "Food Festival",
                text: "Try dishes from over forty countries and watch cooking demonstrations by top chefs.",
              },
              {
                title: "Science Fair",
                text: "Interactive experiments, robot competitions and talks by scientists.",
              },
              {
                title: "Dance Weekend",
                text: "Workshops in salsa, hip hop and ballet for all levels, ending with a big party.",
              },
              {
                title: "Film Festival",
                text: "New films from around the world, with chances to meet the directors.",
              },
              {
                title: "Book Festival",
                text: "Talks and signings with authors, plus writing workshops for teenagers.",
              },
              {
                title: "Rock Festival",
                text: "Three days of loud music with top bands. Camping available.",
              },
            ],
            items: [
              {
                text: "Ayşe loves trying new food and wants to learn new recipes.",
                answer: 2,
              },
              {
                text: "Mehmet loves drawing superheroes and wants to wear a costume.",
                answer: 1,
              },
              {
                text: "Zeynep wants to meet her favourite writer and improve her own writing.",
                answer: 6,
              },
              {
                text: "Emre is crazy about technology and enjoys building things.",
                answer: 3,
              },
              {
                text: "Nehir wants to learn a new style of dancing.",
                answer: 4,
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
              title: "Learning to drive",
              paragraphs: [
                "I passed my driving test last month, at the age of seventeen. It was one of the hardest things I've ever done, but also one of the most rewarding.",
                "I started lessons as soon as I was old enough. My instructor, Mr Clark, was very patient, but I was a terrible driver at first. I was so nervous that I often forgot to use the mirrors, and once I nearly drove into a wall.",
                "After about twenty lessons, I started to feel more confident. My dad also took me out to practise at weekends, although he was much less patient than Mr Clark!",
                "I failed my first test because I drove too fast in a quiet street. I was very disappointed, but Mr Clark told me that lots of people fail the first time. I practised for another month, and the second time I passed. Now I drive my little brother to school every morning.",
              ],
            },
            items: [
              {
                question: "How did the writer feel about learning to drive?",
                options: [
                  "It was easy.",
                  "It was boring.",
                  "It was difficult but worth it.",
                  "It was impossible.",
                ],
                answer: 2,
              },
              {
                question: "What was the writer's problem at first?",
                options: [
                  "He was too confident.",
                  "He didn't have an instructor.",
                  "He was very nervous.",
                  "He had no car.",
                ],
                answer: 2,
              },
              {
                question: "What does the writer say about his dad?",
                options: [
                  "He was less patient than the instructor.",
                  "He was a driving instructor.",
                  "He refused to help.",
                  "He was very calm.",
                ],
                answer: 0,
              },
              {
                question: "Why did the writer fail his first test?",
                options: [
                  "He forgot to use the mirrors.",
                  "He drove into a wall.",
                  "He was late.",
                  "He drove too quickly.",
                ],
                answer: 3,
              },
              {
                question: "What does the writer do now?",
                options: [
                  "teaches people to drive",
                  "takes his brother to school",
                  "works as a driver",
                  "takes the bus",
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
            title: "The girl who taught her village to read",
            text: [
              "When Priya was twelve, she noticed that many adults in her village in India couldn't read. {1} So she decided to start teaching them.",
              "At first, only her grandmother came to the lessons. {2} But slowly, more people heard about it.",
              "Priya taught every evening after she had finished her own homework. {3} She used old newspapers and books that people gave her.",
              "Within two years, more than fifty adults had learned to read. {4} Some of them had started small businesses because they could now read contracts and price lists.",
              "Priya is now at university, studying to become a teacher. {5} She says she wants every person in India to have the chance to read.",
            ],
            sentences: [
              "Her lessons were free, and anyone could come.",
              "The government built a new university in the village.",
              "They had never had the chance to go to school when they were young.",
              "The village has continued the lessons, with some of her first students now teaching others.",
              "Priya stopped going to school to teach.",
              "They met under a tree in the middle of the village.",
              "Most villagers didn't want to learn.",
              "Many of them said that it had changed their lives.",
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
            title: "Penguins",
            text: [
              "Penguins are birds that live mainly in the southern half of the world. Although they can't fly, they are excellent swimmers. Their wings work like {1} in the water.",
              "Some penguins live in very cold places, like Antarctica, while others live in warmer {2}, such as South Africa and Australia.",
              "Penguins spend a lot of time in the sea, where they catch fish, squid and krill. They can {3} their breath for up to twenty minutes. On land, penguins often live in huge groups called colonies. They {4} each other by their calls. Penguin parents take turns to look after their eggs. Sadly, many kinds of penguin are in {5} because of climate change and overfishing. Scientists are working to protect them, but we all need to {6} our part.",
            ],
            gaps: [
              {
                options: [
                  "feet",
                  "arms",
                  "hands",
                  "flippers",
                ],
                answer: 3,
              },
              {
                options: [
                  "areas",
                  "grounds",
                  "floors",
                  "fields",
                ],
                answer: 0,
              },
              {
                options: [
                  "keep up",
                  "stop",
                  "hold",
                  "save",
                ],
                answer: 2,
              },
              {
                options: [
                  "know up",
                  "find",
                  "recognise",
                  "learn",
                ],
                answer: 2,
              },
              {
                options: [
                  "danger",
                  "dangerous",
                  "worry",
                  "fear",
                ],
                answer: 0,
              },
              {
                options: [
                  "make",
                  "take",
                  "have",
                  "do",
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
            title: "A weekend in Paris",
            text: [
              "Last month, my family and I spent a weekend in Paris. We went {1} train, which took only two and a half hours from London.",
              "On the first day, we climbed the Eiffel Tower. The view from the top was amazing, {2} it was very windy! Then we had lunch in a small café and walked along the river.",
              "On the second day, we visited the Louvre, one of the {3} famous museums in the world. We saw the Mona Lisa, but there were so many people that we could hardly see it! In the evening, we ate in a restaurant {4} served traditional French food. I tried snails for the first time. They were {5} than I expected! I'd love to go back to Paris {6} day.",
            ],
            answers: [
              [
                "by",
              ],
              [
                "but",
                "although",
              ],
              [
                "most",
              ],
              [
                "that",
                "which",
              ],
              [
                "better",
                "nicer",
                "tastier",
              ],
              [
                "one",
                "some",
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
            instruction: "Read this email from your English-speaking friend Charlie and the notes you have made. Write your email to Charlie using all the notes. Write about 100 words.",
            input: {
              from: "Charlie",
              subject: "A school concert",
              lines: [
                "Our school is having a concert next month. [Sounds fun!]",
                "Would you like to come and watch? [Answer]",
                "Do you play any instruments? [Tell Charlie]",
                "What kind of music do you enjoy? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Charlie,\n\nThat sounds really fun! Thanks for telling me about it.\n\nI'd love to come and watch. Can you tell me the date? I'll ask my parents if they can drive me there.\n\nI play the guitar. I started having lessons two years ago, and now I can play quite a lot of songs. I'm not good enough to play in a concert yet, though!\n\nI enjoy lots of different kinds of music, but my favourite is rock. I love bands with great guitar players. I also like listening to some classical music when I'm studying.\n\nBye for now,\nOğuz",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My dream job",
              lines: [
                "What job would you like to do in the future?",
                "Why does it interest you?",
                "What do you need to do to get it?",
                "The best articles will win a prize!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "Saving animals: my dream\n\nMy dream job is to be a vet. I've always loved animals, and I have two cats and a dog at home. When one of my cats was ill last year, the vet saved her life, and I realised how important that job is.\n\nTo become a vet, I'll need to study science very hard at school and then spend five years at university. It's very competitive, so I'll need excellent marks.\n\nI know it will be difficult, but I think it will be worth it. Helping animals every day would make me very happy.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Tom woke up, the house was strangely quiet.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Tom woke up, the house was strangely quiet. Normally, he could hear his parents in the kitchen and his little sister watching cartoons.\n\nHe got out of bed and went downstairs. Nobody was there. On the kitchen table, there was a note: 'Look in the garden.'\n\nTom opened the back door and gasped. In the middle of the garden, there was a brand new bike with a big red bow on it. His whole family was standing next to it, singing 'Happy Birthday'.\n\nTom had completely forgotten that it was his birthday! He hugged everyone and rode his new bike all day.",
          },
        },
      ],
    },
  ],
};
