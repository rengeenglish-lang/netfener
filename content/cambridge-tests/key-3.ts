import type { CambridgeTest } from "./types";

/** A2 Key practice test 3 (Reading & Writing). Original Netfener content. */
export const KEY_3: CambridgeTest = {
  id: "key-3",
  level: "key",
  no: 3,
  title: "A2 Key · Practice Test 3",
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
                notice: { genre: "Notice", lines: ["CITY PARK", "Bicycles must not be ridden on the grass.", "Please use the path around the lake."] },
                question: "What does the notice tell cyclists?",
                options: ["They should stay on the path.", "They cannot bring bicycles into the park.", "They can ride anywhere except near the lake."],
                answer: 0,
              },
              {
                notice: { genre: "Text message", lines: ["Hi Jen – I can't find my keys! Did I leave them in your car yesterday? Can you look and call me? Thanks, Pat"] },
                question: "What does Pat want Jen to do?",
                options: ["check if the keys are in her car", "drive Pat home later", "give Pat a new set of keys"],
                answer: 0,
              },
              {
                notice: { genre: "Sign", lines: ["BAKERY", "Fresh bread every morning from 7 a.m.", "Cakes made to order – please give us 2 days' notice."] },
                question: "What does the sign say?",
                options: ["You need to order a cake in advance.", "The bakery only sells bread in the afternoon.", "Cakes are ready every morning at 7."],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Dear parents,", "Please remember that students need a packed lunch for the school trip on Friday. The café at the zoo will be closed. Mrs Lin"] },
                question: "Why has Mrs Lin sent this email?",
                options: ["to remind parents to give their children food for the trip", "to say the trip to the zoo has been cancelled", "to invite parents to have lunch at the zoo café"],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["COMPUTER ROOM", "Students may print up to 10 pages a day for free.", "Extra pages cost 5p each."] },
                question: "What does the notice say?",
                options: ["Printing more than ten pages costs money.", "Students cannot print anything after 10 o'clock.", "Every page costs 5p to print."],
                answer: 0,
              },
              {
                notice: { genre: "Advertisement", lines: ["ROOM TO RENT", "Large room in shared flat, 5 minutes from the university.", "Bills included. Students only."] },
                question: "Who is the room for?",
                options: ["students looking for somewhere close to the university", "families who want a large flat", "anyone who wants to pay their own bills"],
                answer: 0,
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
                title: "Kemal",
                text: "I work in a hospital as a nurse. My shifts are long, and I often work at night, but I love helping people. The hardest part is when patients are very ill. I studied for three years at university before I started.",
              },
              {
                title: "Grace",
                text: "I'm a tour guide in London. I take groups of visitors around the city and tell them about its history. I speak four languages, which is very useful. In summer I'm very busy, but in winter there isn't much work.",
              },
              {
                title: "Tomás",
                text: "I'm a chef in a small restaurant. I start work at two in the afternoon and finish after midnight. I learned to cook from my grandmother, not at college. One day I'd like to open my own restaurant by the sea.",
              },
            ],
            items: [
              { text: "has a job that changes with the seasons?", answer: 1 },
              { text: "learned their skills from a family member?", answer: 2 },
              { text: "sometimes works during the night?", answer: 0 },
              { text: "uses other languages at work?", answer: 1 },
              { text: "wants to have their own business?", answer: 2 },
              { text: "finds some situations at work difficult?", answer: 0 },
              { text: "went to university for their job?", answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "A school in the clouds",
              paragraphs: [
                "Fourteen-year-old Pema lives in a small village high in the mountains of Nepal. Every morning, she walks for an hour and a half to get to school. 'In winter, the path is covered in snow,' she says, 'so I have to leave even earlier.'",
                "Pema's school has only three classrooms and five teachers. There is no internet, and the electricity often stops working. But Pema loves going there. 'My favourite subject is English,' she says. 'I want to be a tour guide, because many tourists come to our mountains.'",
                "Last year, a group of volunteers from another country visited the school and brought computers, books and solar panels. Now the school has electricity every day, and students can use the computers after lessons.",
                "Pema's parents are farmers and didn't go to school. 'They are very happy that I can study,' Pema says. 'Sometimes I teach them English words in the evenings. My father is a better student than my mother!'",
              ],
            },
            items: [
              { question: "Why does Pema leave home earlier in winter?", options: ["It's harder to walk on the snowy path.", "School starts earlier in winter.", "She has to help her parents first."], answer: 0 },
              { question: "Why does Pema want to be a tour guide?", options: ["Lots of visitors come to the area.", "Her parents want her to do it.", "She doesn't like studying English."], answer: 0 },
              { question: "What happened after the volunteers visited?", options: ["The school got a reliable supply of electricity.", "The school built new classrooms.", "More teachers came to work there."], answer: 0 },
              { question: "What does Pema do in the evenings?", options: ["She teaches her parents some English.", "She uses the school computers.", "She works on the farm."], answer: 0 },
              { question: "What does Pema say about her father?", options: ["He learns English well.", "He went to the same school.", "He doesn't want her to study."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Chocolate",
            text: [
              "Chocolate comes from the seeds of the cacao tree, which {1} in hot, wet countries. The seeds are dried and then cooked to make chocolate.",
              "The people of Central America were the first to {2} chocolate, but they drank it rather than ate it. Their drink was quite {3} because they didn't add sugar.",
              "When chocolate arrived in Europe, people started adding sugar and milk. Today, it is one of the world's most popular {4}. Some people believe dark chocolate can be good for your health, but doctors {5} that we shouldn't eat too much of it, because it {6} a lot of fat and sugar.",
            ],
            gaps: [
              { options: ["grows", "rises", "builds"], answer: 0 },
              { options: ["discover", "explore", "invent"], answer: 0 },
              { options: ["bitter", "sweet", "soft"], answer: 0 },
              { options: ["sweets", "meals", "drinks"], answer: 0 },
              { options: ["warn", "tell", "speak"], answer: 0 },
              { options: ["contains", "holds", "carries"], answer: 0 },
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
              "Dear Grandma,",
              "Thank you {1} the lovely jumper you sent me for my birthday. It's my favourite colour and it fits perfectly! I wore it to school yesterday, and all my friends said it was really nice.",
              "I had a great birthday. Mum made a big chocolate cake, and {2} the evening we went to a pizza restaurant. Six of my friends came {3} us.",
              "Are you still coming to visit us next month? I can't wait {4} see you. We {5} go to the new aquarium together. Write soon and tell me {6} you are.",
              "Love, Ben",
            ],
            answers: [["for"], ["in"], ["with"], ["to"], ["could", "can", "will", "should"], ["how"]],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just started a new hobby. Write an email to your English friend, Sam, about it. Write 25 words or more.",
            prompts: ["Tell Sam what your new hobby is.", "Say where and when you do it.", "Explain why you enjoy it."],
            minWords: 25,
            checklist: ["I wrote about all three points.", "I used a friendly greeting and ending.", "I wrote 25 words or more."],
            sample: "Hi Sam,\n\nI've started learning to play the drums! I have a lesson every Wednesday after school at a music centre near my house. I love it because it's really fun and it helps me relax after a busy day.\n\nBye for now,\nEce",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              { e: "👨‍👩‍👦🚗🏕️", label: "1" },
              { e: "⛈️⛺😟", label: "2" },
              { e: "🏠🔥🍲", label: "3" },
            ],
            minWords: 35,
            checklist: ["My story talks about all three pictures.", "I used past tenses and linking words like 'when', 'then' and 'so'.", "I wrote 35 words or more."],
            sample: "Last summer, Murat and his parents drove to the mountains to go camping. In the evening, there was a terrible storm and water came into their tent, so they felt cold and worried. A farmer saw them and invited them into his house. They sat by the fire and ate hot soup. It was an adventure they never forgot.",
          },
        },
      ],
    },
  ],
};
