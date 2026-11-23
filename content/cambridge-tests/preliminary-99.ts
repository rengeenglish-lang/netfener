import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 99 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_99: CambridgeTest = {
  id: "preliminary-99",
  level: "preliminary",
  no: 99,
  title: "B1 Preliminary · Practice Test 99",
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
                    "BOOKSHOP",
                    "Buy two books and get a third free.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "All books are free.",
                  "Books are half price.",
                  "If you buy two books, you get another one free.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Arda, the film starts at 8, not 7. See you outside the cinema at 7.45. Oya",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the time of the film",
                  "the cinema",
                  "the film",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not use if seal is broken.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Break the seal first.",
                  "Don't use it if it's been opened.",
                  "It can be used any time.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Cansu,",
                    "Thank you for the lovely present! The scarf is beautiful, and it's my favourite colour. Hülya",
                  ],
                },
                question: "Why is Hülya writing?",
                options: [
                  "to say thank you for a present",
                  "to ask for a scarf",
                  "to invite Cansu",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAMPSITE",
                    "Please keep noise to a minimum after 10 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Music is allowed all night.",
                  "The campsite closes at 10 p.m.",
                  "Be quiet after 10 p.m.",
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
            instruction: "The young people below all want to read a website. Read the descriptions of eight websites. Decide which website would be the most suitable for each person.",
            options: [
              {
                title: "Space Today",
                text: "News about planets and astronauts.",
              },
              {
                title: "Word Games",
                text: "Puzzles and crosswords.",
              },
              {
                title: "World Kitchen",
                text: "Recipes from different countries.",
              },
              {
                title: "Green Living",
                text: "Ideas for living sustainably.",
              },
              {
                title: "History Hub",
                text: "Stories from the past.",
              },
              {
                title: "Craft Corner",
                text: "Make things from paper and wool.",
              },
              {
                title: "Car Club",
                text: "Reviews of new cars.",
              },
              {
                title: "Travel Tips",
                text: "Advice for young travellers.",
              },
            ],
            items: [
              {
                text: "Ufuk wants to read about new cars.",
                answer: 6,
              },
              {
                text: "Vildan wants to cook food from other countries.",
                answer: 2,
              },
              {
                text: "Yiğit loves crosswords.",
                answer: 1,
              },
              {
                text: "Zehra wants to knit and make things.",
                answer: 5,
              },
              {
                text: "Ahu wants travel advice.",
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
              title: "A month without sugar",
              paragraphs: [
                "Last spring, my class did an experiment. We all agreed to stop eating sugar for a month. Our biology teacher wanted to show us how much sugar we usually eat.",
                "The first week was really hard. I didn't realise how many things have sugar in them: not just sweets and cakes, but also bread, sauces and even some crisps! I had to read every label carefully.",
                "In the second week, I felt tired and grumpy. But after that, things got easier. I started eating more fruit and nuts as snacks, and I didn't miss chocolate as much as I'd expected.",
                "By the end of the month, I felt more energetic and slept better. I've started eating sugar again, but much less than before. The experiment changed the way I think about food.",
              ],
            },
            items: [
              {
                question: "Why did the class do the experiment?",
                options: [
                  "to lose weight",
                  "to win a competition",
                  "to save money",
                  "to learn how much sugar they eat",
                ],
                answer: 3,
              },
              {
                question: "What surprised the writer?",
                options: [
                  "how many foods contain sugar",
                  "how cheap fruit is",
                  "how easy it was",
                  "how tasty bread is",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel in the second week?",
                options: [
                  "happy and calm",
                  "excited",
                  "tired and grumpy",
                  "hungry for vegetables",
                ],
                answer: 2,
              },
              {
                question: "What did the writer eat as snacks?",
                options: [
                  "crisps",
                  "chocolate",
                  "fruit and nuts",
                  "sweets",
                ],
                answer: 2,
              },
              {
                question: "What is true about the writer now?",
                options: [
                  "She eats less sugar.",
                  "She eats no sugar at all.",
                  "She eats more sugar.",
                  "She stopped eating fruit.",
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
            title: "A museum under the sea",
            text: [
              "Off the coast of Mexico, there's a museum under the sea. {1} It has more than 500 statues on the sea floor.",
              "The statues were made by an artist from Britain. {2} They show ordinary people, like fishermen and children.",
              "The statues are made from a special material. {3} Over time, coral grows on them and fish live around them.",
              "Visitors can see the statues by diving or snorkelling. {4} There are also boats with glass bottoms.",
              "The museum helps to protect the natural coral reefs nearby. {5} Fewer tourists visit them, so they can recover.",
            ],
            sentences: [
              "Many visitors go to the museum instead.",
              "Some of them are based on people from the local village.",
              "The museum is in the mountains.",
              "It's one of the most unusual museums in the world.",
              "The water is very clear, so it's easy to see them.",
              "You can't see the statues.",
              "It's safe for sea animals and plants.",
              "The statues are made of plastic.",
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
            title: "Bicycles",
            text: [
              "The first bicycles were made in Germany more than 200 years ago. They didn't have pedals, so riders had to push them along with their feet.",
              "Over the years, bicycles were {1} many times. One early bicycle, the penny-farthing, had a huge front wheel and a tiny back wheel. It was fast but very {2}, and riders often fell off.",
              "The modern bicycle, with two wheels of the same size and a chain, was invented in the 1880s. It quickly became {3} all over the world. Today, there are more than a billion bicycles on the planet. They are used for {4}, sport and fun. In some countries, such as the Netherlands and Denmark, more people cycle to work than drive. Cycling has many {5}. It's good for your health, it doesn't cause pollution, and it's cheaper than driving. Many cities are now building more cycle lanes to {6} people to ride bikes.",
            ],
            gaps: [
              {
                options: [
                  "improve",
                  "improvement",
                  "improving",
                  "improved",
                ],
                answer: 3,
              },
              {
                options: [
                  "danger",
                  "dangerous",
                  "dangerously",
                  "endanger",
                ],
                answer: 1,
              },
              {
                options: [
                  "popularity",
                  "popularly",
                  "populate",
                  "popular",
                ],
                answer: 3,
              },
              {
                options: [
                  "transport",
                  "transported",
                  "transporting",
                  "transporter",
                ],
                answer: 0,
              },
              {
                options: [
                  "advantageously",
                  "advantaged",
                  "advantages",
                  "advantageous",
                ],
                answer: 2,
              },
              {
                options: [
                  "encouragement",
                  "encouraging",
                  "encourage",
                  "encouraged",
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
            title: "A day at the zoo",
            text: [
              "Last Sunday, my family went to the zoo. My little brother had been asking to go {1} months, so my parents finally agreed.",
              "We arrived early, just as the zoo opened. First, we went to see the lions. The male lion was sleeping in the sun, {2} the cubs were playing.",
              "Next, we watched the penguins being fed. The zookeeper threw fish into the water, and the penguins dived in to catch them. My brother laughed so much that he couldn't stop! After lunch, we visited the reptile house. I don't like snakes, so I stayed close {3} my dad. But I enjoyed looking at the colourful lizards and the huge tortoise, which is more than a hundred years {4}. In the afternoon, we went to the elephant area. We learned that elephants can remember people for many years. It was a long day, and we were all very tired at the end. My brother fell asleep in the car {5} the way home. He says he wants to be a zookeeper when he grows {6}.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "while",
                "and",
                "but",
              ],
              [
                "to",
              ],
              [
                "old",
              ],
              [
                "on",
              ],
              [
                "up",
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
            instruction: "Read this email from your English-speaking friend Ali and the notes you have made. Write your email to Ali using all the notes. Write about 100 words.",
            input: {
              from: "Ali",
              subject: "Summer plans",
              lines: [
                "The summer holidays start soon! [Reply]",
                "What are you going to do this summer? [Tell Ali]",
                "Have you got any ideas for things we could do together? [Suggest]",
                "Would you like to come to my grandparents' village? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Ali,\n\nI know! I can't wait for the holidays. It's been a long year.\n\nThis summer, I'm going to spend two weeks at the seaside with my family. We've rented a small house near the beach. I'm also going to do a summer course in robotics, which I'm very excited about.\n\nWe could go cycling together in the mornings before it gets too hot. We could also go to the outdoor cinema in the park, which shows films every Friday night.\n\nI'd love to come to your grandparents' village! I've heard it's very beautiful. Just tell me when, and I'll ask my parents.\n\nSee you soon,\nBora",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Living in the city or the countryside",
              lines: [
                "Would you rather live in the city or the countryside?",
                "What are the good things about it?",
                "Are there any bad things?",
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
            sample: "City life for me\n\nI'd rather live in the city. I've lived in Istanbul all my life, and I love how busy and exciting it is. There's always something to do.\n\nThe good things about the city are the shops, cinemas, museums and restaurants. Public transport is good, so I can get around easily without a car. There are also lots of different people, which means you can make friends from all over the world.\n\nOf course, there are some bad things. The city can be very noisy and crowded, and the air isn't always clean. Traffic is also terrible at rush hour. But I think the advantages are bigger than the disadvantages. Maybe when I'm older, I'll want a quiet life in the countryside, but not yet!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Everyone in the village was talking about the strange light in the sky.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Everyone in the village was talking about the strange light in the sky. It had appeared the night before, bright green and moving slowly above the hills.\n\nSome people said it was a plane. Others said it was a UFO. Elif and her brother decided to find out for themselves. That evening, they climbed the hill behind their house with a torch and a camera.\n\nAt nine o'clock, the light appeared again. Elif zoomed in with her camera. It wasn't a plane or a UFO. It was a drone, and it was being flown by a boy from the next village!\n\nThe next day, Elif showed everyone her photos. The boy apologised and explained that he had put green lights on his drone for fun.",
          },
        },
      ],
    },
  ],
};
