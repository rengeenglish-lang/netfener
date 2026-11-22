import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 33 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_33: ToeflTest = {
  id: "toefl-33",
  no: 33,
  title: "TOEFL iBT Practice Test 33",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Sandwiches",
          text: "People have eaten food between pieces of bread for centuries, but the word sandwich is linked to an eighteenth-century English nob{{leman}}, the Earl of Sandwich. According to a popular sto{{ry}}, he asked for meat between two sli{{ces}} of bread so that he could keep pla{{ying}} cards without stopping for a me{{al}}. Whether or not the story is tr{{ue}}, the name quickly bec{{ame}} popular. Today, sandwiches are eaten all over the wor{{ld}}, from simple cheese sandwiches to large burgers, and they are especially popular with busy work{{ers}} and stud{{ents}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Gym partner",
          text: [
            "Hey Selin! I just signed up for the gym near campus. They have a deal this month: if two people join together, both get the first month free.",
            "Do you want to join with me? We could go together on Monday and Thursday evenings after class.",
          ],
          questions: [
            { text: "What special offer does the gym have?", options: ["free personal training", "the first month free if two people join together", "half-price membership for students", "free classes on weekends"], answer: 1 },
            { text: "When does the writer suggest going to the gym?", options: ["every morning", "on Monday and Thursday evenings", "on weekends only", "every day after lunch"], answer: 1 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Student ID replacement",
          text: [
            "LOST OR DAMAGED STUDENT ID CARDS",
            "If your student ID card is lost, stolen or damaged, please report it immediately through the student portal so that the old card can be deactivated.",
            "Replacement cards can be collected from the Student Services desk two working days after you report the problem. The replacement fee is $15, but it is waived if your card was stolen and you provide a police report.",
          ],
          questions: [
            { text: "What should students do first if their card is lost?", options: ["buy a new card", "report it through the student portal", "call the police", "wait for two days"], answer: 1 },
            { text: "When can replacement cards be collected?", options: ["immediately", "two working days after reporting", "after one week", "at the end of the semester"], answer: 1 },
            { text: "When is the replacement fee waived?", options: ["if the card was damaged", "if the card was stolen and a police report is provided", "for first-year students", "if the student pays in cash"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why some lakes turn pink",
          paragraphs: [
            "Around the world, a small number of lakes have water that is a striking shade of pink. Examples include Lake Hillier, on an island off the coast of Western Australia, and Lake Retba in Senegal. These lakes have one thing in common: their water is extremely salty, often much saltier than the sea.",
            "The pink color is produced by living organisms. In very salty water, few organisms can survive, but a tiny green alga called Dunaliella salina thrives. To protect itself from intense sunlight, the alga produces large amounts of red and orange pigments called carotenoids, the same type of compounds that give carrots their color. Certain salt-loving microorganisms known as halophilic archaea also contain red pigments and add to the effect.",
            "The intensity of the color can change with the seasons. When the weather is hot and dry, evaporation makes the water saltier, conditions favor the pigment-producing organisms, and the pink becomes stronger. After heavy rain, the water becomes less salty, and the color may fade. Some pink lakes are used for commercial salt production, and the carotenoids produced by the algae are harvested for use as food coloring and nutritional supplements.",
          ],
          questions: [
            { text: "According to paragraph 1, what do pink lakes have in common?", options: ["They are very deep.", "Their water is extremely salty.", "They are found only in Australia.", "They are frozen in winter."], answer: 1 },
            { text: "The word \"thrives\" in paragraph 2 is closest in meaning to", options: ["grows well", "dies", "hides", "moves"], answer: 0 },
            { text: "According to paragraph 2, why does the alga produce carotenoids?", options: ["to attract animals", "to protect itself from intense sunlight", "to make the water salty", "to absorb nutrients"], answer: 1 },
            { text: "When does the pink color become stronger?", options: ["after heavy rain", "when the weather is hot and dry", "in winter", "at night"], answer: 1 },
            { text: "According to paragraph 3, how are carotenoids from the algae used?", options: ["as fuel", "as food coloring and nutritional supplements", "to make glass", "to clean water"], answer: 1 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A snowy day",
          text: "Last winter, it snowed heavily in our city, and the schools were clo{{sed}}. My brother and I were very exci{{ted}}. We put on our warm co{{ats}} and went outside. We built a big snow{{man}} with a carrot nose and an old h{{at}}. Then we had a snowball fi{{ght}} with our neighbors. When our hands were too co{{ld}}, we went home and drank hot mi{{lk}}. It was one of the best da{{ys}} of the ye{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Language tutor",
          text: [
            "LEARN TURKISH WITH A NATIVE SPEAKER",
            "Friendly language student offering Turkish lessons for beginners and intermediate learners. Lessons can be held at the library or online.",
            "One-hour lessons cost $18. The first lesson is half price. Learn useful phrases for daily life, shopping and travel. Email Can at can.lessons@example.com.",
          ],
          questions: [
            { text: "Where can lessons take place?", options: ["only at the student's home", "at the library or online", "in a café", "at a language school"], answer: 1 },
            { text: "How much does the first lesson cost?", options: ["$18", "$9", "free", "$36"], answer: 1 },
            { text: "What will students learn?", options: ["Turkish history", "useful phrases for daily life, shopping and travel", "how to teach Turkish", "Turkish literature"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "How honeybees keep cool",
          paragraphs: [
            "Honeybees live together in hives. Inside the hive, the temperature must stay at around 35 degrees Celsius so that young bees can grow properly.",
            "On hot days, the hive can become too warm. To cool it, worker bees bring water and spread it in thin layers inside the hive. Other bees fan their wings to move air across the water. As the water evaporates, it cools the hive.",
            "In cold weather, bees do the opposite. They gather in a tight group and shiver their flight muscles to produce heat. In this way, they keep the center of the group warm all winter.",
          ],
          questions: [
            { text: "Why must the hive stay at around 35 degrees?", options: ["so that honey does not melt", "so that young bees can grow properly", "so that bees can fly", "so that flowers grow nearby"], answer: 1 },
            { text: "What do worker bees bring into the hive on hot days?", options: ["pollen", "water", "leaves", "mud"], answer: 1 },
            { text: "The word \"evaporates\" in paragraph 2 is closest in meaning to", options: ["turns into vapor", "freezes", "spreads", "becomes sweet"], answer: 0 },
            { text: "How do bees produce heat in cold weather?", options: ["by eating honey quickly", "by shivering their flight muscles", "by closing the hive", "by flying outside"], answer: 1 },
            { text: "What do bees do in cold weather?", options: ["leave the hive", "gather in a tight group", "sleep separately", "build a new hive"], answer: 1 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The IKEA effect",
          text: "Researchers have found that people tend to place a higher value on products they have partly created themselves. In a series of exper{{iments}}, participants who assembled simple furniture or folded paper figures were willing to pay significantly more for their own crea{{tions}} than for identical items made by oth{{ers}}. The researchers named this the IKEA eff{{ect}}, after the furniture company whose products customers must put toge{{ther}}. However, the effect appeared only when participants successfully comp{{leted}} the task; when they failed, the extra value disap{{peared}}. Companies sometimes use this insi{{ght}} by inviting customers to custo{{mize}} their prod{{ucts}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Policy on recording lectures",
          text: [
            "To: All students",
            "From: Office of the Provost",
            "Subject: New policy on recording classes",
            "Under the university's new policy, students may not make their own audio or video recordings of lectures without the instructor's written permission. Many courses now provide official recordings through the learning platform, and these may be used for personal study only.",
            "Sharing official or unofficial recordings on social media or with people outside the course is strictly prohibited and may result in disciplinary action. Students with a documented disability who need to record lectures as an accommodation should contact the Accessibility Office, which will inform their instructors.",
          ],
          questions: [
            { text: "What do students need before making their own recordings?", options: ["the instructor's written permission", "permission from classmates", "a special app", "a fee"], answer: 0 },
            { text: "How may official recordings be used?", options: ["for any purpose", "for personal study only", "on social media", "for commercial use"], answer: 1 },
            { text: "Who should students with a documented disability contact?", options: ["the provost", "the Accessibility Office", "the student newspaper", "the IT department"], answer: 1 },
          ],
        },
        {
          kind: "academic",
          title: "Why the Titanic sank so quickly",
          paragraphs: [
            "When the RMS Titanic set out on its first voyage from Southampton to New York in April 1912, it was the largest ship in the world, and it was widely described as practically unsinkable. Its hull was divided into sixteen compartments separated by walls, and the ship was designed to stay afloat even if several of the front compartments were flooded. On the night of April 14, however, the ship struck an iceberg in the North Atlantic, and less than three hours later it had disappeared beneath the waves.",
            "The collision damaged the hull along a length of about ninety meters, opening the first five or six compartments to the sea. This was more than the ship had been designed to survive. In addition, the walls between the compartments did not extend all the way to the top of the hull. As the front of the ship sank lower, water spilled over the top of each wall into the next compartment, rather like water filling an ice tray, so the flooding spread steadily.",
            "Investigations after the disaster also pointed to other factors. The ship had been traveling fast despite warnings of ice, and its lifeboats could carry only about half of the more than two thousand people on board, which was nonetheless legal under the regulations of the time. More than fifteen hundred people died. The disaster led to major changes in maritime safety, including the first International Convention for the Safety of Life at Sea in 1914, which required enough lifeboat places for everyone on board and continuous radio watches on passenger ships.",
          ],
          questions: [
            { text: "According to paragraph 1, why was the Titanic considered practically unsinkable?", options: ["It was made of a new metal.", "Its hull was divided into compartments.", "It had extra lifeboats.", "It traveled very slowly."], answer: 1 },
            { text: "The word \"steadily\" in paragraph 2 is closest in meaning to", options: ["gradually and continuously", "suddenly", "rarely", "quietly"], answer: 0 },
            { text: "According to paragraph 2, why did the flooding spread?", options: ["The pumps stopped working.", "The compartment walls did not reach the top of the hull.", "The crew opened the doors.", "A second iceberg hit the ship."], answer: 1 },
            { text: "What does the author say about the lifeboats?", options: ["There were enough for everyone.", "They could carry only about half of the people, which was legal at the time.", "They were never used.", "They were too heavy to lower."], answer: 1 },
            { text: "What was one result of the disaster?", options: ["Ships stopped crossing the Atlantic.", "New rules required enough lifeboat places for everyone.", "Icebergs were destroyed.", "Ships became smaller."], answer: 1 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Pınar", prompt: "Why didn't you answer my message?", chunks: ["I", "was", "in", "a long", "meeting"], end: "." },
      { promptBy: "Jake", prompt: "Have you tried the new climbing wall?", chunks: ["I", "tried it", "last week", "with", "my roommate"], end: "." },
      { promptBy: "Gökçe", prompt: "My presentation slides look boring.", chunks: ["why don't", "you", "add", "some photos", "and charts"], end: "?" },
      { promptBy: "Dan", prompt: "Where are you going after graduation?", chunks: ["I", "plan to", "travel", "around", "South America"], end: "." },
      { promptBy: "Bahar", prompt: "How was the film festival?", chunks: ["we", "watched", "five films", "in", "two days"], end: "." },
      { promptBy: "Steve", prompt: "Why is the cafeteria so quiet?", chunks: ["most students", "are", "at", "the graduation", "ceremony"], end: "." },
      { promptBy: "İlayda", prompt: "When does the bookstore close?", chunks: ["it", "closes", "at", "seven", "on weekdays"], end: "." },
      { promptBy: "Ross", prompt: "What did you buy at the bookstore?", chunks: ["I", "bought", "a dictionary", "and", "two notebooks"], end: "." },
      { promptBy: "Ebru", prompt: "It's getting late.", chunks: ["should", "we", "call", "a taxi", "home"], end: "?" },
      { promptBy: "Martin", prompt: "Why did you start learning to code?", chunks: ["I", "want to", "build", "my own", "website"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You are a member of a local running club. The club is organizing a charity run, and you have been asked to write to local businesses asking for support.",
      to: "the manager of a local sports shop",
      subject: "Support for our charity run",
      tasks: ["Introduce the club and describe the charity run.", "Explain how the shop could help.", "Describe what the shop would receive in return."],
      sample: "Dear Manager,\n\nI am writing on behalf of the Riverside Running Club, a group of about sixty local runners of all ages. On Sunday, June 8, we are organizing a five-kilometer charity run in Riverside Park to raise money for the children's ward at City Hospital. We expect around four hundred participants, including many families.\n\nWe would be very grateful if your shop could support the event. For example, you could donate a few prizes for the winners, such as running shoes or sports bags, or provide water bottles for the runners. Alternatively, a financial contribution of any size would help us cover the cost of medals and first-aid staff.\n\nIn return, we would display your shop's logo on our posters, website and the banner at the finish line, and we would thank you publicly during the prize ceremony. You would also be welcome to set up a stand at the event to promote your products to participants.\n\nThank you for considering our request. I would be happy to discuss it further.\n\nBest regards,\nDerya Şen\nRiverside Running Club",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Collins",
        text: "Some people argue that university education should be free for all students, paid for by taxes, because it benefits society as a whole. Others believe that students should pay at least part of the cost, since they gain personally from higher future salaries. Should university education be free? Why or why not?",
      },
      students: [
        { name: "Amber", text: "Yes. When education is free, talented students from poor families can study without fear of debt. Society benefits from more doctors, engineers and teachers." },
        { name: "Cem", text: "No. Graduates usually earn much more than people without degrees. It's unfair to make taxpayers who never went to university pay for others' education." },
      ],
      sample: "I believe university education should be largely free, but with some conditions to keep the system fair and sustainable. Amber is right that cost can prevent talented students from poorer families from studying, which is a loss not only for them but for the whole society. When I think of my own friends, several chose not to apply to expensive programs because they were afraid of debt. However, Cem makes a valid point about fairness, since graduates often benefit financially. One solution would be to make tuition free but ask graduates who earn above a certain income to contribute through a slightly higher tax rate. In this way, nobody is prevented from studying by a lack of money, while those who benefit most from their education help to fund it for the next generation.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-JennyNeural",
    repeat: {
      scene: "You are working at the front desk of a youth hostel. The manager is telling you what to say to guests.",
      sentences: [
        "Welcome to our hostel.",
        "Check-in starts at two o'clock.",
        "Breakfast is included in the price.",
        "Towels can be rented for two euros.",
        "Please keep your valuables in the lockers in your room.",
        "The shared kitchen is open until eleven, and guests should clean up after cooking.",
        "If you would like to join tonight's free walking tour of the old town, please meet in the lobby at seven o'clock.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about home and housing. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe the place where you live now. What do you like about it?",
          sample: "I currently live in a shared apartment with two other students, about fifteen minutes' walk from campus. It's not very big, but it has a bright living room with a balcony, where we often have breakfast together. What I like most is the location, because I can walk to classes, and there's a park and several cafés nearby. My roommates are also friendly and tidy, which makes a big difference.",
        },
        {
          text: "Would you prefer to live in a house or an apartment? Why?",
          sample: "At this stage of my life, I prefer living in an apartment. Apartments are usually closer to the city center, so it's easier to reach work, school and shops without a car. They also need less maintenance than houses, which suits my busy schedule. However, in the future, if I have a family, I'd like to live in a house with a garden, so that children have space to play outside.",
        },
        {
          text: "Some people believe that young people should buy a home as early as possible. What is your opinion?",
          sample: "I think it depends on the person's situation. Buying a home can be a good long-term investment, and it gives people stability. However, for many young people, house prices are extremely high, and buying too early can mean taking on a huge loan that limits their choices, such as changing jobs or moving to another city. I think it's often wiser to rent for a few years, save money and buy when your life is more settled.",
        },
        {
          text: "What could governments do to make housing more affordable?",
          sample: "Governments could take several steps. First, they could build more affordable public housing or support organizations that do, since a shortage of homes is one of the main reasons prices are so high. They could also change planning rules to allow more apartments near public transport. Finally, they could limit very large rent increases and offer support to first-time buyers, such as lower interest rates, to help young people and families find stable homes.",
        },
      ],
    },
  },
};
