import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 79 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_79: CambridgeTest = {
  id: "preliminary-79",
  level: "preliminary",
  no: 79,
  title: "B1 Preliminary · Practice Test 79",
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
                    "The school field is closed today because it's too wet.",
                  ],
                },
                question: "Why is the field closed?",
                options: [
                  "It's too wet.",
                  "It's being repaired.",
                  "It's too hot.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've lost my maths book. Can I borrow yours? Lucy",
                  ],
                },
                question: "What does Lucy want?",
                options: [
                  "to buy a book",
                  "to borrow a book",
                  "to help Grace",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Handle with care. Fragile.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Be careful because it can break.",
                  "It's very strong.",
                  "You can drop it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "The bus to the match leaves at 9 tomorrow morning. Don't be late! Coach",
                  ],
                },
                question: "What does the coach remind Ben?",
                options: [
                  "where the match is",
                  "to bring his boots",
                  "when the bus leaves",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Bicycles must not be ridden on the grass.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Bikes aren't allowed in the park.",
                  "You can ride bikes anywhere.",
                  "Don't ride bikes on the grass.",
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
            instruction: "The young people below all want to choose a holiday activity. Read the descriptions of eight activities. Decide which activity would be the most suitable for each person.",
            options: [
              {
                title: "Snorkelling",
                text: "See fish and coral in the sea.",
              },
              {
                title: "Horse Riding",
                text: "Ride along the beach.",
              },
              {
                title: "Cooking Class",
                text: "Learn to cook local food.",
              },
              {
                title: "Mountain Biking",
                text: "Ride through the hills.",
              },
              {
                title: "Painting",
                text: "Paint the beautiful scenery.",
              },
              {
                title: "Kayaking",
                text: "Paddle along the river.",
              },
              {
                title: "Museum Visit",
                text: "Learn about local history.",
              },
              {
                title: "Bird-Watching",
                text: "Watch rare birds with a guide.",
              },
            ],
            items: [
              {
                text: "Kaan wants to see fish in the sea.",
                answer: 0,
              },
              {
                text: "Defne loves art.",
                answer: 4,
              },
              {
                text: "Mert loves history.",
                answer: 6,
              },
              {
                text: "Selin loves horses.",
                answer: 1,
              },
              {
                text: "Can wants to learn to cook.",
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
              title: "A year without a car",
              paragraphs: [
                "Last year, my family decided to sell our car and try living without one for a year. My parents wanted to save money and help the environment.",
                "At first, it was very difficult. We had to walk or cycle everywhere. When it rained, we got very wet! Shopping was also difficult, because we had to carry everything home.",
                "But after a few months, we got used to it. I started cycling to school, and I became much fitter. We also spent more time together as a family, going for walks and bike rides.",
                "At the end of the year, we decided not to buy a new car. We'd saved a lot of money and felt healthier. Now we only use public transport or hire a car when we need to travel a long way. I think more families should try living without a car.",
              ],
            },
            items: [
              {
                question: "Why did the family sell their car?",
                options: [
                  "it was broken",
                  "nobody could drive",
                  "to save money and help the environment",
                  "to buy a new one",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "going to school",
                  "carrying shopping",
                  "seeing friends",
                  "sleeping",
                ],
                answer: 1,
              },
              {
                question: "How did the writer change?",
                options: [
                  "She became lazier.",
                  "She became unhappy.",
                  "She stopped going to school.",
                  "She became fitter.",
                ],
                answer: 3,
              },
              {
                question: "What did the family decide at the end of the year?",
                options: [
                  "to buy a new car",
                  "not to buy a new car",
                  "to move house",
                  "to buy a bicycle",
                ],
                answer: 1,
              },
              {
                question: "What does the writer think?",
                options: [
                  "Nobody should try it.",
                  "Cars are essential.",
                  "Cycling is dangerous.",
                  "More families should try it.",
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
            title: "A hotel for dogs",
            text: [
              "In London, there's a luxury hotel just for dogs. {1} It has comfortable beds, a swimming pool and even a spa.",
              "Dog owners can leave their dogs at the hotel when they go on holiday. {2} Staff take the dogs for walks and play with them.",
              "The hotel has rooms of different sizes. {3} Some rooms even have TVs showing films about dogs!",
              "The dogs eat healthy, fresh food prepared by a chef. {4} The hotel also has a vet who checks the dogs every day.",
              "The hotel is very expensive, but many owners say it's worth it. {5} They know their dogs are happy and well looked after.",
            ],
            sentences: [
              "They don't have to worry while they're away.",
              "They know their pets will be safe and happy.",
              "Dogs sleep on the floor.",
              "It's one of the most unusual hotels in the city.",
              "Some dogs have special diets.",
              "The hotel is very cheap.",
              "Small dogs have small rooms, and big dogs have bigger ones.",
              "The hotel is for cats only.",
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
            title: "Football",
            text: [
              "Football is the world's most popular sport. More than 250 million people {1} it in more than 200 countries.",
              "Modern football began in England in the nineteenth century. The first official rules were {2} in 1863.",
              "The biggest football competition is the World Cup, which takes place every four years. Brazil has won it five times, more than any other country. Women's football is also very popular. The first Women's World Cup was held in 1991. Football is popular because it's easy to play. You only need a ball and some space. Children all over the world play football in parks, streets and on {3}. Football also brings people together. Fans from different countries {4} their teams at matches. Many footballers are very famous and earn a lot of money. Some of them use their {5} to help charities. For many people, football is much {6} than just a game.",
            ],
            gaps: [
              {
                options: [
                  "player",
                  "play",
                  "playing",
                  "played",
                ],
                answer: 1,
              },
              {
                options: [
                  "written",
                  "write",
                  "wrote",
                  "writing",
                ],
                answer: 0,
              },
              {
                options: [
                  "beach up",
                  "beached",
                  "beaches",
                  "beaching",
                ],
                answer: 2,
              },
              {
                options: [
                  "supporter",
                  "support",
                  "supportive",
                  "supported",
                ],
                answer: 1,
              },
              {
                options: [
                  "famous",
                  "famously",
                  "fames",
                  "fame",
                ],
                answer: 3,
              },
              {
                options: [
                  "most",
                  "more",
                  "much",
                  "many",
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
            title: "My favourite hobby",
            text: [
              "My favourite hobby is playing the drums. I started when I was ten, {1} my uncle gave me an old drum kit.",
              "At first, my parents weren't very happy {2} the noise! So I practise in the garage, where the sound doesn't bother anyone.",
              "I have lessons every week with a teacher called Mark. He's a professional drummer, and he's very good. He's taught me lots of different rhythms and styles. Now I can play rock, jazz and pop. Last year, I joined a band {3} some friends from school. We practise every Saturday and play at parties and school events. Last month, we played at a big music festival in our town. It was amazing! More than five hundred people watched us. I was very nervous, {4} it went really well. My dream is to become a professional drummer. I'm going to work very hard to make my dream come {5}. I can't imagine my life {6} music.",
            ],
            answers: [
              [
                "when",
              ],
              [
                "about",
                "with",
              ],
              [
                "with",
              ],
              [
                "but",
              ],
              [
                "true",
              ],
              [
                "without",
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
              subject: "A cooking class",
              lines: [
                "I've started a cooking class! [Great!]",
                "What do you like to cook? [Tell Chris]",
                "What's your favourite food? [Explain]",
                "Could you teach me to cook something? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nThat's great! Cooking is a very useful skill.\n\nI like cooking pasta dishes, because they're easy and delicious. I also enjoy baking cakes and biscuits. My chocolate cake is famous in my family!\n\nMy favourite food is pizza, especially with lots of vegetables and cheese. I also love my grandmother's stuffed peppers, which are a traditional dish from our country.\n\nOf course I can teach you to cook something! How about my chocolate cake? It's not too difficult, and it tastes amazing. We could make it together next weekend.\n\nBye,\nMira",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best way to spend free time",
              lines: [
                "How do you like to spend your free time?",
                "Why do you enjoy these activities?",
                "Do you think young people have enough free time?",
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
            sample: "Making the most of free time\n\nI like to spend my free time doing sport, reading and seeing my friends. I play football twice a week, and I go swimming on Saturdays. In the evenings, I usually read a book or watch a film.\n\nI enjoy these activities because they help me relax after school. Sport keeps me fit and healthy, and reading helps me escape into different worlds. Spending time with friends makes me happy.\n\nI don't think young people have enough free time. We have lots of homework and exams, and we're often very busy. I think schools should give us less homework so that we have more time to enjoy our hobbies and relax.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Mia opened her eyes, she didn't know where she was.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Mia opened her eyes, she didn't know where she was. She was lying in a soft bed in a room she had never seen before.\n\nThen she remembered. She had been in a car accident. She was in hospital! She looked around and saw her parents sitting next to her bed.\n\n'You're awake!' her mother cried. 'We've been so worried.' Mia had been unconscious for two days. The doctor came in and said she would be fine.\n\nA week later, Mia went home. Her friends had decorated her bedroom with balloons and flowers. She felt very lucky to be alive and to have such wonderful friends and family.",
          },
        },
      ],
    },
  ],
};
