import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 16 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_16: CambridgeTest = {
  id: "preliminary-16",
  level: "preliminary",
  no: 16,
  title: "B1 Preliminary · Practice Test 16",
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
                    "The science lab will be closed on Wednesday for cleaning. Science lessons will take place in Room 12.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There will be no science lessons on Wednesday.",
                  "Science lessons will be in a different room on Wednesday.",
                  "Students must clean the lab on Wednesday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ali, I've forgotten my football boots. Can you bring your spare pair to training? I'll give them back afterwards. Mert",
                  ],
                },
                question: "What does Mert want?",
                options: [
                  "to buy new boots",
                  "to borrow some boots",
                  "to miss training",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for children under 12.",
                    "Use only with adult supervision.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Children under 12 can use it alone.",
                  "It is for adults only.",
                  "An adult should be present when this is used.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sophie,",
                    "The art exhibition opening has been moved to next Friday because some paintings haven't arrived. Hope you can still come! Lisa",
                  ],
                },
                question: "Why has the opening been moved?",
                options: [
                  "Some artwork is late.",
                  "The gallery is closed.",
                  "Lisa is busy.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOTEL",
                    "Breakfast is included in the price of your room. It is served in the restaurant from 7 to 10.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Breakfast is served in the rooms.",
                  "Guests don't pay extra for breakfast.",
                  "Breakfast costs extra.",
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
            instruction: "The young people below all want to go on a day trip. Read the descriptions of eight trips. Decide which trip would be the most suitable for each person.",
            options: [
              {
                title: "Castle Tour",
                text: "Explore a 700-year-old castle with a guide dressed as a knight. Includes lunch in the castle café.",
              },
              {
                title: "Island Kayaking",
                text: "Paddle to a small island and have a picnic on the beach. You must be able to swim.",
              },
              {
                title: "Chocolate Factory",
                text: "See how chocolate is made and create your own chocolate bar to take home.",
              },
              {
                title: "Wildlife Park",
                text: "See wolves, bears and lynx in large natural areas. Feeding talks every hour.",
              },
              {
                title: "Theme Park",
                text: "Rollercoasters, water rides and shows. Fast-pass tickets available.",
              },
              {
                title: "Cave Adventure",
                text: "Climb, crawl and explore underground caves with an expert guide. Helmets and lights provided.",
              },
              {
                title: "City Food Walk",
                text: "Taste local dishes at markets and small restaurants with a food expert.",
              },
              {
                title: "Science Centre",
                text: "Hands-on experiments and a 4D cinema. Perfect for curious minds.",
              },
            ],
            items: [
              {
                text: "Burak loves sweets and enjoys making things with his hands.",
                answer: 2,
              },
              {
                text: "Lale is interested in history and would like to learn about how people lived long ago.",
                answer: 0,
              },
              {
                text: "Kerem loves exciting rides and doesn't mind queuing.",
                answer: 4,
              },
              {
                text: "Ece is a strong swimmer and enjoys being on the water.",
                answer: 1,
              },
              {
                text: "Mert isn't afraid of dark spaces and wants a real adventure.",
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
              title: "My grandmother's recipes",
              paragraphs: [
                "My grandmother is an amazing cook. For as long as I can remember, she's cooked huge meals for our family every Sunday. Last year, I realised that nobody had ever written down her recipes. She kept them all in her head.",
                "I decided to change that. Every Sunday, I went to her kitchen early and watched her cook. I wrote down everything she did, and I took photos of each dish. It was harder than I expected, because she never measured anything. She just used her hands and her eyes.",
                "Slowly, I collected more than fifty recipes. I also asked her to tell me the story behind each one: where she learned it, and why it was special. Some of the stories were very funny, and some made us both cry.",
                "For her eightieth birthday, I printed the recipes and stories as a book and gave it to her. She was speechless. Now everyone in the family has a copy, and her recipes will never be forgotten.",
              ],
            },
            items: [
              {
                question: "What did the writer realise?",
                options: [
                  "Her grandmother was a professional cook.",
                  "Her grandmother had stopped cooking.",
                  "Nobody liked the food.",
                  "The recipes had never been written down.",
                ],
                answer: 3,
              },
              {
                question: "Why was writing the recipes difficult?",
                options: [
                  "Her grandmother didn't want to help.",
                  "Her grandmother didn't measure the ingredients.",
                  "The kitchen was too small.",
                  "She didn't have a camera.",
                ],
                answer: 1,
              },
              {
                question: "What else did the writer collect?",
                options: [
                  "stories about the recipes",
                  "old cooking pots",
                  "photos of the family",
                  "letters",
                ],
                answer: 0,
              },
              {
                question: "How did the grandmother react to the book?",
                options: [
                  "She was angry.",
                  "She didn't like it.",
                  "She was too surprised to speak.",
                  "She laughed.",
                ],
                answer: 2,
              },
              {
                question: "What is the result of the writer's project?",
                options: [
                  "The grandmother has written a new book.",
                  "The family has kept the recipes.",
                  "The writer has become a chef.",
                  "The book was sold in shops.",
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
            title: "Animals that help people",
            text: [
              "Most people know that dogs can help blind people. {1} Many other animals are also trained to help people in different ways.",
              "In some hospitals, therapy dogs visit patients. {2} Studies show that spending time with animals can make people feel calmer and less lonely.",
              "Small horses called miniature horses can be trained as guide animals. {3} They also live much longer than dogs, often up to thirty years.",
              "Rats have been trained to find landmines in some countries. {4} Because they are so light, they don't set off the mines.",
              "Even some monkeys have been trained to help people who can't move. {5} Animals, it seems, can be some of our best helpers.",
            ],
            sentences: [
              "Rats are not very intelligent animals.",
              "But dogs are not the only animals that help us.",
              "They use their excellent sense of smell to find the dangerous objects.",
              "Most hospitals don't allow animals.",
              "Patients can stroke the dogs and play with them.",
              "Horses are too big to be guide animals.",
              "They are useful for people who are allergic to dogs.",
              "They can pick things up, open doors and even turn on lights.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "The history of the bicycle",
            text: [
              "The first bicycle-like machine was {1} in Germany in 1817. It had no pedals, and riders pushed it along with their feet.",
              "In the 1860s, pedals were added to the front wheel. However, these early bicycles were very uncomfortable to ride and were often {2} 'boneshakers'.",
              "Later came the 'penny-farthing', with an enormous front wheel and a tiny back one. It was fast, but also very dangerous, and many riders {3} off. The modern bicycle, with two wheels of the same size and a chain, appeared in the 1880s. It was much safer and soon became extremely {4}. Bicycles gave people, especially women, much more {5} to travel. Today, bicycles are more popular than ever. They are cheap, healthy and good for the environment, {6} they don't produce any pollution.",
            ],
            gaps: [
              {
                options: [
                  "discovered",
                  "found",
                  "invented",
                  "grown",
                ],
                answer: 2,
              },
              {
                options: [
                  "called",
                  "named up",
                  "said",
                  "told",
                ],
                answer: 0,
              },
              {
                options: [
                  "dropped",
                  "went",
                  "got",
                  "fell",
                ],
                answer: 3,
              },
              {
                options: [
                  "famous up",
                  "popular",
                  "liked up",
                  "known",
                ],
                answer: 1,
              },
              {
                options: [
                  "freedom",
                  "free",
                  "freely",
                  "freeing",
                ],
                answer: 0,
              },
              {
                options: [
                  "so",
                  "but",
                  "because",
                  "although",
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
            title: "Learning a language",
            text: [
              "I started learning Spanish two years ago, and now I can have conversations with native speakers. Here's my advice {1} anyone learning a new language.",
              "First, practise every day, even if it's only for ten minutes. It's much better {2} studying for two hours once a week.",
              "Second, don't be afraid of making mistakes. Everyone makes them, and native speakers are usually happy that you're trying. Third, watch films and TV series in the language you're learning. At first, use subtitles in your own language, and then try subtitles in the new language. Finally, try to find someone to practise {3}. I talk to a Spanish student online twice a week. I help her {4} her English, and she helps me with my Spanish. {5} you follow these tips, I'm sure you'll make progress. Good luck {6} your studies!",
            ],
            answers: [
              [
                "for",
                "to",
              ],
              [
                "than",
              ],
              [
                "with",
              ],
              [
                "with",
              ],
              [
                "if",
              ],
              [
                "with",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "Moving house",
              lines: [
                "Guess what? My family is moving to a new house next month! [Exciting!]",
                "It's in a different part of the city. Do you think I'll like it? [Give your opinion]",
                "I'll need help packing my things. Could you help me? [Answer]",
                "Would you like to come for a sleepover when we've moved? [Reply]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat's so exciting! A new house is a fresh start, and I'm really happy for you.\n\nI'm sure you'll like it. That part of the city has some great parks and a big shopping centre, and it's close to the beach. You'll make new friends very quickly, because you're so friendly.\n\nOf course I'll help you pack! I'm free most weekends, so just tell me which day is best. I'll bring some boxes from my house too.\n\nI'd love to come for a sleepover! We could watch films and order pizza. Let me know when.\n\nLove,\nZeynep",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A hobby I love",
              lines: [
                "What's your favourite hobby?",
                "How did you start it?",
                "Why do you enjoy it so much?",
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
            sample: "Why I love rock climbing\n\nMy favourite hobby is rock climbing. I started three years ago, when my cousin took me to an indoor climbing centre for my birthday. I was terrified at first, but by the end of the day, I was hooked.\n\nNow I climb three times a week. In summer, I climb real rocks outdoors with my club. It's exciting, but you have to be very careful and trust your partner.\n\nI love climbing because it's good for my body and my mind. When I'm on the wall, I forget about everything else. It's also given me a lot of confidence. I recommend it to everyone!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Tom couldn't believe what he had just found in the garden.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Tom couldn't believe what he had just found in the garden. He had been digging a hole to plant a tree when his spade hit something hard.\n\nHe knelt down and pulled out a small metal box. It was rusty and very old. With shaking hands, he opened it. Inside, there were some old coins, a photograph and a letter.\n\nTom ran inside to show his parents. The letter was written by a boy who had lived in their house a hundred years ago. He had hidden his 'treasure' for someone to find.\n\nTom's family took the box to the local museum, where it is now on display.",
          },
        },
      ],
    },
  ],
};
