import type { CambridgeTest } from "./types";

/** A2 Key practice test 2 (Reading & Writing). Original Netfener content. */
export const KEY_2: CambridgeTest = {
  id: "key-2",
  level: "key",
  no: 2,
  title: "A2 Key · Practice Test 2",
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
                notice: { genre: "Notice", lines: ["MUSEUM SHOP", "Today only: all postcards half price.", "Shop closes 30 minutes before the museum."] },
                question: "What does the notice say?",
                options: ["You can buy postcards cheaply today.", "The shop and the museum close at the same time.", "Postcards are free for museum visitors."],
                answer: 0,
              },
              {
                notice: { genre: "Text message", lines: ["Dad – I've missed the 5.15 bus. The next one is at 5.45, so I'll be home about 6.15. Don't wait for me for dinner. Emma"] },
                question: "What is Emma telling her dad?",
                options: ["She will be later than usual.", "She wants him to drive her home.", "She has already eaten dinner."],
                answer: 0,
              },
              {
                notice: { genre: "Sign", lines: ["PLEASE DO NOT FEED THE ANIMALS", "Visitors can buy special food for the goats at the farm shop."] },
                question: "What does the sign say?",
                options: ["Visitors may give the goats food from the shop.", "Visitors must bring their own food for the animals.", "The farm shop sells food for people only."],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Hi everyone,", "The school trip on Thursday is cancelled because of the weather forecast. We'll go next week instead. Mr Ross"] },
                question: "Why is Mr Ross writing?",
                options: ["to say the trip will take place on a different day", "to ask students to bring warm clothes", "to tell students the trip is on Thursday"],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["SPORTS CENTRE", "Tennis courts can be booked up to 7 days in advance.", "Members only on Saturdays."] },
                question: "What does the notice say?",
                options: ["Non-members cannot play tennis on Saturdays.", "You must book a court a week before you play.", "Tennis courts are closed at weekends."],
                answer: 0,
              },
              {
                notice: { genre: "Advertisement", lines: ["GUITAR LESSONS", "Beginners welcome! First lesson free.", "Call Marco on 07798 556201."] },
                question: "What is Marco offering?",
                options: ["a free first lesson for new students", "guitars for sale at a low price", "lessons only for experienced players"],
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
                title: "Hannah",
                text: "Last summer I visited my cousins in Canada. We went camping by a lake for a week and saw bears and moose. The best part was canoeing early in the morning, when the water was completely still. I want to go back and see the mountains in winter.",
              },
              {
                title: "Oscar",
                text: "My family went to Italy for two weeks. We stayed in a city and visited lots of museums and old buildings, which my parents loved, but I found a bit boring. I preferred the food, especially the ice cream! We took the train everywhere.",
              },
              {
                title: "Selin",
                text: "I spent my holiday at my grandparents' village in Turkey. There's no internet there, so at first I was bored. But I made friends with some local children, and we swam in the river every day. I also learned to make bread with my grandmother.",
              },
            ],
            items: [
              { text: "didn't enjoy some of the places they visited?", answer: 1 },
              { text: "learned a new skill?", answer: 2 },
              { text: "saw wild animals?", answer: 0 },
              { text: "would like to visit the same place in a different season?", answer: 0 },
              { text: "travelled around by public transport?", answer: 1 },
              { text: "felt different about the holiday after a few days?", answer: 2 },
              { text: "slept outside?", answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "The girl who started a library",
              paragraphs: [
                "When thirteen-year-old Amira moved to a small town, she was surprised to find that there was no library. 'I love reading,' she says, 'and I couldn't afford to buy new books all the time. I thought other children probably felt the same.'",
                "Amira asked her neighbours if they had any books they didn't want. Within a month, she had collected over three hundred. Her parents let her use their garage, and she built shelves with help from her uncle, who is a carpenter.",
                "At first, only a few friends came to borrow books. But after Amira put posters in the local shops and the school, more and more people arrived. Now around fifty children visit every week. 'Some of the younger ones can't read very well yet,' says Amira, 'so on Saturdays I read stories to them.'",
                "Last month, the town council heard about Amira's library and offered her a room in the community centre. 'It's bigger and warmer than the garage,' she laughs. 'But I'll miss it a little. That's where it all started.'",
              ],
            },
            items: [
              { question: "Why did Amira decide to start a library?", options: ["Her school asked her to.", "She thought other children needed books too.", "She wanted to sell her old books."], answer: 1 },
              { question: "How did Amira get the books?", options: ["She bought them from a shop.", "People who lived near her gave them to her.", "Her uncle sent them from another town."], answer: 1 },
              { question: "What helped more people find out about the library?", options: ["posters she put up", "an article in a newspaper", "a programme on the radio"], answer: 0 },
              { question: "What does Amira do on Saturdays?", options: ["She builds new shelves.", "She reads to young children.", "She visits other libraries."], answer: 1 },
              { question: "How does Amira feel about moving to the community centre?", options: ["She is pleased but also a little sad.", "She doesn't want to move at all.", "She is worried it will be too cold."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "The Amazon rainforest",
            text: [
              "The Amazon is the largest rainforest in the world. It {1} across nine countries in South America, but most of it is in Brazil.",
              "The rainforest is home to millions of different kinds of plants, insects and animals, and scientists {2} new ones every year. It is also very important for the whole planet, because its trees {3} a lot of carbon dioxide from the air.",
              "{4}, large parts of the forest are cut down every year to make space for farms. Many people are working hard to {5} the rainforest, because once it is gone, it will be very {6} to bring it back.",
            ],
            gaps: [
              { options: ["spreads", "goes", "moves"], answer: 0 },
              { options: ["discover", "invent", "make"], answer: 0 },
              { options: ["take in", "take off", "take up"], answer: 0 },
              { options: ["Sadly", "Luckily", "Finally"], answer: 0 },
              { options: ["protect", "defend", "guard"], answer: 0 },
              { options: ["difficult", "hard-working", "heavy"], answer: 0 },
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
              "Hi Leo,",
              "Guess what? I've joined {1} new swimming club! We train twice a week, on Tuesdays and Thursdays, {2} 6 to 7.30 p.m. The coach is really good, and I'm already faster {3} I was last month.",
              "There's a competition next Saturday. I'm a bit nervous because I've {4} swum in a race before. Would you like to come and watch? My mum can drive us there. Let me know {5} Friday.",
              "Hope to see you {6}!",
              "Sam",
            ],
            answers: [["a"], ["from"], ["than"], ["never"], ["by", "before", "on"], ["there", "soon", "then"]],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Your English friend, Ruby, has invited you to her birthday party, but you can't go. Write an email to Ruby. Write 25 words or more.",
            prompts: ["Say sorry and explain why you can't go.", "Suggest another day to meet.", "Say what present you are going to give her."],
            minWords: 25,
            checklist: ["I wrote about all three points.", "I started with 'Hi Ruby' or 'Dear Ruby' and finished with my name.", "I wrote 25 words or more."],
            sample: "Hi Ruby,\n\nThanks for the invitation! I'm really sorry, but I can't come because I'm visiting my grandparents that weekend. Can we meet next Saturday instead? I've got a book by your favourite writer for you.\n\nLove,\nDeniz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              { e: "👦📱🚌", label: "1" },
              { e: "🚌💨😱", label: "2" },
              { e: "👩‍✈️📱👦", label: "3" },
            ],
            minWords: 35,
            checklist: ["My story talks about all three pictures.", "I used past tenses and linking words.", "I wrote 35 words or more."],
            sample: "One morning, Can was going to school by bus. He was playing a game on his phone. When he got off the bus, he left his phone on the seat. The bus drove away and he felt terrible. The next day, the bus driver gave the phone back to him. Can thanked her and was very happy.",
          },
        },
      ],
    },
  ],
};
