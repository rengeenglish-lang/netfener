import type { CambridgeTest } from "./types";

/** A2 Key practice test 1 (Reading & Writing). Original Netfener content. */
export const KEY_1: CambridgeTest = {
  id: "key-1",
  level: "key",
  no: 1,
  title: "A2 Key · Practice Test 1",
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
                notice: { genre: "Notice", lines: ["SWIMMING POOL", "Children under 8 must swim with an adult.", "No running near the pool."] },
                question: "What does the notice say?",
                options: ["Young children need an adult with them in the pool.", "Adults cannot swim at the same time as children.", "Children under 8 are not allowed in the pool."],
                answer: 0,
              },
              {
                notice: { genre: "Text message", lines: ["Mia – I've left my maths book at your house. Can you bring it to school tomorrow? I need it for the test! Thanks, Lucy"] },
                question: "Why has Lucy sent this message?",
                options: ["She wants to borrow Mia's maths book.", "She needs Mia to bring her book.", "She wants to study with Mia for the test."],
                answer: 1,
              },
              {
                notice: { genre: "Sign", lines: ["CAFÉ", "Open every day 8 a.m. – 6 p.m.", "Closed for lunch 1–2 p.m. on Mondays"] },
                question: "When can you NOT get a coffee at this café?",
                options: ["at 12.30 on Sunday", "at 1.30 on Monday", "at 5.30 on Friday"],
                answer: 1,
              },
              {
                notice: { genre: "Email", lines: ["Hi Sam,", "The football match on Saturday is now at 3 o'clock, not 11. Please bring your boots and a drink. Coach Davis"] },
                question: "What has changed?",
                options: ["the place of the match", "the time of the match", "what players should bring"],
                answer: 1,
              },
              {
                notice: { genre: "Notice", lines: ["SCHOOL LIBRARY", "You can keep books for two weeks.", "Please return dictionaries on the same day."] },
                question: "What does the notice say?",
                options: ["Students may not take dictionaries home overnight.", "Students can borrow books for one week only.", "The library is open for two weeks."],
                answer: 0,
              },
              {
                notice: { genre: "Advertisement", lines: ["FOR SALE: Blue bike, 2 years old, good condition.", "£40 or best offer. Call Dan after 7 p.m."] },
                question: "What do we know about the bike?",
                options: ["It is brand new.", "Dan might sell it for less than £40.", "You can see it only in the morning."],
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
                title: "Ana",
                text: "I started dancing when I was five. Now I go to classes three times a week after school. Last year I danced in a big show at the city theatre, which was really exciting. I'd like to teach dance one day, maybe in my own school.",
              },
              {
                title: "Ryan",
                text: "I play the guitar in a band with three friends. We practise every Saturday in my garage, and my neighbours sometimes complain about the noise! We've played at a few birthday parties. I want to write our own songs next year.",
              },
              {
                title: "Lena",
                text: "Painting is my favourite hobby. I usually paint animals and the countryside. I don't go to classes; I learn from videos online. Last month, one of my pictures won a prize in a competition, and it's now in the town library.",
              },
            ],
            items: [
              { text: "learns without a teacher?", answer: 2 },
              { text: "has performed in a large building?", answer: 0 },
              { text: "sometimes makes too much noise for other people?", answer: 1 },
              { text: "has a plan for their future job?", answer: 0 },
              { text: "won something recently?", answer: 2 },
              { text: "does their hobby with other people of the same age?", answer: 1 },
              { text: "has done their hobby since they were very young?", answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "My summer job at the animal hospital",
              paragraphs: [
                "Last summer, sixteen-year-old Jake Morris worked at an animal hospital near his home. 'I've always loved animals,' says Jake, 'and I want to be a vet, so I thought it was a good idea to see what the job is really like.'",
                "Jake didn't do anything medical, of course. He cleaned the cages, gave the animals food and water, and took the dogs for walks. 'The work wasn't always nice,' he says. 'Cleaning is hard, and some animals were very ill. But I learned a lot.'",
                "His favourite patient was a cat called Biscuit, who had a broken leg. 'She was very angry at first and didn't want anyone to touch her,' Jake remembers. 'But after a few days, she started to wait for me at the front of her cage.'",
                "Jake worked four days a week and earned a small amount of money, which he spent on a new phone. He is now sure that he wants to study to be a vet. 'It's a lot of work,' he says, 'but I can't imagine doing anything else.'",
              ],
            },
            items: [
              { question: "Why did Jake work at the animal hospital?", options: ["He needed money for school.", "He wanted to learn about a job he was interested in.", "His parents told him to get a summer job."], answer: 1 },
              { question: "What did Jake do at the hospital?", options: ["He helped the vets with operations.", "He looked after the animals' basic needs.", "He answered the telephone."], answer: 1 },
              { question: "What does Jake say about the work?", options: ["Some of it was difficult.", "It was always fun.", "It was too easy for him."], answer: 0 },
              { question: "How did Biscuit change?", options: ["She became more friendly towards Jake.", "She broke her other leg.", "She stopped eating her food."], answer: 0 },
              { question: "How does Jake feel about becoming a vet now?", options: ["He has decided it is too hard.", "He is certain it is the right job for him.", "He wants to wait before he decides."], answer: 1 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "The Great Wall of China",
            text: [
              "The Great Wall of China is one of the most {1} buildings in the world. People started building it more than two thousand years ago to {2} the country from enemies.",
              "The wall is not just one long wall. It is {3} of many different walls, and together they are more than 20,000 kilometres long. Millions of tourists {4} the wall every year.",
              "Some parts are in very good {5}, but other parts are old and broken. It is a good idea to wear comfortable shoes if you want to walk along it, because some sections are very {6}.",
            ],
            gaps: [
              { options: ["famous", "known", "popular"], answer: 0 },
              { options: ["save", "protect", "keep"], answer: 1 },
              { options: ["made", "built", "done"], answer: 0 },
              { options: ["visit", "travel", "go"], answer: 0 },
              { options: ["condition", "state", "situation"], answer: 0 },
              { options: ["high", "steep", "tall"], answer: 1 },
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
              "Hi Tom,",
              "I'm writing to tell you about my new school. It's much bigger {1} my old one, and there are more than a thousand students. My favourite teacher is Mr Lee, {2} teaches science. He's very funny.",
              "I've made {3} few friends already. We have lunch together every day in the canteen. On Fridays, we play basketball after school. Would you like to come and visit me {4} the holidays? We could go to the cinema or play basketball. Let me know {5} you can come.",
              "Write back {6} and tell me your news!",
              "Ella",
            ],
            answers: [["than"], ["who", "he"], ["a"], ["in", "during"], ["if", "when", "whether"], ["soon"]],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to go to the cinema with your English friend, Max. Write an email to Max. Write 25 words or more.",
            prompts: ["Say which film you want to see.", "Say when you want to go.", "Say how you will get there."],
            minWords: 25,
            checklist: ["I wrote about all three points.", "I started with 'Hi Max' and finished with my name.", "I wrote 25 words or more."],
            sample: "Hi Max,\n\nWould you like to see the new space film with me? We could go on Saturday afternoon at three o'clock. My mum can take us there by car.\n\nSee you soon,\nAylin",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              { e: "👧🛒🍎", label: "1" },
              { e: "👧👛❓", label: "2" },
              { e: "👨‍🦳👛😊", label: "3" },
            ],
            minWords: 35,
            checklist: ["My story talks about all three pictures.", "I used past tenses and words like 'first', 'then' and 'finally'.", "I wrote 35 words or more."],
            sample: "Last Saturday, Sara went to the supermarket to buy some apples for her mum. When she wanted to pay, she couldn't find her purse. She looked everywhere and felt very worried. Then an old man came to her. He was holding her purse! She had dropped it near the fruit. Sara thanked him and paid for the apples.",
          },
        },
      ],
    },
  ],
};
