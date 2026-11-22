import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 59 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_59: ToeflTest = {
  id: "toefl-59",
  no: 59,
  title: "TOEFL iBT Practice Test 59",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Jeans",
          text: "Jeans are now worn by people of all ages around the world, but they began as clothing for wor{{kers}}. In 1873, a tailor named Jacob Davis and a fabric merchant named Levi Strauss received a patent for work trousers strengthened with small metal riv{{ets}} at the points where pockets often to{{re}}. The trousers were made of denim, a strong cotton cl{{oth}} usually dyed blue. They quickly became popular with miners, farmers and cow{{boys}} in the American West. In the 1950s, film stars began wearing jeans on sc{{reen}}, and young people saw them as a symbol of free{{dom}}. Today, jeans are produced in many sty{{les}} and colors. However, making them uses large amounts of wa{{ter}}, so some companies are developing more sustai{{nable}} methods.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Study session canceled",
          text: [
            "Hi everyone, I'm sorry but I have to cancel tonight's biology study session. I just found out I have to work an extra shift at the café.",
            "Can we meet tomorrow at 4 in the library instead? I'll bring the practice questions I promised. Let me know if that time works!",
          ],
          questions: [
            { text: "Why is the study session canceled?", options: ["The writer has to work an extra shift.", "The library is closed.", "The exam was moved.", "The writer is ill."], answer: 0 },
            { text: "What does the writer promise to bring?", options: ["practice questions", "snacks", "a textbook", "a laptop"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Towel service at the gym",
          text: [
            "NEW: TOWEL SERVICE",
            "The university gym now offers a towel service. Members can collect a clean towel from the front desk by scanning their membership card. Towels must be returned to the bins near the exit before leaving.",
            "Each member may take one towel per visit. Members who do not return a towel will be charged $8 after one week. For hygiene reasons, please use a towel to wipe down machines after use.",
          ],
          questions: [
            { text: "How can members collect a towel?", options: ["by scanning their membership card at the front desk", "by paying $8", "by bringing their own", "by asking a trainer"], answer: 0 },
            { text: "What happens if a member does not return a towel?", options: ["They will be charged $8 after one week.", "They will lose their membership.", "Nothing will happen.", "They will receive a warning only."], answer: 0 },
            { text: "Why are members asked to use a towel on machines?", options: ["for hygiene reasons", "to protect the machines from damage", "to keep warm", "to save energy"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How geysers erupt",
          paragraphs: [
            "A geyser is a hot spring that periodically shoots a column of hot water and steam into the air. Geysers are rare: fewer than a thousand exist worldwide, and about half of them are found in Yellowstone National Park in the United States. Other notable geyser fields are located in Iceland, Chile, New Zealand and Russia. The word 'geyser' itself comes from Geysir, a famous geyser in Iceland.",
            "Geysers form only where three conditions are met. First, there must be a source of intense heat, usually magma relatively close to the surface. Second, there must be a plentiful supply of groundwater. Third, the underground 'plumbing' must have a particular structure: a system of narrow channels and chambers that allows water to collect and that is narrow enough near the top to trap pressure. When water deep in the system is heated, it cannot boil easily, because the weight of the water above it increases the pressure. As a result, it becomes hotter than its normal boiling point.",
            "Eventually, some water near the top begins to boil, and bubbles of steam push water out of the opening. This reduces the pressure on the superheated water below, which suddenly turns to steam, expanding dramatically and forcing the rest of the water upward in an eruption. After the eruption, the system slowly refills with water, and the cycle begins again. Some geysers, like Old Faithful in Yellowstone, erupt at fairly regular intervals, while others are unpredictable. Geysers are also fragile: earthquakes and human activities, such as drilling for geothermal energy, have caused some geysers to stop erupting entirely.",
          ],
          questions: [
            { text: "According to paragraph 1, where are about half of the world's geysers found?", options: ["in Yellowstone National Park", "in Iceland", "in New Zealand", "in Chile"], answer: 0 },
            { text: "According to paragraph 2, why can water deep in a geyser become hotter than its normal boiling point?", options: ["The weight of the water above increases the pressure.", "It contains salt.", "It is mixed with magma.", "It moves very quickly."], answer: 0 },
            { text: "The word \"plentiful\" in paragraph 2 is closest in meaning to", options: ["abundant", "limited", "clean", "warm"], answer: 0 },
            { text: "According to paragraph 3, what triggers the main eruption?", options: ["A reduction in pressure lets superheated water turn suddenly to steam.", "Wind blows into the opening.", "Rain fills the channels.", "Magma rises to the surface."], answer: 0 },
            { text: "What does paragraph 3 suggest about geysers?", options: ["They can be stopped by earthquakes and human activities.", "They all erupt at regular intervals.", "They never change.", "They are found in every country."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Building a snowman",
          text: "One morning in January, I woke up and saw that everything outside was wh{{ite}}. It had snowed all night! My brother and I put on our warm coats, hats and glo{{ves}} and ran into the gar{{den}}. We decided to build a big snow{{man}}. First, we rolled a large ball of sn{{ow}} for the body. Then we made a smaller one for the he{{ad}}. We used two stones for his ey{{es}} and a carrot for his no{{se}}. My mother gave us an old scarf to put around his ne{{ck}}. He stayed in our garden for a whole we{{ek}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Kayak tours",
          text: [
            "EXPLORE THE COAST BY KAYAK!",
            "Join our two-hour guided kayak tours along the rocky coast and visit beautiful hidden beaches. Tours leave every morning at 9 a.m. and every afternoon at 3 p.m. from Harbor Point.",
            "Tours cost $35 per person, including kayaks, paddles and life jackets. No experience is needed, but participants must be able to swim. Please bring sunscreen and a hat.",
          ],
          questions: [
            { text: "What can people see on the tour?", options: ["hidden beaches", "mountain villages", "a castle", "a zoo"], answer: 0 },
            { text: "What is required for participants?", options: ["being able to swim", "previous kayak experience", "their own kayak", "a fishing license"], answer: 0 },
            { text: "What should participants bring?", options: ["sunscreen and a hat", "a life jacket", "a paddle", "lunch"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why bats hang upside down",
          paragraphs: [
            "Bats are the only mammals that can truly fly. When they rest during the day, most bats hang upside down from cave ceilings, trees or roofs.",
            "Hanging upside down helps bats take off quickly. Their wings are not strong enough to lift them straight up from the ground. When a bat hangs, it simply lets go and opens its wings as it drops.",
            "Bats have special feet. When they hang, their own weight pulls on their toes and locks them in place. This means bats can stay hanging without using any energy, even while they sleep.",
          ],
          questions: [
            { text: "What is special about bats among mammals?", options: ["They are the only mammals that can truly fly.", "They are the largest mammals.", "They live only in water.", "They have no fur."], answer: 0 },
            { text: "How does hanging upside down help bats?", options: ["It helps them take off quickly.", "It keeps them warm.", "It helps them see better.", "It helps them eat."], answer: 0 },
            { text: "Why can't bats easily take off from the ground?", options: ["Their wings are not strong enough to lift them straight up.", "Their legs are too long.", "They are afraid of the ground.", "The ground is too cold."], answer: 0 },
            { text: "The phrase \"locks them in place\" in paragraph 3 is closest in meaning to", options: ["holds them firmly", "makes them move", "breaks them", "hides them"], answer: 0 },
            { text: "Why don't bats use energy while hanging?", options: ["Their weight locks their toes in place.", "They hold on with their wings.", "They sleep standing up.", "They hold on with their teeth."], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The hot-hand fallacy",
          text: "Many basketball fans believe that a player who has made several shots in a row is more likely to score the next sh{{ot}}. They describe the player as having a \"hot hand\". In the 1980s, psychologists analyzed thousands of sh{{ots}} and concluded that this belief was a fall{{acy}}: a player's chance of scoring did not seem to depend on whether previous shots had suc{{ceeded}}. Humans, they argued, tend to see pat{{terns}} in random sequences. However, more recent stu{{dies}} using better statistical methods have suggested that a small hot-hand ef{{fect}} may exist after all. The debate shows how dif{{ficult}} it can be to separate real patterns from cha{{nce}}, even for careful resear{{chers}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Library research consultations",
          text: [
            "To: Graduate students in the Faculty of Humanities",
            "From: Humanities Library",
            "Subject: Book a one-on-one research consultation",
            "Subject librarians are now offering one-on-one research consultations for graduate students. In a forty-five-minute session, a librarian can help you find specialized databases, locate rare or archival materials, manage citations and develop effective search strategies for your thesis.",
            "Consultations can be held in person or online and should be booked at least three working days in advance through the library website. When booking, please briefly describe your research topic so that the librarian can prepare. Students may book up to three consultations per semester.",
          ],
          questions: [
            { text: "What can a librarian help with during a consultation?", options: ["finding specialized databases and managing citations", "writing the thesis for the student", "grading assignments", "teaching a language"], answer: 0 },
            { text: "How far in advance should consultations be booked?", options: ["at least three working days", "one month", "on the same day", "one hour"], answer: 0 },
            { text: "What should students include when booking?", options: ["a brief description of their research topic", "a copy of their thesis", "their grades", "a fee"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why people believe conspiracy theories",
          paragraphs: [
            "Conspiracy theories are explanations of important events that claim powerful groups are secretly working together to cause harm or hide the truth. Some famous examples claim that the Moon landings were faked or that major historical events were secretly planned. Surveys suggest that belief in at least one conspiracy theory is very common, and such beliefs are found among people of all ages, educational levels and political views.",
            "Psychologists have identified several needs that conspiracy theories may satisfy. One is the need for understanding and certainty. When events are frightening or confusing, such as a pandemic or a sudden economic crisis, simple explanations that identify a clear cause can feel more satisfying than complex or uncertain ones. Another is the need for control and security; believing that one has uncovered hidden truths may make people feel less powerless. Social needs also play a role: conspiracy theories can create a sense of belonging to a group of people who think they know what others do not.",
            "Cognitive biases may make people more open to such ideas. For instance, people tend to assume that big events must have big causes, and they often see intentional patterns where none exist. Online platforms can accelerate the spread of conspiracy theories, since emotionally powerful content is often shared widely. Researchers have explored ways to reduce belief in harmful conspiracy theories. Simply presenting facts is often ineffective, but some studies suggest that 'prebunking', which warns people in advance about common manipulation techniques, can help them recognize misleading claims before they encounter them.",
          ],
          questions: [
            { text: "According to paragraph 1, who believes in conspiracy theories?", options: ["people of all ages, education levels and political views", "only young people", "only people with little education", "only politicians"], answer: 0 },
            { text: "According to paragraph 2, why might simple explanations be attractive during confusing events?", options: ["They satisfy the need for understanding and certainty.", "They are always true.", "They are taught in schools.", "They are supported by experts."], answer: 0 },
            { text: "The word \"accelerate\" in paragraph 3 is closest in meaning to", options: ["speed up", "slow down", "prevent", "measure"], answer: 0 },
            { text: "Which cognitive bias is mentioned in paragraph 3?", options: ["assuming that big events must have big causes", "forgetting recent events", "preferring numbers to words", "trusting all experts"], answer: 0 },
            { text: "What is 'prebunking'?", options: ["warning people in advance about manipulation techniques", "presenting facts after a theory spreads", "banning conspiracy theories online", "creating new theories"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Cem", prompt: "Why are you leaving so early?", chunks: ["I", "want to", "avoid", "the rush hour", "traffic"], end: "." },
      { promptBy: "Molly", prompt: "Did you like the new pizza place?", chunks: ["their", "pizza", "was", "even better", "than I expected"], end: "." },
      { promptBy: "Aylin", prompt: "I can't find a quiet place to study.", chunks: ["have you", "tried", "the reading room", "on", "the top floor"], end: "?" },
      { promptBy: "Jack", prompt: "How did you learn to play chess?", chunks: ["my grandfather", "taught me", "when I was", "about", "six"], end: "." },
      { promptBy: "Pelin", prompt: "When does the swimming pool open?", chunks: ["it", "opens", "at", "seven", "every morning"], end: "." },
      { promptBy: "Nathan", prompt: "Why are the shops closed today?", chunks: ["it", "is", "a national", "holiday", "today"], end: "." },
      { promptBy: "Sibel", prompt: "What did your manager say about the project?", chunks: ["she", "was", "very happy", "with", "our results"], end: "." },
      { promptBy: "Rob", prompt: "Where did you buy your new bike?", chunks: ["I", "bought it", "online", "from", "a local shop"], end: "." },
      { promptBy: "Esin", prompt: "I'm too nervous to give my speech.", chunks: ["would it", "help", "to practice", "in front of", "a few friends"], end: "?" },
      { promptBy: "Peter", prompt: "Why did you choose to work from home?", chunks: ["it", "saves me", "two hours", "of travel", "every day"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently joined a running club in your city. You took part in your first group run last weekend, but you found it very difficult to keep up with the others. You want to write to the club organizer.",
      to: "the running club organizer, Daniel",
      subject: "Question about running groups",
      tasks: ["Tell the organizer about your first group run.", "Explain the difficulty you had.", "Ask about options for beginners."],
      sample: "Hi Daniel,\n\nI joined the City Runners Club two weeks ago, and last Saturday I took part in my first group run along the river. Everyone was very friendly and welcoming, and I really enjoyed the atmosphere, especially the coffee together at the end.\n\nHowever, I found the run quite difficult. The group ran about ten kilometers at a pace that was much faster than I am used to. By the halfway point, I was far behind, and one of the members kindly stayed with me, but I felt bad that I was slowing her down. At the moment, I can comfortably run about five kilometers, and I would like to improve gradually without risking an injury.\n\nI was wondering whether the club has a slower group or a beginner program. If not, would it be possible for newer members to run a shorter route at their own pace and meet the others at the end? I would be happy to help organize such a group if there is interest.\n\nThanks for your help, and I look forward to the next run.\n\nBest,\nMeltem",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Sociology",
      professor: {
        name: "Dr. Hayes",
        text: "In many countries, people are getting married later in life than previous generations, or choosing not to marry at all. Some sociologists believe this reflects greater personal freedom and economic independence. Others worry that it could weaken family structures and lead to lower birth rates. Is the trend toward later marriage positive or negative for society? Explain your view.",
      },
      students: [
        { name: "Ruby", text: "It's positive. People can finish their education, build careers and get to know themselves before making such an important decision." },
        { name: "Barış", text: "It has negative effects. Many countries already have aging populations, and later marriage means fewer children, which puts pressure on the economy." },
      ],
      sample: "I believe the trend toward later marriage is mostly positive for individuals, although it creates challenges that societies must address. Ruby makes a convincing point: people who marry later have often completed their education and become financially stable, and they may have a clearer understanding of what they want in a partner. Some research suggests that marriages that begin later are less likely to end in divorce. However, Barış raises a valid concern about falling birth rates, which can lead to a shrinking workforce and difficulties in supporting older generations. In my view, the solution is not to encourage people to marry earlier, but to make it easier for those who want children to have them, for example through affordable childcare, flexible working arrangements and better parental leave.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new employee at a hotel restaurant. The head waiter is telling you what to say to guests.",
      sentences: [
        "Good evening, do you have a reservation?",
        "Please follow me to your table.",
        "Here is our menu for this evening.",
        "Today's special is grilled fish with vegetables.",
        "Would you like something to drink while you decide?",
        "Please let me know if anyone at the table has a food allergy, so the chef can prepare the meal safely.",
        "Breakfast is served in this restaurant from six thirty until ten, and hotel guests can charge their meals directly to their room.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's habits related to shopping and consumer choices. The researcher will ask you some questions.",
      questions: [
        {
          text: "What was the last thing you bought that you were really happy with?",
          sample: "The last thing I bought that I was really happy with was a good pair of noise-cancelling headphones. I live in a busy apartment, and it was often difficult to concentrate while studying. I saved money for a few months and compared different models online before choosing one. Now I can study, listen to music or watch lectures without being disturbed, and the battery lasts for a long time. It was definitely worth the money.",
        },
        {
          text: "Do you usually compare prices before buying something?",
          sample: "Yes, I almost always compare prices, especially for expensive items like electronics or clothes. I check several online stores and read reviews before making a decision. Sometimes I find the same product for a much lower price, which helps me save money as a student. For small, everyday purchases like groceries, I don't compare prices as carefully, but I do look for discounts and buy products when they're on sale.",
        },
        {
          text: "Do you think people today buy too many things?",
          sample: "I think many people today do buy more than they need. Online shopping and constant advertising make it very easy to buy things instantly, and cheap fashion encourages people to replace clothes often. This creates a lot of waste and isn't good for the environment. I try to ask myself whether I really need something before buying it. I also think buying second-hand items and repairing things are good ways to reduce consumption.",
        },
        {
          text: "Should companies be required to tell customers how environmentally friendly their products are?",
          sample: "Yes, I think companies should be required to provide clear information about the environmental impact of their products, like how much energy they use or whether they can be recycled. Many customers want to make responsible choices, but it's difficult without reliable information. However, the rules should be strict, because some companies make misleading claims about being green. Independent labels that are checked by experts would help customers trust the information.",
        },
      ],
    },
  },
};
