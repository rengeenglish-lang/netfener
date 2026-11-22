import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 54 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_54: ToeflTest = {
  id: "toefl-54",
  no: 54,
  title: "TOEFL iBT Practice Test 54",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Crayons",
          text: "Crayons are often the first drawing tool that children use. Sticks of colored wax and charcoal were used by artists for centuries, but they were not designed for chil{{dren}}. In the early twentieth century, an American company that produced industrial cra{{yons}} for marking boxes and crates noticed that schools needed cheap, safe colors for students. In 1903, the company sold its first box of eight crayons for five ce{{nts}}. The crayons were made from paraffin wax and non-toxic pig{{ments}}, so they were safe for young chil{{dren}} to use. Over the years, the number of col{{ors}} increased, and some boxes now contain more than a hun{{dred}}. Each year, factories produce billions of crayons, and many of them are recy{{cled}} after use. Teachers believe that drawing helps chil{{dren}} develop their hand con{{trol}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Cinema tonight",
          text: [
            "Hey Ayşe! The film starts at 8:15, but I'm stuck at work until 7:45. Could you go a bit early and save me a seat?",
            "I already bought both tickets online, so I'll send you yours now. I'll bring popcorn when I arrive!",
          ],
          questions: [
            { text: "Why does the writer ask Ayşe to go early?", options: ["The writer is stuck at work and needs a seat saved.", "The tickets are not yet bought.", "The film starts earlier than planned.", "The writer wants to change films."], answer: 0 },
            { text: "What has the writer already done?", options: ["bought both tickets online", "bought popcorn", "reserved a table at a restaurant", "picked up Ayşe"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Lost room keys",
          text: [
            "RESIDENCE HALLS: LOST KEY PROCEDURE",
            "If you lose your room key, report it immediately at the residence office or, outside office hours, at the security desk. For your safety, the lock on your door will be changed within 24 hours.",
            "A temporary key can be borrowed for up to three days. The cost of replacing a lock and key is $40, which will be charged to your student account. If your key is found and returned before the lock is changed, no fee will be charged.",
          ],
          questions: [
            { text: "Where should students report a lost key outside office hours?", options: ["at the security desk", "at the library", "to their roommate", "online only"], answer: 0 },
            { text: "Why will the lock be changed?", options: ["for the student's safety", "because all locks are old", "to save money", "because of a new rule"], answer: 0 },
            { text: "When will no fee be charged?", options: ["if the key is returned before the lock is changed", "if the student lives on campus", "if the key was stolen", "if the student pays in cash"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Mapping the ocean floor",
          paragraphs: [
            "Although oceans cover more than seventy percent of Earth's surface, the ocean floor remains less precisely mapped than the surface of Mars or the Moon. Light does not travel far through water, so the seabed cannot be photographed from above, and most of it lies thousands of meters below the surface. For most of history, sailors could measure depth only by lowering a weighted rope until it touched the bottom, a slow method that provided information about just one point at a time.",
            "In the early twentieth century, scientists developed echo sounding, a technique that uses sound instead of rope. A ship sends a pulse of sound toward the seabed and measures how long it takes for the echo to return. Because the speed of sound in water is known, this time can be converted into depth. Echo sounding revealed that the ocean floor is far from flat. It contains enormous mountain ranges, deep trenches and vast plains. One of the most important discoveries was a chain of underwater mountains running through the middle of the Atlantic Ocean, which helped scientists develop the theory of plate tectonics.",
            "Today, ships use multibeam sonar, which sends out a fan of sound pulses and maps a wide strip of the seabed at once. Satellites can also estimate the shape of the ocean floor by measuring tiny variations in the height of the sea surface, which are influenced by the gravitational pull of underwater mountains. However, satellite maps are relatively low in detail. An international project aims to produce a high-resolution map of the entire ocean floor, which would be valuable for navigation, laying communication cables, predicting tsunamis and understanding marine habitats.",
          ],
          questions: [
            { text: "According to paragraph 1, why can't the seabed be photographed from above?", options: ["Light does not travel far through water.", "The ocean is too cold.", "Cameras are not allowed at sea.", "The seabed moves constantly."], answer: 0 },
            { text: "According to paragraph 2, how does echo sounding measure depth?", options: ["by measuring how long a sound echo takes to return", "by lowering a long rope", "by sending divers to the bottom", "by measuring water temperature"], answer: 0 },
            { text: "The word \"revealed\" in paragraph 2 is closest in meaning to", options: ["showed", "hid", "created", "destroyed"], answer: 0 },
            { text: "Why was the discovery of underwater mountains in the Atlantic important?", options: ["It helped scientists develop the theory of plate tectonics.", "It allowed ships to travel faster.", "It proved that the ocean was shallow.", "It led to the discovery of new fish."], answer: 0 },
            { text: "According to paragraph 3, what is a limitation of satellite maps of the ocean floor?", options: ["They are relatively low in detail.", "They are extremely expensive.", "They cannot be used at night.", "They only show the Atlantic Ocean."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "The day I got lost",
          text: "When I was seven years old, I got lost in a big shopping mall. I was looking at to{{ys}} in a shop window, and when I turned around, my mother was go{{ne}}. I felt very scar{{ed}} and started to cry. A kind woman saw me and asked what was wro{{ng}}. She took me to the information de{{sk}}. A man there spoke into a micro{{phone}} and said my name. A few minutes later, my mother came run{{ning}} toward me. She hugged me tigh{{tly}}. Since that day, I always stay close to my fam{{ily}} in crowded pla{{ces}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Weekend Italian course",
          text: [
            "LEARN ITALIAN IN EIGHT WEEKENDS!",
            "Our beginner Italian course meets every Saturday from 10 a.m. to 1 p.m. at the Language Center on River Street. The course starts on October 4.",
            "Classes are small, with a maximum of ten students, and are taught by native speakers. The fee is $200, including the course book. Sign up before September 20 and get a 10% discount.",
          ],
          questions: [
            { text: "When does the course meet?", options: ["every Saturday morning", "every weekday evening", "every Sunday afternoon", "once a month"], answer: 0 },
            { text: "What is included in the fee?", options: ["the course book", "a trip to Italy", "lunch", "a dictionary"], answer: 0 },
            { text: "How can students get a discount?", options: ["by signing up before September 20", "by bringing a friend", "by paying in cash", "by attending every class"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why the sea has waves",
          paragraphs: [
            "When we stand on a beach, we can watch waves rolling onto the sand. Most waves in the sea are made by the wind.",
            "When wind blows across the water, it pushes the surface and creates small ripples. If the wind is strong and blows for a long time over a large area, the ripples grow into big waves.",
            "The water in a wave does not travel very far. It mostly moves up and down in circles. It is the energy of the wave that moves across the ocean. When a wave reaches shallow water near the beach, it becomes taller and finally falls over, or breaks.",
          ],
          questions: [
            { text: "What makes most waves in the sea?", options: ["the wind", "fish", "boats", "the sun"], answer: 0 },
            { text: "When do ripples grow into big waves?", options: ["when the wind is strong and blows for a long time", "when the water is cold", "when it rains", "at night only"], answer: 0 },
            { text: "The word \"ripples\" in paragraph 2 is closest in meaning to", options: ["small waves", "rocks", "storms", "currents"], answer: 0 },
            { text: "What moves across the ocean in a wave?", options: ["the energy of the wave", "all of the water", "sand from the beach", "the wind itself"], answer: 0 },
            { text: "What happens when a wave reaches shallow water?", options: ["It becomes taller and breaks.", "It disappears.", "It becomes slower and flatter.", "It turns around."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Moral licensing",
          text: "One might expect that people who do something good will continue to behave well. Surprisingly, research suggests that a good action can sometimes make later bad behavior more lik{{ely}}. This tendency is known as moral licen{{sing}}. In some studies, participants who first had a chance to show that they were not prejudiced later made choi{{ces}} that seemed less fair. In others, shoppers who bought environmentally friendly prod{{ucts}} were later more willing to che{{at}} in a simple game. Researchers suggest that people keep a kind of mental bal{{ance}} of their moral behavior; after doing so{{mething}} good, they may feel they have ear{{ned}} the right to relax their stan{{dards}}. The effect does not appear in every si{{tuation}}, however.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Undergraduate research conference",
          text: [
            "To: All undergraduate students",
            "From: Office of Undergraduate Research",
            "Subject: Call for presentations – Spring Research Conference",
            "The annual Undergraduate Research Conference will be held on April 22. Students from all disciplines are invited to present their research, creative projects or community work in the form of a ten-minute talk or a poster.",
            "To apply, submit an abstract of no more than 250 words by February 15, along with the name of a faculty mentor who has approved your participation. Projects completed as part of a course are welcome. Accepted presenters will be offered a free workshop on presentation skills, and the best presentations in each category will receive awards of $300.",
          ],
          questions: [
            { text: "What may students present at the conference?", options: ["research, creative projects or community work", "only science experiments", "only papers published in journals", "business plans only"], answer: 0 },
            { text: "What must be submitted with the abstract?", options: ["the name of a faculty mentor who approved participation", "a full research paper", "a registration fee", "a video recording"], answer: 0 },
            { text: "What will accepted presenters be offered?", options: ["a free workshop on presentation skills", "a scholarship", "course credit", "a trip abroad"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The debate over facial recognition",
          paragraphs: [
            "Facial recognition technology uses computer programs to identify or verify a person by analyzing the features of their face, such as the distance between the eyes or the shape of the jaw. The technology has improved rapidly in recent years, thanks to advances in artificial intelligence and the availability of vast collections of photographs online. It is now used to unlock smartphones, speed up passport checks at airports and organize photo collections.",
            "Supporters argue that facial recognition can make societies safer and more efficient. Police forces in some countries use it to search for missing persons and to identify suspects from video footage, and some airports report that automated gates reduce waiting times considerably. Businesses also see potential uses, such as allowing customers to pay without cards or phones.",
            "However, the technology has raised serious concerns. Privacy advocates warn that widespread use of cameras linked to facial recognition systems could allow governments or companies to track people's movements without their knowledge or consent, discouraging free expression and peaceful protest. Studies have also found that some systems are less accurate for certain groups, such as women and people with darker skin, increasing the risk of wrongful identification. In response, several cities have banned police use of facial recognition, while others have introduced rules requiring transparency, independent testing and human review of any matches. The debate reflects a broader question about how societies should balance security, convenience and individual rights in the age of artificial intelligence.",
          ],
          questions: [
            { text: "According to paragraph 1, what has helped facial recognition improve rapidly?", options: ["advances in AI and large collections of online photographs", "cheaper cameras only", "new laws", "better lighting in cities"], answer: 0 },
            { text: "According to paragraph 2, how do police in some countries use facial recognition?", options: ["to search for missing persons and identify suspects", "to issue passports", "to control traffic lights", "to replace police officers"], answer: 0 },
            { text: "The word \"consent\" in paragraph 3 is closest in meaning to", options: ["permission", "knowledge", "fear", "payment"], answer: 0 },
            { text: "According to paragraph 3, what problem have studies found with some systems?", options: ["They are less accurate for certain groups.", "They are too slow for airports.", "They only work at night.", "They cannot recognize children."], answer: 0 },
            { text: "What broader question does the debate reflect?", options: ["how to balance security, convenience and individual rights", "whether cameras should be cheaper", "how to improve smartphone design", "whether airports should be closed"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Fatih", prompt: "Why did you arrive so late?", chunks: ["I", "missed", "the bus", "and had to", "walk"], end: "." },
      { promptBy: "Laura", prompt: "Did you enjoy your weekend in the village?", chunks: ["it", "was", "so peaceful", "and the air", "was fresh"], end: "." },
      { promptBy: "Sena", prompt: "I can't concentrate when I study at home.", chunks: ["why don't", "you", "try", "studying", "in the library"], end: "?" },
      { promptBy: "Will", prompt: "How long have you known Mehmet?", chunks: ["we", "have", "been friends", "since", "primary school"], end: "." },
      { promptBy: "Tuğba", prompt: "Where is the closest ATM?", chunks: ["there is", "one", "inside", "the shopping", "center"], end: "." },
      { promptBy: "Eric", prompt: "Why is the swimming pool closed?", chunks: ["they", "are", "replacing", "the water", "filters"], end: "." },
      { promptBy: "Nazan", prompt: "What did your teacher say about your essay?", chunks: ["she", "said", "my ideas", "were", "very original"], end: "." },
      { promptBy: "Joe", prompt: "When are you moving to your new apartment?", chunks: ["we", "are moving", "at the end", "of", "this month"], end: "." },
      { promptBy: "Pınar", prompt: "The bus is very crowded today.", chunks: ["should", "we", "wait", "for", "the next one"], end: "?" },
      { promptBy: "Dan", prompt: "Why did you choose a smaller car?", chunks: ["it", "uses", "less fuel", "and is", "easier to park"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your university library recently reduced its opening hours during the exam period, closing at 8 p.m. instead of midnight. Many students are unhappy about the change. You want to write to the library director.",
      to: "the library director, Dr. Powell",
      subject: "Library opening hours during exams",
      tasks: ["Explain how you use the library during exams.", "Describe the effects of the new opening hours.", "Suggest a solution."],
      sample: "Dear Dr. Powell,\n\nI am a third-year engineering student, and I am writing about the recent decision to close the library at 8 p.m. during the exam period. For the past two years, the library has been my main place to study before exams. I usually work there from late afternoon until around eleven, because my shared apartment is noisy and I find it hard to concentrate at home.\n\nThe new opening hours have caused real difficulties for many students. Those of us who have classes or part-time jobs during the day now have only a few hours to use the library. The study rooms are also much more crowded in the afternoon, and many students are forced to study in cafés, which are expensive and noisy. Several of my classmates have told me they feel more stressed as a result.\n\nI understand that the change may be due to budget limits. Could the library perhaps keep at least one floor open until midnight during the exam weeks, with fewer staff? Student volunteers could also help supervise the space.\n\nThank you for considering this request.\n\nYours sincerely,\nHakan Aydemir",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Education Policy",
      professor: {
        name: "Dr. Lewis",
        text: "Some universities are considering replacing traditional letter grades with a simple pass/fail system for first-year courses. Supporters say this would reduce stress and allow students to explore new subjects. Critics argue that grades motivate students to work hard and give employers useful information. Should universities use pass/fail grading for first-year courses? Explain your view.",
      },
      students: [
        { name: "Ella", text: "Yes. First-year students are adjusting to a new life. Pass/fail would let them focus on learning instead of worrying about their GPA." },
        { name: "Murat", text: "No. Without grades, many students would do the minimum needed to pass. Grades push people to do their best." },
      ],
      sample: "I think pass/fail grading could be a good option for some first-year courses, but not all of them. Ella makes a strong point that the first year of university is a period of major adjustment. Many students are living away from home for the first time, and the pressure to maintain a high GPA can discourage them from taking courses outside their comfort zone. A pass/fail option would encourage exploration and reduce anxiety. However, Murat is right that grades can motivate students to work hard, and some students may simply do the minimum. A balanced solution would be to allow students to take one or two elective courses each semester on a pass/fail basis, while keeping letter grades for core courses in their major. This would combine flexibility with motivation.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new staff member at a swimming pool. The pool manager is telling you what to say to swimmers.",
      sentences: [
        "Welcome to the city swimming pool.",
        "Please take a shower before swimming.",
        "Swimming caps are required in the pool.",
        "Children under eight must be with an adult.",
        "The fast lane is for experienced swimmers only.",
        "Please do not run around the pool, because the floor can be very slippery when it is wet.",
        "Swimming lessons for beginners take place on Tuesday and Thursday evenings, and you can sign up at the reception desk near the main entrance.",
      ],
    },
    interview: {
      topic: "A researcher is studying how people use the internet and social media. The researcher will ask you some questions.",
      questions: [
        {
          text: "How much time do you spend on social media each day?",
          sample: "I probably spend about two hours a day on social media, although it's usually in short periods, like when I'm on the bus or waiting in line. I mainly use it to keep up with friends, follow news and watch short videos. Sometimes I notice that I've spent much longer than I intended, especially late at night, so I've started setting time limits on some apps.",
        },
        {
          text: "Do you think social media has a positive or negative effect on young people?",
          sample: "I think social media has both positive and negative effects. On the positive side, young people can stay connected with friends, find communities that share their interests and learn about important issues. On the negative side, constantly comparing themselves with others' perfect photos can damage their self-esteem, and some young people experience online bullying. I think the key is teaching young people to use it critically and in moderation.",
        },
        {
          text: "Should social media companies be responsible for the content on their platforms?",
          sample: "I believe social media companies should take more responsibility for the content on their platforms. They earn huge profits from users' attention, so they should invest more in removing harmful content, such as violent posts, hate speech and false medical information. However, it's also important to protect free speech, so the rules should be clear and applied fairly. Independent organizations could help review difficult decisions to make the process more transparent.",
        },
        {
          text: "How do you think the internet will change in the next ten years?",
          sample: "I think the internet will become even more integrated into our daily lives. More household devices will be connected, and artificial intelligence assistants will help us search for information, write messages and plan our days. Virtual and augmented reality might also become more common for shopping, education and socializing. At the same time, I hope there will be stronger privacy protections, because people are becoming more aware of how much data companies collect about them.",
        },
      ],
    },
  },
};
