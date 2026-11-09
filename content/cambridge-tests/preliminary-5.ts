import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 5 (Reading and Writing papers). Original Netfener content. */
export const PRELIMINARY_5: CambridgeTest = {
  id: "preliminary-5",
  level: "preliminary",
  no: 5,
  title: "B1 Preliminary · Practice Test 5",
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
                notice: { genre: "Notice", lines: ["SCHOOL CANTEEN", "Hot meals are served until 1.30 p.m. After that, only sandwiches and fruit are available."] },
                question: "What does the notice say?",
                options: ["Students who arrive late cannot have a hot lunch.", "The canteen closes at 1.30 p.m.", "Sandwiches are only sold before 1.30 p.m."],
                answer: 0,
              },
              {
                notice: { genre: "Message", lines: ["Dad – I'm staying at Nina's after school to finish our project. Her mum will drive me home by 8. Emre"] },
                question: "What does Emre tell his dad?",
                options: ["He will get a lift home later than usual.", "He needs his dad to collect him at 8.", "Nina is coming to their house after school."],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["CAMPSITE", "Fires are only allowed in the metal barbecue areas. Please make sure fires are completely out before leaving."] },
                question: "What are campers told?",
                options: ["They can only light fires in certain places.", "Fires are not allowed anywhere on the campsite.", "They must buy a barbecue from the campsite shop."],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Hi Jamal,", "I'm afraid I can't make tennis on Thursday – I've got a dentist's appointment. Are you free on Friday at the same time instead?", "Pete"] },
                question: "What does Pete want to do?",
                options: ["arrange their game for another day", "cancel their tennis lessons", "go to the dentist with Jamal"],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["CHARITY BOOK SALE", "We need donations of good-quality books. Please leave them at the school office before Friday."] },
                question: "What is the notice asking people to do?",
                options: ["give books for the sale", "buy books at the school office", "help to sell books on Friday"],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to visit a museum. Read the descriptions of eight museums. Decide which museum would be the most suitable for each person.",
            options: [
              { title: "The Toy Museum", text: "Toys and games from the last 200 years, including a room where visitors can play with copies of old toys. Popular with families." },
              { title: "Science World", text: "Hands-on experiments for all ages, a planetarium show every hour and a workshop where you can build your own robot." },
              { title: "The Fashion House", text: "Clothes from famous designers, plus a studio where visitors can design and print their own T-shirt." },
              { title: "Ocean Life Centre", text: "Huge tanks with sharks, turtles and thousands of fish. Daily talks from marine biologists about protecting the sea." },
              { title: "The Railway Museum", text: "Historic trains and a ride on a steam engine every Sunday. Includes a large model railway." },
              { title: "City History Museum", text: "Discover how the city has changed over 2,000 years, with Roman coins, old maps and a reconstructed medieval street." },
              { title: "The Gallery of Modern Art", text: "Paintings and sculptures by living artists, with free drawing classes for teenagers on Saturday mornings." },
              { title: "The Film Museum", text: "Costumes and props from famous films and a studio where visitors can make a short film using special effects." },
            ],
            items: [
              { text: "Kaan wants to become a film director and would like to try making his own movie.", answer: 7 },
              { text: "Lara is studying the history of her city at school and wants to see objects from ancient times.", answer: 5 },
              { text: "Ömer is interested in technology and would like to make something mechanical himself.", answer: 1 },
              { text: "Su loves animals and wants to learn about the environment from experts.", answer: 3 },
              { text: "Asya enjoys art and would like to get some free lessons at the weekend.", answer: 6 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "Building a better playground",
              paragraphs: [
                "When I was fourteen, the playground in our town park was in a terrible state. The swings were broken, the slide was rusty, and there was rubbish everywhere. Most parents had stopped taking their children there. I remember thinking that somebody should do something, and then realising that somebody could be me.",
                "I started by writing a letter to the town council. I didn't get a reply, which was disappointing. So I tried a different approach: I made a short video showing the state of the playground and shared it online. Within a week, it had been watched by more than 10,000 people, and the local newspaper wanted to interview me.",
                "After the newspaper article, the council invited me to a meeting. They explained that they didn't have enough money to repair the playground. But a local building company offered to help for free, and we organised a fundraising day to pay for new equipment. Over 300 people came, and we raised £8,000.",
                "The new playground opened last spring. Seeing small children playing there makes me really proud. The experience taught me that young people can make a difference, but you have to be patient and keep trying, even when people don't listen at first.",
              ],
            },
            items: [
              { question: "Why did the writer decide to act?", options: ["She felt that she could improve the situation herself.", "Her parents asked her to help.", "Her younger brother had been hurt.", "The council asked for volunteers."], answer: 0 },
              { question: "How did the writer feel about the council's response to her letter?", options: ["disappointed", "angry", "surprised", "relieved"], answer: 0 },
              { question: "What happened as a result of the video?", options: ["It attracted the attention of the media.", "The council repaired the playground at once.", "A building company contacted her.", "She was asked to make more videos."], answer: 0 },
              { question: "How was the new equipment paid for?", options: ["through an event organised by the community", "by the town council", "by the local newspaper", "by the building company"], answer: 0 },
              { question: "What is the main message of the text?", options: ["Determination can help young people achieve change.", "Councils never listen to young people.", "Social media is the best way to raise money.", "Playgrounds should be repaired every year."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "Why we dream",
            text: [
              "Everybody dreams, even if they don't remember it in the morning. {1} Most of our dreams happen during a stage of sleep called REM, when our eyes move quickly under our eyelids.",
              "Scientists still don't fully understand why we dream. {2} Others believe that dreaming helps our brains to sort through the information we have collected during the day.",
              "There is some evidence for this second idea. {3} This suggests that sleep, and possibly dreaming, plays an important role in memory.",
              "Many people have similar dreams, such as falling, flying or being late for an exam. {4} Experts say these dreams are often connected to feelings of stress or worry in our daily lives.",
              "If you want to remember your dreams, try keeping a notebook next to your bed. {5} Over time, you may start to notice patterns and learn more about what is on your mind.",
            ],
            sentences: [
              "In fact, experts think we have between four and six dreams every night.",
              "Some think that dreams have no real purpose at all.",
              "In experiments, people who slept after learning something remembered it better than people who stayed awake.",
              "These dreams are common in many different countries and cultures.",
              "Write down everything you can remember as soon as you wake up.",
              "Animals do not dream at all.",
              "Most people sleep for about eight hours.",
              "Bad dreams usually happen after eating cheese.",
            ],
            answers: [0, 1, 2, 3, 4],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Volunteering abroad",
            text: [
              "Every year, thousands of young people spend part of their summer volunteering in other countries. They might help to build schools, {1} after animals or teach English to children.",
              "Volunteering abroad can be a life-changing experience. It gives young people the {2} to learn about another culture and to develop new skills. Many volunteers say it also helped them to become more confident and independent.",
              "However, it's important to choose a project carefully. Some organisations charge high fees, so make sure you know exactly where your money is {3}. It's a good idea to read reviews from previous volunteers and to {4} questions before you sign up. You should also check that the project really {5} the local community. If you do your research, volunteering can be one of the most {6} things you ever do.",
            ],
            gaps: [
              { options: ["look", "care", "take", "watch"], answer: 0 },
              { options: ["chance", "luck", "hope", "time"], answer: 0 },
              { options: ["going", "moving", "travelling", "leaving"], answer: 0 },
              { options: ["ask", "make", "do", "say"], answer: 0 },
              { options: ["benefits", "pleases", "serves", "suits"], answer: 0 },
              { options: ["rewarding", "paying", "earning", "valuable"], answer: 0 },
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
              "Last October, my class went on a three-day trip to the mountains. We stayed {1} a youth hostel next to a beautiful lake.",
              "On the first day, we went kayaking. I'd never done it before, {2} I fell into the water twice! Luckily, the water wasn't too cold. On the second day, we climbed to the top of a mountain. It took us five hours, but the view was worth it. We could see {3} way to the sea.",
              "In the evenings, we sat around a campfire and told stories. Our teacher, Mr Kaya, told us a scary story about a ghost {4} lived in the hostel. Nobody slept very well that night! It was the best trip I've {5} been on, and I hope we can go back {6} year.",
            ],
            answers: [["in", "at"], ["so", "and"], ["all"], ["who", "that"], ["ever"], ["next", "one", "this"]],
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
            instruction: "Read this email from your English-speaking friend Lily and the notes you have made. Write your email to Lily using all the notes. Write about 100 words.",
            input: {
              from: "Lily",
              subject: "Visiting your country",
              lines: [
                "My family and I are planning to visit your country next spring! [Fantastic!]",
                "Which city do you think we should visit? [Recommend and say why]",
                "What's the weather like in spring? [Tell Lily]",
                "Could we meet while we're there? [Yes – suggest when]",
              ],
            },
            minWords: 100,
            checklist: ["I answered all four notes.", "I opened and closed the email in a friendly way.", "I gave reasons and used linking words.", "I wrote about 100 words."],
            sample:
              "Hi Lily,\n\nThat's fantastic news! I'm so excited that you're coming.\n\nI think you should definitely visit Istanbul. It has amazing history, delicious food and beautiful views of the sea. You could take a boat trip between Europe and Asia, which is something you can't do anywhere else.\n\nIn spring the weather is usually warm and sunny, but it can rain sometimes, so bring a light jacket.\n\nOf course we can meet! I'm free at weekends, so maybe we could have breakfast together on a Saturday and then I could show you around my neighbourhood.\n\nSee you soon,\nEce",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for students. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A person I admire",
              lines: ["Who is a person you really admire?", "Why do you admire them, and what have you learned from them?", "Write an article and tell us!"],
            },
            minWords: 100,
            checklist: ["My article has a title and speaks to the reader.", "I explained my reasons with examples.", "I used linking words such as 'because', 'also' and 'for example'.", "I wrote about 100 words."],
            sample:
              "My hero is my grandmother\n\nWhen people talk about heroes, they often mean famous sports stars or actors. But the person I admire most is my grandmother.\n\nShe left school at twelve to work on her family's farm, but she never stopped learning. At the age of sixty, she went back to school and learned to read and write properly. Now she reads a book every week!\n\nShe has taught me that it's never too late to follow your dreams. She is also the kindest person I know and always has time to listen.\n\nWho is your hero?",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'I couldn't believe what I had found in the old box.' Write your story in about 100 words.",
            minWords: 100,
            checklist: ["My story begins with the sentence I was given.", "It has a clear beginning, middle and end.", "I used interesting adjectives and past tenses.", "I wrote about 100 words."],
            sample:
              "I couldn't believe what I had found in the old box. Inside, under some dusty newspapers, was a bundle of letters tied with a red ribbon.\n\nI was helping my grandfather tidy his garage, and he looked surprised when I showed him. 'I thought I'd lost those forever,' he said quietly.\n\nThe letters were from my grandmother. She had written them when he was working abroad, fifty years ago, before they were married. We sat together on the floor and read them one by one. Some made us laugh, and some made us cry.\n\nThat afternoon, I learned more about my family than ever before.",
          },
        },
      ],
    },
  ],
};
