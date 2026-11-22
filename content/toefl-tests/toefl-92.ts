import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 92 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_92: ToeflTest = {
  id: "toefl-92",
  no: 92,
  title: "TOEFL iBT Practice Test 92",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Erasers",
          text: "Before erasers were invented, people removed pencil marks by rubbing them with pieces of bread or wax. In 1770, an English scientist noticed that a piece of natural rub{{ber}} could remove pencil marks very effec{{tively}}. This is why erasers are still called \"rubbers\" in British Eng{{lish}}. However, natural rubber became sticky in hot weather and could spo{{il}} over time. After the process of vulcanization made rubber more dur{{able}}, erasers became common in schools and off{{ices}}. In 1858, an American inventor received a patent for attaching an eraser to the end of a pen{{cil}}, an idea that is still popu{{lar}} today. Modern erasers are usually made of plastic or vinyl and can remove marks without damaging the pa{{per}} or leaving dirty mar{{ks}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a sewing machine",
          text: [
            "Hi Aunt Nur, I need to make a costume for the school play next week, and my mother says you have a sewing machine. Could I borrow it this weekend?",
            "I promise to be careful with it. Mum will drive me to your house on Saturday morning to pick it up, if that's okay with you.",
          ],
          questions: [
            { text: "Why does the writer need a sewing machine?", options: ["to make a costume for the school play", "to fix a bag", "to sew curtains", "for a sewing class"], answer: 0 },
            { text: "How will the writer get the sewing machine?", options: ["Mum will drive the writer to pick it up.", "Aunt Nur will mail it.", "The writer will take a bus.", "A friend will bring it."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Parking lot resurfacing",
          text: [
            "PARKING LOT B CLOSED",
            "Parking Lot B will be closed from Monday, July 7, to Friday, July 11, while the surface is repaired and new lines are painted.",
            "Drivers with Lot B permits may park in Lot D, behind the sports center, during this period. A free shuttle bus will run between Lot D and the main campus every fifteen minutes from 7 a.m. to 7 p.m. Any vehicles left in Lot B after Sunday evening will be towed.",
          ],
          questions: [
            { text: "Why will Parking Lot B be closed?", options: ["The surface is being repaired and repainted.", "A concert will be held there.", "It is being turned into a park.", "There is not enough security."], answer: 0 },
            { text: "Where can drivers with Lot B permits park?", options: ["in Lot D, behind the sports center", "on the street", "in front of the library", "in Lot A only"], answer: 0 },
            { text: "What will happen to vehicles left in Lot B after Sunday evening?", options: ["They will be towed.", "They will receive a warning.", "They will be washed.", "They can stay there."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The rediscovery of Troy",
          paragraphs: [
            "For centuries, the city of Troy was known mainly from the ancient Greek poems of Homer, which tell the story of a long war between the Greeks and the Trojans. Many scholars in the nineteenth century believed that Troy was purely imaginary, a setting for legends rather than a real place. Others, however, were convinced that the stories were based on a real city and that its ruins might still be found.",
            "In the 1860s and 1870s, attention focused on a large mound called Hisarlik in northwestern Turkey, near the entrance to the Dardanelles. A British resident of the area, Frank Calvert, had begun excavating there and believed it was the site of Troy. The German businessman Heinrich Schliemann later carried out extensive excavations at the site, finding the remains of walls, buildings and a collection of gold jewelry that he called 'Priam's Treasure', after the Trojan king in Homer's poems. Schliemann's methods were criticized, however, because he dug quickly through the upper layers, destroying valuable evidence.",
            "Later archaeologists discovered that the mound contains the remains of at least nine cities built one on top of another over thousands of years. Ironically, the treasure that Schliemann found turned out to be from a layer much older than the period of the Trojan War described by Homer. Scholars still debate whether a war like the one in the poems actually took place, but most agree that Hisarlik was a wealthy city that controlled important trade routes. Today, the site is protected as a World Heritage site, and excavations continue to reveal new information.",
          ],
          questions: [
            { text: "According to paragraph 1, what did many nineteenth-century scholars believe about Troy?", options: ["It was purely imaginary.", "It was located in Egypt.", "It had been completely excavated.", "It was still inhabited."], answer: 0 },
            { text: "According to paragraph 2, why were Schliemann's methods criticized?", options: ["He dug quickly through upper layers and destroyed evidence.", "He did not find anything.", "He refused to share his discoveries.", "He worked too slowly."], answer: 0 },
            { text: "The word \"extensive\" in paragraph 2 is closest in meaning to", options: ["large-scale", "careful", "secret", "brief"], answer: 0 },
            { text: "What did later archaeologists discover about the mound?", options: ["It contains the remains of at least nine cities.", "It was a natural hill with no ruins.", "It contained only one city.", "It was built in the twentieth century."], answer: 0 },
            { text: "Why does the author describe the discovery of 'Priam's Treasure' as ironic?", options: ["It came from a layer much older than the Trojan War period.", "It was made of fake gold.", "It was found by Calvert, not Schliemann.", "It was later lost."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Building a treehouse",
          text: "Last summer, my father and I built a treehouse in our gar{{den}}. We chose a big, strong tr{{ee}} with wide branches. First, we drew a plan on pa{{per}}. Then we bought wood, nails and a small lad{{der}}. My father cut the wood, and I helped him carry the pie{{ces}}. It took us three weekends to finish the floor, the wa{{lls}} and the roof. We also painted it bright gr{{een}}. Now my friends and I play there almost every d{{ay}}. Sometimes we read books or eat snacks in it. It is my favo{{rite}} place in the wor{{ld}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Trivia night",
          text: [
            "TEST YOUR KNOWLEDGE AT TRIVIA NIGHT!",
            "Join us every Tuesday at 8 p.m. at The Blue Lantern Café for a fun trivia night. Teams of up to six people answer questions about history, science, music and sports.",
            "It costs $3 per person to play. The winning team receives a $50 voucher for the café, and there is a small prize for the team with the funniest name. Arrive early to get a table.",
          ],
          questions: [
            { text: "How many people can be on a team?", options: ["up to six", "two", "ten", "only one"], answer: 0 },
            { text: "What does the winning team receive?", options: ["a $50 voucher for the café", "a trophy only", "free drinks for a year", "cash"], answer: 0 },
            { text: "Why should people arrive early?", options: ["to get a table", "to buy tickets online", "to practice questions", "to choose the topics"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why horses can sleep standing up",
          paragraphs: [
            "Horses can rest and even sleep while they are standing. This helps them stay safe in the wild, because they can run away quickly if a predator comes.",
            "Horses have a special system in their legs that locks their joints in place. This lets them relax their muscles without falling down. They can stand for hours this way using very little energy.",
            "However, horses cannot get all the sleep they need while standing. For deep sleep, they must lie down. They usually do this for only a short time each day. In a group of horses, one horse often stays awake and watches while the others lie down to sleep.",
          ],
          questions: [
            { text: "Why does sleeping standing up help horses stay safe?", options: ["They can run away quickly if a predator comes.", "It keeps them warm.", "It helps them eat.", "It makes them look bigger."], answer: 0 },
            { text: "What lets horses relax without falling down?", options: ["a special system that locks their leg joints", "their long tails", "their strong necks", "their hooves"], answer: 0 },
            { text: "The word \"locks\" in paragraph 2 is closest in meaning to", options: ["holds firmly", "opens", "breaks", "moves quickly"], answer: 0 },
            { text: "What must horses do for deep sleep?", options: ["lie down", "stand on three legs", "go into the water", "sleep in trees"], answer: 0 },
            { text: "What does one horse in a group often do?", options: ["stay awake and watch", "find food for the others", "sleep the longest", "run away"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The generation effect",
          text: "People tend to remember information better when they produce it themselves than when they simply read it. Psychologists call this the generation ef{{fect}}. In typical experiments, one group of participants reads pairs of related words, such as \"hot\" and \"cold\". Another group sees \"hot\" and the beginning of the second wo{{rd}}, such as \"c_ld\", and must complete it themse{{lves}}. Later, the second group usually remembers more of the wo{{rds}}. The extra mental effort involved in creating an answer seems to strengthen mem{{ory}}. This finding has practical implica{{tions}} for students. Instead of rereading notes, they may learn more by summarizing ideas in their own wo{{rds}}, answering ques{{tions}} or explaining concepts to fri{{ends}}. Even small acts of produc{{tion}} can improve learning.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Laboratory access during the winter break",
          text: [
            "To: Graduate students and researchers in the Chemistry Building",
            "From: Building Manager",
            "Subject: Laboratory access during the winter break",
            "The Chemistry Building will be closed to the public from December 23 to January 2. Researchers who need to continue experiments during this period may request access by completing an online form by December 15.",
            "For safety reasons, no one may work alone in a laboratory during the break; at least two people must be present at all times. Security staff will check access cards at the main entrance. Please note that heating will be reduced in parts of the building, so researchers should dress warmly and report any equipment problems immediately.",
          ],
          questions: [
            { text: "How can researchers get access during the break?", options: ["by completing an online form by December 15", "by calling security on the day", "by asking a professor", "they cannot get access"], answer: 0 },
            { text: "What safety rule applies during the break?", options: ["At least two people must be present in a laboratory.", "Only one person may enter at a time.", "Laboratories must close at noon.", "Experiments are not allowed."], answer: 0 },
            { text: "Why should researchers dress warmly?", options: ["Heating will be reduced in parts of the building.", "The building will be outdoors.", "It is required by law.", "The labs have no windows."], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Genetic testing at home",
          paragraphs: [
            "Until recently, genetic testing was carried out mainly in hospitals and specialized laboratories, usually when doctors suspected a serious inherited condition. Today, millions of people have purchased home genetic testing kits. Customers send a small sample of saliva to a company, which analyzes their DNA and provides online reports about their ancestry, physical traits and, in some cases, their risk of developing certain diseases.",
            "Supporters argue that these tests give people valuable information about themselves. Ancestry reports can help people learn about their family history and even find relatives they did not know existed. Health reports may encourage people to make healthier lifestyle choices or to discuss possible risks with their doctors. The tests are also relatively affordable, making genetic information available to a wider public.",
            "However, critics raise several concerns. Health risk reports can be difficult to interpret, and some customers may become unnecessarily anxious or falsely reassured, since most diseases are influenced by many genes as well as by lifestyle and environment. Many tests also look only at a limited number of genetic variations, so a 'low risk' result does not mean that a person will never develop a disease. Privacy is another major issue. Genetic data reveal information not only about customers but also about their relatives, and some companies have shared data with researchers or law enforcement. Experts therefore advise consumers to read privacy policies carefully and to discuss health results with medical professionals.",
          ],
          questions: [
            { text: "According to paragraph 1, how do home genetic tests work?", options: ["Customers send a saliva sample for DNA analysis.", "Customers visit a hospital.", "Customers take a blood test at home and read it themselves.", "Customers answer a questionnaire."], answer: 0 },
            { text: "According to paragraph 2, how might ancestry reports help people?", options: ["They can help people learn about family history and find relatives.", "They predict the future.", "They cure diseases.", "They replace doctors."], answer: 0 },
            { text: "The word \"reassured\" in paragraph 3 is closest in meaning to", options: ["made to feel less worried", "frightened", "confused", "angered"], answer: 0 },
            { text: "According to paragraph 3, why does a 'low risk' result not guarantee good health?", options: ["Tests look at a limited number of genetic variations, and lifestyle also matters.", "The tests are always wrong.", "Doctors ignore the results.", "Genes do not affect health."], answer: 0 },
            { text: "Why is privacy a concern with genetic testing?", options: ["Genetic data reveal information about customers and their relatives.", "The tests are very expensive.", "Customers must give their passwords.", "The results are published in newspapers."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Cenk", prompt: "Why are you wearing a hat inside?", chunks: ["I", "got", "a bad", "haircut", "yesterday"], end: "." },
      { promptBy: "Amy", prompt: "Did you like the new science museum?", chunks: ["the robots", "were", "my", "favorite", "exhibit"], end: "." },
      { promptBy: "Zehra", prompt: "I always feel sleepy in the afternoon.", chunks: ["have you", "tried", "going", "for a", "short walk"], end: "?" },
      { promptBy: "Paul", prompt: "How did you meet your business partner?", chunks: ["we", "studied", "together", "at", "university"], end: "." },
      { promptBy: "Burcu", prompt: "When does the next ferry leave?", chunks: ["it", "leaves", "in", "about", "half an hour"], end: "." },
      { promptBy: "Andy", prompt: "Why is the café closed today?", chunks: ["the owner", "is", "on", "holiday", "this week"], end: "." },
      { promptBy: "İrem", prompt: "What did your brother get for his birthday?", chunks: ["he", "got", "a new", "bicycle", "and a helmet"], end: "." },
      { promptBy: "Dan", prompt: "Where should we put the new sofa?", chunks: ["let's", "put it", "next to", "the big", "window"], end: "." },
      { promptBy: "Feride", prompt: "I can't read the board from here.", chunks: ["would you", "like", "to sit", "closer to", "the front"], end: "?" },
      { promptBy: "Liam", prompt: "Why did you decide to learn Italian?", chunks: ["my grandmother", "was", "born", "in", "Italy"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You booked a room at a hotel for a conference and asked for a quiet room. However, you were given a room next to the elevator, and you could not sleep. You want to write to the hotel manager.",
      to: "the hotel manager",
      subject: "Noisy room during my stay",
      tasks: ["Give details of your booking and request.", "Describe the problem.", "Say what you would like the hotel to do."],
      sample: "Dear Hotel Manager,\n\nI stayed at your hotel from October 6 to October 9 while attending a medical conference in the city. When I made my reservation online, I specifically requested a quiet room, because I needed to rest well before giving a presentation on the second day of the conference. My booking reference is HR-77321.\n\nUnfortunately, I was given Room 412, which is directly next to the elevator. The noise of the elevator doors and of guests talking in the hallway continued until after midnight and started again early in the morning. When I asked the reception staff to change my room on the first night, I was told that the hotel was fully booked. As a result, I slept very little during my stay, and I felt extremely tired during my presentation.\n\nI would appreciate it if you could offer a partial refund or a discount on a future stay. I would also suggest noting guests' special requests more carefully, so that other guests do not have the same experience.\n\nI look forward to your reply.\n\nYours sincerely,\nDr. Elif Sarı",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Technology and Society",
      professor: {
        name: "Dr. Graham",
        text: "Some schools have banned students from using mobile phones during the school day, including during breaks. Supporters say this improves concentration and encourages face-to-face interaction. Opponents argue that phones are useful for learning and for contacting parents in emergencies. Should schools ban mobile phones during the whole school day? Explain your view.",
      },
      students: [
        { name: "Grace", text: "Yes. When phones are allowed during breaks, students just look at their screens instead of talking or playing together." },
        { name: "Tolga", text: "No. Phones can be useful learning tools, and parents need to be able to contact their children if something happens." },
      ],
      sample: "I believe schools should ban mobile phones during lessons and breaks for younger students, but allow some flexibility for older students. Grace makes a valid point: when phones are available during breaks, many children spend their free time scrolling instead of playing, talking or being physically active, and some research suggests that removing phones can improve concentration and reduce online bullying during school hours. However, Tolga is right that phones can be useful learning tools and that parents may want to contact their children. These concerns can be addressed in other ways. Schools could keep phones in lockers or secure bags, allow teachers to use devices for specific activities and provide a school phone for emergencies. For older teenagers, schools could allow phone use in designated areas during lunch to teach responsible use.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-EmmaNeural",
    repeat: {
      scene: "You are a new employee at a theater box office. Your manager is telling you what to say to customers.",
      sentences: [
        "Good evening, how can I help you?",
        "Tonight's show starts at eight.",
        "We still have seats in the balcony.",
        "Students receive a discount with their card.",
        "Please arrive fifteen minutes before the show.",
        "If you are late, you may have to wait until the interval before you can enter the theater.",
        "Tickets can be exchanged for another performance up to forty-eight hours before the show, but they cannot be refunded.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about history and heritage. The researcher will ask you some questions.",
      questions: [
        {
          text: "Have you ever visited an ancient site? What was it like?",
          sample: "Yes, a few years ago I visited the ancient city of Ephesus with my family. Walking along the marble streets and seeing the remains of the theater and the library was an amazing experience. It was very hot, so we went early in the morning before the crowds arrived. I remember trying to imagine what life was like for the people who lived there thousands of years ago.",
        },
        {
          text: "Why do you think people are interested in ancient history?",
          sample: "I think people are interested in ancient history because it helps them understand where they come from and how human societies developed. Ancient stories, like myths and legends, are also very exciting. Discovering how people built huge monuments without modern technology can be fascinating. In addition, learning about the past can help us think about the present and the future in new ways.",
        },
        {
          text: "Should valuable historical objects be returned to their countries of origin?",
          sample: "I think in many cases, historical objects should be returned to the countries where they were made, especially if they were taken without permission. These objects are part of a country's cultural identity, and people should be able to see their own heritage in their own museums. However, the process needs to be handled carefully, and museums could cooperate by lending objects to each other, so that people around the world can still learn from them.",
        },
        {
          text: "How can technology help people learn about history?",
          sample: "Technology can make history much more engaging. Virtual reality, for example, can let people walk through ancient cities as they looked thousands of years ago. Museums can use apps and interactive screens to provide more information about objects. Online archives also allow anyone to read historical documents and see photographs from home. These tools can make history feel more real and accessible, especially for young people.",
        },
      ],
    },
  },
};
