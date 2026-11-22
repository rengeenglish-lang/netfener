import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 79 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_79: ToeflTest = {
  id: "toefl-79",
  no: 79,
  title: "TOEFL iBT Practice Test 79",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Coat hangers",
          text: "Before coat hangers became common, people usually hung their clothes on hooks or folded them in wooden ch{{ests}}. This often left clothes wrinkled and out of sha{{pe}}. According to a popular story, the modern wire hanger was invented in 1903 by a factory wor{{ker}} in Michigan. He arrived at work one morning and found that all the coat ho{{oks}} were already in use. In frustration, he bent a piece of wi{{re}} into the shape of a person's shoul{{ders}} and hung his coat on it. His employer later patented the des{{ign}}. Wire hangers were cheap and easy to pro{{duce}}, and dry cleaners began to give them to custo{{mers}}. Today, hangers are also made of wood and plas{{tic}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Help choosing a laptop",
          text: [
            "Hi Taner, my old laptop finally stopped working, and I need a new one for my design classes. You know a lot about computers, so could you help me choose?",
            "My budget is about $900. Maybe we could visit the electronics store together on Saturday morning? I'll buy you lunch afterwards!",
          ],
          questions: [
            { text: "Why does the writer need a new laptop?", options: ["The old laptop stopped working.", "The writer lost the old laptop.", "The writer wants a gift for Taner.", "The old laptop was stolen."], answer: 0 },
            { text: "What does the writer suggest?", options: ["visiting the electronics store together on Saturday", "buying a laptop online tonight", "borrowing Taner's laptop", "repairing the old laptop"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Wi-Fi password change",
          text: [
            "IMPORTANT: NEW WI-FI PASSWORD",
            "For security reasons, the password for the residence hall wireless network will be changed every semester. The new password for this semester will take effect on Monday, February 3.",
            "The new password will be sent to each resident's university email address on Friday. Please do not share the password with visitors; guests can connect to the separate 'Guest' network at the front desk. If you have trouble connecting, contact the IT help desk.",
          ],
          questions: [
            { text: "Why is the password being changed?", options: ["for security reasons", "because the network is slow", "because of complaints", "because of new equipment"], answer: 0 },
            { text: "How will residents receive the new password?", options: ["by university email", "on a notice in the hallway", "from their roommates", "by text message"], answer: 0 },
            { text: "How can guests connect to the internet?", options: ["using the separate 'Guest' network", "using a resident's password", "they cannot connect", "by paying a fee"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "When deserts bloom",
          paragraphs: [
            "Deserts are usually imagined as empty, lifeless places of sand and rock. Yet in some deserts, unusually heavy rainfall can trigger a spectacular event: within days or weeks, the ground becomes covered with millions of colorful flowers. This phenomenon, sometimes called a 'superbloom', occurs in places such as the Atacama Desert in Chile, one of the driest places on Earth, and the deserts of California and southern Africa.",
            "The secret lies in the seeds. Many desert plants are annuals, meaning they complete their entire life cycle in a single season. During good years, these plants produce large numbers of seeds, which fall to the ground and may remain dormant in the soil for years or even decades. Their seed coats contain chemicals that prevent them from germinating after a light shower, which would not provide enough water for the plants to grow and produce new seeds. Only a substantial amount of rain washes away these chemicals and allows the seeds to sprout.",
            "Once they germinate, the plants must grow, flower and produce seeds quickly, before the soil dries out again. Their bright flowers attract bees, butterflies and other insects, which pollinate them and in turn provide food for birds and lizards. A superbloom can therefore support an entire burst of life across the desert ecosystem. These events have become popular tourist attractions, but large crowds can damage the fragile plants. Scientists also note that climate change may affect how often superblooms occur, since they depend on specific patterns of rainfall and temperature.",
          ],
          questions: [
            { text: "According to paragraph 1, what triggers a superbloom?", options: ["unusually heavy rainfall", "strong winds", "very hot temperatures", "a volcanic eruption"], answer: 0 },
            { text: "The word \"dormant\" in paragraph 2 is closest in meaning to", options: ["inactive", "growing", "dead", "colorful"], answer: 0 },
            { text: "According to paragraph 2, why don't seeds germinate after a light shower?", options: ["Chemicals in their seed coats prevent it.", "Birds eat them first.", "The ground is too cold.", "They need sunlight only."], answer: 0 },
            { text: "According to paragraph 3, why must the plants grow and flower quickly?", options: ["The soil will soon dry out again.", "Insects will eat them.", "Tourists will pick them.", "They only live one day."], answer: 0 },
            { text: "What concern is mentioned about superblooms?", options: ["Large crowds can damage the fragile plants.", "They spread diseases.", "They attract dangerous animals.", "They cause floods."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Cooking dinner for my parents",
          text: "Last month was my parents' wedding anniver{{sary}}. My sister and I decided to cook a special din{{ner}} for them. We planned the menu for a whole we{{ek}}. On the day, we sent our parents to the cin{{ema}} so they would not see what we were doing. We made vegetable soup, roast chic{{ken}} and a chocolate dess{{ert}}. The kitchen became very messy, but we cleaned everything before they came ho{{me}}. We also put candles and flowers on the ta{{ble}}. When our parents arrived, they were very surp{{rised}} and happy. It was a lovely eve{{ning}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Tango lessons",
          text: [
            "LEARN TO DANCE THE TANGO!",
            "Beginner tango lessons take place every Wednesday from 7 to 8:30 p.m. at the Riverside Dance Studio. No experience is necessary.",
            "The first lesson is free. After that, lessons cost $12 each, or $40 for a month. You can come alone or with a partner, as students change partners during the class. Please wear shoes with smooth soles.",
          ],
          questions: [
            { text: "When are the lessons?", options: ["every Wednesday evening", "every Saturday morning", "every weekday afternoon", "once a month"], answer: 0 },
            { text: "How much is the first lesson?", options: ["It is free.", "$12", "$40", "$5"], answer: 0 },
            { text: "What kind of shoes should students wear?", options: ["shoes with smooth soles", "sports shoes", "boots", "no shoes"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How lions hunt together",
          paragraphs: [
            "Lions are the only big cats that live in groups. A group of lions is called a pride. A pride usually has several adult females, their young and a few adult males.",
            "The female lions do most of the hunting. They often hunt together at night or early in the morning, when it is cooler. Working as a team helps them catch large animals, such as zebras and buffalo.",
            "During a hunt, some lions slowly move around the animals and chase them toward other lions that are hiding in the grass. After the hunt, the whole pride shares the meal. The male lions often eat first, and the young eat last.",
          ],
          questions: [
            { text: "What is a group of lions called?", options: ["a pride", "a pack", "a herd", "a flock"], answer: 0 },
            { text: "Who does most of the hunting?", options: ["the female lions", "the male lions", "the young lions", "the oldest lion only"], answer: 0 },
            { text: "Why do lions often hunt at night or early in the morning?", options: ["It is cooler.", "They cannot see during the day.", "Other animals are sleeping in the afternoon.", "They are afraid of people."], answer: 0 },
            { text: "The word \"chase\" in paragraph 3 is closest in meaning to", options: ["run after", "hide from", "feed", "call"], answer: 0 },
            { text: "Who usually eats last?", options: ["the young lions", "the male lions", "the females", "the leader"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Unit bias",
          text: "People tend to believe that a single serving, whatever its size, is the appropriate amount to eat or dri{{nk}}. Researchers call this tendency unit bi{{as}}. In one study, a large bowl of candy was placed in the lobby of an apartment buil{{ding}} with either a small spoon or a large spo{{on}}. Residents took much more candy when the spoon was lar{{ger}}, apparently because one spoonful seemed like the correct amo{{unt}}. Similar results appear with plates, pack{{ages}} and drink sizes. As restaurants and food compa{{nies}} have increased portion sizes over the decades, unit bias may have contributed to people eating more calo{{ries}}. Using smaller plates and buying smaller packages may help peo{{ple}} control how much they eat.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Library book recall",
          text: [
            "To: Library users",
            "From: University Library",
            "Subject: Recall notice for borrowed items",
            "A book you have borrowed, 'Principles of Organic Chemistry', has been requested by another user and has been recalled. Please return it to any library service desk by Thursday, March 20. Your original due date no longer applies.",
            "Recalls ensure that popular materials are available to everyone. If the book is not returned by the new due date, a fine of $2 per day will be added to your account, and your borrowing privileges may be suspended. If you still need the book, you may place your own request, and it will be returned to you once the other user has finished with it.",
          ],
          questions: [
            { text: "Why has the book been recalled?", options: ["Another user has requested it.", "It is damaged.", "It is being replaced by a new edition.", "The library is closing."], answer: 0 },
            { text: "What happens if the book is not returned by March 20?", options: ["A fine of $2 per day will be charged.", "The borrower must buy a new copy.", "Nothing happens.", "The borrower receives a warning only."], answer: 0 },
            { text: "What can the borrower do if they still need the book?", options: ["place their own request for it", "keep it until the end of the semester", "ask the other user to share it", "buy it from the library"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The promise of nuclear fusion",
          paragraphs: [
            "Nuclear fusion is the process that powers the Sun and other stars. In the extremely hot and dense core of a star, the nuclei of light atoms, mainly hydrogen, collide with such force that they fuse together to form heavier elements, releasing enormous amounts of energy. For decades, scientists have tried to reproduce this process on Earth as a source of electricity, because fusion could provide a nearly limitless supply of energy with very low carbon emissions.",
            "Fusion differs from the nuclear fission used in today's nuclear power plants, which splits heavy atoms such as uranium. Fission produces long-lived radioactive waste and carries a risk of serious accidents. Fusion, by contrast, uses fuels derived from abundant sources, such as a form of hydrogen found in seawater, and produces far less long-lasting radioactive waste. Moreover, a fusion reaction cannot run out of control; if conditions are disturbed, the reaction simply stops.",
            "The challenge is that fusion requires temperatures of over one hundred million degrees Celsius, several times hotter than the core of the Sun, because reactors on Earth cannot recreate the Sun's immense pressure. At such temperatures, matter becomes a plasma that must be held away from the walls of the reactor, typically by powerful magnetic fields. In 2022, scientists in the United States announced that a fusion experiment had, for the first time, produced more energy than was delivered to the fuel by lasers, an important milestone. However, the experiment as a whole still used far more energy than it produced, and most experts believe that commercial fusion power plants are still decades away.",
          ],
          questions: [
            { text: "According to paragraph 1, why have scientists tried to reproduce fusion on Earth?", options: ["It could provide nearly limitless energy with very low carbon emissions.", "It is cheaper than all other energy sources today.", "It requires no technology.", "It produces more carbon than coal."], answer: 0 },
            { text: "According to paragraph 2, how does fusion differ from fission?", options: ["Fusion produces far less long-lasting radioactive waste.", "Fusion splits heavy atoms.", "Fusion uses uranium.", "Fusion is more likely to cause accidents."], answer: 0 },
            { text: "The word \"abundant\" in paragraph 2 is closest in meaning to", options: ["plentiful", "rare", "dangerous", "expensive"], answer: 0 },
            { text: "According to paragraph 3, why must fusion reactors reach extremely high temperatures?", options: ["They cannot recreate the Sun's immense pressure.", "The fuel is frozen.", "Magnetic fields require heat.", "The walls must melt."], answer: 0 },
            { text: "What does the author say about the 2022 experiment?", options: ["It was a milestone, but the experiment as a whole still used more energy than it produced.", "It proved that fusion power plants are ready.", "It failed completely.", "It used fission instead of fusion."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Volkan", prompt: "Why are you wearing a bandage?", chunks: ["I", "hurt", "my wrist", "playing", "volleyball"], end: "." },
      { promptBy: "Amy", prompt: "Did you enjoy your trip to the mountains?", chunks: ["the views", "were", "even", "more beautiful", "than I expected"], end: "." },
      { promptBy: "Gamze", prompt: "I always feel stressed before exams.", chunks: ["have you", "tried", "doing", "breathing", "exercises"], end: "?" },
      { promptBy: "Chris", prompt: "How did you become a teacher?", chunks: ["I", "studied", "education", "at", "a university in Ankara"], end: "." },
      { promptBy: "Ebru", prompt: "When will the package arrive?", chunks: ["it", "should", "arrive", "within", "three days"], end: "." },
      { promptBy: "Sam", prompt: "Why is the gym closed this week?", chunks: ["they", "are", "installing", "new", "equipment"], end: "." },
      { promptBy: "Nilay", prompt: "What did you learn on the course?", chunks: ["I", "learned", "how to", "write", "better reports"], end: "." },
      { promptBy: "Joe", prompt: "Where did you put my keys?", chunks: ["I", "left them", "on", "the kitchen", "table"], end: "." },
      { promptBy: "Sena", prompt: "This box is too big for my car.", chunks: ["could we", "use", "your", "brother's", "van"], end: "?" },
      { promptBy: "Tim", prompt: "Why did you decide to learn sign language?", chunks: ["I", "want to", "communicate", "with", "my deaf cousin"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You signed up for a two-day professional training workshop, but you have just learned that you must attend an important family event on the second day. You want to write to the workshop organizer.",
      to: "the workshop organizer, Ms. Turner",
      subject: "Attendance at the project management workshop",
      tasks: ["Explain which workshop you registered for.", "Explain why you cannot attend the full workshop.", "Ask about your options."],
      sample: "Dear Ms. Turner,\n\nI registered last month for the two-day Project Management Fundamentals workshop, which will take place on May 22 and 23 at the Business Training Center. I paid the full fee of $350, and my registration number is PM-2047.\n\nUnfortunately, I have just learned that my brother's wedding has been moved to May 23, and as I am one of the witnesses, I must attend. I am very sorry, because I was really looking forward to the workshop, especially the practical sessions on planning and risk management, which my manager recommended.\n\nI would like to ask about my options. Would it be possible to attend the first day of this workshop and the second day of the next one, if another session is planned later this year? Alternatively, could I transfer my registration to a future workshop or receive a partial refund for the day I will miss?\n\nThank you for your understanding, and I look forward to your reply.\n\nKind regards,\nAyşe Bulut",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Public Health",
      professor: {
        name: "Dr. Reid",
        text: "In some countries, food packages must show warning labels, such as 'high in sugar' or 'high in salt', on the front of the package. Supporters say this helps consumers make healthier choices. Critics argue that people ignore the labels and that it is unfair to food companies. Should warning labels on unhealthy foods be required? Explain your view.",
      },
      students: [
        { name: "Isla", text: "Yes. Most people don't read the small nutrition table on the back. A clear warning on the front makes it obvious which products are unhealthy." },
        { name: "Cem", text: "I don't think so. People already know that chocolate and chips are unhealthy. Labels won't change what they buy." },
      ],
      sample: "I support requiring clear warning labels on unhealthy foods. Isla is right that the detailed nutrition information on the back of packages is difficult for many people to understand, especially when they are shopping quickly. A simple warning on the front, such as 'high in sugar', allows people to compare products in seconds. Evidence from countries such as Chile suggests that such labels can reduce purchases of sugary drinks and encourage companies to make their products healthier to avoid the warnings. Cem makes a fair point that people know some foods, like candy, are unhealthy. However, many products that seem healthy, such as breakfast cereals, flavored yogurts and fruit juices, contain surprisingly high amounts of sugar or salt. Labels would help people recognize these hidden risks, so I believe their benefits outweigh their costs.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new assistant at an art gallery. The gallery manager is telling you what to say to visitors.",
      sentences: [
        "Welcome to the gallery.",
        "Please leave large bags at the coat room.",
        "Do not touch the paintings.",
        "The new exhibition is on the second floor.",
        "Audio guides are available in four languages.",
        "If you would like to buy a print of a painting, you can order one at the gift shop near the exit.",
        "On the first Friday of every month, the gallery stays open until ten in the evening, and there is live music in the main hall.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences of family life. The researcher will ask you some questions.",
      questions: [
        {
          text: "What is a family tradition that is important to you?",
          sample: "An important family tradition for us is having a big breakfast together every Sunday morning. My mother prepares many small dishes, like cheese, olives, eggs and fresh bread, and we sit at the table for hours talking about our week. Even now that I live in another city for university, I try to join by video call. It makes me feel connected to my family, no matter where I am.",
        },
        {
          text: "Do you think families spend enough time together today?",
          sample: "I think many families don't spend as much time together as they would like. Parents often work long hours, and children have school, homework and activities. Even when families are at home together, everyone may be looking at their own screen. However, I think many families try to make time for important moments, like meals or holidays. Setting aside regular family time without phones can really help.",
        },
        {
          text: "Is it better to grow up in a large family or a small family?",
          sample: "Both have advantages. In a large family, children always have someone to play with and learn to share and cooperate from an early age. There's often a lot of support and fun. In a small family, children may get more attention from their parents, and there may be more resources for each child, like money for education. I grew up with one sister, and I liked having a close relationship with her.",
        },
        {
          text: "How have family roles changed compared with the past?",
          sample: "Family roles have changed quite a lot. In the past, men were usually the main earners, while women stayed at home and took care of the children. Today, in many families, both parents work and share household tasks and childcare more equally. Fathers are also more involved in their children's daily lives. Of course, there are still differences between families and cultures, but roles have become much more flexible.",
        },
      ],
    },
  },
};
