import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 39 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_39: CambridgeTest = {
  id: "preliminary-39",
  level: "preliminary",
  no: 39,
  title: "B1 Preliminary · Practice Test 39",
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
                    "SWIMMING POOL",
                    "Swimming caps must be worn by all swimmers. Caps can be bought at reception.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Caps are free.",
                  "You don't need a cap.",
                  "You can buy a cap if you don't have one.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I can't find my keys. Did I leave them at your house last night? Jack",
                  ],
                },
                question: "What does Jack want to know?",
                options: [
                  "if he left something at Max's house",
                  "where Max lives",
                  "if Max has new keys",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep refrigerated after opening.",
                    "Best before end: see lid.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "The date is on the bottom.",
                  "You should put it in the fridge after opening.",
                  "You don't need a fridge.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "The concert tonight has been moved to the main hall because more people bought tickets than expected. Emma",
                  ],
                },
                question: "Why has the concert moved?",
                options: [
                  "More people are coming.",
                  "The original hall is closed.",
                  "The band changed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "The library will close at 3 p.m. today instead of 5 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed today.",
                  "The library will open later.",
                  "The library will close earlier today.",
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
                title: "Scuba Diving",
                text: "Explore coral reefs with an instructor. Must be over 12 and a good swimmer.",
              },
              {
                title: "Cooking Class",
                text: "Learn to make local dishes with a professional chef.",
              },
              {
                title: "Mountain Biking",
                text: "Ride through forests and hills. Bikes provided.",
              },
              {
                title: "Museum Tour",
                text: "Visit three museums with a history expert.",
              },
              {
                title: "Horse Riding",
                text: "A gentle ride along the beach. Suitable for beginners.",
              },
              {
                title: "Rock Climbing",
                text: "Climb real rocks with an experienced guide.",
              },
              {
                title: "Boat Trip",
                text: "See dolphins and whales from a boat. Binoculars provided.",
              },
              {
                title: "Painting Workshop",
                text: "Paint the beautiful landscape with a local artist.",
              },
            ],
            items: [
              {
                text: "Elif wants to see sea animals but doesn't want to swim.",
                answer: 6,
              },
              {
                text: "Can loves history.",
                answer: 3,
              },
              {
                text: "Zeynep is a strong swimmer and wants to see fish up close.",
                answer: 0,
              },
              {
                text: "Mert loves art and wants to learn from someone local.",
                answer: 7,
              },
              {
                text: "Asya loves animals and has never ridden before.",
                answer: 4,
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
              title: "Running my own business",
              paragraphs: [
                "When I was fifteen, I started my own small business making and selling bracelets. I'd always loved making jewellery, and my friends kept asking me to make bracelets for them.",
                "At first, I sold them only to friends and family. Then I created an online shop and started selling to people all over the country. I was amazed when I got my first order from a stranger!",
                "Running a business while going to school wasn't easy. I had to make the bracelets, pack them and post them, as well as doing my homework. Sometimes I worked until late at night.",
                "But it was worth it. In the first year, I sold more than five hundred bracelets. I used the money to buy a new laptop and save for university. I've learned so much about business, and I want to study it at university.",
              ],
            },
            items: [
              {
                question: "Why did the writer start making bracelets?",
                options: [
                  "Her teacher suggested it.",
                  "She needed money for school.",
                  "Her parents made jewellery.",
                  "Her friends wanted them.",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel about her first order from a stranger?",
                options: [
                  "very surprised",
                  "disappointed",
                  "worried",
                  "bored",
                ],
                answer: 0,
              },
              {
                question: "What was difficult about running a business?",
                options: [
                  "finding customers",
                  "making bracelets",
                  "finding time for everything",
                  "using the internet",
                ],
                answer: 2,
              },
              {
                question: "How many bracelets did the writer sell in the first year?",
                options: [
                  "about fifty",
                  "a few",
                  "more than five hundred",
                  "thousands",
                ],
                answer: 2,
              },
              {
                question: "What does the writer want to study?",
                options: [
                  "business",
                  "art",
                  "jewellery making",
                  "computing",
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
            title: "The town that has no shops",
            text: [
              "In a small village in Scotland, there are no shops at all. {1} The nearest supermarket is more than an hour away by car.",
              "So the villagers came up with a clever idea. {2} Every week, they order food and other things online together.",
              "A delivery van brings everything to the village hall. {3} The villagers then collect their orders from there.",
              "The system has many advantages. {4} It also saves money, because they get discounts for ordering in large amounts.",
              "The village hall has also become a meeting place. {5} Many people say the community is closer than ever before.",
            ],
            sentences: [
              "People stay for a cup of tea and a chat when they collect their shopping.",
              "They decided to work together.",
              "Most villagers prefer to drive to the city.",
              "The last one closed ten years ago.",
              "It means people don't have to drive long distances.",
              "The delivery van only comes once a year.",
              "Volunteers sort the deliveries into boxes for each family.",
              "The village has a big shopping centre.",
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
            title: "Penguins",
            text: [
              "Penguins are flightless birds that live mainly in the Southern Hemisphere. There are eighteen {1} of penguin, and they live in many different places, from Antarctica to the warm coasts of South Africa.",
              "Penguins are excellent swimmers. Their wings have {2} into flippers, which help them move quickly through the water. Some penguins can swim at speeds of up to thirty-five kilometres an hour.",
              "Penguins eat fish, squid and krill, which they catch underwater. They can hold their breath for a long time; Emperor penguins can stay underwater for more than twenty minutes. Most penguins live in large groups called colonies. They are very {3} animals and communicate with each other using calls and body movements. Sadly, many penguin species are {4} because of climate change, pollution and overfishing. Scientists are {5} the penguins to understand how to protect them. We can all help by reducing our carbon footprint and {6} plastic.",
            ],
            gaps: [
              {
                options: [
                  "specie",
                  "special",
                  "specials",
                  "species",
                ],
                answer: 3,
              },
              {
                options: [
                  "develop",
                  "developed",
                  "developing",
                  "development",
                ],
                answer: 1,
              },
              {
                options: [
                  "society",
                  "socially",
                  "socialise",
                  "social",
                ],
                answer: 3,
              },
              {
                options: [
                  "endangered",
                  "danger",
                  "dangerous",
                  "dangerously",
                ],
                answer: 0,
              },
              {
                options: [
                  "study",
                  "studied",
                  "studying",
                  "studies",
                ],
                answer: 2,
              },
              {
                options: [
                  "avoid",
                  "avoided",
                  "avoiding",
                  "avoidance",
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
            title: "A great weekend",
            text: [
              "Last weekend, my family and I went camping {1} the mountains. It was my first time camping, and I was really excited.",
              "We arrived on Friday evening and set up our tent next to a beautiful lake. It took us {2} hour because we didn't read the instructions! Then we cooked sausages on a campfire and looked at the stars.",
              "On Saturday, we went hiking. We walked {3} the top of a mountain and had a picnic there. The view was incredible. In the afternoon, we swam in the lake, {4} was very cold! On Sunday morning, it started raining, so we packed up our tent and drove home. Even though we got wet, it was {5} brilliant weekend. I can't wait to go camping {6}.",
            ],
            answers: [
              [
                "in",
              ],
              [
                "an",
              ],
              [
                "to",
              ],
              [
                "which",
              ],
              [
                "a",
              ],
              [
                "again",
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
              subject: "Planning a trip",
              lines: [
                "My family is planning a trip to your country next summer! [Wonderful!]",
                "What places do you think we should visit? [Recommend some]",
                "What's the best time of year to visit? [Explain]",
                "Could we meet while we're there? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's wonderful news! I'm sure you'll love it here.\n\nI think you should definitely visit Istanbul, because it has amazing history and beautiful buildings. You should also go to Cappadocia, where you can take a hot-air balloon ride over strange rock formations. If you like beaches, Antalya is perfect.\n\nThe best time to visit is in late spring or early autumn. Summer can be very hot, especially in the south, and there are lots of tourists. But if you can only come in summer, that's fine too!\n\nOf course we can meet! I'd love to show you around my city.\n\nSee you soon,\nTuna",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Something I'm proud of",
              lines: [
                "Tell us about something you're proud of.",
                "What did you do?",
                "Why are you proud of it?",
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
            sample: "Running my first race\n\nThe thing I'm most proud of is completing my first ten-kilometre race last spring. A year before, I couldn't even run for five minutes without stopping.\n\nI started training slowly, running three times a week. At first, it was very hard, and I often wanted to give up. But my older brother encouraged me and sometimes ran with me. Gradually, I could run further and faster.\n\nOn the day of the race, I was very nervous. But I kept going, and when I crossed the finish line, I felt amazing. I'm proud because I proved to myself that hard work and determination really pay off.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When the lights went out, everyone in the cinema screamed.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When the lights went out, everyone in the cinema screamed. It was the middle of a scary film, and for a moment, people thought it was part of the show.\n\nBut then the film stopped and the screen went black. It was a power cut! Emma and her friends sat in complete darkness, not knowing what to do.\n\nSomeone turned on their phone light, and soon everyone did the same. The cinema manager came in with a torch and asked everyone to stay calm. He explained that the power would be back soon.\n\nAfter twenty minutes, the lights came back on. The audience clapped and cheered, and the film started again.",
          },
        },
      ],
    },
  ],
};
