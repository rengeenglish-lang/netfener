import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 22 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_22: CambridgeTest = {
  id: "preliminary-22",
  level: "preliminary",
  no: 22,
  title: "B1 Preliminary · Practice Test 22",
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
                    "LIBRARY",
                    "Books can now be renewed online. Visit our website and use your library card number.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library has closed.",
                  "You need a new library card.",
                  "You can borrow books for longer using the internet.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, the dance class is cancelled tonight because the teacher is ill. It's on again next week. Lucy",
                  ],
                },
                question: "Why has the class been cancelled?",
                options: [
                  "The room is being used.",
                  "Not enough students.",
                  "The teacher is unwell.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for vegetarians.",
                    "May contain traces of milk.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "People who don't eat meat can eat it.",
                  "It contains meat.",
                  "It is milk-free.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear Ms Brown,",
                    "I'm sorry, but Ali won't be at school tomorrow because he has a hospital appointment. He'll be back on Thursday. Mrs Yılmaz",
                  ],
                },
                question: "Why has Mrs Yılmaz written this email?",
                options: [
                  "to ask about homework",
                  "to explain why her son will be absent",
                  "to book an appointment",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "Lockers are free. Please bring your own lock.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You need to bring something to lock your locker.",
                  "Lockers cost money.",
                  "Locks are sold here.",
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
            instruction: "The young people below all want to choose a holiday destination. Read the descriptions of eight places. Decide which place would be the most suitable for each person.",
            options: [
              {
                title: "Snowy Peaks",
                text: "Ski resort with slopes for all levels and a big indoor pool.",
              },
              {
                title: "Sunny Bay",
                text: "Quiet beach village with clear water, perfect for snorkelling.",
              },
              {
                title: "Old Town",
                text: "Historic city with castles, museums and walking tours.",
              },
              {
                title: "Jungle Lodge",
                text: "Stay in the rainforest and see monkeys, birds and butterflies with a guide.",
              },
              {
                title: "Adventure Park",
                text: "Zip lines, climbing walls and white-water rafting.",
              },
              {
                title: "Lake District",
                text: "Peaceful lakes and hills, ideal for walking and cycling.",
              },
              {
                title: "Big City",
                text: "Shopping, theatres, restaurants and nightlife.",
              },
              {
                title: "Desert Camp",
                text: "Sleep in tents under the stars and ride camels across the sand.",
              },
            ],
            items: [
              {
                text: "Defne wants to see fish and swim in the sea.",
                answer: 1,
              },
              {
                text: "Kaan loves history and old buildings.",
                answer: 2,
              },
              {
                text: "Lale wants to see wild animals in their natural home.",
                answer: 3,
              },
              {
                text: "Emre loves exciting activities and isn't scared of heights.",
                answer: 4,
              },
              {
                text: "Nil wants a relaxing holiday where she can go walking.",
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
              title: "My first year at university",
              paragraphs: [
                "When I started university last year, I was excited but also very nervous. I'd never lived away from home before, and I didn't know anyone in the city.",
                "The first week was overwhelming. There were so many new things to learn: how to use the library, where my lectures were and how to cook for myself. I phoned my mum every day and sometimes felt like going home.",
                "Things improved when I joined the university hiking club. Every weekend, we went walking in the hills outside the city. I made friends quickly, and they helped me feel at home.",
                "Now, a year later, I'm much more independent. I can cook several meals, I manage my own money and I'm doing well in my studies. I still miss my family, but I'm glad I came. University has been the best experience of my life so far.",
              ],
            },
            items: [
              {
                question: "How did the writer feel when she started university?",
                options: [
                  "bored",
                  "excited and nervous",
                  "angry",
                  "calm",
                ],
                answer: 1,
              },
              {
                question: "What did the writer do every day in the first week?",
                options: [
                  "went hiking",
                  "cooked meals",
                  "went to the library",
                  "called her mother",
                ],
                answer: 3,
              },
              {
                question: "What helped the writer feel better?",
                options: [
                  "joining a club",
                  "going home",
                  "studying harder",
                  "getting a job",
                ],
                answer: 0,
              },
              {
                question: "How has the writer changed?",
                options: [
                  "She wants to go home.",
                  "She doesn't study.",
                  "She is more independent.",
                  "She has no friends.",
                ],
                answer: 2,
              },
              {
                question: "How does she feel about university now?",
                options: [
                  "It has been terrible.",
                  "It's boring.",
                  "It has been a great experience.",
                  "She regrets going.",
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
            title: "The town with no traffic lights",
            text: [
              "In the Dutch town of Drachten, the traffic lights and road signs were removed several years ago. {1} Instead, drivers, cyclists and pedestrians share the roads.",
              "The idea came from a traffic engineer called Hans Monderman. {2} He believed that drivers would be more careful if they had to think for themselves.",
              "At first, many people thought it would be dangerous. {3} But the number of accidents actually fell.",
              "Without traffic lights, drivers slow down and look at other road users. {4} Journeys also became quicker, because cars didn't have to wait at red lights.",
              "Today, several other towns in Europe have tried the same idea. {5} However, experts say it doesn't work everywhere, especially in very busy cities.",
            ],
            sentences: [
              "Traffic lights were added again after a month.",
              "They make eye contact with pedestrians and cyclists before moving.",
              "Cars are not allowed in the town.",
              "He thought that signs made drivers stop paying attention.",
              "There are no lines on the roads either.",
              "Some have seen similar improvements in safety.",
              "The town has more accidents than any other.",
              "They expected more crashes, especially at crossroads.",
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
            title: "Volcanoes",
            text: [
              "A volcano is an opening in the Earth's surface through which hot liquid rock, called lava, gas and ash can {1}. There are about 1,500 active volcanoes in the world.",
              "Most volcanoes are found along the edges of the Earth's plates, which are huge pieces of rock that {2} slowly.",
              "Volcanic eruptions can be very dangerous. They can destroy towns and {3} problems for planes because of the ash in the air. However, volcanoes also have advantages. The soil near volcanoes is very rich, so farmers can grow good {4}. In countries like Iceland, the heat from volcanoes is used to produce electricity and {5} homes. Scientists study volcanoes carefully so they can {6} people before an eruption.",
            ],
            gaps: [
              {
                options: [
                  "run",
                  "escape",
                  "leave up",
                  "stay",
                ],
                answer: 1,
              },
              {
                options: [
                  "walk",
                  "travel up",
                  "go up",
                  "move",
                ],
                answer: 3,
              },
              {
                options: [
                  "make",
                  "cause",
                  "do",
                  "give",
                ],
                answer: 1,
              },
              {
                options: [
                  "plants up",
                  "seeds",
                  "fruits up",
                  "crops",
                ],
                answer: 3,
              },
              {
                options: [
                  "heat",
                  "burn",
                  "fire",
                  "cook",
                ],
                answer: 0,
              },
              {
                options: [
                  "tell",
                  "inform up",
                  "warn",
                  "say",
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
            title: "A surprise party",
            text: [
              "Last week, my friends and I organised a surprise party for our teacher, Mrs Green, {1} was leaving our school after twenty years.",
              "We'd been planning it {2} weeks. We collected money from every student and bought her a beautiful plant and a card. Everyone in the school signed it.",
              "On her last day, we asked her to come to the hall {3} a 'meeting'. When she opened the door, everyone shouted 'Surprise!' She was so shocked that she started crying. We sang songs and showed her a video of students talking about {4} favourite memories of her lessons. At the end, she gave a speech. She said she would never forget us. It was a very emotional day, {5} I'm glad we could show her how much we appreciated {6}.",
            ],
            answers: [
              [
                "who",
              ],
              [
                "for",
              ],
              [
                "for",
              ],
              [
                "their",
              ],
              [
                "but",
                "and",
              ],
              [
                "her",
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "A weekend in the countryside",
              lines: [
                "My family is going to stay in the countryside next weekend. Do you want to come? [Answer]",
                "What do you like doing in the countryside? [Tell Jamie]",
                "What should you bring? [Ask]",
                "How will you get there? [Suggest]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nThank you so much for inviting me! I'd love to come. I'll ask my parents tonight, but I'm sure they'll say yes.\n\nI love walking in the countryside, especially near rivers and forests. I also enjoy taking photos of animals and flowers. Maybe we could go cycling too, if there are bikes there.\n\nWhat should I bring? Do I need walking boots and a raincoat? Should I bring a sleeping bag, or will there be beds?\n\nMy dad could drive me to your house on Friday evening, and then I could travel with your family. Would that be OK?\n\nThanks again,\nAda",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best advice I've ever been given",
              lines: [
                "What's the best advice you've ever received?",
                "Who gave it to you?",
                "How has it helped you?",
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
            sample: "Just try your best\n\nThe best advice I've ever been given came from my grandfather. When I was ten, I was very worried about a swimming competition. I was scared I would lose and everyone would laugh at me.\n\nMy grandfather told me, 'Don't worry about winning or losing. Just try your best, and you'll never have anything to regret.' I came fourth in the race, but I felt proud because I had swum as fast as I could.\n\nSince then, I've remembered his words whenever I feel nervous about exams or competitions. It has helped me to relax and enjoy challenges instead of fearing them.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'As the plane took off, Sophie looked out of the window and smiled.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "As the plane took off, Sophie looked out of the window and smiled. She was finally going to Australia to visit her cousins, whom she hadn't seen for five years.\n\nThe flight was very long, more than twenty hours. Sophie watched films, read her book and tried to sleep. She was too excited to rest.\n\nWhen the plane landed in Sydney, Sophie walked into the arrivals hall nervously. Would she recognise her cousins? Then she heard someone shouting her name. Her cousins were running towards her with a big sign that said 'Welcome, Sophie!'\n\nShe knew it was going to be an amazing holiday.",
          },
        },
      ],
    },
  ],
};
