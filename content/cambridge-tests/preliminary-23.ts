import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 23 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_23: CambridgeTest = {
  id: "preliminary-23",
  level: "preliminary",
  no: 23,
  title: "B1 Preliminary · Practice Test 23",
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
                    "Students who want extra help with maths can come to Room 8 on Tuesday lunchtimes.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Maths lessons are cancelled on Tuesday.",
                  "Room 8 is closed.",
                  "Students can get maths help at lunch on Tuesday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Tom, the film starts at 8.15, not 7.45. Let's meet at 7.45 for a drink first. Dan",
                  ],
                },
                question: "What does Dan suggest?",
                options: [
                  "meeting after the film",
                  "meeting before the film",
                  "going to a different film",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Take one tablet daily with food.",
                    "Do not drive after taking this medicine.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Take this without food.",
                  "This medicine might make driving dangerous.",
                  "Take two tablets a day.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi everyone,",
                    "We need more people to help at the school's book sale. If you're free on Saturday morning, please let me know. Mrs White",
                  ],
                },
                question: "What does Mrs White want?",
                options: [
                  "people to buy books",
                  "students to bring books",
                  "more helpers for an event",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAMPSITE",
                    "Please don't feed the wild animals. It's bad for their health.",
                  ],
                },
                question: "Why shouldn't you feed the animals?",
                options: [
                  "It can make them ill.",
                  "They might bite you.",
                  "They have already eaten.",
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
            instruction: "The young people below all want to visit a website. Read the descriptions of eight websites. Decide which website would be the most suitable for each person.",
            options: [
              {
                title: "GreenLife",
                text: "Tips on how to live in an environmentally friendly way, from recycling to saving energy.",
              },
              {
                title: "PetCare",
                text: "Advice on looking after all kinds of pets, from dogs to fish.",
              },
              {
                title: "ExamHelp",
                text: "Practice tests and revision tips for school exams.",
              },
              {
                title: "TravelTeens",
                text: "Travel advice for young people, including cheap places to stay.",
              },
              {
                title: "CodeKids",
                text: "Free lessons on computer programming for beginners.",
              },
              {
                title: "StyleHub",
                text: "The latest fashion news and tips on creating your own style.",
              },
              {
                title: "SportsZone",
                text: "Live scores, news and videos from sports around the world.",
              },
              {
                title: "BookWorm",
                text: "Book reviews written by teenagers, with recommendations.",
              },
            ],
            items: [
              {
                text: "Selin has just got a new rabbit and wants to learn how to look after it.",
                answer: 1,
              },
              {
                text: "Mehmet wants to follow his favourite football team's results.",
                answer: 6,
              },
              {
                text: "Asya wants to reduce the amount of rubbish her family produces.",
                answer: 0,
              },
              {
                text: "Can has exams next month and wants to prepare.",
                answer: 2,
              },
              {
                text: "Defne is looking for a good book to read.",
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
              title: "How I became a photographer",
              paragraphs: [
                "I got my first camera when I was twelve. It was a cheap one, a present from my uncle, but I loved it. I took photos of everything: my cat, my friends, the clouds.",
                "When I was fourteen, I entered a photography competition for teenagers. I sent a photo of my grandmother's hands, which were covered in flour from baking. I didn't expect to win anything, so I was amazed when I won first prize.",
                "The prize was a week-long photography course with a professional photographer. She taught me about light, colour and how to tell a story with a single picture. It changed the way I looked at the world.",
                "Now I'm nineteen and studying photography at university. I've had my work shown in two small exhibitions. My dream is to become a photojournalist and travel the world, telling stories through my pictures.",
              ],
            },
            items: [
              {
                question: "Who gave the writer her first camera?",
                options: [
                  "her uncle",
                  "her parents",
                  "her grandmother",
                  "a friend",
                ],
                answer: 0,
              },
              {
                question: "What was the writer's winning photo of?",
                options: [
                  "her cat",
                  "the clouds",
                  "her friends",
                  "her grandmother's hands",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel when she won?",
                options: [
                  "disappointed",
                  "very surprised",
                  "bored",
                  "angry",
                ],
                answer: 1,
              },
              {
                question: "What did the writer learn on the course?",
                options: [
                  "how to tell stories with photos",
                  "how to bake",
                  "how to sell photos",
                  "how to fix cameras",
                ],
                answer: 0,
              },
              {
                question: "What does the writer want to do in the future?",
                options: [
                  "teach photography",
                  "open a shop",
                  "work as a photojournalist",
                  "become a baker",
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
            title: "A forest in the city",
            text: [
              "In the middle of Milan, Italy, there are two tall apartment buildings covered in trees. {1} They're called the 'Vertical Forest'.",
              "The buildings were designed by an architect called Stefano Boeri. {2} He wanted to bring nature back into the city.",
              "Together, the buildings have more than 900 trees and thousands of plants. {3} They help to clean the air and reduce noise from the busy streets below.",
              "The plants also provide homes for birds and insects. {4} Scientists have counted more than twenty kinds of birds living there.",
              "The Vertical Forest has become famous around the world. {5} Similar buildings are now being built in China and the Netherlands.",
            ],
            sentences: [
              "It has won several international prizes for its design.",
              "He believed that cities had become too grey and polluted.",
              "Most residents don't like living there.",
              "From a distance, they look like green towers.",
              "Some of these species had disappeared from the city years ago.",
              "The buildings are very cheap to live in.",
              "This is the same number of trees you'd find in a small forest.",
              "The trees are made of plastic.",
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
            title: "Sleep",
            text: [
              "We spend about one third of our lives asleep. But why do we need sleep? Scientists still don't know {1} the answer, but they know it's very important.",
              "While we sleep, our bodies repair themselves and our brains process information from the day. This {2} us remember things better.",
              "If we don't get enough sleep, we can feel tired, stressed and {3} to concentrate. Over a long time, lack of sleep can also cause health problems. Adults need about seven to nine hours of sleep a night, while teenagers need even more. To sleep well, experts {4} going to bed at the same time every night and avoiding screens before bed. A dark, quiet and cool bedroom also {5}. If you have trouble sleeping, try reading a book or listening to calm music. You'll {6} up feeling much better!",
            ],
            gaps: [
              {
                options: [
                  "exact",
                  "exacting",
                  "exactly",
                  "exactness",
                ],
                answer: 2,
              },
              {
                options: [
                  "makes",
                  "lets",
                  "helps",
                  "gives",
                ],
                answer: 2,
              },
              {
                options: [
                  "unable",
                  "able",
                  "disable",
                  "inable",
                ],
                answer: 0,
              },
              {
                options: [
                  "tell",
                  "say",
                  "order",
                  "recommend",
                ],
                answer: 3,
              },
              {
                options: [
                  "makes",
                  "helps",
                  "does",
                  "gives",
                ],
                answer: 1,
              },
              {
                options: [
                  "wake",
                  "stand",
                  "sit",
                  "rise up",
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
            title: "Learning to swim",
            text: [
              "I didn't learn to swim {1} I was fifteen. When I was a child, I was afraid of water, and my parents didn't make me have lessons.",
              "Last year, my friends planned a beach holiday. I didn't want to be the only one {2} couldn't swim, so I decided to take lessons.",
              "My first lesson was terrible. I was so scared that I wouldn't put my face in the water. But my instructor, Jane, was very patient. She told me {3} take it slowly. After a few weeks, I could float on my back. After two months, I could swim a whole length of the pool! On holiday, I swam in the sea for the first time. It was an amazing feeling. I'm so glad I didn't give {4}. If you're afraid of something, my advice is to face {5} fear. You might surprise {6}!",
            ],
            answers: [
              [
                "until",
                "till",
              ],
              [
                "who",
                "that",
              ],
              [
                "to",
              ],
              [
                "up",
              ],
              [
                "your",
              ],
              [
                "yourself",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "Your favourite subject",
              lines: [
                "What's your favourite subject at school? [Tell Kim]",
                "Why do you like it? [Explain]",
                "Is there a subject you find difficult? [Describe]",
                "What would you like to study in the future? [Tell Kim]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nMy favourite subject at school is biology. We're learning about the human body at the moment, and it's fascinating.\n\nI like it because our teacher makes the lessons really interesting. We do lots of experiments, and last week we looked at our own cells under a microscope. It was amazing!\n\nI find maths quite difficult, especially algebra. I don't always understand the teacher, so I sometimes ask my older brother to help me with my homework.\n\nIn the future, I'd like to study medicine at university. I want to become a doctor and help people.\n\nBye,\nIlgın",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Should students wear school uniforms?",
              lines: [
                "Do you think students should wear school uniforms?",
                "What are the advantages and disadvantages?",
                "What do students wear at your school?",
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
            sample: "Uniforms: yes or no?\n\nAt my school, we have to wear a uniform: a blue jumper, white shirt and grey trousers or skirt. Many students complain about it, but I think uniforms are a good idea.\n\nFirstly, uniforms make everyone equal. Nobody feels bad because they can't afford expensive clothes. Secondly, they save time in the morning, because you don't have to decide what to wear.\n\nHowever, uniforms can be uncomfortable, and some students feel they can't show their personality. I think schools should allow students to choose some items, like shoes or bags. That way, everyone would be happy.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The museum was closing, but Leo was still inside.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The museum was closing, but Leo was still inside. He had been so interested in the dinosaur exhibition that he hadn't heard the announcement.\n\nWhen he finally looked around, the lights were going off and all the other visitors had gone. He ran to the main door, but it was locked.\n\nLeo felt scared. The huge dinosaur skeletons looked frightening in the dark. Then he saw a light at the end of the corridor. It was a security guard!\n\nThe guard laughed when Leo explained what had happened. He let Leo out and even gave him a free ticket to come back another day.",
          },
        },
      ],
    },
  ],
};
