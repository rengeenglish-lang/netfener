import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 22 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_22: CambridgeTest = {
  id: "flyers-22",
  level: "flyers",
  no: 22,
  title: "A2 Flyers · Practice Test 22",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 40,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "definitions",
            instruction: "Look and read. Choose the correct word for each sentence. There are some extra words.",
            bank: [
              {
                word: "a journalist",
                e: "📰",
              },
              {
                word: "a pocket",
                e: "👖",
              },
              {
                word: "a temple",
                e: "🛕",
              },
              {
                word: "a timetable",
                e: "🗓️",
              },
              {
                word: "a charger",
                e: "🔌",
              },
              {
                word: "a farmer",
                e: "🧑‍🌾",
              },
              {
                word: "a beach",
                e: "🏖️",
              },
              {
                word: "a blanket",
                e: "🛏️",
              },
              {
                word: "a dictionary",
                e: "📕",
              },
              {
                word: "a comet",
                e: "☄️",
              },
              {
                word: "a stadium",
                e: "🏟️",
              },
              {
                word: "an oven",
                e: "♨️",
              },
              {
                word: "a beaver",
                e: "🦫",
              },
              {
                word: "a key",
                e: "🔑",
              },
            ],
            items: [
              {
                text: "This person finds out about the news and writes about it.",
                answer: "a journalist",
              },
              {
                text: "You can keep your phone in this part of your trousers.",
                answer: "a pocket",
              },
              {
                text: "This is a building for religion, often in Asia.",
                answer: "a temple",
              },
              {
                text: "You need this to give your phone more power.",
                answer: "a charger",
              },
              {
                text: "This person works on the land and looks after animals.",
                answer: "a farmer",
              },
              {
                text: "You can sunbathe and build sandcastles here.",
                answer: "a beach",
              },
              {
                text: "You put this on your bed to keep warm in winter.",
                answer: "a blanket",
              },
              {
                text: "This object in space has a long bright tail.",
                answer: "a comet",
              },
              {
                text: "You bake cakes and bread in this.",
                answer: "an oven",
              },
              {
                text: "This animal builds homes in rivers with wood.",
                answer: "a beaver",
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: [
              "Leo",
              "Aunt Jane",
            ],
            items: [
              {
                line: "Aunt Jane, how was your holiday in Egypt?",
                options: [
                  "I'm going next year.",
                  "It's very hot.",
                  "Wonderful! We saw the pyramids.",
                ],
                answer: 2,
              },
              {
                line: "Did you go inside one?",
                options: [
                  "No, I'll go next time.",
                  "It's a big pyramid.",
                  "Yes, but it was very hot and dark.",
                ],
                answer: 2,
              },
              {
                line: "What else did you do?",
                options: [
                  "We went on a boat trip on the River Nile.",
                  "For ten days.",
                  "With your uncle.",
                ],
                answer: 0,
              },
              {
                line: "Did you ride a camel?",
                options: [
                  "I don't like camels.",
                  "Yes! It was quite scary.",
                  "It's a camel.",
                ],
                answer: 1,
              },
              {
                line: "I'd love to go there one day.",
                options: [
                  "Maybe you can come with us next time.",
                  "I went there.",
                  "One day is enough.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Molly had a very old {1} called Biscuit. He was fourteen years old and he couldn't run any more.",
              "One morning, Biscuit wasn't in his bed. Molly looked everywhere. She looked in the garden and in the {2}, but she couldn't find him. She was very {3}.",
              "Then she heard a quiet noise from her bedroom. Biscuit was sleeping under her {4}, on top of her favourite jumper! Molly laughed and gave him a big hug. Now Biscuit sleeps in Molly's room every {5}.",
            ],
            bank: [
              {
                word: "dog",
                e: "🐕",
              },
              {
                word: "street",
                e: "🛣️",
              },
              {
                word: "upset",
                e: "😢",
              },
              {
                word: "bed",
                e: "🛏️",
              },
              {
                word: "night",
                e: "🌙",
              },
              {
                word: "cat",
                e: "🐈",
              },
              {
                word: "kitchen",
                e: "🍳",
              },
              {
                word: "excited",
                e: "🤩",
              },
            ],
            answers: [
              "dog",
              "street",
              "upset",
              "bed",
              "night",
            ],
            titleQuestion: {
              options: [
                "Molly's new cat",
                "A day in the kitchen",
                "Where is Biscuit?",
              ],
              answer: 2,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Bicycles in cities",
            text: [
              "In many cities around the world, more and more people {1} cycling to work and school. Why is cycling becoming so popular?",
              "First, cycling is good for your health. It makes your heart stronger and helps you stay fit. Second, it's cheaper than driving a car {2} taking the bus. You don't have to pay for petrol or tickets.",
              "Third, cycling is good for the environment. Bikes don't produce any pollution, {3} the air in cities becomes cleaner. Finally, in busy cities, cycling can be {4} than driving, because bikes don't get stuck in traffic.",
              "Some cities have made special roads only {5} bikes. In Copenhagen, in Denmark, about half of all people cycle to work or school {6} day. The city has more than four hundred kilometres of bike paths!",
              "Many cities also have bike-sharing schemes. You can rent a bike {7} a short time using an app on your phone. When you've finished, you leave the bike at a station {8} someone else to use. If you live in a city, why not try cycling? Remember to wear a helmet and {9} careful on the roads. You might {10} it!",
            ],
            gaps: [
              {
                options: [
                  "is",
                  "are",
                  "be",
                ],
                answer: 1,
              },
              {
                options: [
                  "or",
                  "and",
                  "but",
                ],
                answer: 0,
              },
              {
                options: [
                  "because",
                  "but",
                  "so",
                ],
                answer: 2,
              },
              {
                options: [
                  "fast",
                  "faster",
                  "fastest",
                ],
                answer: 1,
              },
              {
                options: [
                  "to",
                  "for",
                  "by",
                ],
                answer: 1,
              },
              {
                options: [
                  "all",
                  "many",
                  "every",
                ],
                answer: 2,
              },
              {
                options: [
                  "for",
                  "since",
                  "during",
                ],
                answer: 0,
              },
              {
                options: [
                  "to",
                  "for",
                  "by",
                ],
                answer: 1,
              },
              {
                options: [
                  "be",
                  "being",
                  "are",
                ],
                answer: 0,
              },
              {
                options: [
                  "enjoys",
                  "enjoying",
                  "enjoy",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Ahmed came to England from Syria when he was nine. At first, he couldn't speak any English and he felt very lonely at school.",
              "His teacher, Miss Patel, gave him extra lessons every lunchtime. She used pictures and games to help him learn new words. Ahmed's classmate, Josh, also helped him. They played football together every break time.",
              "Three years later, Ahmed's English is excellent. Last month, he won a school poetry competition. His poem was about his grandmother's garden in Syria. Miss Patel read it to the whole school.",
            ],
            items: [
              {
                question: "Ahmed came to England when he was ______.",
                answers: [
                  "nine",
                  "9",
                ],
              },
              {
                question: "At first, Ahmed felt ______ at school.",
                answers: [
                  "very lonely",
                  "lonely",
                ],
              },
              {
                question: "Miss Patel gave him extra lessons ______.",
                answers: [
                  "every lunchtime",
                  "at lunchtime",
                ],
              },
              {
                question: "Miss Patel used pictures and games to help him learn ______.",
                answers: [
                  "new words",
                  "words",
                ],
              },
              {
                question: "Ahmed and Josh played football ______.",
                answers: [
                  "every break time",
                  "at break time",
                  "together",
                ],
              },
              {
                question: "Last month, Ahmed won ______.",
                answers: [
                  "a school poetry competition",
                  "a poetry competition",
                  "the poetry competition",
                ],
              },
              {
                question: "Ahmed's poem was about ______.",
                answers: [
                  "his grandmother's garden",
                  "his grandmother's garden in syria",
                  "a garden",
                ],
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "Read the text and write the missing words. Write one word on each line.",
            title: "A visit to London",
            text: [
              "Last summer, my family and I visited London {1} the first time. We stayed in a hotel near the river. On the first day, we went on the London Eye. From the top, we could see the {2} city! Then we visited a big museum. I saw a real Egyptian mummy. It was more {3} three thousand years old. In the evening, we ate fish and chips {4} watched a show. London is an amazing city. I hope I can go back there {5}.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "whole",
                "entire",
              ],
              [
                "than",
              ],
              [
                "and",
              ],
              [
                "soon",
                "again",
              ],
            ],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              {
                e: "👵🧶🧣",
                label: "1",
              },
              {
                e: "🧣🎁👦",
                label: "2",
              },
              {
                e: "👦🧣❄️😊",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Grandma knitted a long, warm scarf. She gave it to her grandson as a present. When winter came and it was snowing, the boy wore the scarf every day. He was very happy and warm.",
          },
        },
      ],
    },
  ],
};
