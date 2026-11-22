import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 99 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_99: ToeflTest = {
  id: "toefl-99",
  no: 99,
  title: "TOEFL iBT Practice Test 99",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Name tags",
          text: "Name tags are small labels that show a person's name, and they are commonly worn at conferences, in hospitals and in sho{{ps}}. Their history is connected with the need to identify people quickly. During large wars in the twentieth century, soldiers wore metal identity ta{{gs}} so that they could be recognized if they were inj{{ured}}. In the business world, name tags became popular at large meet{{ings}}, where many people did not know each ot{{her}}. They help people start conver{{sations}} and remember names. In shops and restaurants, name tags make staff seem more friendly and approach{{able}}. Today, many name tags also contain electronic chips that allow the wearer to open doors in secure buil{{dings}}, and some even record when employees arrive at wo{{rk}} each mor{{ning}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing a tripod",
          text: [
            "Hi Kerem, I'm filming a short video for my media project this weekend, and I need a tripod to keep the camera steady. Do you still have yours?",
            "I'd only need it on Saturday from 10 to 4. I can pick it up on Friday evening and return it on Sunday morning. Thanks a lot!",
          ],
          questions: [
            { text: "Why does the writer need a tripod?", options: ["to keep the camera steady while filming", "to take family photos", "to sell it", "for a photography exhibition"], answer: 0 },
            { text: "When will the writer return the tripod?", options: ["on Sunday morning", "on Saturday evening", "on Friday", "next week"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Basketball court lights",
          text: [
            "NEW LIGHTS ON OUTDOOR COURTS",
            "New energy-efficient lights have been installed on the outdoor basketball courts behind the residence halls. The courts can now be used until 10 p.m. every day.",
            "The lights switch on automatically at sunset and switch off at 10 p.m. To save energy, they will turn off if no movement is detected for fifteen minutes. Please report any lights that are not working to the facilities office.",
          ],
          questions: [
            { text: "Until what time can the courts now be used?", options: ["10 p.m.", "midnight", "8 p.m.", "sunset"], answer: 0 },
            { text: "When will the lights turn off to save energy?", options: ["if no movement is detected for fifteen minutes", "every hour", "when it rains", "at sunset"], answer: 0 },
            { text: "What should people do if a light is not working?", options: ["report it to the facilities office", "fix it themselves", "use their phone lights", "call the police"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The discovery of the Dead Sea Scrolls",
          paragraphs: [
            "In 1947, a young shepherd searching for a lost goat in the hills near the Dead Sea threw a stone into a cave and heard something break. Inside, he found clay jars containing ancient scrolls wrapped in linen. Over the following decade, archaeologists and local people explored eleven caves in the area, eventually finding thousands of fragments belonging to around nine hundred different documents. These texts became known as the Dead Sea Scrolls.",
            "The scrolls, written mostly between about the third century BCE and the first century CE, are among the most important archaeological discoveries of the twentieth century. They include the oldest known copies of many books of the Hebrew Bible, as well as other religious writings, community rules, calendars and poems. Most were written in Hebrew, but some were in Aramaic and Greek, and they were made mainly of animal skin, although a few were written on papyrus. One remarkable scroll was made of copper and appears to list hidden treasures.",
            "The extremely dry climate of the region helped preserve the scrolls for two thousand years. Even so, many had decayed into tiny fragments, which scholars have spent decades trying to piece together like a huge puzzle. Modern technology has helped enormously. Researchers have used special photographic techniques to read faded writing, and in some cases scientists have even 'unrolled' damaged scrolls digitally, using scanning technology, without touching them. The scrolls have greatly improved understanding of how religious texts were copied and transmitted, as well as of daily life and beliefs in the ancient region.",
          ],
          questions: [
            { text: "According to paragraph 1, how were the scrolls first discovered?", options: ["A shepherd threw a stone into a cave and heard something break.", "Archaeologists dug under a city.", "They were found in a library.", "A storm uncovered them."], answer: 0 },
            { text: "According to paragraph 2, what did the scrolls include?", options: ["the oldest known copies of many books of the Hebrew Bible", "only maps", "modern newspapers", "letters from Roman emperors only"], answer: 0 },
            { text: "The word \"transmitted\" in paragraph 3 is closest in meaning to", options: ["passed on", "destroyed", "hidden", "translated"], answer: 0 },
            { text: "According to paragraph 3, what helped preserve the scrolls?", options: ["the extremely dry climate", "the cold temperature", "chemical treatments", "the jars being made of metal"], answer: 0 },
            { text: "How has modern technology helped researchers?", options: ["by revealing faded writing and digitally unrolling damaged scrolls", "by writing new scrolls", "by moving the caves", "by replacing the scrolls with copies only"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Making a scarecrow",
          text: "Last autumn, my grandmother and I made a scarecrow for her vegetable gar{{den}}. Birds were eating her seeds, so she wanted to scare th{{em}} away. First, we found some old clo{{thes}}: a checked shirt, blue jeans and a straw h{{at}}. Then we filled the clothes with dry gra{{ss}}. My grandmother made a head from an old pil{{low}}, and I drew a funny fa{{ce}} on it. We tied the scarecrow to a wooden po{{le}} in the middle of the garden. My grandmother laughed and said it looked like my gran{{dfather}}! Since then, fewer birds have come, and her vegetables are grow{{ing}} well.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Puppet show for kids",
          text: [
            "A MAGICAL PUPPET SHOW!",
            "Bring your children to see 'The Brave Little Fox', a colorful puppet show at the Community Theater on Saturday at 11 a.m. and 3 p.m. The show lasts forty-five minutes.",
            "Tickets cost $6 for children and $8 for adults. After each show, children can meet the puppets and try making simple sock puppets. The show is suitable for children aged three to ten.",
          ],
          questions: [
            { text: "How long does the show last?", options: ["forty-five minutes", "two hours", "twenty minutes", "all day"], answer: 0 },
            { text: "What can children do after the show?", options: ["meet the puppets and make sock puppets", "watch a film", "take a theater tour", "eat lunch with the actors"], answer: 0 },
            { text: "Who is the show suitable for?", options: ["children aged three to ten", "teenagers only", "adults only", "babies under one"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How caterpillars become moths",
          paragraphs: [
            "Many moths begin their lives as small caterpillars. A caterpillar spends most of its time eating leaves and growing bigger.",
            "When it is fully grown, the caterpillar makes a cocoon. It produces thin silk threads from its mouth and wraps them around its body. The cocoon protects the caterpillar while its body changes.",
            "Inside the cocoon, the caterpillar slowly changes into a moth. This can take a few weeks or even months. When the change is complete, the moth breaks out of the cocoon, waits for its wings to dry and then flies away. Silk from some cocoons is used by people to make beautiful cloth.",
          ],
          questions: [
            { text: "What does a caterpillar spend most of its time doing?", options: ["eating leaves and growing", "flying", "sleeping in a cocoon", "swimming"], answer: 0 },
            { text: "How does a caterpillar make a cocoon?", options: ["by wrapping thin silk threads around its body", "by digging a hole", "by gluing leaves together", "by using mud"], answer: 0 },
            { text: "The word \"wraps\" in paragraph 2 is closest in meaning to", options: ["covers by winding around", "cuts", "eats", "throws"], answer: 0 },
            { text: "What does the moth do after breaking out of the cocoon?", options: ["waits for its wings to dry and then flies away", "goes back inside", "eats the cocoon immediately", "lays eggs in the cocoon"], answer: 0 },
            { text: "What do people use silk from some cocoons for?", options: ["to make cloth", "to make paper", "to build houses", "to make food"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "The ambiguity effect",
          text: "People often prefer options with known probabilities over options with unknown ones, even when the unknown option might be bet{{ter}}. This tendency is called the ambiguity ef{{fect}}. In a classic exper{{iment}}, participants could draw a ball from one of two bo{{xes}}. One box contained exactly fifty red balls and fifty black ba{{lls}}. The other contained one hundred balls in an unknown mix of red and bl{{ack}}. Most participants chose the first box, even though the second might have contained more winning ba{{lls}}. In everyday life, the ambiguity effect may lead people to choose familiar investments, foods or job opti{{ons}} instead of exploring alternatives that are less certain. While caution can be use{{ful}}, it can also cause people to miss valuable opport{{unities}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Library database training",
          text: [
            "To: First-year graduate students",
            "From: University Library",
            "Subject: Free training on research databases",
            "The library offers free one-hour training sessions on using academic databases, such as finding journal articles, saving searches and setting up alerts for new publications. Sessions will be held every Tuesday and Thursday at 3 p.m. in the library's training room during October.",
            "Each session focuses on a different subject area, including science, social sciences and humanities, so please check the schedule and choose the one most relevant to your research. Places are limited to fifteen people, and registration is required. Students who cannot attend may watch recorded tutorials on the library website.",
          ],
          questions: [
            { text: "What will the training sessions cover?", options: ["using academic databases", "writing a thesis", "using the printer", "applying for jobs"], answer: 0 },
            { text: "Why should students check the schedule?", options: ["Each session focuses on a different subject area.", "Sessions change rooms every day.", "Sessions cost money.", "Sessions are only in the morning."], answer: 0 },
            { text: "What can students do if they cannot attend?", options: ["watch recorded tutorials on the library website", "book a private session at home", "skip training", "ask a classmate to attend for them"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The race for better batteries",
          paragraphs: [
            "Batteries power many of the devices people use every day, from smartphones and laptops to electric cars. They are also becoming increasingly important for storing electricity from renewable sources such as solar and wind power, which do not produce energy at all times. Most modern rechargeable devices use lithium-ion batteries, which were developed in the late twentieth century and earned their inventors a Nobel Prize in 2019. These batteries store a large amount of energy for their weight and can be recharged hundreds or thousands of times.",
            "Despite their success, lithium-ion batteries have limitations. They rely on materials such as lithium, cobalt and nickel, which must be mined, and mining can cause environmental damage and raise concerns about working conditions in some regions. The batteries can also overheat and, in rare cases, catch fire. In addition, they gradually lose capacity as they age, and recycling them is complex and not yet widespread.",
            "Scientists and companies around the world are therefore racing to develop better batteries. One promising technology is the solid-state battery, which replaces the liquid inside conventional batteries with a solid material, potentially making it safer and able to store more energy. Other researchers are developing batteries based on sodium, which is far more abundant and cheaper than lithium, although sodium batteries currently store less energy for their weight. For large-scale electricity storage, 'flow batteries', which store energy in liquid tanks, may be useful because they can be easily expanded. The success of these technologies could play a major role in the transition to clean energy.",
          ],
          questions: [
            { text: "According to paragraph 1, why are batteries important for renewable energy?", options: ["They store electricity from sources that do not produce energy at all times.", "They produce solar power.", "They replace wind turbines.", "They make electricity cheaper to produce."], answer: 0 },
            { text: "According to paragraph 2, what is one limitation of lithium-ion batteries?", options: ["They rely on mined materials that can cause environmental damage.", "They cannot be recharged.", "They are too heavy for phones.", "They never lose capacity."], answer: 0 },
            { text: "The word \"abundant\" in paragraph 3 is closest in meaning to", options: ["plentiful", "rare", "dangerous", "expensive"], answer: 0 },
            { text: "According to paragraph 3, what is a potential advantage of solid-state batteries?", options: ["They may be safer and store more energy.", "They use more cobalt.", "They are liquid.", "They are larger and heavier."], answer: 0 },
            { text: "Why might flow batteries be useful for large-scale storage?", options: ["They can be easily expanded.", "They are very small.", "They need no liquid.", "They are only used in phones."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Volkan", prompt: "Why are you carrying a toolbox?", chunks: ["I", "am fixing", "my neighbor's", "broken", "door"], end: "." },
      { promptBy: "Rose", prompt: "Did you enjoy the photography exhibition?", chunks: ["the photos", "of", "the mountains", "were", "stunning"], end: "." },
      { promptBy: "Aslı", prompt: "I'm always nervous before job interviews.", chunks: ["why don't", "you", "practice", "with", "a friend first"], end: "?" },
      { promptBy: "Mark", prompt: "How long have you lived in this apartment?", chunks: ["we", "moved", "here", "about", "three years ago"], end: "." },
      { promptBy: "Gizem", prompt: "When does the swimming competition start?", chunks: ["it", "starts", "at", "nine", "on Saturday"], end: "." },
      { promptBy: "Jason", prompt: "Why is the restaurant so quiet?", chunks: ["it", "is", "still", "early", "for dinner"], end: "." },
      { promptBy: "Nilay", prompt: "What did your sister study abroad?", chunks: ["she", "studied", "marine", "biology", "in Australia"], end: "." },
      { promptBy: "Sam", prompt: "Where can I buy fresh flowers?", chunks: ["there is", "a flower", "shop", "next to", "the bakery"], end: "." },
      { promptBy: "Hande", prompt: "The music is too loud in here.", chunks: ["should", "we", "find", "a quieter", "table"], end: "?" },
      { promptBy: "Tim", prompt: "Why did you start learning to sail?", chunks: ["I", "want to", "sail", "around", "the islands"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You recently attended a university open day with your younger brother, who is considering applying. You were impressed but have some questions. You want to write to the admissions office.",
      to: "the university admissions office",
      subject: "Questions after the open day",
      tasks: ["Explain that you attended the open day and what you liked.", "Ask questions about the application process.", "Ask about support for new students."],
      sample: "Dear Admissions Office,\n\nLast Saturday, I attended the university open day with my younger brother, Emre, who is in his final year of high school and is thinking about applying to your Computer Science program. We were both very impressed. The campus tour was well organized, the student guides were friendly and helpful, and the presentation about the Computer Science program, especially the information about internships with local companies, was extremely useful.\n\nWe do have a few questions about the application process. Could you please tell us when applications for next year open and what documents are required? We would also like to know whether there is an interview or any additional test for the Computer Science program, and what kinds of scholarships are available for students with high grades.\n\nFinally, Emre would be moving away from home for the first time, so we are interested in the support offered to new students. Is accommodation guaranteed for first-year students, and are there programs to help new students settle in, such as mentoring or orientation activities?\n\nThank you very much for your help.\n\nKind regards,\nAyşe Doğan",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Economics",
      professor: {
        name: "Dr. Russell",
        text: "Some people believe that electric cars should receive large government subsidies to encourage people to buy them and reduce emissions. Others argue that the money would be better spent on public transport, which can serve many more people. Should governments subsidize electric cars or invest more in public transport? Explain your view.",
      },
      students: [
        { name: "Chloe", text: "Subsidize electric cars. Many people need cars, especially outside cities, so helping them switch to electric ones reduces pollution quickly." },
        { name: "Hakan", text: "Invest in public transport. Electric cars still cause traffic jams, and subsidies mostly help wealthier people who can afford new cars." },
      ],
      sample: "I believe governments should prioritize investment in public transport, while offering more limited and targeted support for electric cars. Hakan makes an important point: a good public transport system can move far more people using less energy and space, reducing traffic congestion as well as emissions. Subsidies for electric cars often benefit wealthier households, who are more likely to buy new vehicles. However, Chloe is right that many people, especially in rural areas, depend on cars and will continue to do so. For them, switching to electric vehicles can significantly reduce pollution. Therefore, governments could focus subsidies on lower-income drivers and rural residents, invest in charging infrastructure and spend the majority of their budgets on improving buses, trains and cycling networks in and between cities.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new staff member at a conference registration desk. The organizer is telling you what to say to participants.",
      sentences: [
        "Good morning, welcome to the conference.",
        "May I have your name, please?",
        "Here is your name tag and program.",
        "Coffee is served in the main hall.",
        "The first talk begins at nine thirty.",
        "If you are presenting today, please give your slides to the technician in your room at least thirty minutes before your session.",
        "Lunch will be served in the garden at one o'clock, and the conference dinner will take place this evening at the hotel restaurant.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about science and discovery. The researcher will ask you some questions.",
      questions: [
        {
          text: "Which scientific discovery do you think has changed the world the most?",
          sample: "I think the discovery of antibiotics, especially penicillin, has changed the world the most. Before antibiotics, even small infections could be deadly, and many people died from diseases that are now easy to treat. Antibiotics have saved millions of lives and made surgery much safer. However, we now face the problem of antibiotic resistance, so it's important to use them carefully.",
        },
        {
          text: "Were you interested in science when you were at school?",
          sample: "Yes, I was very interested in science, especially chemistry. I loved doing experiments in the laboratory, like mixing substances to see how they changed color. My chemistry teacher was very enthusiastic and always explained how science connects to everyday life, such as cooking or cleaning. Although I didn't choose a science career, I still enjoy reading about new discoveries.",
        },
        {
          text: "Should governments spend more money on scientific research?",
          sample: "Yes, I think governments should spend more on scientific research. Research leads to new medicines, technologies and solutions to problems like climate change. Many important discoveries came from research that didn't seem useful at first. However, governments should also make sure that research money is used wisely and that the results benefit society. Supporting young scientists and encouraging cooperation between countries is also important.",
        },
        {
          text: "How can people be encouraged to become interested in science?",
          sample: "People can become more interested in science through hands-on experiences, like visiting science museums, doing simple experiments at home or attending public lectures. Schools could make science lessons more practical and connected to real-life problems. Popular science books, documentaries and videos can also make complex topics easier to understand. When people see how science affects their daily lives, they are more likely to become curious about it.",
        },
      ],
    },
  },
};
