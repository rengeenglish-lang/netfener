import type { CambridgeTest } from "./types";

/** A2 Key practice test 4 (Reading & Writing). Original Netfener content. */
export const KEY_4: CambridgeTest = {
  id: "key-4",
  level: "key",
  no: 4,
  title: "A2 Key · Practice Test 4",
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
                notice: { genre: "Notice", lines: ["SWIMMING POOL", "Children under 8 must be with an adult at all times."] },
                question: "What does the notice say?",
                options: ["Young children cannot swim without a grown-up.", "Children under 8 cannot use the pool.", "Adults must swim in a different pool."],
                answer: 0,
              },
              {
                notice: { genre: "Text message", lines: ["Mum – football practice finishes late today, at 6.30 not 5.30. Can you pick me up then? Josh"] },
                question: "Why has Josh sent this message?",
                options: ["to change the time he needs collecting", "to say he can't go to football practice", "to ask his mum to watch him play"],
                answer: 0,
              },
              {
                notice: { genre: "Sign", lines: ["CAFÉ", "Free glass of juice with every sandwich before 11 a.m."] },
                question: "When can you get a free drink?",
                options: ["if you buy a sandwich in the morning", "if you arrive after 11 a.m.", "if you buy two glasses of juice"],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Hi Ana,", "The library book you ordered has arrived. You can collect it from the front desk until next Friday. After that, it will go back on the shelves.", "City Library"] },
                question: "What must Ana do?",
                options: ["get her book before a certain day", "bring the book back by Friday", "order the book again next week"],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["MUSEUM SHOP", "Closed for repairs this week.", "Postcards and guidebooks are available at the ticket office."] },
                question: "What does the notice tell visitors?",
                options: ["They can buy some things in a different place.", "The museum is closed this week.", "The ticket office sells everything from the shop."],
                answer: 0,
              },
              {
                notice: { genre: "Advertisement", lines: ["BIKE FOR SALE", "Blue mountain bike, only one year old.", "Perfect for teenagers. £80 or nearest offer."] },
                question: "What does the advertisement say?",
                options: ["The seller might accept a little less money.", "The bike is suitable for young children.", "The bike is brand new."],
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
                title: "Hana",
                text: "I've been learning the piano since I was six. I practise for an hour every evening, and I play in a small band with my friends at weekends. Next year I want to study music at college. My parents don't play any instruments, but they love listening to me.",
              },
              {
                title: "Dev",
                text: "I started rock climbing two years ago at an indoor wall near my school. Now I go every Saturday with my older brother, who taught me. Last summer we climbed a real mountain in Wales. It was scary, but I loved it.",
              },
              {
                title: "Lucia",
                text: "I collect old coins from different countries. My grandfather started the collection and gave it to me when I was ten. I've now got more than three hundred coins. I find most of them online, and some are really expensive.",
              },
            ],
            items: [
              { text: "was taught by a brother or sister?", answer: 1 },
              { text: "got their hobby from an older relative?", answer: 2 },
              { text: "plans to continue their hobby in further education?", answer: 0 },
              { text: "felt afraid while doing their hobby?", answer: 1 },
              { text: "buys things for their hobby on the internet?", answer: 2 },
              { text: "does their hobby with friends?", answer: 0 },
              { text: "does their hobby both inside and outside?", answer: 1 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "The young beekeeper",
              paragraphs: [
                "When thirteen-year-old Noah moved to the countryside with his family, he didn't know anyone. 'I was bored, and I missed my friends in the city,' he says. Then one day, a neighbour called Mrs Price asked if he wanted to help with her bees.",
                "At first, Noah was nervous. 'I thought I would get stung all the time,' he laughs. 'But Mrs Price gave me a special suit and showed me how to move slowly and calmly. Bees only sting when they feel in danger.'",
                "Noah now has two hives of his own in his garden. He checks them every weekend and collects honey twice a year. Last summer, he sold jars of honey at the village market and made £200, which he gave to a charity that protects wild bees.",
                "Noah has also started a beekeeping club at his school. 'Ten students come every Wednesday,' he says. 'Some of them were scared of bees, just like me. Now they think bees are amazing.'",
              ],
            },
            items: [
              { question: "How did Noah feel when he first moved to the countryside?", options: ["lonely", "excited", "worried about school"], answer: 0 },
              { question: "Why was Noah nervous about working with bees?", options: ["He thought they would hurt him.", "He didn't like Mrs Price.", "He didn't have the right clothes."], answer: 0 },
              { question: "What did Noah learn from Mrs Price?", options: ["how to behave near bees", "how to make honey jars", "how to sell things at a market"], answer: 0 },
              { question: "What did Noah do with the money from the market?", options: ["He gave it to help bees.", "He bought another hive.", "He gave it to Mrs Price."], answer: 0 },
              { question: "What does Noah say about the students in his club?", options: ["Their feelings about bees have changed.", "They all wanted to keep bees before.", "They meet at weekends."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "The bicycle",
            text: [
              "The first bicycles appeared in Europe about two hundred years ago. They didn't have pedals, so people had to {1} their feet along the ground to move.",
              "Later, inventors added pedals and chains, and bicycles became much faster. By the 1890s, cycling was a very {2} hobby, and thousands of people used bikes to travel to work.",
              "Today, there are more than a billion bicycles in the world. In some cities, such as Amsterdam, there are more bikes than people! Cycling is cheap, and it's a good way to {3} fit. It's also better for the {4} than driving a car, because bikes don't produce any pollution. Many cities now {5} special lanes so that cyclists can ride {6}.",
            ],
            gaps: [
              { options: ["push", "pull", "carry"], answer: 0 },
              { options: ["popular", "famous", "favourite"], answer: 0 },
              { options: ["keep", "make", "do"], answer: 0 },
              { options: ["environment", "nature", "country"], answer: 0 },
              { options: ["have", "own", "keep"], answer: 0 },
              { options: ["safely", "nicely", "kindly"], answer: 0 },
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
              "Hi Mia,",
              "I'm sorry I didn't reply {1} your email sooner. I've been really busy with exams this week, but they're finished now!",
              "Guess what? My parents have said I can have a party {2} Saturday to celebrate. It's going to be in our garden, and there will be music and lots of food. Would you like to come? It starts {3} 4 o'clock.",
              "Can you bring {4} of your music? You've got better songs than me! And if it rains, don't worry – we can move everything inside. Let me know {5} you can come. My address is 14 Park Road. It's very easy to find because it's opposite {6} big supermarket.",
              "See you soon,",
              "Eva",
            ],
            answers: [["to"], ["on", "this", "next"], ["at"], ["some"], ["if", "whether"], ["the", "a"]],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to borrow a book from your English friend, Alex. Write an email to Alex. Write 25 words or more.",
            prompts: ["Say which book you want to borrow.", "Explain why you want it.", "Say when you will give it back."],
            minWords: 25,
            checklist: ["I wrote about all three points.", "I used a friendly greeting and ending.", "I wrote 25 words or more."],
            sample: "Hi Alex,\n\nCould I borrow your book about dinosaurs, please? I have to give a presentation about dinosaurs at school next week, and your book has great pictures. I'll give it back to you on Friday.\n\nThanks,\nDeniz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              { e: "👧🐕🌳", label: "1" },
              { e: "🐕🏃‍♀️❓", label: "2" },
              { e: "👮🐕😊", label: "3" },
            ],
            minWords: 35,
            checklist: ["My story talks about all three pictures.", "I used past tenses and linking words like 'when', 'then' and 'so'.", "I wrote 35 words or more."],
            sample: "One afternoon, Zeynep took her dog Max for a walk in the park. Suddenly, Max saw a cat and ran away. Zeynep looked everywhere, but she couldn't find him, so she felt very worried. Then a police officer arrived with Max. Zeynep thanked him and gave Max a big hug.",
          },
        },
      ],
    },
  ],
};
