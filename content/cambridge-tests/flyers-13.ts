import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 13 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_13: CambridgeTest = {
  id: "flyers-13",
  level: "flyers",
  no: 13,
  title: "A2 Flyers · Practice Test 13",
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
                word: "a cook",
                e: "🧑‍🍳",
              },
              {
                word: "an earring",
                e: "💎",
              },
              {
                word: "a temple",
                e: "🛕",
              },
              {
                word: "a letter",
                e: "✉️",
              },
              {
                word: "a calculator",
                e: "🧮",
              },
              {
                word: "a guard",
                e: "💂",
              },
              {
                word: "a valley",
                e: "🏞️",
              },
              {
                word: "a shelf",
                e: "🗄️",
              },
              {
                word: "a newspaper",
                e: "📰",
              },
              {
                word: "a meteor",
                e: "☄️",
              },
              {
                word: "a café",
                e: "☕",
              },
              {
                word: "a jug",
                e: "🫖",
              },
              {
                word: "a beetle",
                e: "🪲",
              },
              {
                word: "a rucksack",
                e: "🎒",
              },
            ],
            items: [
              {
                text: "This person makes meals in a restaurant kitchen.",
                answer: "a cook",
              },
              {
                text: "You wear this in your ear.",
                answer: "an earring",
              },
              {
                text: "People go to pray in this kind of building.",
                answer: "a temple",
              },
              {
                text: "You can use this to help you do maths quickly.",
                answer: "a calculator",
              },
              {
                text: "This person stands outside a palace or a bank to keep it safe.",
                answer: "a guard",
              },
              {
                text: "This is low land between two mountains.",
                answer: "a valley",
              },
              {
                text: "You can put books on this on the wall.",
                answer: "a shelf",
              },
              {
                text: "This is a piece of rock that flies through space.",
                answer: "a meteor",
              },
              {
                text: "You can get a drink and a snack in this place.",
                answer: "a café",
              },
              {
                text: "You carry this on your back when you go walking.",
                answer: "a rucksack",
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
              "Ella",
              "Mr Brown",
            ],
            items: [
              {
                line: "Excuse me, could you tell me the way to the museum?",
                options: [
                  "I went to the museum.",
                  "Yes, go straight on and turn left at the bank.",
                  "It's a big museum.",
                ],
                answer: 1,
              },
              {
                line: "Is it far from here?",
                options: [
                  "No, it's about five minutes on foot.",
                  "It's near my house.",
                  "I've been there.",
                ],
                answer: 0,
              },
              {
                line: "Do you know what time it closes?",
                options: [
                  "It opened at nine.",
                  "On Mondays.",
                  "I think it closes at six.",
                ],
                answer: 2,
              },
              {
                line: "Is there a café in the museum?",
                options: [
                  "I'd like a coffee.",
                  "Yes, on the top floor.",
                  "It's very good.",
                ],
                answer: 1,
              },
              {
                line: "Thank you very much!",
                options: [
                  "Thank you.",
                  "You're welcome. Enjoy your visit!",
                  "It's my pleasure to go.",
                ],
                answer: 1,
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
              "Every year, Oscar's school has a talent {1}. This year, Oscar decided to do some magic tricks. He practised every evening in front of the {2}.",
              "On the night of the show, the hall was full of parents. Oscar was so {3} that his hands were shaking. For his first trick, he pulled a coin from behind his teacher's ear. Everyone clapped.",
              "For his last trick, he tried to make a ball {4}. But the ball fell out of his sleeve and rolled across the stage! Everyone laughed, and Oscar laughed too. He didn't win, but the head teacher said he was the {5} performer of the night.",
            ],
            bank: [
              {
                word: "show",
                e: "🎭",
              },
              {
                word: "mirror",
                e: "🪞",
              },
              {
                word: "nervous",
                e: "😬",
              },
              {
                word: "disappear",
                e: "✨",
              },
              {
                word: "funniest",
                e: "😂",
              },
              {
                word: "television",
                e: "📺",
              },
              {
                word: "hungry",
                e: "😋",
              },
              {
                word: "swim",
                e: "🏊",
              },
            ],
            answers: [
              "show",
              "mirror",
              "nervous",
              "disappear",
              "funniest",
            ],
            titleQuestion: {
              options: [
                "A trip to the swimming pool",
                "The new head teacher",
                "Oscar's magic show",
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
            title: "Dinosaurs",
            text: [
              "Dinosaurs lived on Earth for about 165 million years. They disappeared about 66 million years {1}.",
              "Some dinosaurs were very big. The Argentinosaurus was about 35 metres long, which is longer {2} three buses! But other dinosaurs were as small {3} chickens.",
              "Some dinosaurs ate plants and some ate meat. The Tyrannosaurus rex was one of the {4} famous meat-eaters. It had very strong teeth, {5} its arms were very short.",
              "How do we know about dinosaurs? Scientists have found their bones {6} over the world. They have also found dinosaur eggs and footprints. They study these to learn {7} dinosaurs lived.",
              "Many scientists think a huge rock from space hit the Earth and {8} the dinosaurs to die. But some dinosaurs are still with us today, {9} a way. Scientists say that birds are related to dinosaurs! So next time you see a bird, remember it {10} be a dinosaur's great-great-grandchild!",
            ],
            gaps: [
              {
                options: [
                  "before",
                  "ago",
                  "since",
                ],
                answer: 1,
              },
              {
                options: [
                  "that",
                  "than",
                  "as",
                ],
                answer: 1,
              },
              {
                options: [
                  "than",
                  "like",
                  "as",
                ],
                answer: 2,
              },
              {
                options: [
                  "most",
                  "more",
                  "much",
                ],
                answer: 0,
              },
              {
                options: [
                  "and",
                  "but",
                  "or",
                ],
                answer: 1,
              },
              {
                options: [
                  "all",
                  "every",
                  "each",
                ],
                answer: 0,
              },
              {
                options: [
                  "what",
                  "which",
                  "how",
                ],
                answer: 2,
              },
              {
                options: [
                  "cause",
                  "causing",
                  "caused",
                ],
                answer: 2,
              },
              {
                options: [
                  "in",
                  "on",
                  "by",
                ],
                answer: 0,
              },
              {
                options: [
                  "must",
                  "might",
                  "has",
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
              "Jessica's dad is a chef. He has a restaurant in the centre of town, near the river. The restaurant is famous for its fish dishes.",
              "On Saturdays, Jessica helps her dad in the kitchen. She washes the vegetables and makes the salads. Last Saturday, the restaurant was very busy because there was a wedding party.",
              "Jessica made a special dessert for the bride and groom: a chocolate cake with strawberries on top. The bride liked it so much that she asked for the recipe. Jessica's dad was very proud of her.",
            ],
            items: [
              {
                question: "Jessica's dad has a restaurant near ______.",
                answers: [
                  "the river",
                  "river",
                ],
              },
              {
                question: "The restaurant is famous for its ______.",
                answers: [
                  "fish dishes",
                  "fish",
                ],
              },
              {
                question: "On Saturdays, Jessica washes the vegetables and ______.",
                answers: [
                  "makes the salads",
                  "makes salads",
                ],
              },
              {
                question: "Last Saturday, there was ______ at the restaurant.",
                answers: [
                  "a wedding party",
                  "a wedding",
                ],
              },
              {
                question: "Jessica made a chocolate cake with ______.",
                answers: [
                  "strawberries on top",
                  "strawberries",
                ],
              },
              {
                question: "The bride asked for ______.",
                answers: [
                  "the recipe",
                  "recipe",
                ],
              },
              {
                question: "Jessica's dad felt ______.",
                answers: [
                  "very proud",
                  "proud",
                  "very proud of her",
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
            title: "Learning English",
            text: [
              "My name is Kemal and I'm from Turkey. I started learning English {1} I was eight. At first, I thought it was very difficult. Now I love it! I watch cartoons in English and I listen {2} English songs. My favourite way to learn new words is by reading comics. I have {3} pen friend in England called Tom. We write emails to {4} other every week. Next summer, I'm going to visit him in London. I can't {5}!",
            ],
            answers: [
              [
                "when",
              ],
              [
                "to",
              ],
              [
                "a",
              ],
              [
                "each",
              ],
              [
                "wait",
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
                e: "👨🎣🚤",
                label: "1",
              },
              {
                e: "🐟🎣😮",
                label: "2",
              },
              {
                e: "👨🐟📸",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Last summer, Grandpa went fishing in his boat on the lake. After a long time, he felt something very heavy on his line. He pulled and pulled. It was a huge fish! Grandpa took a photo of it and then put it back in the water.",
          },
        },
      ],
    },
  ],
};
