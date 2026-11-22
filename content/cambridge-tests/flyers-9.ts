import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 9 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_9: CambridgeTest = {
  id: "flyers-9",
  level: "flyers",
  no: 9,
  title: "A2 Flyers · Practice Test 9",
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
                word: "a detective",
                e: "🕵️",
              },
              {
                word: "a glove",
                e: "🧤",
              },
              {
                word: "a palace",
                e: "🏰",
              },
              {
                word: "a parcel",
                e: "📦",
              },
              {
                word: "a telescope",
                e: "🔭",
              },
              {
                word: "a dentist",
                e: "🦷",
              },
              {
                word: "an island",
                e: "🏝️",
              },
              {
                word: "a sofa",
                e: "🛋️",
              },
              {
                word: "a menu",
                e: "📜",
              },
              {
                word: "a star",
                e: "⭐",
              },
              {
                word: "an airport",
                e: "🛫",
              },
              {
                word: "a fork",
                e: "🍴",
              },
              {
                word: "a dolphin",
                e: "🐬",
              },
              {
                word: "a calendar",
                e: "📅",
              },
            ],
            items: [
              {
                text: "This person tries to find out who did a crime.",
                answer: "a detective",
              },
              {
                text: "You wear this on your hand when it is cold.",
                answer: "a glove",
              },
              {
                text: "A king or a queen lives in this big building.",
                answer: "a palace",
              },
              {
                text: "The postman brings this box to your house.",
                answer: "a parcel",
              },
              {
                text: "You use this to look at the stars and planets.",
                answer: "a telescope",
              },
              {
                text: "This person looks after your teeth.",
                answer: "a dentist",
              },
              {
                text: "This is land with water all around it.",
                answer: "an island",
              },
              {
                text: "This tells you what food you can order in a restaurant.",
                answer: "a menu",
              },
              {
                text: "Planes take off and land in this place.",
                answer: "an airport",
              },
              {
                text: "This clever sea animal likes to jump out of the water.",
                answer: "a dolphin",
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
              "Jack",
              "Grandma",
            ],
            items: [
              {
                line: "Grandma, what was your school like when you were young?",
                options: [
                  "I'm seventy-five.",
                  "It was very small. There were only twenty pupils.",
                  "I'll go to school tomorrow.",
                ],
                answer: 1,
              },
              {
                line: "Did you wear a uniform?",
                options: [
                  "No, I've got a new one.",
                  "It's in the cupboard.",
                  "Yes, a grey skirt and a white shirt.",
                ],
                answer: 2,
              },
              {
                line: "What was your favourite subject?",
                options: [
                  "History. I loved learning about kings and queens.",
                  "At nine o'clock.",
                  "My teacher.",
                ],
                answer: 0,
              },
              {
                line: "Were the teachers strict?",
                options: [
                  "Yes, I'm a teacher.",
                  "Some of them were, but most were kind.",
                  "They're coming tomorrow.",
                ],
                answer: 1,
              },
              {
                line: "Do you still have any photos of your school?",
                options: [
                  "Yes, let me find them for you.",
                  "I took the photo.",
                  "It isn't there now.",
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
              "Lucy and her cousin Max were spending the weekend at their grandparents' old {1} in the countryside.",
              "On Saturday, it rained all day, so they decided to explore the attic. It was dark and full of old {2}. In the corner, Max found a small wooden box. Inside, there was an old {3} with a drawing of the garden and a big X under the apple tree.",
              "'It's a treasure map!' said Lucy. The next morning, they took a {4} and started digging under the tree. After an hour, they found a metal tin. Inside, there were some old coins and a letter from their grandfather. He wrote it when he was a boy. Grandpa {5} when they showed him the letter.",
            ],
            bank: [
              {
                word: "farmhouse",
                e: "🏡",
              },
              {
                word: "furniture",
                e: "🪑",
              },
              {
                word: "map",
                e: "🗺️",
              },
              {
                word: "spade",
                e: "🪏",
              },
              {
                word: "smiled",
                e: "😊",
              },
              {
                word: "flat",
                e: "🏢",
              },
              {
                word: "spoon",
                e: "🥄",
              },
              {
                word: "cried",
                e: "😢",
              },
            ],
            answers: [
              "farmhouse",
              "furniture",
              "map",
              "spade",
              "smiled",
            ],
            titleQuestion: {
              options: [
                "A rainy day at the cinema",
                "The secret under the apple tree",
                "Max's new bike",
              ],
              answer: 1,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "The Olympic Games",
            text: [
              "The first Olympic Games took place in Greece about 2,800 years {1}. Only men could take part, and there was only one race at the first Games.",
              "The modern Olympic Games started in 1896 in Athens. Since then, they {2} taken place every four years, except during wars. Today, athletes from more than two hundred countries take {3}.",
              "The Olympic flag has five rings of different colours. The rings show that people from all over the world {4} together at the Games. The colours are blue, yellow, black, green and red.",
              "Before each Games, people carry a torch {5} Greece to the city where the Games are happening. The torch is lit {6} the sun's light. It burns {7} the end of the Games.",
              "There are also the Winter Olympics, {8} athletes do sports like skiing and ice skating. Every athlete dreams of winning a gold medal, but taking part is the most {9} thing. As the saying goes, it's not {10} winning, it's about trying your best.",
            ],
            gaps: [
              {
                options: [
                  "before",
                  "ago",
                  "past",
                ],
                answer: 1,
              },
              {
                options: [
                  "have",
                  "has",
                  "had",
                ],
                answer: 0,
              },
              {
                options: [
                  "place",
                  "time",
                  "part",
                ],
                answer: 2,
              },
              {
                options: [
                  "comes",
                  "coming",
                  "come",
                ],
                answer: 2,
              },
              {
                options: [
                  "from",
                  "for",
                  "of",
                ],
                answer: 0,
              },
              {
                options: [
                  "use",
                  "using",
                  "used",
                ],
                answer: 1,
              },
              {
                options: [
                  "until",
                  "since",
                  "by",
                ],
                answer: 0,
              },
              {
                options: [
                  "which",
                  "when",
                  "where",
                ],
                answer: 2,
              },
              {
                options: [
                  "importance",
                  "important",
                  "importantly",
                ],
                answer: 1,
              },
              {
                options: [
                  "of",
                  "about",
                  "for",
                ],
                answer: 1,
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
              "Every summer, the town of Westbridge has a big kite festival on the hill outside the town. People come from all over the country to fly their kites.",
              "This year, Ella made her own kite. It was shaped like a dragon and it was red and gold. She spent two months making it with her dad. They used special paper and thin pieces of wood.",
              "On the day of the festival, there was a lot of wind. Ella's dragon flew higher than all the other kites. The judges gave her first prize in the 'Best Home-made Kite' competition. Her prize was a book about kites from around the world.",
            ],
            items: [
              {
                question: "The kite festival takes place on ______ outside the town.",
                answers: [
                  "the hill",
                  "a hill",
                  "hill",
                ],
              },
              {
                question: "People come to the festival from ______.",
                answers: [
                  "all over the country",
                  "all over the country to fly their kites",
                ],
              },
              {
                question: "Ella's kite looked like ______.",
                answers: [
                  "a dragon",
                  "dragon",
                ],
              },
              {
                question: "The kite was ______.",
                answers: [
                  "red and gold",
                  "gold and red",
                ],
              },
              {
                question: "Ella made the kite with ______.",
                answers: [
                  "her dad",
                  "dad",
                  "her father",
                ],
              },
              {
                question: "On the day of the festival, there was ______.",
                answers: [
                  "a lot of wind",
                  "lots of wind",
                  "wind",
                ],
              },
              {
                question: "Ella's prize was ______ about kites.",
                answers: [
                  "a book",
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
            title: "A new neighbour",
            text: [
              "A new family moved into the house next {1} ours last week. They have a daughter called Rosa. She is the same age {2} me. Rosa comes from Spain, but she speaks English very well. Yesterday, I showed her {3} the town. We went to the park and the shopping centre. Rosa says she loves the cold weather here, {4} I think she's joking! We are going {5} be in the same class at school.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "as",
              ],
              [
                "around",
                "round",
              ],
              [
                "but",
              ],
              [
                "to",
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
                e: "👨🚗🌧️",
                label: "1",
              },
              {
                e: "🚗🛞😟",
                label: "2",
              },
              {
                e: "👨🧑‍🔧🚗",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Last Sunday, Mr Green was driving home in the rain. Suddenly, one of the car's tyres went flat. He was very worried because it was getting dark. Then a mechanic stopped and helped him change the tyre. Mr Green thanked him and drove home.",
          },
        },
      ],
    },
  ],
};
