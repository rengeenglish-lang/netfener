import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 1 (Reading and Writing papers). Original Netfener content. */
export const PRELIMINARY_1: CambridgeTest = {
  id: "preliminary-1",
  level: "preliminary",
  no: 1,
  title: "B1 Preliminary · Practice Test 1",
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
                notice: { genre: "Notice", lines: ["SCHOOL TRIP TO THE SCIENCE MUSEUM", "Students who have not returned the permission form by Friday will stay at school and attend normal lessons."] },
                question: "What does the notice say?",
                options: ["Students must hand in a form to go on the trip.", "The trip will take place on Friday.", "Lessons will be cancelled on the day of the trip."],
                answer: 0,
              },
              {
                notice: { genre: "Message", lines: ["Jess – Gym's closed tonight for repairs. Shall we go for a run in the park instead? Same time, meet at the gate. Kim"] },
                question: "What is Kim suggesting?",
                options: ["changing the time they meet", "doing a different activity tonight", "going to a different gym"],
                answer: 1,
              },
              {
                notice: { genre: "Label", lines: ["Keep in the fridge after opening and use within 3 days.", "Not suitable for freezing."] },
                question: "What does the label say about the product?",
                options: ["It must be frozen after opening.", "It lasts for three days in the fridge before opening.", "Once opened, it should be eaten fairly soon."],
                answer: 2,
              },
              {
                notice: { genre: "Email", lines: ["Hi all,", "Tickets for the end-of-year concert go on sale on Monday. Last year they sold out in two days, so don't wait too long!", "Ms Patel"] },
                question: "Why has Ms Patel written this email?",
                options: ["to say that tickets are already sold out", "to advise people to buy tickets quickly", "to change the date of the concert"],
                answer: 1,
              },
              {
                notice: { genre: "Notice", lines: ["CYCLE PATH CLOSED", "Use the road to the left until 15 May. Cyclists must wear helmets at all times."] },
                question: "What should cyclists do?",
                options: ["stop cycling until 15 May", "use a different route for a while", "leave their bikes at the path"],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to join a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              { title: "Hill Walkers", text: "We walk in the hills every Sunday, whatever the weather. Walks last about six hours, so you need to be fit. Members share transport to the starting point." },
              { title: "Photo Club", text: "Learn to take great photos with any camera, even your phone. We meet on Tuesday evenings and go on a photo walk around the city once a month." },
              { title: "Junior Chefs", text: "Every Saturday morning, members cook a different dish from around the world. All ingredients are provided, and you take home what you make." },
              { title: "Chess Corner", text: "Players of all levels are welcome on Wednesday evenings. Our best players take part in national competitions, and beginners get free lessons." },
              { title: "Green Team", text: "We help keep our town clean and plant trees in local parks. Meetings are on the first Saturday of every month. No experience needed." },
              { title: "Drama Group", text: "We put on two plays a year. Rehearsals are on Thursday and Friday evenings. You don't have to act; we also need people to make costumes and scenery." },
              { title: "Swim Squad", text: "Training sessions take place at 6.30 a.m. on weekdays. Swimmers must be able to swim 400 metres without stopping, and we compete in regional races." },
              { title: "Book Circle", text: "Each month we choose a novel to read and then meet in a café on the last Sunday to discuss it. New members are always welcome." },
            ],
            items: [
              { text: "Ömer is interested in cooking and would like to try food from other countries. He is only free at weekends, and he'd like to be able to share what he makes with his family.", answer: 2 },
              { text: "Sophie loves the theatre but feels too shy to perform on stage. She is good at sewing and is free on most weekday evenings.", answer: 5 },
              { text: "Lucas has just started playing a strategy game and wants to improve. He'd like a teacher at first but hopes to compete one day. He's free midweek.", answer: 3 },
              { text: "Defne cares about the environment and wants to do something practical outdoors, but she can only give up a few hours a month.", answer: 4 },
              { text: "Max has a new smartphone and wants to learn how to take better pictures. He'd also like to explore different parts of the city with other people.", answer: 1 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "Learning to sail",
              paragraphs: [
                "When I was fourteen, my parents booked me onto a one-week sailing course on the coast. I wasn't pleased. I had never been on a boat, I didn't know anyone else on the course, and my friends were all going to a summer camp together. I spent the whole journey there feeling sorry for myself.",
                "The first day didn't help. It was cold and windy, and our instructor, a quiet woman called Fiona, made us practise putting on life jackets and tying knots for hours before we were allowed near the water. I was bored and couldn't see the point of it all.",
                "On the second afternoon, though, we finally went out in small boats, two people in each. My partner was a boy called Arif, who was even more nervous than I was. Halfway across the bay, the wind suddenly changed and our boat turned over. We were both in the cold water, but because we had practised so carefully, we knew exactly what to do. We turned the boat back over and climbed in, laughing.",
                "After that, everything was different. Arif and I became good friends, and by the end of the week we were sailing confidently around the bay. I've been sailing every summer since, and next year I'm going to do the course to become an instructor myself. I'll make sure my students practise their knots!",
              ],
            },
            items: [
              { question: "How did the writer feel on the way to the course?", options: ["excited about learning something new", "unhappy about missing time with friends", "worried about being seasick", "pleased to be away from his parents"], answer: 1 },
              { question: "What did the writer think of the first day?", options: ["He enjoyed learning to tie knots.", "He found the activities pointless.", "He was frightened of the instructor.", "He was surprised by the good weather."], answer: 1 },
              { question: "What happened on the second afternoon?", options: ["Arif refused to go out in the boat.", "The writer had to rescue Arif from the water.", "The boys dealt with an accident successfully.", "The instructor stopped the lesson because of the wind."], answer: 2 },
              { question: "What helped the writer when the boat turned over?", options: ["the training he had done earlier", "his experience of swimming in the sea", "advice from the instructor", "Arif's knowledge of boats"], answer: 0 },
              { question: "What would the writer say about the course now?", options: ["I'm glad my parents chose something else next time.", "It was fun, but I've never sailed again.", "It completely changed my opinion of sailing.", "I still think the first day was a waste of time."], answer: 2 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The town that went car-free",
            text: [
              "Pontevedra, a town in north-west Spain, made an unusual decision in 1999: it banned most cars from its centre. {1} Today, however, it is often described as one of the best places in Europe to live.",
              "Before the change, the town's narrow streets were full of traffic and parked cars. {2} Shops were closing, and many families were moving to the suburbs.",
              "The new rules allowed only delivery vans, emergency vehicles and residents' cars into the centre, and only for short periods. {3} Instead, they were given wide pavements, benches and trees.",
              "The results surprised many people. {4} Local businesses that had been struggling started to do well again, as more people walked through the centre and stopped to shop.",
              "Children now walk to school on their own, and older people say they feel safer crossing the street. {5} Several other cities in Europe are now studying Pontevedra's example.",
            ],
            sentences: [
              "At the time, many people thought the plan would destroy the local economy.",
              "Pedestrians had very little space, and the air was often polluted.",
              "Car parks were built underground and outside the centre, so the streets were returned to people on foot.",
              "Air pollution fell dramatically, and the population of the centre began to grow.",
              "The mayor also hopes to have more people living in the area in the future.",
              "Many visitors say the town's main attraction is its quiet atmosphere.",
              "Cars are much cheaper than they were in the past.",
              "There have been no traffic deaths in the town for many years.",
            ],
            answers: [0, 1, 2, 3, 7],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Volunteering abroad",
            text: [
              "Every year, thousands of young people spend a few weeks or months volunteering in another country. They might teach English, help {1} new schools or work on projects that protect wildlife.",
              "Most volunteers say the experience {2} them more confident. They also get the {3} to learn about a different culture and often make friends for life.",
              "{4}, it is important to choose a programme carefully. Some organisations charge a lot of money and don't {5} much support. Before you go, it's a good idea to {6} to people who have volunteered with the same organisation.",
            ],
            gaps: [
              { options: ["build", "make", "put", "create"], answer: 0 },
              { options: ["made", "did", "got", "let"], answer: 0 },
              { options: ["chance", "luck", "way", "time"], answer: 0 },
              { options: ["However", "Although", "Despite", "Even"], answer: 0 },
              { options: ["provide", "give out", "hand", "offer up"], answer: 0 },
              { options: ["talk", "tell", "say", "speak about"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My first job",
            text: [
              "Last summer I got my first job, working in a small bookshop near my house. I was nervous {1} the first day, but the owner, Mrs Grant, was very kind. She showed me {2} to use the till and where all the books were.",
              "Most of the time I put new books on the shelves and helped customers {3} were looking for something special. I enjoyed {4} to people about books, and I discovered lots of new authors.",
              "I earned enough money to buy a new laptop, {5} I'm saving the rest for a holiday. I'm hoping Mrs Grant will ask me to work there again {6} year.",
            ],
            answers: [["on"], ["how"], ["who", "that"], ["talking", "speaking", "chatting"], ["and", "but"], ["next", "this"]],
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "Weekend visit",
              lines: [
                "Hi! I'm really happy you can visit me next weekend. [Great!]",
                "What would you like to do on Saturday? We could go to the beach or visit the castle. [Tell Chris]",
                "My parents want to cook dinner for you. Is there anything you don't eat? [Explain]",
                "What time does your train arrive? [Give details]",
              ],
            },
            minWords: 100,
            checklist: ["I answered all four notes.", "I used a friendly opening and closing.", "I joined my ideas with words like 'because', 'but' and 'so'.", "I wrote about 100 words."],
            sample:
              "Hi Chris,\n\nThanks for your email. I'm really looking forward to seeing you next weekend!\n\nOn Saturday I'd love to visit the castle, because I'm interested in history and I've seen some amazing photos of it. If the weather is nice, maybe we could go to the beach on Sunday morning.\n\nIt's very kind of your parents to cook for me. I eat almost everything, but I don't eat fish, so please tell them that.\n\nMy train arrives at 6.15 on Friday evening. Could you meet me at the station?\n\nSee you soon,\nEmre",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best day of my life",
              lines: ["Tell us about the best day you have ever had.", "Where were you, and who were you with?", "Why was it so special?", "The best articles will be published on our website."],
            },
            minWords: 100,
            checklist: ["My article has an interesting title.", "I answered the questions in the announcement.", "I described my feelings and gave reasons.", "I wrote about 100 words."],
            sample:
              "A day I'll never forget\n\nThe best day of my life was my twelfth birthday. My family didn't say anything in the morning, so I thought they had forgotten. I felt quite sad when I went to school.\n\nWhen I came home, however, the house was completely dark. Suddenly the lights came on and all my friends and cousins shouted 'Surprise!' My grandparents had even travelled from another city to be there.\n\nWe ate my favourite food, played games and danced until late. It was special because everyone I love was in one room, and I realised how lucky I am.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Alex opened the door, he couldn't believe his eyes.' Write your story in about 100 words.",
            minWords: 100,
            checklist: ["My story begins with the sentence I was given.", "It has a clear beginning, middle and end.", "I used past tenses correctly.", "I wrote about 100 words."],
            sample:
              "When Alex opened the door, he couldn't believe his eyes. His small flat was full of balloons, and in the middle of the room stood a huge cake with a photo of a dog on it.\n\nFor a moment he was confused. Then his sister came out of the kitchen, holding a tiny brown puppy. 'Happy birthday!' she said. 'You've wanted a dog for years, so we decided it was time.'\n\nAlex was so happy that he couldn't speak. He named the puppy Lucky. That evening, as Lucky slept on his lap, Alex knew it was the best present he had ever received.",
          },
        },
      ],
    },
  ],
};
