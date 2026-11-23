import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 6 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_6: CambridgeTest = {
  id: "preliminary-6",
  level: "preliminary",
  no: 6,
  title: "B1 Preliminary · Practice Test 6",
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
                    "SWIMMING POOL",
                    "From next Monday, the pool will open an hour later on weekdays while new changing rooms are built.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool's opening time will change for a while.",
                  "The pool will close while repairs are done.",
                  "New changing rooms are now available.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Tom – I've left the concert tickets on the kitchen table. Could you bring them when you come? I'll wait for you outside the hall. Sara",
                  ],
                },
                question: "Why has Sara written this message?",
                options: [
                  "to tell Tom where she has put her keys",
                  "to change where they will meet",
                  "to ask Tom to bring something",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Take two tablets with water after meals.",
                    "Do not take more than six in 24 hours.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You should take six tablets a day.",
                  "You should eat before taking the tablets.",
                  "You must take the tablets without water.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi everyone,",
                    "The photography club trip is now on Sunday because rain is forecast for Saturday. We'll still meet at the station at nine. Mark",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the meeting place",
                  "the day of the trip",
                  "the meeting time",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Laptops can be borrowed for two hours. Please show your student card at the desk.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Laptops can be taken home overnight.",
                  "Only teachers can use the laptops.",
                  "Students need identification to borrow a laptop.",
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
            instruction: "The young people below all want to go on a holiday course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Mountain Adventure",
                text: "A week of climbing, hiking and camping in the mountains. You need to be fit, and you'll sleep in tents every night. Ages 14–18.",
              },
              {
                title: "City Art Week",
                text: "Visit galleries in the capital and take painting classes with local artists. Accommodation in a city-centre hostel. Suitable for beginners.",
              },
              {
                title: "Coding Camp",
                text: "Learn to build apps and simple games in five days. Bring your own laptop. Classes are in the mornings; afternoons are free for sightseeing.",
              },
              {
                title: "Sea School",
                text: "Learn to sail and windsurf on the south coast. You must be able to swim. Families are welcome to join the beginner group.",
              },
              {
                title: "Farm Experience",
                text: "Spend a week on a working farm, looking after animals and helping with the harvest. Very early starts! Meals made with food from the farm.",
              },
              {
                title: "Theatre Summer",
                text: "Two weeks of acting, singing and dancing, ending with a performance for parents. No experience needed, but you must enjoy being on stage.",
              },
              {
                title: "Language Plus",
                text: "Morning English lessons with students from around the world, plus trips to museums and castles in the afternoons. Stay with a local family.",
              },
              {
                title: "Film Makers",
                text: "Write, film and edit your own short film in a team. Cameras are provided. The best films are shown at a local cinema at the end of the course.",
              },
            ],
            items: [
              {
                text: "Elif wants to improve her English and meet people from other countries. She'd like to experience everyday life in another country and visit historical places.",
                answer: 6,
              },
              {
                text: "Jack is very active and loves being outdoors. He doesn't mind basic accommodation and wants a challenge.",
                answer: 0,
              },
              {
                text: "Mia loves animals and wants to learn where food comes from. She doesn't mind getting up early.",
                answer: 4,
              },
              {
                text: "Leo is interested in technology and wants to create something on a computer. He'd also like time to explore the area.",
                answer: 2,
              },
              {
                text: "Ayşe enjoys telling stories and would like to work with other people to make something that an audience can watch, but she doesn't want to act.",
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
              title: "My year without social media",
              paragraphs: [
                "Last January, I made a decision that surprised everyone who knew me: I deleted all my social media apps. I was sixteen, and I spent about four hours a day looking at my phone. I wasn't sleeping well, and I often felt anxious when I saw photos of other people's perfect lives.",
                "The first few weeks were difficult. I kept picking up my phone without thinking, and I felt as if I was missing out on everything. My friends had to text me about parties instead of just posting about them, and some of them forgot.",
                "After about a month, though, I noticed some changes. I had much more free time, so I started reading again and joined a running club. I also found that I was concentrating better in lessons, and my marks improved. Most importantly, I felt calmer.",
                "When the year ended, I didn't reinstall all the apps. I now use one, but only for twenty minutes a day. I wouldn't tell everyone to do what I did, but I think we should all think about how much time we spend online and how it makes us feel.",
              ],
            },
            items: [
              {
                question: "Why did the writer stop using social media?",
                options: [
                  "Her parents asked her to.",
                  "She wanted to save money.",
                  "It was affecting how she felt.",
                  "Her phone was broken.",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at the beginning?",
                options: [
                  "She sometimes didn't hear about events.",
                  "She had nothing to do.",
                  "Her friends were angry with her.",
                  "She couldn't use her phone at all.",
                ],
                answer: 0,
              },
              {
                question: "What happened after a month?",
                options: [
                  "She stopped going to school.",
                  "She lost her friends.",
                  "She felt more anxious.",
                  "She started new activities.",
                ],
                answer: 3,
              },
              {
                question: "How does she use social media now?",
                options: [
                  "more than before",
                  "for a short time each day",
                  "not at all",
                  "only at weekends",
                ],
                answer: 1,
              },
              {
                question: "What would the writer say to other people?",
                options: [
                  "Think about your own use of social media.",
                  "Everyone should delete their apps.",
                  "Social media is always bad.",
                  "Spend more time online.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The festival that cleans a river",
            text: [
              "Every September, thousands of people gather by the River Mersey in the north of England for an unusual festival. {1} Instead, they come to clean it.",
              "Thirty years ago, the river was one of the most polluted in Europe. {2} Factories had poured chemicals into the water for over a century, and nothing could live in it.",
              "Local people decided they had had enough. {3} Volunteers pulled shopping trolleys, bikes and even old cars out of the water.",
              "Slowly, things improved. Stricter laws stopped factories polluting the water, and the festival grew every year. {4}",
              "Today, the festival includes music, food stalls and boat races as well as cleaning. {5} The organisers hope it will continue to remind people that rivers need looking after.",
            ],
            sentences: [
              "Boat races are the most popular part of the event.",
              "Now salmon have returned to the river for the first time in a hundred years.",
              "Many people still refuse to visit the river today.",
              "Fish had completely disappeared from it, and it smelled terrible.",
              "They don't come to swim or go boating on the river.",
              "Children from local schools take part in activities that teach them about nature.",
              "The factories paid for a new bridge across the river.",
              "They organised the first clean-up day, and around two hundred people came.",
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
            title: "Learning to juggle",
            text: [
              "Juggling is a skill that almost anyone can {1}. All you need at the beginning is three soft balls and a little patience.",
              "Start with just one ball. Throw it from one hand to the other in a gentle arc at about the {2} of your eyes. When you can do this easily, add a second ball.",
              "Most people find the third ball the hardest part. Don't worry if you {3} the balls a lot at first; everyone does. Practising for ten minutes every day is {4} than practising for an hour once a week. Scientists say juggling is good for the brain because it {5} your concentration and coordination. It's also a fun way to {6} time with friends.",
            ],
            gaps: [
              {
                options: [
                  "learn",
                  "study",
                  "teach",
                  "know",
                ],
                answer: 0,
              },
              {
                options: [
                  "high",
                  "top",
                  "height",
                  "level",
                ],
                answer: 2,
              },
              {
                options: [
                  "fall",
                  "lose",
                  "drop",
                  "miss",
                ],
                answer: 2,
              },
              {
                options: [
                  "better",
                  "good",
                  "best",
                  "well",
                ],
                answer: 0,
              },
              {
                options: [
                  "grows",
                  "rises",
                  "raises",
                  "improves",
                ],
                answer: 3,
              },
              {
                options: [
                  "use",
                  "spend",
                  "take",
                  "make",
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
            title: "Our class blog",
            text: [
              "This term, our class started a blog about life at our school. Everyone takes turns {1} write a post. Last week it was my turn, and I wrote about our trip to the theatre.",
              "I was worried that nobody would read it, {2} more than three hundred people did! My grandparents even left a comment.",
              "Our teacher says writing a blog is a good way to practise English because we have to think carefully {3} who will read it. Next month, we're going to interview the head teacher. I'm going to ask her what she wanted to be {4} she was young. We're also planning a post about the school garden, {5} has just won a prize. I hope more people will start reading {6} blog.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "but",
              ],
              [
                "about",
              ],
              [
                "when",
              ],
              [
                "which",
              ],
              [
                "our",
                "the",
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
            instruction: "Read this email from your English-speaking friend Sam and the notes you have made. Write your email to Sam using all the notes. Write about 100 words.",
            input: {
              from: "Sam",
              subject: "Visit next month",
              lines: [
                "Guess what? My family has said you can come and stay with us next month! [Brilliant!]",
                "Would you prefer to go to the beach or to the mountains while you're here? [Tell Sam]",
                "What kind of food do you like? My dad wants to cook something special. [Explain]",
                "How are you going to travel here? [Give details]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Sam,\n\nThat's brilliant news! Thank you so much for inviting me. I can't wait to see you and your family again.\n\nI think I'd prefer to go to the mountains, because I love walking and I've never seen real mountains before. We can go to the beach near my house any time!\n\nIt's really kind of your dad to cook for me. I love pasta and spicy food, but I don't really like mushrooms, so maybe he could avoid those.\n\nI'm going to travel by train. It takes about four hours, and I'll arrive on Friday afternoon.\n\nSee you soon,\nElif",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A person who inspires me",
              lines: [
                "Who is someone you admire?",
                "What have they done?",
                "How have they influenced you?",
                "We'll publish the best articles on our website.",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "My grandmother, my hero\n\nThe person who inspires me most is my grandmother. When she was young, girls in her village didn't usually go to university, but she studied very hard and became a doctor.\n\nFor forty years, she worked in a small hospital and helped thousands of people. Even now, at seventy-five, she volunteers at a clinic twice a week.\n\nShe has taught me that you should never give up, even when things are difficult. Because of her, I study hard and I want to work in medicine one day. I hope I can help people the way she has.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'As soon as Mia stepped off the bus, she knew something was wrong.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "As soon as Mia stepped off the bus, she knew something was wrong. The village square, which was usually busy on Saturday mornings, was completely empty.\n\nShe walked slowly towards her grandmother's house, feeling nervous. When she knocked, nobody answered. Then she heard music coming from the garden.\n\nMia walked round the side of the house and stopped in surprise. The whole village was there, sitting at long tables covered with food and flowers. A big sign said 'Happy 80th Birthday, Grandma!'\n\nHer grandmother waved and laughed. 'We forgot to tell you it was a surprise party too!' she said.",
          },
        },
      ],
    },
  ],
};
