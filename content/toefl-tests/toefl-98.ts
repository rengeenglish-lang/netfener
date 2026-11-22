import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 98 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_98: ToeflTest = {
  id: "toefl-98",
  no: 98,
  title: "TOEFL iBT Practice Test 98",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Safety helmets",
          text: "Today, workers on construction sites must wear hard hats, but these helmets are a relatively recent inven{{tion}}. In the early twentieth century, many workers were injured by falling objects such as tools, bri{{cks}} and pieces of metal. In 1919, an American company that made mining equipment designed a helmet made of steamed can{{vas}}, glue and black paint. It was strong enough to protect the wea{{rer}}'s head. During the construction of large projects such as the Hoover Dam in the 1930s, wearing hard hats became compul{{sory}}. Later helmets were made of alum{{inum}} and then of strong plastic, which is light and does not conduct elec{{tricity}}. Modern helmets also have adjustable straps so they fit comfor{{tably}}. Studies show that they greatly reduce serious head inj{{uries}} at wo{{rk}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "A lift to the party",
          text: [
            "Hi Merve, are you driving to Deniz's birthday party on Saturday? The bus doesn't go near her house in the evening.",
            "If you have space in your car, could I come with you? I can meet you at the corner of Lake Street at 7. I'll bring snacks for the journey!",
          ],
          questions: [
            { text: "Why does the writer need a lift?", options: ["The bus doesn't go near the house in the evening.", "The writer's car broke down.", "The writer doesn't know the address.", "The party is in another city."], answer: 0 },
            { text: "Where does the writer suggest meeting?", options: ["at the corner of Lake Street", "at Deniz's house", "at the bus station", "at the writer's home"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Old electronics collection",
          text: [
            "RECYCLE YOUR OLD ELECTRONICS",
            "On Wednesday, April 23, the Environment Office will collect old electronic devices, such as phones, laptops, chargers and cables, outside the main library from 10 a.m. to 4 p.m.",
            "All devices will be recycled safely, and valuable materials will be recovered. Before donating phones or computers, please delete your personal data. Large items, such as refrigerators or televisions, cannot be accepted.",
          ],
          questions: [
            { text: "What will be collected?", options: ["old electronic devices", "old clothes", "books", "furniture"], answer: 0 },
            { text: "What should people do before donating phones or computers?", options: ["delete their personal data", "repair them", "charge them fully", "remove the screens"], answer: 0 },
            { text: "Which item cannot be accepted?", options: ["a refrigerator", "a phone", "a laptop", "a charger"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How Eratosthenes measured the Earth",
          paragraphs: [
            "More than two thousand years ago, a Greek scholar named Eratosthenes, who was in charge of the great library of Alexandria in Egypt, performed one of the most famous calculations in the history of science. By that time, many Greek thinkers already believed that the Earth was round, based on observations such as the curved shadow of the Earth on the Moon during lunar eclipses. Eratosthenes set out to determine how large it was.",
            "Eratosthenes had heard that in the town of Syene, far to the south of Alexandria, the sun shone directly down a deep well at noon on the longest day of the year, meaning that it was exactly overhead. In Alexandria, however, a vertical stick cast a short shadow at the same time. By measuring the angle of this shadow, Eratosthenes found that the sun's rays reached Alexandria at an angle of about seven degrees, roughly one-fiftieth of a full circle. He reasoned that if the Earth was a sphere and the sun's rays were parallel, then the distance between Syene and Alexandria must be one-fiftieth of the Earth's circumference.",
            "The distance between the two towns was known to be about five thousand stadia, a unit of measurement used by the Greeks. Multiplying this by fifty, Eratosthenes estimated that the Earth's circumference was about two hundred fifty thousand stadia. Because historians are not certain of the exact length of the stadion he used, it is difficult to judge his accuracy precisely, but many estimates suggest that his result was remarkably close to the actual circumference of about forty thousand kilometers. His method showed how careful observation and simple geometry could reveal facts about the world far beyond what people could measure directly.",
          ],
          questions: [
            { text: "According to paragraph 1, what evidence suggested that the Earth was round?", options: ["the curved shadow of the Earth on the Moon during eclipses", "photographs from space", "travelers walking around the world", "the shape of mountains"], answer: 0 },
            { text: "According to paragraph 2, what happened in Syene at noon on the longest day of the year?", options: ["The sun shone directly down a deep well.", "It became completely dark.", "Shadows became very long.", "The sun did not rise."], answer: 0 },
            { text: "The word \"parallel\" in paragraph 2 is closest in meaning to", options: ["running side by side", "crossing", "curved", "bright"], answer: 0 },
            { text: "How did Eratosthenes calculate the Earth's circumference?", options: ["by multiplying the distance between the towns by fifty", "by walking around the Earth", "by measuring the Moon", "by counting the stars"], answer: 0 },
            { text: "Why is it difficult to judge the exact accuracy of his result?", options: ["Historians are not certain of the length of the unit he used.", "His notes were lost.", "He measured the wrong cities.", "The Earth has changed size."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first day as a library helper",
          text: "This year, I became a helper at our town library on Saturday mor{{nings}}. On my first day, the librarian showed me where all the books be{{long}}. My job was to put returned books back on the right she{{lves}}. At first, it was difficult to find the correct pla{{ce}}, but the librarian was very pat{{ient}}. Later, I helped young children choose picture bo{{oks}}. One little girl asked me to read a story to h{{er}}, and I was very happy to do it. At the end of the day, I felt tired but pr{{oud}}. Now I go to the library every we{{ek}}, and I have made many new fri{{ends}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Escape room opening",
          text: [
            "CAN YOU ESCAPE IN 60 MINUTES?",
            "Our new escape room on Bridge Street is now open! Work together with your friends to solve puzzles, find hidden clues and escape before the time runs out.",
            "Groups of three to six people can play. The price is $20 per person, and booking online is required. To celebrate our opening, students get 25% off on weekdays until the end of the month.",
          ],
          questions: [
            { text: "What do players have to do?", options: ["solve puzzles and find clues to escape", "run a race", "cook a meal", "watch a film"], answer: 0 },
            { text: "How many people can play in a group?", options: ["three to six", "one or two", "ten to twelve", "only four"], answer: 0 },
            { text: "What special offer is available for students?", options: ["25% off on weekdays", "free entry", "a free drink", "half price on weekends"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How eagles see so well",
          paragraphs: [
            "Eagles are large birds that hunt fish, rabbits and other small animals. They are famous for their excellent eyesight.",
            "An eagle's eyes are very large for the size of its head. They have many more light-sensitive cells than human eyes. This means eagles can see small details from very far away. Some eagles can spot a rabbit from more than three kilometers away.",
            "Eagles can also see more colors than humans, including ultraviolet light. This helps them notice the trails of small animals. When an eagle dives toward its prey, its eyes stay focused on the animal the whole time.",
          ],
          questions: [
            { text: "What do eagles hunt?", options: ["fish, rabbits and other small animals", "only insects", "large elephants", "only plants"], answer: 0 },
            { text: "What is special about an eagle's eyes?", options: ["They are very large and have many light-sensitive cells.", "They are very small.", "They can see only black and white.", "They are on the top of the head."], answer: 0 },
            { text: "How far away can some eagles spot a rabbit?", options: ["more than three kilometers", "about ten meters", "one hundred meters", "only very close"], answer: 0 },
            { text: "The word \"spot\" in paragraph 2 is closest in meaning to", options: ["notice", "catch", "eat", "hide"], answer: 0 },
            { text: "How does seeing ultraviolet light help eagles?", options: ["It helps them notice the trails of small animals.", "It helps them sleep.", "It keeps them warm.", "It helps them build nests."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The reminiscence bump",
          text: "When older adults are asked to recall important memories from their lives, they tend to remember a surprisingly large number of events from their teenage years and early adult{{hood}}. Psychologists call this pattern the reminiscence bu{{mp}}. Memories from roughly the ages of ten to thirty are recalled more often than memories from other per{{iods}}. One explanation is that many important first experi{{ences}} happen during these years, such as leaving home, starting a career or falling in lo{{ve}}. Another explanation is that this is when people form their sense of iden{{tity}}, so events from this time become part of their life sto{{ry}}. Interestingly, people also tend to prefer the music, films and books from this period of their li{{ves}}, which may influence their tas{{tes}} for decades. Advertisers often use songs from these years to attract older custo{{mers}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "New graduation gowns",
          text: [
            "To: Students graduating in June",
            "From: Graduation Office",
            "Subject: Ordering your graduation gown",
            "This year, the university is introducing new graduation gowns made from recycled plastic bottles. Each gown is made from about thirty bottles and is designed to be comfortable in warm weather.",
            "Graduates can rent a gown for $25 or buy one for $70. Orders must be placed through the graduation website by May 10 and should include your height so that the correct size can be prepared. Rented gowns must be returned within two hours after the ceremony at the collection points in the main hall. Late returns will be charged an additional fee.",
          ],
          questions: [
            { text: "What are the new gowns made from?", options: ["recycled plastic bottles", "cotton", "silk", "wool"], answer: 0 },
            { text: "What should graduates include when ordering?", options: ["their height", "a photograph", "their student ID only", "their address"], answer: 0 },
            { text: "When must rented gowns be returned?", options: ["within two hours after the ceremony", "the next day", "one week later", "before the ceremony"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The challenge of aging populations",
          paragraphs: [
            "In many countries around the world, the population is growing older. People are living longer thanks to better healthcare, nutrition and living conditions, while at the same time many families are having fewer children. As a result, the proportion of people over sixty-five is rising rapidly. In countries such as Japan, Italy and South Korea, a large share of the population is already elderly, and similar trends are appearing in many other regions.",
            "An aging population presents significant economic challenges. As more people retire, there are fewer working-age people to support pension systems and pay the taxes that fund public services. Healthcare costs also tend to rise, since older people often need more medical care. Some economists warn that labor shortages could slow economic growth, particularly in industries that rely on physical work. Governments have responded in various ways, including raising the retirement age, encouraging older people to continue working part-time and attracting workers from abroad.",
            "However, an aging society also brings opportunities. Many older people remain healthy and active for years after retirement, contributing to their communities through volunteering, caring for grandchildren and sharing their experience. New industries are developing around the needs of older consumers, from accessible housing to technology that helps people live independently. Some researchers argue that the focus should shift from viewing aging as a burden to designing societies that allow people of all ages to participate fully, for example through lifelong learning and age-friendly cities.",
          ],
          questions: [
            { text: "According to paragraph 1, why are populations growing older?", options: ["People are living longer and having fewer children.", "More people are moving to cities.", "Young people are moving abroad only.", "Birth rates are rising."], answer: 0 },
            { text: "According to paragraph 2, why do aging populations put pressure on pension systems?", options: ["There are fewer working-age people to support them.", "Older people pay more taxes.", "Pensions are no longer needed.", "Young people retire earlier."], answer: 0 },
            { text: "The word \"proportion\" in paragraph 1 is closest in meaning to", options: ["share", "age", "health", "number of countries"], answer: 0 },
            { text: "Which government response is mentioned in paragraph 2?", options: ["raising the retirement age", "closing hospitals", "reducing healthcare", "banning immigration"], answer: 0 },
            { text: "According to paragraph 3, what opportunity does an aging society bring?", options: ["new industries developing around older consumers' needs", "fewer people needing homes", "an end to healthcare costs", "more young workers"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Engin", prompt: "Why are you buying a new suit?", chunks: ["I", "have", "a job", "interview", "next week"], end: "." },
      { promptBy: "Sarah", prompt: "Did you like the new Italian restaurant?", chunks: ["their", "pasta", "was", "the best", "I've ever had"], end: "." },
      { promptBy: "Pelin", prompt: "My room is always so cold.", chunks: ["have you", "checked", "if", "the window", "is closed"], end: "?" },
      { promptBy: "Rob", prompt: "How did you get tickets for the concert?", chunks: ["I", "bought them", "online", "the day", "they went on sale"], end: "." },
      { promptBy: "Derya", prompt: "When will the library reopen?", chunks: ["it", "will", "reopen", "after", "the renovation"], end: "." },
      { promptBy: "Alex", prompt: "Why is the sky so dark?", chunks: ["a big", "storm", "is", "coming", "from the west"], end: "." },
      { promptBy: "Melis", prompt: "What did you study at university?", chunks: ["I", "studied", "civil", "engineering", "in Ankara"], end: "." },
      { promptBy: "Joel", prompt: "Where should we have the meeting?", chunks: ["let's", "use", "the conference room", "on", "the third floor"], end: "." },
      { promptBy: "Tülay", prompt: "I've lost my phone again.", chunks: ["should", "I", "call it", "to help", "you find it"], end: "?" },
      { promptBy: "Owen", prompt: "Why did you decide to study astronomy?", chunks: ["I", "have always", "been", "fascinated by", "the stars"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of a hiking club. The club is planning a trip to a national park, and you have been asked to contact the park office to ask about group visits.",
      to: "the national park visitor office",
      subject: "Information about a group visit",
      tasks: ["Introduce yourself and the club.", "Explain your plans for the visit.", "Ask questions about rules, permits and facilities."],
      sample: "Dear Visitor Office,\n\nMy name is Can Aksoy, and I am the trip coordinator for the University Hiking Club, which has about fifty members. We are planning a weekend trip to the national park on October 18 and 19, and we expect around twenty-five members to take part.\n\nWe would like to hike the Ridge Trail on Saturday and the Lake Loop on Sunday, and we plan to camp overnight at a campsite inside the park. Most of our members are experienced hikers, but a few will be joining a long hike for the first time.\n\nI would be grateful if you could answer a few questions. First, do groups of our size need a special permit, and if so, how can we apply? Second, is it necessary to reserve campsite spaces in advance, and are there showers and drinking water available? Finally, are there any rules we should know about, such as restrictions on campfires or group sizes on certain trails? Any advice about weather conditions in October would also be very helpful.\n\nThank you for your assistance.\n\nBest regards,\nCan Aksoy",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Kim",
        text: "Some people believe that young people and older people should spend more time together, for example through programs in which students visit care homes or older adults volunteer in schools. Supporters say both groups benefit. Others think such programs are difficult to organize and that generations naturally prefer their own company. Should communities create more programs that bring different generations together? Explain your view.",
      },
      students: [
        { name: "Ava", text: "Yes. Older people can share their life experience, and young people can help them feel less lonely and learn new technology." },
        { name: "Mert", text: "It sounds nice, but people of different ages often have different interests. Forced programs might not create real friendships." },
      ],
      sample: "I believe communities should create more programs that bring different generations together, as long as they are designed around shared interests. Ava is right that both groups can benefit greatly. Many older adults experience loneliness, especially after retirement or the loss of a partner, and regular contact with young people can improve their mood and sense of purpose. At the same time, young people can learn about history, gain practical advice and develop patience and empathy. Mert makes a fair point that simply putting people together does not guarantee friendship. Programs are more likely to succeed when they focus on activities both groups enjoy, such as gardening projects, music, cooking or teaching each other skills like using smartphones or knitting. With careful planning, these programs can strengthen whole communities.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-BrianNeural",
    repeat: {
      scene: "You are a new employee at a construction site office. The site manager is telling you what to say to visitors.",
      sentences: [
        "Good morning, please sign in here.",
        "Visitors must wear a helmet at all times.",
        "Safety vests are in the box by the door.",
        "Please stay on the marked walkways.",
        "The site closes at five o'clock.",
        "If you hear the alarm, leave the building immediately and go to the meeting point next to the main gate.",
        "Children are not allowed on the site, and all visitors must be accompanied by a member of staff while they are inside.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's memories of school and growing up. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is your best memory from secondary school?",
          sample: "My best memory from secondary school is a class trip to the Black Sea region when I was fifteen. We stayed in a small hotel near the mountains, visited tea gardens and hiked through beautiful green forests. In the evenings, we played games and sang songs together. I became much closer to my classmates during that trip, and some of them are still my best friends today.",
        },
        {
          text: "How have you changed since you were a teenager?",
          sample: "Since I was a teenager, I've become much more confident and independent. When I was younger, I was quite shy and worried a lot about what other people thought of me. Living on my own at university has taught me how to manage money, cook and solve problems by myself. I've also become more interested in learning for its own sake, rather than just studying for exams.",
        },
        {
          text: "Do you think teenagers today face more pressure than in the past?",
          sample: "I think teenagers today face different and possibly more pressures than in the past. Social media means they are constantly comparing themselves with others, and online criticism can follow them everywhere. Competition for university places and jobs also seems more intense. However, teenagers today also have more access to information and support, such as online communities and mental health resources. So the challenges are different, but they are definitely real.",
        },
        {
          text: "What advice would you give to your younger self?",
          sample: "I would tell my younger self not to worry so much about making mistakes or what others think. Many of the things I was anxious about as a teenager turned out to be unimportant. I would also advise myself to try more activities, like joining clubs or learning an instrument, because those experiences help you discover your interests. Finally, I would remind myself to spend more time with my grandparents and listen to their stories.",
        },
      ],
    },
  },
};
