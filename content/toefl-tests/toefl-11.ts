import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 11 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_11: ToeflTest = {
  id: "toefl-11",
  no: 11,
  title: "TOEFL iBT Practice Test 11",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Papyrus",
          text: "Long before paper was invented, the ancient Egyptians wrote on papyrus. This mater{{ial}} was made from a tall pl{{ant}} that grew along the Nile Ri{{ver}}. Workers cut the stems into th{{in}} strips and laid them side by si{{de}}. A second layer was placed acr{{oss}} the first, and the strips were pres{{sed}} together until they dried. The fini{{shed}} sheets were light and easy to car{{ry}}, and they could be joined to ma{{ke}} long scrolls.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing notes",
          text: [
            "Hi Daniel, I missed biology this morning because my bus broke down. Did Professor Lee say anything about the lab report?",
            "If you don't mind, could I take a photo of your notes later? I can meet you in the library at 4.",
          ],
          questions: [
            { text: "Why did the writer miss the class?", options: ["The writer was ill.", "The writer's bus broke down.", "The writer forgot about it.", "The class was cancelled."], answer: 1 },
            { text: "What does the writer want to do?", options: ["borrow Daniel's textbook", "photograph Daniel's notes", "change lab partners", "meet Professor Lee"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Pool closure",
          text: [
            "AQUATIC CENTER: TEMPORARY CLOSURE",
            "The main pool will be closed from April 3 to April 10 while the filtration system is replaced. The smaller teaching pool will remain open for lessons only.",
            "During the closure, members may use the pool at Riverside Community Center free of charge by showing their student ID. Membership fees for April will be reduced by 25 percent.",
          ],
          questions: [
            { text: "Why is the main pool closing?", options: ["for a swimming competition", "to replace the filtration system", "because of low attendance", "for a holiday"], answer: 1 },
            { text: "What can members do during the closure?", options: ["swim in the teaching pool at any time", "use another pool for free", "get a full refund", "take free lessons"], answer: 1 },
            { text: "What will happen to April membership fees?", options: ["They will not change.", "They will be reduced.", "They will be doubled.", "They will be paid in May."], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Singing sand dunes",
          paragraphs: [
            "In a few deserts around the world, including parts of Morocco, Oman and China, sand dunes produce a deep, booming sound that can be heard several kilometers away. Travelers have described the noise for centuries, comparing it to a low-flying aircraft or a distant drum. The sound usually occurs when sand slides down the steep face of a dune, either naturally or when people walk or slide down it.",
            "For a long time, the cause of the sound was a mystery. Scientists now believe that it depends on the movement of millions of grains together. When the sand avalanches, the grains collide with one another in a synchronized way, and these regular collisions make the surface of the dune vibrate like the skin of a drum. Interestingly, each dune tends to produce a characteristic note, which seems to be related to the size of its grains rather than the size of the dune itself.",
            "Not all sand can sing. The grains must be very dry, fairly round and similar in size, and they are often covered with a thin coating of minerals that may help them move smoothly. If the sand becomes wet, or if it is mixed with dust and grains of different sizes, the sound disappears. This is one reason why singing dunes are rare and why samples taken to laboratories often lose their ability to sing.",
          ],
          questions: [
            { text: "According to paragraph 1, when do singing dunes usually make their sound?", options: ["when the wind stops completely", "when sand slides down the steep face of a dune", "when it rains in the desert", "at sunrise each day"], answer: 1 },
            { text: "The word \"synchronized\" in paragraph 2 is closest in meaning to", options: ["random", "coordinated", "violent", "slow"], answer: 1 },
            { text: "According to paragraph 2, what determines the note a dune produces?", options: ["the height of the dune", "the size of its grains", "the temperature of the air", "the number of people on it"], answer: 1 },
            { text: "Which of the following would stop a dune from singing?", options: ["round grains", "dry sand", "wet sand", "grains of similar size"], answer: 2 },
            { text: "Why does the author mention samples taken to laboratories?", options: ["to show that scientists have never studied the dunes", "to illustrate how easily singing sand loses its ability", "to explain how dunes are formed", "to prove that the sound comes from the wind"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "My first job",
          text: "When I was sixteen, I got my fir{{st}} job at a small bakery. I star{{ted}} work at six o'clock in the morn{{ing}}. My boss taught me how to ma{{ke}} bread and cakes. At fir{{st}}, I was very slow, but I lear{{ned}} quickly. I liked the sme{{ll}} of fresh bread, and the custo{{mers}} were always friendly. I wor{{ked}} there for two years and sav{{ed}} money for university.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Guitar lessons",
          text: [
            "LEARN THE GUITAR THIS SEMESTER!",
            "Music student offering guitar lessons for beginners. Lessons are 45 minutes long and take place in the Music Building, Room 12.",
            "$20 per lesson, or $70 for four lessons. Guitars can be borrowed for practice. Message Leo at 555-0187 to book your first lesson.",
          ],
          questions: [
            { text: "Who are the lessons for?", options: ["advanced players", "beginners", "music teachers", "children only"], answer: 1 },
            { text: "How much do four lessons cost?", options: ["$20", "$45", "$70", "$80"], answer: 2 },
            { text: "What can students borrow?", options: ["music books", "guitars", "a practice room", "headphones"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How snowflakes form",
          paragraphs: [
            "Snowflakes form high in the sky, inside cold clouds. They begin when a tiny drop of water freezes around a small piece of dust or pollen.",
            "As the frozen drop falls through the cloud, water vapor freezes onto it and the crystal grows. Because of the way water molecules join together, snowflakes almost always have six sides or six arms.",
            "The exact shape of a snowflake depends on the temperature and the amount of moisture in the air. Since each snowflake follows a slightly different path through the cloud, no two snowflakes look exactly the same.",
          ],
          questions: [
            { text: "Where do snowflakes form?", options: ["on the ground", "inside cold clouds", "in rivers", "near the sea"], answer: 1 },
            { text: "What does a snowflake begin with?", options: ["a large raindrop", "a piece of ice from the ground", "a frozen drop around dust or pollen", "a cloud of steam"], answer: 2 },
            { text: "How many sides do snowflakes usually have?", options: ["four", "five", "six", "eight"], answer: 2 },
            { text: "The word \"exact\" in paragraph 3 is closest in meaning to", options: ["precise", "unusual", "beautiful", "simple"], answer: 0 },
            { text: "Why do snowflakes look different from one another?", options: ["They are made of different materials.", "Each one follows a different path through the cloud.", "They melt at different speeds.", "Some are made from rain."], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Confirmation bias",
          text: "Psychologists use the term confirmation bias to describe the tendency to fav{{or}} information that supports what we alre{{ady}} believe. People with this bias may sea{{rch}} for evidence that confirms their vie{{ws}}, interpret unclear informa{{tion}} in their favor and rem{{ember}} supporting facts more eas{{ily}}. The bias is not limi{{ted}} to people with strong opinions; it aff{{ects}} scientists, judges and doctors, which is why careful proced{{ures}} are needed to reduce its influence.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Teaching assistant applications",
          text: [
            "To: Graduate students, School of Engineering",
            "From: Graduate Programs Office",
            "Subject: Teaching assistant positions for the fall semester",
            "Applications are now open for teaching assistant positions in introductory engineering courses. Teaching assistants lead weekly problem-solving sessions, hold two office hours per week and help grade assignments. Each position requires about fifteen hours of work per week and includes a tuition waiver and a monthly stipend.",
            "Students in their first year of graduate study are eligible only if they have previous teaching experience. International students must also provide evidence of spoken English proficiency. Please submit the online form and a short teaching statement by March 15. Interviews will take place in early April.",
          ],
          questions: [
            { text: "What is one responsibility of a teaching assistant?", options: ["designing new courses", "leading weekly problem-solving sessions", "supervising doctoral research", "admitting new students"], answer: 1 },
            { text: "Which first-year graduate students may apply?", options: ["all of them", "only those with previous teaching experience", "only international students", "only those with a stipend"], answer: 1 },
            { text: "What must international applicants provide?", options: ["a letter from their embassy", "evidence of spoken English proficiency", "a teaching certificate", "two teaching statements"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "The Antikythera mechanism",
          paragraphs: [
            "In 1901, sponge divers exploring an ancient shipwreck near the Greek island of Antikythera recovered a lump of corroded bronze about the size of a shoebox. At first it attracted little attention among the statues and pottery found at the site, but closer examination revealed that it contained the remains of precise toothed gears. The object, now known as the Antikythera mechanism, is believed to have been made in the second or first century BCE.",
            "For decades, scholars struggled to understand how the device worked, since it had broken into many fragments and much of its surface was hidden by corrosion. In the early twenty-first century, researchers used high-resolution X-ray scanning to examine its interior and to read thousands of tiny letters inscribed on its surfaces. Their work confirmed that the mechanism was an astronomical calculator. By turning a handle, a user could display the positions of the sun and moon, the phase of the moon, and the dates of eclipses, and probably the positions of the five planets known in antiquity.",
            "The mechanism's sophistication has surprised historians. Its gears, some with teeth only about a millimeter long, model complex patterns such as the moon's varying speed across the sky. Nothing of comparable complexity is known to have survived from the following thousand years, and similar geared astronomical clocks did not appear in Europe until the medieval period. The device suggests that ancient Greek engineering may have been more advanced than surviving written sources indicate, although because it is unique, scholars disagree about how widespread such technology actually was.",
          ],
          questions: [
            { text: "According to paragraph 1, why did the object attract little attention at first?", options: ["It was found far from the shipwreck.", "It was overshadowed by statues and pottery.", "It was immediately stolen.", "It was made of gold."], answer: 1 },
            { text: "The word \"inscribed\" in paragraph 2 is closest in meaning to", options: ["painted", "carved", "hidden", "translated"], answer: 1 },
            { text: "According to paragraph 2, what did X-ray scanning allow researchers to do?", options: ["clean the bronze surface", "examine the interior and read tiny inscriptions", "date the shipwreck precisely", "rebuild the mechanism"], answer: 1 },
            { text: "Why does the author mention medieval astronomical clocks?", options: ["to show that the mechanism was copied from them", "to emphasize how unusual the mechanism was for its time", "to describe how the mechanism was repaired", "to explain who made the mechanism"], answer: 1 },
            { text: "According to paragraph 3, why do scholars disagree about ancient geared technology?", options: ["The mechanism is the only known example.", "The inscriptions cannot be read.", "The mechanism was made in the Middle Ages.", "No one knows what it calculated."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Maya", prompt: "Why are you carrying an umbrella?", chunks: ["the forecast", "says", "it will rain", "later", "this afternoon"], end: "." },
      { promptBy: "Kerem", prompt: "Have you started the history project?", chunks: ["I've", "already", "chosen", "a topic", "for my presentation"], end: "." },
      { promptBy: "Olivia", prompt: "I can't find a quiet place to study.", chunks: ["have you", "tried", "the reading room", "on", "the fourth floor"], end: "?" },
      { promptBy: "Jonas", prompt: "Why did the meeting end early?", chunks: ["the manager", "had to", "leave", "for", "an urgent call"], end: "." },
      { promptBy: "Elif", prompt: "What did you think of the new café?", chunks: ["the coffee", "was", "excellent", "but", "the music was too loud"], end: "." },
      { promptBy: "Marcus", prompt: "How do you usually get to campus?", chunks: ["I", "usually", "ride my bike", "unless", "it is raining"], end: "." },
      { promptBy: "Hana", prompt: "Is the library open on Sunday?", chunks: ["it", "opens", "at noon", "and", "closes at eight"], end: "." },
      { promptBy: "Lucas", prompt: "Did you enjoy the concert last night?", chunks: ["it was", "the best", "performance", "I have", "ever seen"], end: "." },
      { promptBy: "Aylin", prompt: "I have too many assignments this week.", chunks: ["why don't", "you", "make", "a schedule", "for each day"], end: "?" },
      { promptBy: "Noah", prompt: "Where did you learn to cook so well?", chunks: ["my grandmother", "taught me", "when", "I was", "a teenager"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently ordered a textbook from the campus bookstore's website. The book arrived, but it is the wrong edition, and your first assignment is due next week.",
      to: "the campus bookstore",
      subject: "Wrong edition of a textbook",
      tasks: ["Explain what you ordered and what you received.", "Describe why this is a problem for you.", "Ask what the bookstore can do to solve the problem quickly."],
      sample: "Dear Campus Bookstore Team,\n\nI am writing about an order I placed on your website last Monday. I ordered the fifth edition of Principles of Microeconomics by Hall and Dutta, which is required for my ECON 101 course. However, the book I received yesterday is the fourth edition.\n\nThis is a problem because my professor has told us that the chapters and exercise numbers are different in the new edition, and our first assignment, which is based on Chapter 3, is due next Thursday. Without the correct book, I will not be able to complete the exercises.\n\nCould you please tell me whether it is possible to exchange the book in person at the store this week, rather than sending it back by mail? If the fifth edition is not in stock, I would be grateful to know whether a digital copy could be provided until the printed book arrives.\n\nThank you for your help.\n\nBest regards,\nArda Yılmaz",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Studies",
      professor: {
        name: "Dr. Morales",
        text: "Many city centers are becoming crowded and polluted. Some cities have responded by closing central streets to cars and turning them into pedestrian zones. Others argue that this hurts local businesses and makes life harder for people who depend on cars. Should cities close their central streets to cars? Why or why not?",
      },
      students: [
        { name: "Grace", text: "Yes, I think they should. Pedestrian streets are cleaner, safer and more pleasant. People spend more time walking around and often visit more shops, so businesses can actually benefit." },
        { name: "Omar", text: "I'm not so sure. Older people, disabled people and delivery drivers need to reach the center by car. If streets are closed, these groups are the ones who suffer most." },
      ],
      sample: "I agree with Grace that cities should close central streets to cars, but only if they also address the concerns Omar raises. Pedestrian zones clearly improve air quality and safety, and in many European cities they have become the busiest shopping areas. When my hometown closed its main street to traffic, the cafés and shops there became more popular, not less, because people enjoyed walking there. However, Omar is right that some people genuinely depend on vehicles. The solution is to plan carefully: cities can allow access for disabled drivers and emergency vehicles, permit deliveries early in the morning, and improve public transport so that the center remains easy to reach. With these measures, the benefits of a car-free center can be shared by everyone rather than only by those who are able to walk long distances.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are starting a job at a university library. A librarian is telling you what to say to students at the help desk.",
      sentences: [
        "Welcome to the main library.",
        "You need your student card to borrow books.",
        "Most books can be borrowed for three weeks.",
        "Laptops can be borrowed from the desk on the ground floor.",
        "Group study rooms must be booked online at least one day in advance.",
        "If a book you need is already on loan, you can reserve it using the library website.",
        "Students who return books after the due date will not be able to borrow anything else until the books are returned.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use technology in their daily lives. The researcher will ask you some questions.",
      questions: [
        {
          text: "How much time do you usually spend on your phone each day, and what do you use it for?",
          sample: "I probably spend about four hours a day on my phone, which is more than I'd like. A lot of that time is useful, though. I use it to message my family and friends, check my university email and read articles for my courses. I also listen to podcasts on the bus. The part I'd like to reduce is social media, because I sometimes scroll for half an hour without really noticing the time passing.",
        },
        {
          text: "Do you think students should be allowed to use their phones in class? Why or why not?",
          sample: "I think it depends on how they're used. Phones can be helpful in class, for example to look up a word, take a photo of the board or join an online quiz. But if students are allowed to use them freely, many will check messages and social media instead of listening. So I think teachers should set clear rules, allowing phones for specific activities but asking students to keep them away the rest of the time.",
        },
        {
          text: "Some people say that technology makes people less social. Do you agree?",
          sample: "I only partly agree. It's true that you sometimes see a group of friends sitting together while everyone looks at their phone, which is a bit sad. On the other hand, technology helps people stay in touch with friends and family who live far away. My grandparents, for example, video call my cousin abroad every week. So I'd say technology changes the way we are social rather than making us less social overall.",
        },
        {
          text: "What new technology do you think will most change people's lives in the next ten years?",
          sample: "I think artificial intelligence will have the biggest impact. It's already being used to write texts, translate languages and help doctors analyze medical images, and it's improving very quickly. In the next ten years, I expect it to become a normal part of many jobs, which could make people more productive but could also replace some types of work. Because of that, I think education will need to focus more on skills that machines find difficult, like creativity and teamwork.",
        },
      ],
    },
  },
};
