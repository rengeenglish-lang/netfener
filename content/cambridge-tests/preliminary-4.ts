import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 4 (Reading and Writing papers). Original Netfener content. */
export const PRELIMINARY_4: CambridgeTest = {
  id: "preliminary-4",
  level: "preliminary",
  no: 4,
  title: "B1 Preliminary · Practice Test 4",
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
                notice: { genre: "Notice", lines: ["SCIENCE LAB", "Safety glasses must be worn during all experiments. Ask your teacher if you have forgotten yours."] },
                question: "What does the notice say?",
                options: ["Students can get safety glasses from the teacher if necessary.", "Students must buy their own safety glasses.", "Glasses are only needed for some experiments."],
                answer: 0,
              },
              {
                notice: { genre: "Message", lines: ["Sara – I've borrowed your laptop charger because mine's broken. I'll leave it on your desk when I get home at 6. Tom"] },
                question: "Why has Tom written this message?",
                options: ["to explain why something of Sara's is missing", "to ask Sara to buy him a new charger", "to tell Sara her laptop is broken"],
                answer: 0,
              },
              {
                notice: { genre: "Notice", lines: ["CITY BUSES", "From Monday, all tickets must be bought before boarding, using the app or the machines at bus stops."] },
                question: "What is changing on Monday?",
                options: ["Passengers will no longer be able to pay on the bus.", "Bus tickets will become more expensive.", "Buses will only stop at stops with machines."],
                answer: 0,
              },
              {
                notice: { genre: "Email", lines: ["Hi Mehmet,", "The drama club meeting is in the main hall this week, not Room 6, because we need the stage to practise for the show.", "Ms Clarke"] },
                question: "Why has the meeting place changed?",
                options: ["The club needs to rehearse on a stage.", "Room 6 is being repaired.", "More students are coming this week."],
                answer: 0,
              },
              {
                notice: { genre: "Label", lines: ["Keep in the fridge after opening and use within three days."] },
                question: "What does the label say?",
                options: ["The food will not stay fresh for long once it has been opened.", "The food must always be kept in the fridge.", "The food should be eaten within three days of buying it."],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to find a book to read. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              { title: "Into the Storm", text: "A thrilling true story about a group of sailors who survived a terrible storm in the Atlantic Ocean. Includes real photos and maps." },
              { title: "The Last Planet", text: "A science-fiction adventure set 500 years in the future, when humans must find a new home in space. First in a series of five books." },
              { title: "Kitchen Secrets", text: "A young chef shares her favourite simple recipes, with tips for cooking on a small budget. Perfect for students." },
              { title: "Laugh Out Loud", text: "A collection of short, funny stories about a family with a very naughty dog. Each chapter takes only ten minutes to read." },
              { title: "Mind Games", text: "A detective novel in which a teenage girl solves a mystery at her new school. Full of clues and surprises until the last page." },
              { title: "Wild World", text: "Beautiful photographs of animals from every continent, with short facts about how they live and why some are in danger." },
              { title: "The Starting Line", text: "The life story of a famous athlete who grew up poor and became an Olympic champion. An inspiring read about never giving up." },
              { title: "Draw It!", text: "A step-by-step guide to drawing cartoons and comics, with exercises for complete beginners." },
            ],
            items: [
              { text: "Burak loves stories that are set in the future, and he prefers reading books that are part of a longer series.", answer: 1 },
              { text: "Elif has just moved into her first flat and wants to learn to make cheap, easy meals.", answer: 2 },
              { text: "Can enjoys trying to work out who did something before the end of a story.", answer: 4 },
              { text: "Defne wants to read about a real person who succeeded in sport despite a difficult childhood.", answer: 6 },
              { text: "Ozan is very busy and only has short breaks for reading. He wants something that will make him laugh.", answer: 3 },
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
                "Last year, at the age of sixteen, I did something that my friends thought was crazy: I gave my smartphone to my parents and didn't use it for twelve months. It wasn't a punishment. I'd simply noticed that I was spending five or six hours a day looking at a screen, and I didn't like how it made me feel.",
                "The first few weeks were really hard. I kept reaching for my pocket, and I felt left out because I didn't know what my friends were talking about online. I also had to buy an old-fashioned alarm clock and a paper map, which my little brother found very funny.",
                "Gradually, though, things got better. I started reading again, something I hadn't done for years, and I joined a local hiking group. My marks at school improved because I wasn't distracted while doing homework. My friends got used to calling the house phone if they wanted to make plans.",
                "Now I have my phone back, but I use it very differently. I've deleted most social media apps and I never take my phone into my bedroom. I'm not saying everyone should do what I did, but I'd recommend trying a week without your phone. You might be surprised by how much time you suddenly have.",
              ],
            },
            items: [
              { question: "Why did the writer decide to stop using her phone?", options: ["She was unhappy about the amount of time she spent on it.", "Her parents told her she had to.", "Her phone was broken.", "Her friends suggested it as a challenge."], answer: 0 },
              { question: "What was difficult at the start?", options: ["She felt disconnected from her friends.", "She couldn't find a paper map.", "Her brother kept borrowing her things.", "She didn't know how to use an alarm clock."], answer: 0 },
              { question: "What positive change does the writer mention?", options: ["She did better in her studies.", "She made friends with her brother.", "She started writing a blog.", "She became the leader of a hiking group."], answer: 0 },
              { question: "How does the writer use her phone now?", options: ["more carefully than before", "only for social media", "in the same way as before", "only in her bedroom"], answer: 0 },
              { question: "What would be the best title for this text?", options: ["Twelve months offline", "Why phones should be banned", "How to choose a new phone", "My favourite apps"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The world's oldest trees",
            text: [
              "Some trees can live for an extraordinarily long time. {1} The oldest known individual tree, a bristlecone pine in California, is believed to be more than 4,800 years old.",
              "Bristlecone pines grow high in the mountains, where the conditions are very harsh. {2} Surprisingly, these difficult conditions may be the reason they live so long, because their wood grows slowly and becomes very hard.",
              "Scientists can work out the age of a tree by counting the rings inside its trunk. {3} To avoid damaging old trees, they use a special tool to remove a thin piece of wood without cutting the tree down.",
              "The exact location of the oldest bristlecone pine is kept secret. {4} Sadly, some ancient trees in other parts of the world have been damaged by visitors who wanted to take home a piece of history.",
              "Old trees can teach us a great deal about the past. {5} By studying them, scientists can learn about droughts, fires and changes in climate that happened thousands of years ago.",
            ],
            sentences: [
              "In fact, some are older than the pyramids of Egypt.",
              "There is little rain, the soil is poor and strong winds blow for much of the year.",
              "Each ring usually represents one year of growth.",
              "This is to protect it from people who might harm it.",
              "The width of each ring shows what the weather was like in that year.",
              "Bristlecone pines are also popular as garden plants.",
              "Most trees in cities are less than fifty years old.",
              "The tree was cut down in the 1960s.",
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
              "Many people wish they could play a musical instrument, but they think it's too late to start. In fact, research shows that adults can {1} a new instrument just as successfully as children, as long as they practise regularly.",
              "Playing music has many benefits. It can {2} your memory and help you to concentrate. It's also a great way to {3} stress after a busy day.",
              "If you want to start, it's a good {4} to choose an instrument you really love the sound of. Don't worry about making mistakes – everyone does at first. Try to {5} a little every day rather than for hours once a week. Most importantly, have fun. If you enjoy it, you'll be much more {6} to continue.",
            ],
            gaps: [
              { options: ["learn", "teach", "study", "know"], answer: 0 },
              { options: ["improve", "raise", "grow", "increase"], answer: 0 },
              { options: ["reduce", "lower", "drop", "cut"], answer: 0 },
              { options: ["idea", "thought", "opinion", "view"], answer: 0 },
              { options: ["practise", "train", "repeat", "exercise"], answer: 0 },
              { options: ["likely", "possible", "able", "sure"], answer: 0 },
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
              "Last summer I got my first job at a small bookshop near my house. I worked there three mornings a week, {1} I still had time to see my friends in the afternoons.",
              "At first, I was nervous about talking to customers, but the owner, Mrs Hall, was very patient {2} me. She taught me how to use the till and how to find books for people who couldn't remember the title.",
              "The best part of the job was recommending books. I'd read most {3} the novels for teenagers, so I could give good advice. I also earned enough money to buy a new bike, {4} I'd wanted for ages. Mrs Hall has asked me to come back {5} summer, and I've already said yes. I think everyone should try {6} part-time job – you learn so much!",
            ],
            answers: [["so"], ["with"], ["of"], ["which"], ["next", "this"], ["a"]],
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
            instruction: "Read this email from your English teacher Mrs Taylor and the notes you have made. Write your email to Mrs Taylor using all the notes. Write about 100 words.",
            input: {
              from: "Mrs Taylor",
              subject: "End-of-year class trip",
              lines: [
                "I'm organising an end-of-year trip for our class, and I'd like your help. [Great!]",
                "Would you prefer to go to the science museum or the adventure park? [Say which and why]",
                "What's the best way for us to travel there? [Explain]",
                "Is there anything else we should plan for the day? [Suggest]",
              ],
            },
            minWords: 100,
            checklist: ["I answered all four notes.", "I used a polite greeting and ending for a teacher.", "I gave reasons and used linking words.", "I wrote about 100 words."],
            sample:
              "Dear Mrs Taylor,\n\nThank you for asking me – I'd be happy to help with the trip!\n\nI think the adventure park would be better, because we've studied hard all year and everyone needs to relax. It's also something we can do together as a class.\n\nThe best way to get there is by coach, because the park is outside the city and there aren't many trains. It would also be cheaper if we all travel together.\n\nMaybe we could have a picnic lunch in the park and give a small prize to the best team in the games.\n\nBest wishes,\nAylin",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement in an English-language magazine for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My perfect weekend",
              lines: ["What would your perfect weekend be like?", "Who would you spend it with, and what would you do?", "Write an article and tell us about it!"],
            },
            minWords: 100,
            checklist: ["My article has a title and speaks to the reader.", "I described my ideas with details and reasons.", "I used linking words such as 'first', 'after that' and 'finally'.", "I wrote about 100 words."],
            sample:
              "My perfect weekend\n\nWhat would you do with two completely free days? I know exactly what I'd do!\n\nOn Saturday morning, I'd sleep until ten and then have a huge breakfast with pancakes. After that, I'd meet my best friends at the beach. We'd swim, play volleyball and eat ice cream until the sun went down.\n\nOn Sunday, I'd go hiking in the forest with my family, because it's the only time we're all together without phones. Finally, in the evening, we'd watch a funny film at home.\n\nIt sounds simple, but for me, that's perfect. What about you?",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'As soon as I opened the door, I knew something was wrong.' Write your story in about 100 words.",
            minWords: 100,
            checklist: ["My story begins with the sentence I was given.", "It has a clear beginning, middle and end.", "I used interesting adjectives and past tenses.", "I wrote about 100 words."],
            sample:
              "As soon as I opened the door, I knew something was wrong. The house was completely silent, and all the lights were off. Usually, my dog Bella ran to meet me, but tonight she didn't come.\n\nI walked slowly into the living room, my heart beating fast. Suddenly, the lights came on and twenty people jumped out from behind the sofa. 'SURPRISE!' they shouted.\n\nI had completely forgotten that it was my birthday. My parents had organised a party with all my friends and cousins. Bella was there too, wearing a silly party hat.\n\nIt was the best surprise of my life.",
          },
        },
      ],
    },
  ],
};
