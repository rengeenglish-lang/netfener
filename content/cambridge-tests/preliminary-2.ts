import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 2 (Reading and Writing papers). Original Netfener content. */
export const PRELIMINARY_2: CambridgeTest = {
  id: "preliminary-2",
  level: "preliminary",
  no: 2,
  title: "B1 Preliminary · Practice Test 2",
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
                notice: { genre: "Notice", lines: ["LANGUAGE LAB", "Headphones must be returned to the front desk at the end of each session. Lost headphones will be charged at £15."] },
                question: "What does the notice say?",
                options: ["Students who lose headphones have to pay for them.", "Students can take headphones home after the session.", "Headphones can be bought at the front desk for £15.", "Students must bring their own headphones."],
                answer: 0,
              },
              {
                notice: { genre: "Message", lines: ["Tom – Mum says you can borrow her car on Saturday, but she needs it back by 4 because she's going out. Remember to fill it up! Jo"] },
                question: "What does Jo want Tom to know?",
                options: ["He must return the car with petrol in it by a certain time.", "Mum wants to use the car on Saturday morning.", "He has to drive Mum somewhere at 4 o'clock.", "Mum will pay for the petrol."],
                answer: 0,
              },
              {
                notice: { genre: "Sign", lines: ["STAFF ONLY BEYOND THIS POINT", "Customers wishing to return items should go to the service desk on the ground floor."] },
                question: "Customers who want to take something back should",
                options: ["go to a desk on a different floor.", "speak to a member of staff in this area.", "go through the door marked 'Staff only'.", "fill in a form at the shop entrance."],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Dear members,", "Due to building work, the gym will open at 9 a.m. instead of 7 a.m. for the next two weeks. All classes will run as normal.", "Manager"] },
                question: "What is changing at the gym?",
                options: ["It will open later than usual for a short time.", "Some classes will be cancelled.", "It will close for two weeks.", "Classes will start at 7 a.m."],
                answer: 0,
              },
              {
                notice: { genre: "Label", lines: ["Wash at 30°C with similar colours.", "Do not tumble dry. Iron on a low heat."] },
                question: "What does the label say about the item?",
                options: ["It should not be dried in a machine.", "It must be washed by hand.", "It should be ironed on a high heat.", "It can be washed with any colours."],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to watch a film this weekend. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              { title: "Ocean Giants", text: "A beautifully filmed documentary about whales, showing their long journeys across the oceans. It explains how scientists use technology to follow them." },
              { title: "The Last Kick", text: "A true story about a girls' football team from a poor village who reach the national final. Funny and moving." },
              { title: "Robot Rescue", text: "An animated adventure in which a small robot saves its city from a giant storm. Full of jokes for younger children." },
              { title: "Midnight Hotel", text: "A frightening mystery set in an old hotel where guests start to disappear. Not suitable for anyone under 15." },
              { title: "Kitchen Kings", text: "Two brothers open a restaurant and compete in a cooking competition on TV. A light comedy with lots of delicious food." },
              { title: "Mars Mission", text: "Astronauts travel to Mars and face serious problems on the way. Exciting special effects and accurate science." },
              { title: "Painted Lives", text: "The story of a famous painter's life, from her childhood in Mexico to her success around the world. Slow but beautiful." },
              { title: "Speed Street", text: "Non-stop car chases through the city as two young drivers try to win a secret race. Lots of action but not much story." },
            ],
            items: [
              { text: "Elif loves sport, especially stories about real people who succeed against the odds. She doesn't like science fiction.", answer: 1 },
              { text: "Burak is studying biology and wants to learn more about sea animals. He prefers films that are educational.", answer: 0 },
              { text: "Nina is taking her six-year-old brother to the cinema. She wants a film that they will both laugh at.", answer: 2 },
              { text: "Arda is interested in space and wants to become an engineer. He likes exciting films that are realistic.", answer: 5 },
              { text: "Lara is an art student. She enjoys films about the lives of creative people and doesn't mind if the film is slow.", answer: 6 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "My year without a phone",
              paragraphs: [
                "Last January, I made a decision that my friends thought was crazy: I gave my smartphone to my parents and asked them not to give it back for a year. I was sixteen, and I'd noticed that I spent four or five hours a day looking at a screen. My school marks were getting worse, and I often felt tired and anxious.",
                "The first few weeks were very difficult. I kept reaching into my pocket for a phone that wasn't there, and I felt left out because my friends organised everything in group chats. Twice, I missed a party because nobody remembered to tell me about it.",
                "Slowly, though, things changed. I started reading again, something I hadn't done since I was eleven, and I joined the school climbing club. My friends got used to calling the old phone at home if they wanted me. Some of them even said they were jealous of how relaxed I seemed.",
                "When the year ended, I took my phone back, but I use it very differently now. I've deleted most of my apps, and I leave it in the kitchen at night. I wouldn't tell everyone to do what I did, but I think it's worth asking yourself how much time you really want to spend on your phone.",
              ],
            },
            items: [
              { question: "Why did the writer decide to stop using her phone?", options: ["Her parents insisted she should.", "She was worried about how it was affecting her.", "She wanted to save money.", "Her phone was broken."], answer: 1 },
              { question: "What was the main problem at the beginning?", options: ["She sometimes didn't hear about social plans.", "She lost touch with her family.", "She couldn't do her homework.", "Her friends were angry with her."], answer: 0 },
              { question: "What does the writer say about reading?", options: ["It was a hobby she returned to.", "She started reading for the first time.", "She read mainly for her school club.", "She found it boring without her phone."], answer: 0 },
              { question: "How did some of the writer's friends react later?", options: ["They wanted to give up their phones too.", "They admired how calm she was.", "They stopped inviting her out.", "They thought she was being silly."], answer: 1 },
              { question: "What is the writer's advice to readers?", options: ["Everyone should live without a phone for a year.", "People should think about how they use their phones.", "Teenagers should not have smartphones.", "Phones should always be kept in the kitchen."], answer: 1 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The world's oldest tree?",
            text: [
              "High in the White Mountains of California grow some of the oldest living things on Earth: bristlecone pines. {1} One of them, nicknamed Methuselah, is believed to be more than 4,800 years old.",
              "These trees live in a very harsh environment, with poor soil, strong winds and little rain. {2} Because they grow so slowly, their wood is extremely dense, which protects them from insects and disease.",
              "Scientists can calculate a tree's age by counting the rings inside its trunk, as one ring grows each year. {3} Instead, they take a thin sample from the trunk using a special tool.",
              "The exact location of Methuselah is kept secret. {4} Visitors can still walk among the ancient trees on marked paths, but they are asked not to touch them.",
              "Bristlecone pines are also valuable to researchers studying the climate. {5} By studying them, scientists can learn about droughts and cold periods thousands of years ago.",
            ],
            sentences: [
              "Some of these twisted, slow-growing trees are thousands of years old.",
              "Surprisingly, these difficult conditions may actually help them live longer.",
              "Of course, they don't cut down a living tree to do this.",
              "This is to protect it from people who might damage it.",
              "The width of each ring shows what the weather was like that year.",
              "Many tourists visit California to see the giant redwood trees.",
              "The trees produce large, colourful flowers every spring.",
              "Methuselah was finally cut down in the 1960s.",
            ],
            answers: [0, 1, 2, 3, 4],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Learning a musical instrument",
            text: [
              "Learning to play a musical instrument can be hard work, but it has many benefits. Studies show that it can {1} your memory and help you concentrate better.",
              "Many adults wish they had learned an instrument when they were young, but it's never too late to {2}. The most important thing is to practise {3}, even if it's only for fifteen minutes a day.",
              "It's also a good idea to {4} a teacher, at least at the beginning, so that you don't develop bad habits. And don't {5} up if progress seems slow. Every musician has to start somewhere, and the {6} of playing your first complete song is worth all the effort.",
            ],
            gaps: [
              { options: ["improve", "increase", "raise", "grow"], answer: 0 },
              { options: ["start", "open", "set", "launch"], answer: 0 },
              { options: ["regularly", "commonly", "usually", "normally"], answer: 0 },
              { options: ["find", "meet", "look", "search"], answer: 0 },
              { options: ["give", "take", "put", "get"], answer: 0 },
              { options: ["feeling", "sense", "emotion", "touch"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A trip to remember",
            text: [
              "Last spring, my class went on a three-day trip to the mountains. We stayed in a wooden hut {1} had no electricity, so we cooked on a fire and used torches at night.",
              "On the second day, we climbed to the top of a mountain. It took us {2} five hours, and I was exhausted when we got there. {3} the view was amazing. We could see lakes, forests and even the sea in the distance.",
              "I had never done anything {4} that before, and I was proud of myself. Now I want to go hiking {5} often, and I'm trying to persuade my parents to take me {6} the summer.",
            ],
            answers: [["that", "which"], ["about", "almost", "nearly", "over"], ["but", "however"], ["like"], ["more"], ["in", "during", "this", "for"]],
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
            instruction: "Read this email from your English teacher, Mrs Brown, and the notes you have made. Write your email to Mrs Brown using all the notes. Write about 100 words.",
            input: {
              from: "Mrs Brown",
              subject: "School English Day",
              lines: [
                "We're planning an English Day at school next month, and I'd like your help. [Yes!]",
                "Which activity do you think students would enjoy most: a quiz, a play or a film? [Say which and why]",
                "Could you help on the day? [Explain what you can do]",
                "What food should we have at lunch? [Suggest]",
              ],
            },
            minWords: 100,
            checklist: ["I answered all four notes.", "I used a polite tone for a teacher.", "I gave reasons with 'because' or 'so'.", "I wrote about 100 words."],
            sample:
              "Dear Mrs Brown,\n\nThank you for your email. I'd be very happy to help with the English Day!\n\nI think students would enjoy a quiz most, because everyone can take part in teams and it's more fun than just watching something. We could have questions about music, sport and British culture.\n\nOn the day, I can help set up the hall in the morning, and I could also read the quiz questions if you like.\n\nFor lunch, why don't we have fish and chips or sandwiches? Students could also try some typical English cakes.\n\nBest wishes,\nAyşe",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement in an English-language magazine for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My favourite place",
              lines: ["Where is your favourite place?", "What do you do there?", "Why is it special to you?", "Send us your article and we'll publish the best ones!"],
            },
            minWords: 100,
            checklist: ["My article has a title.", "I answered all the questions in the announcement.", "I described the place clearly and gave reasons.", "I wrote about 100 words."],
            sample:
              "My secret garden\n\nMy favourite place is my grandmother's garden in a small town near the sea. It isn't very big, but it's full of fruit trees, flowers and vegetables.\n\nWhen I visit, I help my grandmother pick tomatoes and cherries, and in the evenings we sit under the old fig tree and talk for hours. Sometimes I just lie on the grass and read.\n\nThe garden is special because it's so peaceful. In the city, I'm always busy and there's always noise, but there I can relax completely. It also reminds me of all the happy summers I spent there as a child.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'As soon as Maria saw the envelope, she knew something important had happened.' Write your story in about 100 words.",
            minWords: 100,
            checklist: ["My story begins with the sentence I was given.", "It has a clear beginning, middle and end.", "I used a range of past tenses.", "I wrote about 100 words."],
            sample:
              "As soon as Maria saw the envelope, she knew something important had happened. It had the logo of the music school she had applied to months earlier.\n\nHer hands were shaking as she opened it. She had practised the piano every day for a year, but she knew hundreds of students had applied for only twenty places.\n\nShe read the first line twice before she understood it: 'We are delighted to offer you a place.' Maria screamed so loudly that her brother ran downstairs to see what was wrong.\n\nThat evening, the whole family celebrated with her favourite dinner.",
          },
        },
      ],
    },
  ],
};
