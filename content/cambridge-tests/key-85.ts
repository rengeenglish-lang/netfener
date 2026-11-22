import type { CambridgeTest } from "./types";

/** A2 Key practice test 85 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_85: CambridgeTest = {
  id: "key-85",
  level: "key",
  no: 85,
  title: "A2 Key · Practice Test 85",
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
                    "Please don't run in the corridors.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students should run to class.",
                  "Students should walk in the halls.",
                  "The corridors are closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, the bus is full. I'll take the next one. I'll be 15 minutes late. Ann",
                  ],
                },
                question: "Why will Ann be late?",
                options: [
                  "She can't get on the first bus.",
                  "She missed the bus.",
                  "She's walking.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "CAMPSITE",
                    "Fires only in the barbecue areas.",
                  ],
                },
                question: "Where can you make a fire?",
                options: [
                  "anywhere",
                  "nowhere",
                  "in special places",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "I've lost the homework sheet. Can you take a photo of yours and send it to me? Thanks! Max",
                  ],
                },
                question: "What does Max want Ben to do?",
                options: [
                  "do his homework",
                  "send him a picture",
                  "buy him a sheet",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "3D glasses available at the ticket office.",
                  ],
                },
                question: "Where can you get 3D glasses?",
                options: [
                  "inside the cinema",
                  "where you buy tickets",
                  "in the café",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DOG TRAINING CLASSES",
                    "Puppies and older dogs welcome.",
                    "Saturdays 10 a.m. in the park.",
                  ],
                },
                question: "What do we know about the classes?",
                options: [
                  "They are only for puppies.",
                  "They are indoors.",
                  "Dogs of all ages can come.",
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
                title: "Ava",
                text: "I love gymnastics. I train every day and compete in competitions. Last year, I won a gold medal at the national championships. I'm now training for the European championships. My coach says I have a good chance of winning.",
              },
              {
                title: "Leo",
                text: "My hobby is building things with Lego. I've built a castle, a city and a spaceship. My biggest model has more than ten thousand pieces! Last year, my Lego city was shown at a toy exhibition. Lots of people took photos of it.",
              },
              {
                title: "Holly",
                text: "I'm interested in helping the environment. I've started an eco-club at my school. We recycle paper and plastic, and we've planted a garden. Last month, our school won an award for being the greenest school in our area.",
              },
            ],
            items: [
              {
                text: "is training for an international event?",
                answer: 0,
              },
              {
                text: "won a gold medal?",
                answer: 0,
              },
              {
                text: "built something very large?",
                answer: 1,
              },
              {
                text: "had their work in an exhibition?",
                answer: 1,
              },
              {
                text: "started a club?",
                answer: 2,
              },
              {
                text: "helped their school win something?",
                answer: 2,
              },
              {
                text: "trains every day?",
                answer: 0,
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
              title: "A boy and his horse",
              paragraphs: [
                "When twelve-year-old Tom's family moved to a farm, he was unhappy. 'I missed my friends in the city,' he says. 'There was nothing to do.'",
                "Then Tom's parents bought him a horse called Storm. 'At first, I was scared of him,' says Tom. 'He was so big! But I started brushing him every day, and slowly we became friends.'",
                "Tom started riding Storm. 'I fell off lots of times,' he laughs. 'But I kept trying. After a few months, I could ride really well.'",
                "Now Tom and Storm compete in competitions. 'Last month, we won first prize,' says Tom proudly. 'I love living on the farm now. Storm is my best friend.'",
              ],
            },
            items: [
              {
                question: "How did Tom feel when he moved to the farm?",
                options: [
                  "unhappy",
                  "excited",
                  "calm",
                ],
                answer: 0,
              },
              {
                question: "Why was Tom scared of Storm?",
                options: [
                  "Storm bit him.",
                  "Storm was very big.",
                  "Storm ran away.",
                ],
                answer: 1,
              },
              {
                question: "How did Tom and Storm become friends?",
                options: [
                  "Tom brushed him daily.",
                  "Tom gave him food.",
                  "Tom sang to him.",
                ],
                answer: 0,
              },
              {
                question: "What happened when Tom started riding?",
                options: [
                  "He was good immediately.",
                  "He stopped riding.",
                  "He fell off often.",
                ],
                answer: 2,
              },
              {
                question: "How does Tom feel about the farm now?",
                options: [
                  "He wants to leave.",
                  "He loves it.",
                  "He's bored.",
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
            title: "The Moon",
            text: [
              "The Moon is about 384,000 kilometres from Earth. It {1} about twenty-seven days to go around our planet.",
              "The Moon doesn't have its own light. We see it because it reflects light from the Sun. As the Moon moves around the Earth, we see different {2} of it lit up. That's why the Moon seems to change shape.",
              "There is no air or water on the Moon, so nothing can live there. The temperature changes a lot. In the day, it can be more than 100 degrees, and at night it can {3} to minus 170 degrees! Twelve astronauts have walked on the Moon. The first was Neil Armstrong in 1969. Today, scientists are {4} new trips to the Moon. They want to build a base where astronauts can {5} for long periods. One day, people might even take holidays on the Moon! Would you like to {6}?",
            ],
            gaps: [
              {
                options: [
                  "makes",
                  "takes",
                  "does",
                ],
                answer: 1,
              },
              {
                options: [
                  "pieces up",
                  "parts",
                  "bits up",
                ],
                answer: 1,
              },
              {
                options: [
                  "go up",
                  "rise",
                  "fall",
                ],
                answer: 2,
              },
              {
                options: [
                  "planning",
                  "thinking up",
                  "hoping",
                ],
                answer: 0,
              },
              {
                options: [
                  "stay up",
                  "live",
                  "sit",
                ],
                answer: 1,
              },
              {
                options: [
                  "go",
                  "come up",
                  "get",
                ],
                answer: 0,
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
              "Hi Sam,",
              "How are you? I'm writing to tell you about my school's sports day. It {1} last Friday, and it was great fun!",
              "I entered three races: the 100 metres, the long jump and the relay. I won the 100 metres! I was so happy. In the relay, my team came second. We {2} have won, but someone dropped the baton!",
              "After the races, there was a big picnic for everyone. My parents came to watch, {3} they were very proud. Does your school have a sports day? What sports {4} you like doing? Write back {5} tell me. See you {6}!",
              "Josh",
            ],
            answers: [
              [
                "was",
              ],
              [
                "could",
                "might",
                "would",
              ],
              [
                "and",
                "so",
              ],
              [
                "do",
              ],
              [
                "and",
              ],
              [
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to the dentist. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say when you are going.",
              "Say why you are going.",
              "Say how you feel about it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nTomorrow afternoon, I'm going to the dentist. I'm going because one of my teeth hurts. I'm a bit nervous because I don't like dentists!\n\nBye,\nNil",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🏖️⛱️",
                label: "1",
              },
              {
                e: "👦🏊🌊😱",
                label: "2",
              },
              {
                e: "🏊‍♀️👦🏖️😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Jake was swimming in the sea. He swam too far out, and the waves were very strong. He couldn't swim back to the beach and he started to panic. A lifeguard saw him and swam out quickly. She helped Jake back to the beach. Jake was very grateful. Now he always swims close to the beach.",
          },
        },
      ],
    },
  ],
};
