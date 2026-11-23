import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 62 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_62: CambridgeTest = {
  id: "preliminary-62",
  level: "preliminary",
  no: 62,
  title: "B1 Preliminary · Practice Test 62",
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
                    "Students must wear their full uniform at all times.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Uniforms are optional.",
                  "Students can wear their own clothes.",
                  "Students must always wear their uniform.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've bought the tickets for the concert. You can pay me back later. Emma",
                  ],
                },
                question: "What has Emma done?",
                options: [
                  "paid for the tickets",
                  "cancelled the concert",
                  "sold the tickets",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains peanuts.",
                    "Not suitable for nut allergy sufferers.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This has no nuts.",
                  "People with nut allergies shouldn't eat this.",
                  "This is suitable for everyone.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "Our maths test is next Monday, not Friday. Mr Grey told us at the end of the lesson. Ben",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the day of the test",
                  "the subject",
                  "the teacher",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "We now serve breakfast all day.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Breakfast is only in the morning.",
                  "The café doesn't serve breakfast.",
                  "You can have breakfast at any time.",
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
            instruction: "The young people below all want to take a class. Read the descriptions of eight classes. Decide which class would be the most suitable for each person.",
            options: [
              {
                title: "Yoga",
                text: "Relax and stretch. Tuesday evenings.",
              },
              {
                title: "Guitar",
                text: "Learn to play the guitar. Saturday mornings.",
              },
              {
                title: "Photography",
                text: "Learn to take great photos. Monday evenings.",
              },
              {
                title: "Cooking",
                text: "Learn to cook Indian food. Wednesday evenings.",
              },
              {
                title: "Spanish",
                text: "Learn Spanish for beginners. Thursday evenings.",
              },
              {
                title: "Karate",
                text: "Learn self-defence. Friday evenings.",
              },
              {
                title: "Painting",
                text: "Learn watercolour painting. Sunday afternoons.",
              },
              {
                title: "Dance",
                text: "Learn salsa. Saturday evenings.",
              },
            ],
            items: [
              {
                text: "Elif wants to learn a new language before her holiday in Spain.",
                answer: 4,
              },
              {
                text: "Burak wants to cook spicy food.",
                answer: 3,
              },
              {
                text: "Defne wants to relax after a busy week.",
                answer: 0,
              },
              {
                text: "Mert wants to learn to play an instrument and is free on Saturday mornings.",
                answer: 1,
              },
              {
                text: "Asya wants to learn to paint and is free on Sundays.",
                answer: 6,
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
              title: "Volunteering at an animal shelter",
              paragraphs: [
                "Every Saturday, I volunteer at an animal shelter in my town. The shelter looks after dogs, cats and rabbits that don't have homes.",
                "My job is to feed the animals, clean their cages and take the dogs for walks. It's hard work, but I love spending time with the animals.",
                "Some of the animals have had very difficult lives. When they arrive, they're often frightened and don't trust people. But with love and patience, they slowly become happier and more confident.",
                "My favourite part is when an animal finds a new home. Last month, a dog called Max, who had been at the shelter for a year, was adopted by a lovely family. I cried because I was so happy for him. Volunteering has taught me a lot about kindness and responsibility.",
              ],
            },
            items: [
              {
                question: "What kind of animals does the shelter look after?",
                options: [
                  "dogs, cats and rabbits",
                  "only dogs",
                  "wild animals",
                  "farm animals",
                ],
                answer: 0,
              },
              {
                question: "What does the writer do at the shelter?",
                options: [
                  "sells animals",
                  "trains animals",
                  "looks after the animals",
                  "treats sick animals",
                ],
                answer: 2,
              },
              {
                question: "How are some animals when they arrive?",
                options: [
                  "happy",
                  "frightened",
                  "aggressive",
                  "hungry",
                ],
                answer: 1,
              },
              {
                question: "Why did the writer cry?",
                options: [
                  "Max was ill.",
                  "She had to leave.",
                  "She was tired.",
                  "She was happy for Max.",
                ],
                answer: 3,
              },
              {
                question: "What has volunteering taught the writer?",
                options: [
                  "how to be a vet",
                  "kindness and responsibility",
                  "how to sell animals",
                  "patience only",
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
            title: "A forest that walks",
            text: [
              "In Ecuador, there's a type of tree that some people say can walk. {1} It's called the walking palm.",
              "The tree has special roots that grow above the ground. {2} When the soil around the tree changes, new roots grow in a different direction.",
              "As new roots grow, the old ones die. {3} Some people say this allows the tree to move up to twenty metres a year.",
              "However, scientists say this isn't true. {4} They think the roots help the tree stay upright in the soft soil of the rainforest.",
              "Whether it can walk or not, the walking palm is an amazing tree. {5} Tourists come to the rainforest especially to see it.",
            ],
            sentences: [
              "The tree grows in the desert.",
              "They believe the tree doesn't move at all.",
              "The tree can run very fast.",
              "They look like legs.",
              "Of course, it doesn't really walk.",
              "It's one of the most unusual trees in the world.",
              "The tree has no roots.",
              "This makes the tree look like it's moving slowly.",
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
            title: "The internet",
            text: [
              "The internet has changed the way we live, work and {1}. Today, more than five billion people use it every day.",
              "The internet started in the 1960s as a project to connect computers in different {2}. In 1989, Tim Berners-Lee created the World Wide Web, which made the internet easy to use.",
              "Today, we use the internet for many things. We can talk to friends on video calls, watch films, listen to music and buy things online. Students use the internet for {3} and to learn new skills. However, the internet also has problems. Some people spend too much time online and don't get enough exercise or sleep. Cyberbullying is also a serious {4}. It's important to protect your personal {5} and be careful about what you share. If we use it {6}, the internet can make our lives much better.",
            ],
            gaps: [
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
                  "universal",
                  "universities",
                  "universe",
                  "university up",
                ],
                answer: 1,
              },
              {
                options: [
                  "research",
                  "researcher",
                  "researched",
                  "researching up",
                ],
                answer: 0,
              },
              {
                options: [
                  "problematic",
                  "problems up",
                  "problem",
                  "problematically",
                ],
                answer: 2,
              },
              {
                options: [
                  "inform",
                  "information",
                  "informative",
                  "informed",
                ],
                answer: 1,
              },
              {
                options: [
                  "wise",
                  "wisdom",
                  "wiser",
                  "wisely",
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
            title: "My weekend job",
            text: [
              "For the last six months, I've been working {1} a café on Saturdays. I serve customers and clean the tables.",
              "The café is always very busy, especially at lunchtime. Sometimes there are long queues, and I have to work very quickly. But I enjoy it because the other staff are very friendly.",
              "My manager, Sarah, has taught me how to make coffee. At first, I made lots of mistakes. Once, I gave a customer salt {2} of sugar! But now I'm much better. My favourite part of the job is talking to the customers. Many of them come every week, and I know {3} names. One old man always tells me funny stories. I earn £50 every Saturday. I'm saving the money {4} a trip to Italy next summer. The job has taught me a lot about working hard and being responsible. I'd recommend weekend jobs to any teenager {5} wants to earn some money and learn new {6}.",
            ],
            answers: [
              [
                "at",
                "in",
              ],
              [
                "instead",
              ],
              [
                "their",
              ],
              [
                "for",
              ],
              [
                "who",
                "that",
              ],
              [
                "skills",
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
              subject: "A trip to the cinema",
              lines: [
                "Would you like to go to the cinema this weekend? [Answer]",
                "What kind of films do you like? [Tell Alex]",
                "Which day is best for you? [Suggest one]",
                "What shall we do after the film? [Give ideas]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nYes, I'd love to go to the cinema this weekend! There's a new superhero film that I really want to see.\n\nI like lots of different kinds of films, but my favourites are action and science fiction. I also enjoy comedies, because I love laughing. I'm not very keen on horror films, though, because they scare me!\n\nSaturday afternoon is best for me, because I have football training on Sunday morning. How about the three o'clock showing?\n\nAfter the film, we could go for a pizza at the restaurant next to the cinema. Or we could walk in the park if the weather is nice.\n\nSee you soon,\nKerem",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Living in a big city",
              lines: [
                "What are the advantages of living in a big city?",
                "What are the disadvantages?",
                "Would you like to live in a city?",
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
            sample: "City life: good or bad?\n\nLiving in a big city has many advantages. There are lots of things to do, like visiting museums, going to concerts and eating in restaurants. Public transport is usually good, so it's easy to get around. There are also more job opportunities.\n\nHowever, there are also disadvantages. Cities can be very noisy and polluted. Houses and flats are often very expensive. Some people also feel lonely in big cities, because they don't know their neighbours.\n\nI live in a small town, but I'd like to live in a city when I'm older. I think it would be exciting, and there would be more opportunities. But I'd always come back to visit my family.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Mia couldn't believe what she had found in the old book.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Mia couldn't believe what she had found in the old book. Inside, there was a letter written by her great-grandmother, more than a hundred years ago.\n\nThe letter was addressed to someone called James. Mia read it carefully. Her great-grandmother had written about her love for James, who had gone to fight in a war.\n\nMia showed the letter to her grandmother. Her grandmother's eyes filled with tears. 'James was my father,' she said. 'He came back from the war and married my mother. This letter must be very special.'\n\nMia and her grandmother framed the letter and put it on the wall. It was a beautiful piece of family history.",
          },
        },
      ],
    },
  ],
};
