import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 65 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_65: CambridgeTest = {
  id: "preliminary-65",
  level: "preliminary",
  no: 65,
  title: "B1 Preliminary · Practice Test 65",
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
                    "Students must sign out at reception if they leave school early.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students should tell reception when they leave early.",
                  "Students can't leave early.",
                  "Reception is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ella, I've got a spare ticket for the theatre tonight. Do you want to come? Kate",
                  ],
                },
                question: "What is Kate offering?",
                options: [
                  "a lift",
                  "dinner",
                  "a theatre ticket",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep frozen until ready to use.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it in the fridge.",
                  "Keep it at room temperature.",
                  "Keep it in the freezer.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Our team won the match yesterday! The coach was very happy. Well done, everyone! Sam",
                  ],
                },
                question: "Why has Sam written this email?",
                options: [
                  "to share good news",
                  "to cancel a match",
                  "to ask for help",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "No food or drink from outside the cinema.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Food is free.",
                  "You can't bring your own food.",
                  "You can bring your own drinks.",
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
            instruction: "The young people below all want to choose a holiday. Read the descriptions of eight holidays. Decide which holiday would be the most suitable for each person.",
            options: [
              {
                title: "Beach Resort",
                text: "Relax by the pool and swim in the sea.",
              },
              {
                title: "Mountain Lodge",
                text: "Hiking and fresh mountain air.",
              },
              {
                title: "City Tour",
                text: "Visit museums and famous buildings.",
              },
              {
                title: "Safari",
                text: "See wild animals in Africa.",
              },
              {
                title: "Cruise",
                text: "Sail around the Caribbean.",
              },
              {
                title: "Ski Holiday",
                text: "Ski and snowboard in the Alps.",
              },
              {
                title: "Farm Stay",
                text: "Help with animals on a farm.",
              },
              {
                title: "Adventure Camp",
                text: "Rafting, zip lines and climbing.",
              },
            ],
            items: [
              {
                text: "Kaan wants to ski.",
                answer: 5,
              },
              {
                text: "Defne loves farm animals.",
                answer: 6,
              },
              {
                text: "Mert wants to see lions and elephants.",
                answer: 3,
              },
              {
                text: "Selin wants to relax in the sun.",
                answer: 0,
              },
              {
                text: "Can wants exciting activities.",
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
              title: "My first job",
              paragraphs: [
                "When I was sixteen, I got a job at a summer camp for children. I was a helper, and my job was to look after a group of ten children aged seven to nine.",
                "The first day was very difficult. The children were very energetic and didn't listen to me. I felt like I couldn't control them, and I wanted to quit.",
                "My manager, Tom, gave me some advice. He told me to be clear about the rules and to make the activities fun. I followed his advice, and things got better.",
                "By the end of the summer, the children and I were good friends. On the last day, they gave me a card that said 'Best helper ever!' I cried. The job taught me a lot about patience and responsibility. I'm now thinking about becoming a teacher.",
              ],
            },
            items: [
              {
                question: "What was the writer's job?",
                options: [
                  "teaching",
                  "cooking",
                  "cleaning",
                  "looking after children",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel on the first day?",
                options: [
                  "She was happy.",
                  "She wanted to quit.",
                  "She was confident.",
                  "She was bored.",
                ],
                answer: 1,
              },
              {
                question: "What advice did Tom give?",
                options: [
                  "Shout at the children.",
                  "Quit the job.",
                  "Give the children sweets.",
                  "Be clear about the rules.",
                ],
                answer: 3,
              },
              {
                question: "What did the children give the writer?",
                options: [
                  "a card",
                  "a present",
                  "flowers",
                  "chocolate",
                ],
                answer: 0,
              },
              {
                question: "What is the writer thinking about doing?",
                options: [
                  "working at the camp again",
                  "becoming a manager",
                  "becoming a teacher",
                  "studying medicine",
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
            title: "A hotel made of ice",
            text: [
              "In northern Sweden, there's a hotel made entirely of ice and snow. {1} It's called the Icehotel.",
              "The hotel is rebuilt every winter. {2} When the weather gets warmer in spring, it melts back into the river.",
              "Everything in the hotel is made of ice, including the beds and the chairs. {3} Artists from around the world design the rooms.",
              "The temperature inside the hotel is always about minus five degrees. {4} Guests sleep in special warm sleeping bags on reindeer skins.",
              "The Icehotel is very popular with tourists. {5} Many people come to see the Northern Lights, which are often visible from the hotel.",
            ],
            sentences: [
              "Each room has a different design.",
              "The rooms are very warm.",
              "It's one of the most famous hotels in the world.",
              "About 50,000 people visit every year.",
              "The hotel is in the desert.",
              "Ice is taken from a nearby river to build it.",
              "The hotel is open all year.",
              "It doesn't matter how cold it is outside.",
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
              "Penguins are birds that can't fly. They live mainly in the Southern Hemisphere, from Antarctica to the warm coasts of Africa and South America. There are eighteen {1} of penguin.",
              "Penguins are excellent swimmers. Their wings are like flippers, and they use them to swim {2} through the water. Some penguins can swim at up to thirty-five kilometres an hour.",
              "Penguins live in large groups called colonies. Some colonies have more than a million penguins! Penguins are very social and {3} with each other using calls. Emperor penguins are the largest. They live in Antarctica, where it's extremely cold. The males look after the eggs while the females go to the sea to find food. Sadly, many penguins are in {4} because of climate change and overfishing. The ice they need is {5}, and there's less food in the oceans. Scientists are working hard to {6} penguins.",
            ],
            gaps: [
              {
                options: [
                  "specie",
                  "special",
                  "species",
                  "specially",
                ],
                answer: 2,
              },
              {
                options: [
                  "quick",
                  "quickly",
                  "quicker",
                  "quickness",
                ],
                answer: 1,
              },
              {
                options: [
                  "communication",
                  "communicative",
                  "communicator",
                  "communicate",
                ],
                answer: 3,
              },
              {
                options: [
                  "dangerous",
                  "danger",
                  "dangerously",
                  "endanger",
                ],
                answer: 1,
              },
              {
                options: [
                  "melt",
                  "melted",
                  "melts",
                  "melting",
                ],
                answer: 3,
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
            title: "My family",
            text: [
              "I live with my parents, my older brother and my grandmother. We live in a big house {1} the countryside.",
              "My dad is a doctor, and he works at the hospital in town. My mum is a teacher at a primary school. They both work very hard, but they always have time for us.",
              "My brother, Ali, is eighteen. He's at university, studying engineering. He's very clever and funny. We used to argue a lot when we were younger, but now we're good friends. My grandmother is eighty years old. She's very wise and tells us lots of stories about the past. She's {2} amazing cook, and she makes the best cakes in the world! At weekends, we usually go for walks together or visit our relatives. In the evenings, we eat dinner together {3} talk about our day. I feel very lucky to have such a {4} family. We don't always agree, but we always support each {5}. Family is the most important thing {6} me.",
            ],
            answers: [
              [
                "in",
              ],
              [
                "an",
              ],
              [
                "and",
              ],
              [
                "loving",
                "wonderful",
                "great",
                "close",
              ],
              [
                "other",
              ],
              [
                "to",
                "for",
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
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "A school trip",
              lines: [
                "We're going on a school trip next month! [Great!]",
                "Where do you think we should go? [Suggest somewhere]",
                "What should we do there? [Give ideas]",
                "What should I bring? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nThat's great news! School trips are always so much fun.\n\nI think you should go to the science museum in the city. It has lots of interactive exhibitions, and there's a planetarium where you can watch shows about space.\n\nAt the museum, you could do some of the experiments and watch a show in the planetarium. There's also a great café where you could have lunch. If you have time, you could visit the park next to the museum.\n\nYou should bring a packed lunch, some water and a notebook to write down interesting facts. Don't forget your camera!\n\nBye,\nDeniz",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An amazing animal",
              lines: [
                "Tell us about an animal you think is amazing.",
                "Why do you find it interesting?",
                "What can we learn from it?",
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
            sample: "The incredible elephant\n\nI think elephants are amazing animals. They're the largest land animals on Earth, but they're also very gentle and intelligent.\n\nElephants have excellent memories. They can remember other elephants and places for many years. They also show emotions. When an elephant dies, the others stay with the body and seem to be sad.\n\nElephants live in close family groups led by the oldest female. They help each other and look after the babies together.\n\nI think we can learn a lot from elephants. They show us the importance of family and caring for each other. Sadly, elephants are in danger, so we must protect them.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Ben arrived at school, something strange was happening.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Ben arrived at school, something strange was happening. All the students were standing outside, looking at the sky.\n\nBen looked up too. There was a huge hot-air balloon floating above the school! It was red and yellow, and it was coming down slowly.\n\nThe balloon landed on the football field. A man climbed out of the basket and waved. It was Ben's uncle! He was a balloon pilot, and he had come to visit the school to talk about his job.\n\nThe head teacher let the students look inside the balloon. Ben was so proud of his uncle. It was the most exciting school day ever.",
          },
        },
      ],
    },
  ],
};
