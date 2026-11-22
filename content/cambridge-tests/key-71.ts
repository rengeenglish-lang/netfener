import type { CambridgeTest } from "./types";

/** A2 Key practice test 71 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_71: CambridgeTest = {
  id: "key-71",
  level: "key",
  no: 71,
  title: "A2 Key · Practice Test 71",
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
                    "SPORTS CENTRE",
                    "Tennis courts must be booked online.",
                    "Bookings can't be made by phone.",
                  ],
                },
                question: "How can you book a tennis court?",
                options: [
                  "by telephone",
                  "at the desk",
                  "on the internet",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Sam, I left my jacket in your car. Can you bring it to football practice? Thanks, Leo",
                  ],
                },
                question: "What does Leo want?",
                options: [
                  "a lift to practice",
                  "Sam to bring his jacket",
                  "to borrow Sam's jacket",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "LIBRARY",
                    "Children's section upstairs.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Children can't go upstairs.",
                  "Books for children are on another floor.",
                  "The library is for children only.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "There's no school on Monday because the heating isn't working. Enjoy the long weekend! Mrs Brown",
                  ],
                },
                question: "Why is there no school on Monday?",
                options: [
                  "It's a holiday.",
                  "The teachers are ill.",
                  "There's a problem with the heating.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BEACH",
                    "Ice cream kiosk open from June to September.",
                  ],
                },
                question: "When can you buy ice cream here?",
                options: [
                  "in summer",
                  "all year",
                  "in winter",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BOOK CLUB FOR TEENS",
                    "Meet new friends and talk about books!",
                    "Every other Thursday at the library.",
                  ],
                },
                question: "How often does the book club meet?",
                options: [
                  "every week",
                  "every two weeks",
                  "every day",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Oscar",
                text: "I love playing football. I play for my school team and a local club. I'm the captain of both teams. Last season, my club won the league. I've been invited to a trial with a professional club's youth academy next month. I'm nervous but excited!",
              },
              {
                title: "Isla",
                text: "My hobby is writing. I write stories and poems in my free time. Last year, I started a school magazine with two friends. We write articles about school events and interview teachers. Every month, we print two hundred copies and give them out for free.",
              },
              {
                title: "Zack",
                text: "I'm a big fan of animals. I have a dog, two cats and a parrot. I also help at a local animal shelter on Sundays. I walk the dogs and clean the cages. When I finish school, I want to study animal care at college.",
              },
            ],
            items: [
              {
                text: "is the leader of more than one team?",
                answer: 0,
              },
              {
                text: "has an important event coming up?",
                answer: 0,
              },
              {
                text: "started something with friends?",
                answer: 1,
              },
              {
                text: "makes something that is free to read?",
                answer: 1,
              },
              {
                text: "has several pets?",
                answer: 2,
              },
              {
                text: "wants to study something specific?",
                answer: 2,
              },
              {
                text: "talks to teachers for their hobby?",
                answer: 1,
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
              title: "A long journey",
              paragraphs: [
                "Every year, a group of children from a village in Peru walk for two days to get to a big festival in the city of Cusco. Thirteen-year-old Ana is one of them.",
                "'We walk through the mountains,' says Ana. 'It's very beautiful, but it's also very cold at night. We sleep in tents.'",
                "At the festival, Ana and her friends dance in traditional costumes. 'My grandmother made my dress,' she says. 'It has lots of bright colours. It took her three months to make it.'",
                "Ana loves the festival. 'It's important to remember our traditions,' she says. 'I'm proud of my culture. When I'm older, I'll teach the dances to my children.'",
              ],
            },
            items: [
              {
                question: "How long does it take to walk to the festival?",
                options: [
                  "two days",
                  "two hours",
                  "two weeks",
                ],
                answer: 0,
              },
              {
                question: "What does Ana say about the walk?",
                options: [
                  "It is boring.",
                  "It is easy.",
                  "It is lovely but cold at night.",
                ],
                answer: 2,
              },
              {
                question: "Who made Ana's dress?",
                options: [
                  "her mother",
                  "her grandmother",
                  "Ana",
                ],
                answer: 1,
              },
              {
                question: "What does Ana do at the festival?",
                options: [
                  "She sings.",
                  "She dances.",
                  "She sells things.",
                ],
                answer: 1,
              },
              {
                question: "How does Ana feel about her culture?",
                options: [
                  "bored",
                  "embarrassed",
                  "proud",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Kangaroos",
            text: [
              "Kangaroos are animals that live in Australia. They are famous for {1} along the ground on their strong back legs. Some kangaroos can jump more than eight metres in one jump!",
              "Female kangaroos have a pouch on their stomach. When a baby kangaroo is born, it is very small, only about two centimetres long. It {2} into its mother's pouch and stays there for about six months.",
              "Kangaroos eat grass and leaves. They can go for a long time without drinking water. In hot weather, they rest in the shade during the day and are {3} at night. There are about fifty million kangaroos in Australia. That's {4} than the number of people! Kangaroos are a symbol of Australia. You can see them on the country's coins and {5} planes. If you visit Australia, you'll probably see kangaroos in the wild. But be careful when you drive at night, because they often {6} across roads.",
            ],
            gaps: [
              {
                options: [
                  "walking",
                  "flying",
                  "jumping",
                ],
                answer: 2,
              },
              {
                options: [
                  "climbs",
                  "jumps up",
                  "runs up",
                ],
                answer: 0,
              },
              {
                options: [
                  "acting",
                  "active",
                  "action",
                ],
                answer: 1,
              },
              {
                options: [
                  "more",
                  "most",
                  "much",
                ],
                answer: 0,
              },
              {
                options: [
                  "in",
                  "at",
                  "on",
                ],
                answer: 2,
              },
              {
                options: [
                  "stand",
                  "fly",
                  "jump",
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
              "Hi Megan,",
              "I'm writing to tell you about my weekend. On Saturday, I went {1} a horse-riding lesson for the first time. It was amazing!",
              "My horse was called Bella. She was very gentle and patient {2} me. At first, I was a bit scared because she was so big. But the teacher helped me, and I soon felt more relaxed.",
              "I want to go again next weekend. Would you like {3} come with me? The lessons are £15 {4} hour. You don't need any special clothes, just a pair of boots. The stables give you a helmet. Let me know {5} you're interested. It would be great {6} go together!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "to",
                "for",
              ],
              [
                "with",
              ],
              [
                "to",
              ],
              [
                "an",
                "per",
              ],
              [
                "if",
                "whether",
              ],
              [
                "to",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You lost your pet. Write an email to your English friend, Jo. Write 25 words or more.",
            prompts: [
              "Say what kind of pet it is.",
              "Describe it.",
              "Ask Jo to help you look for it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Jo' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Jo,\n\nMy cat, Pamuk, has been lost since yesterday. She's white with a black tail and green eyes. Could you help me look for her this afternoon? I'm really worried.\n\nThanks,\nEce",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎂🛒",
                label: "1",
              },
              {
                e: "👦🎁👵",
                label: "2",
              },
              {
                e: "👵🎁😢😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "It was Grandma's eightieth birthday, and Sam wanted to give her something special. He didn't have much money, so he made her a photo album with pictures of the family. It took him two weeks. When Grandma opened the present, she started crying. But they were happy tears. She said it was the best present she had ever received.",
          },
        },
      ],
    },
  ],
};
