import type { CambridgeTest } from "./types";

/** A2 Key practice test 70 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_70: CambridgeTest = {
  id: "key-70",
  level: "key",
  no: 70,
  title: "A2 Key · Practice Test 70",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
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
                    "Please don't park in front of the school gates.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The school has a car park.",
                  "You can park anywhere.",
                  "Cars mustn't stop at the entrance.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Emma, I've got a spare ticket for the football match. Do you want to come? Jake",
                  ],
                },
                question: "What is Jake offering Emma?",
                options: [
                  "his football",
                  "a lift",
                  "a chance to go to a match",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "CAFÉ",
                    "Wi-Fi password on the back of your receipt.",
                  ],
                },
                question: "Where can you find the Wi-Fi password?",
                options: [
                  "on your receipt",
                  "on the wall",
                  "from the waiter",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ruby,",
                    "Can you lend me your calculator for the maths exam tomorrow? Mine is broken. Thanks, Jo",
                  ],
                },
                question: "What does Jo want?",
                options: [
                  "to buy a calculator",
                  "to borrow something",
                  "to help Ruby with maths",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "ZOO",
                    "The penguin area is closed today for cleaning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't see the penguins today.",
                  "The penguins are being moved.",
                  "The zoo is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DANCE SCHOOL",
                    "Classes for all ages.",
                    "Ballet, jazz and hip hop. First class free!",
                  ],
                },
                question: "What do we know about the dance school?",
                options: [
                  "It's only for children.",
                  "It only teaches ballet.",
                  "You can try a class without paying.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Harvey",
                text: "I love fishing. I go to the river with my dad every Sunday. Last summer, I caught a huge fish that was nearly a metre long! I was so proud. My dad took a photo, and it was in the local newspaper. We always put the fish back in the water.",
              },
              {
                title: "Sienna",
                text: "I'm interested in science. I do experiments at home with a science kit. Last year, I entered a science competition with an experiment about plants and music. I found out that plants grow faster when they listen to classical music! I came second.",
              },
              {
                title: "Kofi",
                text: "I play the drums in my school's band. We practise every lunchtime. Last month, we played at a big concert in the town hall. Over five hundred people came. I was very nervous, but it went really well. Now I want to start my own band.",
              },
            ],
            items: [
              {
                text: "appeared in the newspaper?",
                answer: 0,
              },
              {
                text: "lets animals go free?",
                answer: 0,
              },
              {
                text: "did an experiment?",
                answer: 1,
              },
              {
                text: "came second?",
                answer: 1,
              },
              {
                text: "performed for a large audience?",
                answer: 2,
              },
              {
                text: "wants to start something new?",
                answer: 2,
              },
              {
                text: "practises at school?",
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "Learning to cook",
              paragraphs: [
                "Thirteen-year-old Emma couldn't cook at all last year. 'I couldn't even make toast!' she laughs. 'My mum always cooked for us.'",
                "Then Emma's mum broke her arm. 'She couldn't cook for six weeks,' says Emma. 'My dad works late, so I had to learn.'",
                "At first, it was difficult. 'I burned the rice and the pasta was too soft,' she remembers. 'But my mum told me what to do, and I watched videos online. Slowly, I got better.'",
                "Now Emma cooks dinner for her family three times a week. 'My favourite thing to make is chicken curry,' she says. 'I've realised that I love cooking. I want to be a chef one day!'",
              ],
            },
            items: [
              {
                question: "What could Emma cook last year?",
                options: [
                  "nothing",
                  "toast",
                  "pasta",
                ],
                answer: 0,
              },
              {
                question: "Why did Emma have to learn to cook?",
                options: [
                  "Her mum was away.",
                  "Her dad asked her.",
                  "Her mum was injured.",
                ],
                answer: 2,
              },
              {
                question: "What problems did Emma have at first?",
                options: [
                  "She didn't have recipes.",
                  "She hurt her arm.",
                  "She made mistakes with food.",
                ],
                answer: 2,
              },
              {
                question: "How did Emma learn?",
                options: [
                  "from her mum and videos",
                  "at a cooking school",
                  "from her dad",
                ],
                answer: 0,
              },
              {
                question: "What does Emma want to be?",
                options: [
                  "a doctor",
                  "a chef",
                  "a teacher",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Bamboo",
            text: [
              "Bamboo is a type of grass that grows in many warm parts of the world, especially in Asia. It is one of the fastest-growing plants on Earth. Some kinds can grow almost a metre {1} one day!",
              "Bamboo is very strong. In some countries, people use it to build houses and bridges. It is also used to {2} furniture, paper and even clothes.",
              "Bamboo is good for the environment because it grows quickly and doesn't need much water. It also {3} the soil and stops it from washing away in heavy rain. Many animals eat bamboo. The most famous is the giant panda, which eats {4} only bamboo. Today, people are using bamboo {5} of plastic to make things like toothbrushes, straws and cups. This helps to {6} plastic pollution.",
            ],
            gaps: [
              {
                options: [
                  "on",
                  "in",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "make",
                  "build up",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "saves up",
                  "keeps up",
                  "protects",
                ],
                answer: 2,
              },
              {
                options: [
                  "much",
                  "almost",
                  "most",
                ],
                answer: 1,
              },
              {
                options: [
                  "place",
                  "instead",
                  "rather",
                ],
                answer: 1,
              },
              {
                options: [
                  "fall",
                  "sink",
                  "reduce",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Hi Jack,",
              "Thanks for inviting me to go camping with your family. I'd love {1} come!",
              "I've never been camping before, so I don't know {2} to bring. Do I need my own tent? I've got a sleeping bag, but I don't have a torch. Can I borrow one {3} you?",
              "My mum wants to know what time we're leaving and when we'll be back. Could you ask your parents {4} let me know? I'm really excited. I've heard the lake is beautiful. I'm going to bring my fishing rod {5} we can go fishing. See you {6} Friday!",
              "Oscar",
            ],
            answers: [
              [
                "to",
              ],
              [
                "what",
              ],
              [
                "from",
              ],
              [
                "and",
              ],
              [
                "so",
              ],
              [
                "on",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have a new hobby. Write an email to your English friend, Jamie. Write 25 words or more.",
            prompts: [
              "Say what your new hobby is.",
              "Say when you do it.",
              "Say why you like it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jamie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jamie,\n\nMy new hobby is photography! I take photos every weekend in the park and in the city. I like it because I can be creative and I see beautiful things everywhere.\n\nBye,\nNaz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🚲🏫",
                label: "1",
              },
              {
                e: "🚲🛞💨😩",
                label: "2",
              },
              {
                e: "👦🚶🏫⏰👩‍🏫",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Jack was riding his bike to school. Suddenly, his front tyre went flat. He couldn't ride any further, so he had to walk the rest of the way. He was very worried because he was late. When he arrived, he explained what happened to his teacher. She wasn't angry. She said it wasn't his fault.",
          },
        },
      ],
    },
  ],
};
