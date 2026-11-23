import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 87 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_87: CambridgeTest = {
  id: "preliminary-87",
  level: "preliminary",
  no: 87,
  title: "B1 Preliminary · Practice Test 87",
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
                    "The pool will be closed for cleaning on Monday morning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed all week.",
                  "The pool is being repaired.",
                  "You can't swim on Monday morning.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I can't find my football boots. Did I leave them at your house? Sam",
                  ],
                },
                question: "What does Sam want to know?",
                options: [
                  "if he left his boots at Max's house",
                  "where to buy boots",
                  "if Max has new boots",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep out of reach of children.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It's for children.",
                  "Children shouldn't be able to get it.",
                  "Children can use it.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "The school trip has been cancelled because of the snow. We'll go next month instead. Mrs Brown",
                  ],
                },
                question: "Why was the trip cancelled?",
                options: [
                  "because of the snow",
                  "because the teacher is ill",
                  "because the bus broke",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free refills on all hot drinks.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Hot drinks are free.",
                  "The café only sells cold drinks.",
                  "You can have more hot drinks for free.",
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
            instruction: "The young people below all want to join a sports club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Tennis Club",
                text: "Lessons for all ages.",
              },
              {
                title: "Rowing Club",
                text: "Race boats on the river.",
              },
              {
                title: "Judo Club",
                text: "Learn self-defence.",
              },
              {
                title: "Hockey Club",
                text: "Girls' and boys' teams.",
              },
              {
                title: "Climbing Club",
                text: "Indoor and outdoor climbing.",
              },
              {
                title: "Cycling Club",
                text: "Long rides at weekends.",
              },
              {
                title: "Golf Club",
                text: "Learn to play golf.",
              },
              {
                title: "Swimming Club",
                text: "Swim and compete.",
              },
            ],
            items: [
              {
                text: "Elif wants to learn to protect herself.",
                answer: 2,
              },
              {
                text: "Can loves the river and boats.",
                answer: 1,
              },
              {
                text: "Zeynep loves climbing.",
                answer: 4,
              },
              {
                text: "Mert wants to play golf.",
                answer: 6,
              },
              {
                text: "Asya loves cycling.",
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
              title: "A year of volunteering",
              paragraphs: [
                "After finishing school, I spent a year volunteering at an animal sanctuary in South Africa. The sanctuary rescues lions, elephants and other wild animals.",
                "My job was to feed the animals, clean their enclosures and help the vets. It was very hard work, and I had to get up at five every morning.",
                "My favourite animal was a young lion called Simba. He had been found alone when he was a baby. When he arrived at the sanctuary, he was very thin and frightened. But with care and love, he grew strong and healthy.",
                "The year taught me so much about animals and conservation. I've decided to study zoology at university. I want to spend my life protecting wild animals.",
              ],
            },
            items: [
              {
                question: "What does the sanctuary do?",
                options: [
                  "sells animals",
                  "trains animals",
                  "breeds animals",
                  "rescues wild animals",
                ],
                answer: 3,
              },
              {
                question: "What time did the writer get up?",
                options: [
                  "at five",
                  "at seven",
                  "at nine",
                  "at noon",
                ],
                answer: 0,
              },
              {
                question: "What do we learn about Simba?",
                options: [
                  "He was very old.",
                  "He was born at the sanctuary.",
                  "He was found alone as a baby.",
                  "He was aggressive.",
                ],
                answer: 2,
              },
              {
                question: "How did Simba change?",
                options: [
                  "He became ill.",
                  "He ran away.",
                  "He grew strong and healthy.",
                  "He didn't change.",
                ],
                answer: 2,
              },
              {
                question: "What will the writer study?",
                options: [
                  "zoology",
                  "medicine",
                  "business",
                  "teaching",
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
            title: "A city of bicycles",
            text: [
              "Amsterdam, in the Netherlands, is famous for its bicycles. {1} There are more bicycles than people in the city.",
              "About sixty per cent of people in Amsterdam cycle every day. {2} They cycle to work, to school and to the shops.",
              "The city has more than 500 kilometres of cycle lanes. {3} This makes cycling very safe.",
              "There are also special car parks for bicycles. {4} One of them, near the main station, has space for more than 10,000 bikes.",
              "Many tourists hire bicycles to explore the city. {5} It's the best way to see Amsterdam.",
            ],
            sentences: [
              "They can visit museums, parks and canals.",
              "Even the prime minister cycles to work!",
              "Nobody cycles in Amsterdam.",
              "It's often called the cycling capital of the world.",
              "These are very useful because there are so many bikes.",
              "There are no cycle lanes.",
              "They're separated from the roads.",
              "Bicycles aren't allowed in Amsterdam.",
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
            title: "The Moon",
            text: [
              "The Moon is about 384,000 kilometres from the Earth. It takes about twenty-seven days to {1} the Earth.",
              "The Moon doesn't produce its own light. We can see it because it reflects light from the Sun. As the Moon moves around the Earth, we see different {2} of it.",
              "The Moon has a big effect on the Earth. Its {3} causes the tides in the oceans. In 1969, Neil Armstrong became the first person to walk on the Moon. He said the famous words: 'That's one small step for man, one giant leap for mankind.' Since then, only eleven more people have walked on the Moon. Scientists are now planning to send people {4} to the Moon. They want to build a base there, where astronauts could live and work. In the future, the Moon could be a {5} point for missions to Mars. Who knows? Maybe one day you'll be able to {6} the Moon!",
            ],
            gaps: [
              {
                options: [
                  "orbital",
                  "orbiting",
                  "orbited",
                  "orbit",
                ],
                answer: 3,
              },
              {
                options: [
                  "partly",
                  "parts",
                  "partial",
                  "party",
                ],
                answer: 1,
              },
              {
                options: [
                  "grave",
                  "gravitate",
                  "gravitational",
                  "gravity",
                ],
                answer: 3,
              },
              {
                options: [
                  "back",
                  "backward",
                  "backing",
                  "backed",
                ],
                answer: 0,
              },
              {
                options: [
                  "start",
                  "started",
                  "starting",
                  "starter",
                ],
                answer: 2,
              },
              {
                options: [
                  "visitor",
                  "visiting",
                  "visit",
                  "visited",
                ],
                answer: 2,
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
              "Last month, I played the violin in my first concert. I've been learning the violin {1} I was six, but I'd never played in front of an audience before.",
              "The concert was in a big hall in the city. There were more than two hundred people, including my family and friends. I was very nervous {2} I went on stage.",
              "My teacher told me to take a deep breath and imagine I was playing at home. When I started to play, I felt calmer. I made one small mistake, but I don't think anyone noticed. When I finished, everyone clapped {3} a long time. My parents were very proud. My grandmother even cried! After the concert, my teacher said I had played beautifully. I felt so happy. It was one {4} the best moments of my life. Now I want to play in more concerts. I'm going to practise even {5}. My dream is to play in a famous orchestra one {6}.",
            ],
            answers: [
              [
                "since",
              ],
              [
                "before",
                "when",
              ],
              [
                "for",
              ],
              [
                "of",
              ],
              [
                "harder",
                "more",
              ],
              [
                "day",
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
              subject: "A new sport",
              lines: [
                "I want to try a new sport. [Good idea!]",
                "What sport do you think I should try? [Suggest one]",
                "What sports do you do? [Tell Alex]",
                "Would you like to try a sport together? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's a great idea! Trying new sports is fun and good for your health.\n\nI think you should try tennis. It's a great sport for getting fit, and you can play it with just one other person. There's a tennis club near your house where you could have lessons.\n\nI do lots of sports. I play basketball for my school team and go swimming twice a week. I also enjoy cycling in the countryside at the weekends.\n\nYes, I'd love to try a sport together! Maybe we could try rock climbing? I've always wanted to try it. There's an indoor climbing centre in town.\n\nBye,\nKaan",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day in the life of a teenager",
              lines: [
                "Describe a typical day in your life.",
                "What do you enjoy most about your day?",
                "What would you change?",
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
            sample: "My daily routine\n\nMy day starts at seven o'clock, when my alarm wakes me up. I have breakfast with my family and then walk to school with my friends. School starts at eight thirty and finishes at three.\n\nAfter school, I usually have basketball training or do my homework. In the evening, I have dinner with my family and then watch TV or read a book. I go to bed at about ten.\n\nThe part of the day I enjoy most is basketball training, because I love playing with my team. If I could change something, I'd start school later. I'm always very tired in the morning, and I think I'd learn better if I could sleep a bit longer.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The boat was drifting further and further from the shore.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The boat was drifting further and further from the shore. Emma and her brother had been fishing on the lake, but they had lost one of their oars.\n\nThe wind was getting stronger, and the boat was moving quickly. Emma tried to use the other oar, but it didn't help. Her brother started to panic.\n\nThen Emma had an idea. She took off her red jacket and waved it in the air. A man on the shore saw them. He jumped into his own boat and rowed towards them.\n\nHe tied a rope to their boat and pulled them back to the shore. Emma and her brother thanked him. They promised to be more careful next time.",
          },
        },
      ],
    },
  ],
};
