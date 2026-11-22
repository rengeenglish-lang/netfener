import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 64 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_64: ToeflTest = {
  id: "toefl-64",
  no: 64,
  title: "TOEFL iBT Practice Test 64",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Envelopes",
          text: "For many centuries, people who sent letters simply folded the paper and sealed it with wax, writing the address on the out{{side}}. Envelopes were rarely used because paper was expen{{sive}}, and in some countries the postal fee depended on the number of she{{ets}}, so an envelope made a letter more cos{{tly}}. In 1840, Britain introduced a cheap postal ser{{vice}} with fixed prices, and the use of envelopes grew quic{{kly}}. Soon, machines were invented that could cut and fold thousands of envelopes per ho{{ur}}. Later, envelopes with glue on the flap and small plastic win{{dows}} for the address became popular. Although people send fewer letters today, envelopes are still widely used for bills, official docu{{ments}} and greeting ca{{rds}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Spare ticket for the match",
          text: [
            "Hey Volkan! My brother can't come to the basketball game on Friday, so I have a spare ticket. Would you like to come with me?",
            "The game starts at 7:30. We could meet at the stadium entrance at 7 and get something to eat first. Let me know by tomorrow!",
          ],
          questions: [
            { text: "Why does the writer have a spare ticket?", options: ["The writer's brother can't come.", "The writer bought two by mistake.", "The writer won it.", "A friend gave it away."], answer: 0 },
            { text: "What does the writer suggest doing before the game?", options: ["getting something to eat", "buying a team shirt", "watching another game", "taking a bus together"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Computer lab software update",
          text: [
            "COMPUTER LABS: SOFTWARE UPDATE",
            "All computers in Labs A, B and C will be updated with new software this Thursday evening. The labs will be closed from 6 p.m. until midnight.",
            "Any files saved on the desktop of lab computers will be permanently deleted during the update. Please save your work to your personal cloud storage or a USB drive before Thursday afternoon. The library computers will remain available during this time.",
          ],
          questions: [
            { text: "When will the labs be closed?", options: ["Thursday from 6 p.m. until midnight", "all day Thursday", "Friday morning", "the whole weekend"], answer: 0 },
            { text: "What will happen to files saved on lab computer desktops?", options: ["They will be permanently deleted.", "They will be moved to the library.", "They will be printed.", "They will be emailed to students."], answer: 0 },
            { text: "Where can students use computers during the update?", options: ["in the library", "in Lab A", "in the cafeteria", "nowhere on campus"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How river deltas form",
          paragraphs: [
            "Where a river flows into a sea, ocean or lake, it often forms a delta, a low, flat area of land built from sediment carried by the river. The term comes from the Greek letter delta, which is shaped like a triangle, because the ancient Greek historian Herodotus noticed that the land at the mouth of the Nile had a triangular shape. Some of the world's largest deltas, including those of the Nile, the Ganges and the Mississippi, are home to millions of people.",
            "Rivers carry enormous amounts of sand, silt and clay eroded from the land. As long as the water is moving quickly, it can keep these particles suspended. When the river reaches a larger body of water, however, its flow slows down dramatically, and it can no longer carry its load. The heaviest particles settle first, close to the river's mouth, while finer particles are carried farther out. Over time, these deposits build up, forming new land. The river often divides into several smaller channels, called distributaries, which spread sediment across a wide area.",
            "The shape of a delta depends on the balance between the river and the forces of the sea. Where waves and tides are weak, the river can extend long fingers of land into the water, as in the Mississippi Delta. Where waves are strong, sediment is spread along the coast, producing a smoother, curved shoreline. Deltas are extremely fertile and support rich agriculture, but they are also highly vulnerable. Dams built upstream trap sediment, preventing it from reaching the delta, while rising sea levels and the pumping of groundwater cause many deltas to sink. As a result, several major deltas are losing land to the sea.",
          ],
          questions: [
            { text: "According to paragraph 1, why are deltas named after a Greek letter?", options: ["The land at the Nile's mouth had a triangular shape.", "They were discovered by Greek sailors.", "They are found only in Greece.", "The Greek word means 'river'."], answer: 0 },
            { text: "According to paragraph 2, why does a river drop its sediment at its mouth?", options: ["Its flow slows down dramatically.", "The water becomes warmer.", "The sediment becomes lighter.", "The river dries up."], answer: 0 },
            { text: "The word \"suspended\" in paragraph 2 is closest in meaning to", options: ["held up in the water", "dissolved", "frozen", "destroyed"], answer: 0 },
            { text: "According to paragraph 3, what happens where waves are strong?", options: ["Sediment is spread along the coast, producing a smoother shoreline.", "The river extends long fingers of land.", "No delta can form at all.", "The delta grows faster."], answer: 0 },
            { text: "Why are several major deltas losing land to the sea?", options: ["Dams trap sediment, and sea levels rise while land sinks.", "Too many people farm there.", "Rivers carry too much sediment.", "Waves have become weaker."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Washing the car with my dad",
          text: "Every Saturday morning, my dad and I wash our c{{ar}}. First, we fill two buckets with warm wa{{ter}} and soap. Then we use big sponges to clean the ro{{of}}, the doors and the windows. My dad always cleans the wh{{eels}}, because they are very dirty. I like using the ho{{se}} to wash away the soap. Sometimes I spray my dad by acci{{dent}}, and we both laugh. When the car is clean, we dry it with soft tow{{els}}. It looks shiny and n{{ew}}. After that, we drive to the bakery and buy fresh bread for break{{fast}}. I really enjoy this time with my fat{{her}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Bird-watching walk",
          text: [
            "DISCOVER THE BIRDS OF THE WETLANDS!",
            "Join an expert guide for an early morning bird-watching walk at Green Lake Nature Reserve every Sunday at 7 a.m. The walk lasts about two hours.",
            "Binoculars can be borrowed for free. The walk costs $5 for adults and is free for children under 14. Please wear boots, as the path can be muddy.",
          ],
          questions: [
            { text: "When does the walk take place?", options: ["every Sunday at 7 a.m.", "every Saturday at noon", "every evening", "once a month"], answer: 0 },
            { text: "What can participants borrow for free?", options: ["binoculars", "boots", "cameras", "raincoats"], answer: 0 },
            { text: "Why should participants wear boots?", options: ["The path can be muddy.", "It is required by law.", "The walk is in the snow.", "Boots protect from birds."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why koalas sleep so much",
          paragraphs: [
            "Koalas are animals that live in eucalyptus trees in Australia. They sleep for up to twenty hours a day, more than almost any other animal.",
            "Koalas eat almost only eucalyptus leaves. These leaves are tough and contain very little energy. They also contain substances that are poisonous to most other animals.",
            "It takes a lot of time and energy for a koala to digest the leaves. By sleeping most of the day and moving slowly, koalas save energy. They usually wake up at night to eat, and an adult koala can eat about half a kilogram of leaves every night.",
          ],
          questions: [
            { text: "Where do koalas live?", options: ["in eucalyptus trees in Australia", "in caves in Asia", "in the sea", "in African deserts"], answer: 0 },
            { text: "How many hours a day can koalas sleep?", options: ["up to twenty", "about eight", "about two", "all twenty-four"], answer: 0 },
            { text: "The word \"tough\" in paragraph 2 is closest in meaning to", options: ["hard to chew", "sweet", "soft", "colorful"], answer: 0 },
            { text: "Why do koalas sleep so much?", options: ["to save energy", "because they are lazy", "because they are always cold", "to hide from people"], answer: 0 },
            { text: "When do koalas usually eat?", options: ["at night", "in the early morning only", "at noon", "once a week"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Regression to the mean",
          text: "When an unusually extreme result occurs, the next result is likely to be closer to the ave{{rage}}. Statisticians call this regression to the me{{an}}. For example, a student who scores exceptionally high on one test, partly because of lu{{ck}}, will probably score somewhat lower on the ne{{xt}}. People often misinterpret this pattern. Flight instructors once observed that pilots who were praised after an excellent lan{{ding}} usually performed worse the next time, while those who were criti{{cized}} after a poor landing usually impr{{oved}}. The instructors concluded that praise was harm{{ful}}. In fact, the changes were largely due to regression: extreme performances, good or bad, tend to be followed by more ordi{{nary}} ones, regardless of feed{{back}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Exam review session",
          text: [
            "To: Students in Microbiology 240",
            "From: Dr. Novak and the teaching assistants",
            "Subject: Optional review session before the final exam",
            "We will hold an optional review session on Monday, December 8, from 5 to 7 p.m. in Lecture Hall B. During the session, we will go over key topics, work through sample exam questions and answer any questions you have about the course material.",
            "To make the session as useful as possible, please submit topics you would like us to cover through the course website by Friday. The session will be recorded and posted online for students who cannot attend. Please note that no new material will be introduced, and attendance will not affect your grade.",
          ],
          questions: [
            { text: "What will happen during the review session?", options: ["Key topics and sample questions will be reviewed.", "The final exam will be given.", "New material will be introduced.", "Grades will be announced."], answer: 0 },
            { text: "What are students asked to do by Friday?", options: ["submit topics they want covered", "register for the session", "complete a practice exam", "pay a fee"], answer: 0 },
            { text: "What will be available for students who cannot attend?", options: ["a recording of the session", "a private meeting", "extra exam time", "nothing"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Universal design",
          paragraphs: [
            "Universal design is an approach to creating buildings, products and environments that can be used by as many people as possible, regardless of their age, size or ability, without the need for special adaptation. The term was popularized in the 1980s by an American architect, Ronald Mace, who used a wheelchair himself. Rather than designing for an 'average' person and then adding separate features for people with disabilities, universal design aims to consider the full range of human diversity from the beginning.",
            "Many common features of modern life reflect this approach. Curb cuts, the small ramps where sidewalks meet streets, were originally introduced for wheelchair users, but they also help people pushing strollers, travelers with suitcases and delivery workers with carts. Similarly, automatic doors, lever-style door handles and buttons with large, clear labels make life easier for elderly people, children and anyone carrying heavy objects. Captions on videos, first designed for people who are deaf or hard of hearing, are now widely used by viewers watching in noisy places or learning a new language.",
            "Supporters argue that universal design is not only fairer but often more economical, since it is usually cheaper to build features into a design from the start than to add them later. As populations in many countries age, the demand for accessible environments is likely to grow. Critics note that it can be difficult to meet everyone's needs at once, since features that help one group may occasionally create challenges for another. Nevertheless, universal design has influenced building codes, product design and digital technology around the world, encouraging designers to think of accessibility as a basic part of good design rather than an afterthought.",
          ],
          questions: [
            { text: "According to paragraph 1, how does universal design differ from traditional design?", options: ["It considers the full range of human diversity from the beginning.", "It designs only for wheelchair users.", "It focuses on the 'average' person.", "It adds separate features later."], answer: 0 },
            { text: "According to paragraph 2, who benefits from curb cuts besides wheelchair users?", options: ["people with strollers, travelers with suitcases and delivery workers", "only car drivers", "only cyclists", "no one else"], answer: 0 },
            { text: "The word \"economical\" in paragraph 3 is closest in meaning to", options: ["cost-effective", "beautiful", "complicated", "modern"], answer: 0 },
            { text: "Why does the author mention captions on videos?", options: ["to show that a feature designed for one group helps many others", "to argue that videos should be banned", "to explain how deaf people learn languages", "to describe a new technology for cinemas"], answer: 0 },
            { text: "According to paragraph 3, what is one challenge of universal design?", options: ["Features that help one group may occasionally create challenges for another.", "It is always more expensive.", "It has no influence on building codes.", "It is used only in the United States."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Emre", prompt: "Why are you taking an umbrella?", chunks: ["the sky", "looks", "very", "cloudy", "this morning"], end: "." },
      { promptBy: "Sarah", prompt: "Did you enjoy the food festival?", chunks: ["we", "tried", "dishes", "from", "ten different countries"], end: "." },
      { promptBy: "Gizem", prompt: "I always spend too much money.", chunks: ["why don't", "you", "make", "a monthly", "budget"], end: "?" },
      { promptBy: "Ben", prompt: "How did you learn to cook so well?", chunks: ["I", "watched", "a lot of", "cooking", "videos"], end: "." },
      { promptBy: "Seda", prompt: "When is the deadline for the essay?", chunks: ["it", "is due", "at", "the end", "of next week"], end: "." },
      { promptBy: "Craig", prompt: "Why is the gym so empty today?", chunks: ["most students", "are", "at", "the graduation", "ceremony"], end: "." },
      { promptBy: "Nur", prompt: "What did your parents say about your plan?", chunks: ["they", "were", "very", "supportive", "of my decision"], end: "." },
      { promptBy: "Rick", prompt: "Where should we go for our anniversary?", chunks: ["let's", "go", "back to", "the restaurant", "where we met"], end: "." },
      { promptBy: "Hazal", prompt: "It's too noisy to study here.", chunks: ["should", "we", "move", "to", "a quieter room"], end: "?" },
      { promptBy: "Will", prompt: "Why did you decide to sell your car?", chunks: ["I", "rarely", "use it", "since", "I moved downtown"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You took an online course offered by your university, but the final exam was scheduled at the same time as an exam for another course. You need to write to the online course coordinator.",
      to: "the online course coordinator, Mr. Evans",
      subject: "Exam scheduling conflict",
      tasks: ["Explain which courses you are taking.", "Describe the scheduling problem.", "Suggest a solution."],
      sample: "Dear Mr. Evans,\n\nI am a second-year student in the Faculty of Economics, and this semester I am taking the online course Introduction to Data Analysis in addition to my regular courses, including Macroeconomics II.\n\nI have just noticed that the final exam for the online course is scheduled for Monday, January 12, from 10 a.m. to 12 p.m., which is exactly the same time as my Macroeconomics II final exam. Both exams are compulsory, and the Macroeconomics exam takes place in person on campus, so I cannot take them at the same time.\n\nI would like to ask whether it would be possible to take the online exam at a different time. For example, I could take it on the afternoon of the same day, from 2 to 4 p.m., or on the following morning. I would be happy to take it under supervision at the testing center if that is necessary. I have attached my official exam timetable as proof of the conflict.\n\nThank you for your understanding. I look forward to your reply.\n\nSincerely,\nAhmet Tunç",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Urban Planning",
      professor: {
        name: "Dr. Carter",
        text: "Some cities are building more bicycle lanes by removing parking spaces and narrowing roads for cars. Supporters say this makes cycling safer and reduces pollution. Opponents argue that it creates traffic problems and makes life harder for drivers and local businesses. Should cities replace car lanes and parking spaces with bicycle lanes? Explain your view.",
      },
      students: [
        { name: "Ava", text: "Yes. Many people would cycle if it felt safe. Protected bike lanes encourage people to leave their cars at home, which reduces traffic in the long run." },
        { name: "Tarık", text: "Not always. In cities with hills or very hot summers, few people will cycle. Removing parking just makes shopping in the center more difficult." },
      ],
      sample: "I believe cities should replace some car lanes and parking spaces with protected bicycle lanes, but they should do so strategically. Ava makes an important point: many people say they would cycle if they felt safe, and research from cities like Copenhagen and Paris shows that protected lanes greatly increase the number of cyclists. Over time, this can reduce traffic, pollution and noise. However, Tarık is right that local conditions matter. In very hilly or hot cities, fewer people may cycle, and businesses that depend on customers arriving by car could suffer. Therefore, cities should start with routes where demand is likely to be high, such as near universities and along flat main roads, and combine bike lanes with improvements in public transport and electric bike rentals, which make hills less of a barrier.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new employee at a hair salon. The salon owner is telling you what to say to customers.",
      sentences: [
        "Good afternoon, do you have an appointment?",
        "Please take a seat by the window.",
        "Would you like something to drink?",
        "The hairdresser will be ready in five minutes.",
        "We also sell shampoo and other hair products.",
        "If you would like to book your next appointment, I can check the calendar for you now.",
        "Customers who visit us five times receive a free haircut, so please remember to bring your loyalty card every time you come.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about personal goals and success. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a goal you are working toward at the moment?",
          sample: "At the moment, I'm working toward getting a high score on an English proficiency exam, because I want to apply for a master's program abroad. I study for about an hour every day, focusing on reading academic texts and practicing speaking with a friend. I also watch English documentaries to improve my listening. It's challenging, but I can see my progress, which keeps me motivated.",
        },
        {
          text: "What does success mean to you?",
          sample: "For me, success means being happy with my life and feeling that I'm growing as a person. Of course, having a good job and financial security is part of it, but I don't think success is only about money or status. If I can do work that I find meaningful, keep close relationships with my family and friends and stay healthy, I would consider myself successful.",
        },
        {
          text: "Is it better to set very ambitious goals or realistic ones?",
          sample: "I think it's best to combine both. Very ambitious goals can inspire people and push them to achieve more than they thought possible. However, if goals are too unrealistic, people may feel discouraged and give up. That's why I like to have one big long-term goal and break it into smaller, realistic steps. Achieving the small steps gives me confidence and keeps me moving toward the bigger goal.",
        },
        {
          text: "Do you think failure is important for success?",
          sample: "Yes, I think failure is an important part of success. When we fail, we learn what doesn't work, and we can improve our approach next time. Many successful people, like inventors and entrepreneurs, failed many times before they succeeded. Failure also teaches us resilience, the ability to keep going despite difficulties. However, it's important to reflect on our failures and learn from them, rather than repeating the same mistakes.",
        },
      ],
    },
  },
};
