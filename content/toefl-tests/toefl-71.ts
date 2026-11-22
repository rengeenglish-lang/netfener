import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 71 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_71: ToeflTest = {
  id: "toefl-71",
  no: 71,
  title: "TOEFL iBT Practice Test 71",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Thermos flasks",
          text: "The vacuum flask, often called a thermos, was invented in 1892 by a Scottish scien{{tist}} named James Dewar. He was not trying to keep coffee hot; he needed a container that could store very cold liquids for his labora{{tory}} experiments. His flask consisted of two glass bottles, one inside the ot{{her}}, with the air removed from the space between th{{em}}. Because heat cannot easily travel through a vacuum, the liquid inside stayed at the same tempe{{rature}} for a long time. Dewar never patented his inven{{tion}}. A few years later, a German company began selling similar flasks to the pub{{lic}} and held a competition to choose a na{{me}}. The winning name was \"Thermos\", from the Greek word for he{{at}}. Today, people use these flasks to keep drinks hot or cold for many ho{{urs}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Change of plans for the hike",
          text: [
            "Hi everyone! The weather forecast says there will be heavy rain on Saturday, so let's move our hike to Sunday morning instead.",
            "We'll still meet at the bus station at 8. Please bring waterproof jackets just in case, and don't forget water and snacks!",
          ],
          questions: [
            { text: "Why is the hike moving to Sunday?", options: ["Heavy rain is expected on Saturday.", "The bus station is closed.", "Someone is sick.", "The trail is closed on Saturday."], answer: 0 },
            { text: "What is the meeting time on Sunday?", options: ["8 a.m.", "10 a.m.", "noon", "6 p.m."], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Bike lane construction",
          text: [
            "CONSTRUCTION ON CAMPUS ROAD",
            "A new protected bike lane is being built along Campus Road. Construction will take place from April 1 to May 15, Monday to Friday, between 7 a.m. and 5 p.m.",
            "During this period, one lane of Campus Road will be closed to cars, and drivers should expect delays. Cyclists should use the temporary route through the sports fields, which is marked with orange signs.",
          ],
          questions: [
            { text: "What is being built along Campus Road?", options: ["a protected bike lane", "a new parking lot", "a bus station", "a pedestrian bridge"], answer: 0 },
            { text: "What should drivers expect during construction?", options: ["delays", "free parking", "no changes", "a new speed limit"], answer: 0 },
            { text: "Where should cyclists ride during construction?", options: ["on a temporary route through the sports fields", "on the sidewalk", "on Campus Road", "inside the library"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The discovery of the Terracotta Army",
          paragraphs: [
            "In 1974, farmers digging a well near the city of Xi'an in central China struck pieces of clay that turned out to be parts of a life-sized human figure. Archaeologists soon realized they had found something extraordinary: an underground army of thousands of terracotta, or baked clay, soldiers, buried more than two thousand years ago to guard the tomb of Qin Shi Huang, the first emperor to unify China.",
            "The figures are remarkable for their size and detail. Each soldier is about the height of a real person, and no two faces appear to be exactly the same. The soldiers differ in hairstyle, clothing and posture according to their rank and role, including infantrymen, archers, officers and cavalrymen with horses. Originally, they were painted in bright colors and carried real bronze weapons. Scholars believe that workshops used a combination of molds and hand-shaping to produce the figures, with craftsmen adding individual features to each one.",
            "Only a portion of the site has been excavated, and the emperor's tomb itself remains unopened. Archaeologists have been cautious partly because of the difficulty of preserving what they find. When the figures were first uncovered, much of the paint flaked off within minutes of exposure to air, leaving the gray clay seen today. Ancient historical texts also describe the tomb as containing rivers of mercury, and soil tests near the site have shown high levels of the toxic metal. Many experts believe it would be wiser to wait until better technology is available before attempting further excavation.",
          ],
          questions: [
            { text: "According to paragraph 1, how was the Terracotta Army discovered?", options: ["Farmers digging a well struck pieces of clay.", "Archaeologists found an ancient map.", "An earthquake revealed it.", "Tourists found it in a cave."], answer: 0 },
            { text: "According to paragraph 2, what is notable about the soldiers' faces?", options: ["No two faces appear to be exactly the same.", "They all have the same face.", "They have no faces.", "They are made of bronze."], answer: 0 },
            { text: "The word \"excavated\" in paragraph 3 is closest in meaning to", options: ["dug up", "painted", "photographed", "rebuilt"], answer: 0 },
            { text: "What happened to the paint when the figures were first uncovered?", options: ["Much of it flaked off within minutes.", "It became brighter.", "It turned gold.", "It remained perfectly preserved."], answer: 0 },
            { text: "Why do many experts believe further excavation should wait?", options: ["Better technology may help preserve what is found.", "The site is too dangerous for tourists.", "The emperor's tomb has already been opened.", "There is nothing left to find."], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "A visit to the fire station",
          text: "Last week, my class visited the fire sta{{tion}} in our town. A friendly firefighter showed us the big red tr{{uck}}. It had long ladders and many ho{{ses}}. We were allowed to sit in the dri{{ver}}'s seat and press the horn. Then the firefighter put on his special clo{{thes}} and helmet. He told us that the clothes protect him from fi{{re}} and smoke. He also explained what to do if there is a fire at ho{{me}}. At the end, we all got small toy hel{{mets}}. Now my brother wants to be a fire{{fighter}} when he gro{{ws}} up.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Indoor plant sale",
          text: [
            "GREEN UP YOUR HOME!",
            "The Botany Club is holding an indoor plant sale in the Science Building lobby on Wednesday and Thursday from 11 a.m. to 4 p.m.",
            "Small plants start at $3, and large plants cost up to $20. Club members will give you advice on how to care for your new plant. All money will be used for the club's greenhouse.",
          ],
          questions: [
            { text: "Where is the plant sale?", options: ["in the Science Building lobby", "in the library", "at a garden center", "outdoors"], answer: 0 },
            { text: "What will club members offer?", options: ["advice on caring for plants", "free pots", "delivery", "seeds"], answer: 0 },
            { text: "What will the money be used for?", options: ["the club's greenhouse", "a trip", "new computers", "a party"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How butterflies taste with their feet",
          paragraphs: [
            "Butterflies are colorful insects that drink sweet nectar from flowers. They have a very surprising way of tasting food.",
            "Butterflies have taste sensors on their feet. When a butterfly lands on a flower or a leaf, its feet can tell whether it is good to eat. Then the butterfly uncurls its long, thin mouth, called a proboscis, and drinks.",
            "Female butterflies also use their feet to choose where to lay their eggs. They taste the leaves to make sure the plant is good food for the caterpillars that will hatch. This helps the young caterpillars survive.",
          ],
          questions: [
            { text: "What do butterflies drink?", options: ["sweet nectar from flowers", "water from rivers", "milk", "tree sap only"], answer: 0 },
            { text: "Where are butterflies' taste sensors?", options: ["on their feet", "on their wings", "in their eyes", "on their antennas only"], answer: 0 },
            { text: "What is a proboscis?", options: ["a butterfly's long, thin mouth", "a type of flower", "a butterfly egg", "a butterfly wing"], answer: 0 },
            { text: "The word \"uncurls\" in paragraph 2 is closest in meaning to", options: ["straightens out", "hides", "bites", "colors"], answer: 0 },
            { text: "Why do female butterflies taste leaves?", options: ["to choose a good plant for laying eggs", "to find water", "to build nests", "to clean their feet"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Mental accounting",
          text: "Traditional economic theory assumes that money is interchangeable: a dollar is a dollar, no matter where it comes fr{{om}}. In practice, however, people often treat money differently depending on its sou{{rce}} or intended use. Economists call this mental accoun{{ting}}. For example, someone might carefully save their salary but quickly spend a tax ref{{und}} or a gift on luxury items, even though the mo{{ney}} has exactly the same value. Similarly, people may keep savings in a low-interest acc{{ount}} for a holiday while paying high interest on a credit ca{{rd}}. Mental accounting can help people control their spen{{ding}}, but it can also lead to choices that are not finan{{cially}} logi{{cal}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Mathematics placement test",
          text: [
            "To: Incoming first-year students in science and engineering",
            "From: Department of Mathematics",
            "Subject: Mathematics placement test before registration",
            "All incoming students in science and engineering programs must take an online mathematics placement test before registering for their first-semester courses. The test takes about ninety minutes and covers algebra, functions and basic trigonometry. Your score will determine whether you begin with Calculus I or a preparatory course.",
            "The test must be completed by August 20. You may take it only once, and the use of calculators, notes or other people's help is not permitted. Students who score close to the cutoff may request a short interview with an advisor to discuss their placement.",
          ],
          questions: [
            { text: "What does the placement test determine?", options: ["whether students start with Calculus I or a preparatory course", "which major students can choose", "students' scholarships", "students' housing"], answer: 0 },
            { text: "Which of the following is NOT permitted during the test?", options: ["using a calculator", "taking the test online", "completing it before August 20", "taking about ninety minutes"], answer: 0 },
            { text: "What can students who score close to the cutoff do?", options: ["request a short interview with an advisor", "retake the test", "skip the test", "choose any course"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Algorithmic bias",
          paragraphs: [
            "Computer algorithms increasingly make or support decisions that affect people's lives, from which job applicants are invited for interviews to who receives a loan or which neighborhoods receive more police patrols. Many of these systems use machine learning, a technique in which computers identify patterns in large amounts of historical data and use them to make predictions. Supporters argue that algorithms can be faster and more consistent than human decision-makers, who may be influenced by mood, fatigue or personal prejudice.",
            "However, researchers have found that algorithms can also produce biased or unfair results. One major reason is that they learn from data that may reflect past discrimination. For example, if a company has historically hired mostly men for technical positions, an algorithm trained on its past hiring decisions may learn to favor male applicants, even if gender is not directly included in the data. Other features, such as the names of certain schools or hobbies, can act as indirect signals. Similarly, facial recognition systems trained mainly on images of lighter-skinned people have been shown to make more errors when identifying people with darker skin.",
            "Addressing algorithmic bias is challenging, partly because many algorithms are complex and their decision-making processes are difficult to explain, even for their designers. Proposed solutions include testing systems for unfair outcomes before they are used, improving the diversity of training data and requiring companies to be transparent about how their algorithms work. Some governments have introduced regulations that require high-risk systems to be audited. Experts emphasize that algorithms are not neutral simply because they are mathematical; they reflect the choices of the people who design them and the data they are given.",
          ],
          questions: [
            { text: "According to paragraph 1, why do supporters favor algorithms?", options: ["They can be faster and more consistent than humans.", "They never make mistakes.", "They are cheaper than all humans.", "They are always transparent."], answer: 0 },
            { text: "According to paragraph 2, why might a hiring algorithm favor male applicants?", options: ["It learned from past hiring decisions that favored men.", "Gender is the only data it uses.", "Its designers told it to.", "Women did not apply."], answer: 0 },
            { text: "The word \"indirect\" in paragraph 2 is closest in meaning to", options: ["not obvious", "very clear", "illegal", "intentional"], answer: 0 },
            { text: "According to paragraph 3, why is addressing algorithmic bias challenging?", options: ["Many algorithms are complex and hard to explain.", "Algorithms cannot be changed.", "No one uses algorithms.", "Data is always perfect."], answer: 0 },
            { text: "What do experts emphasize about algorithms?", options: ["They reflect the choices of their designers and their data.", "They are always neutral because they are mathematical.", "They should replace all human decisions.", "They cannot be regulated."], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Barış", prompt: "Why are you buying a new suitcase?", chunks: ["my old one", "broke", "during", "my last", "trip"], end: "." },
      { promptBy: "Anna", prompt: "Did you enjoy the cooking class?", chunks: ["we", "learned", "to make", "three kinds", "of bread"], end: "." },
      { promptBy: "Zeynep", prompt: "I can't decide which phone to buy.", chunks: ["why don't", "you", "compare", "their", "battery life"], end: "?" },
      { promptBy: "Oliver", prompt: "How was your first day at university?", chunks: ["it", "was", "exciting", "but", "a little confusing"], end: "." },
      { promptBy: "Nur", prompt: "When will the bus arrive?", chunks: ["it", "should", "be here", "in", "five minutes"], end: "." },
      { promptBy: "Will", prompt: "Why is the lecture hall so crowded?", chunks: ["a famous", "scientist", "is", "giving", "a talk"], end: "." },
      { promptBy: "Sena", prompt: "What did you think of the museum?", chunks: ["the exhibits", "were", "interesting", "and well", "explained"], end: "." },
      { promptBy: "Dan", prompt: "Where should we meet for lunch?", chunks: ["let's", "meet", "at", "the café", "near the station"], end: "." },
      { promptBy: "İrem", prompt: "My presentation file won't open.", chunks: ["did you", "save", "a copy", "on", "your email"], end: "?" },
      { promptBy: "Tim", prompt: "Why did you start learning Korean?", chunks: ["I", "became", "interested in", "Korean", "films"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "Your manager has asked you to attend a conference abroad next month. You need to ask the company's travel department to book your flights and hotel.",
      to: "the travel department",
      subject: "Travel arrangements for the Berlin conference",
      tasks: ["Explain why you are traveling.", "Give details about the dates and your preferences.", "Ask about anything else you need to know."],
      sample: "Dear Travel Department,\n\nMy manager, Ms. Aydın, has asked me to represent our team at the European Digital Marketing Conference in Berlin, which will take place from October 14 to 16. I am writing to request your help with booking my flights and accommodation.\n\nI would like to fly from Istanbul to Berlin on the afternoon of October 13, so that I can attend the opening session the next morning, and return on the evening of October 16. If possible, I would prefer a direct flight. For accommodation, I would appreciate a hotel within walking distance of the conference center, which is located near Alexanderplatz. A quiet room with a desk would be ideal, as I will need to prepare for my presentation.\n\nCould you also let me know how expenses such as local transport and meals will be covered? I would also like to know whether the company provides travel insurance or whether I should arrange it myself.\n\nThank you very much for your assistance.\n\nBest regards,\nMert Yalçın",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Psychology",
      professor: {
        name: "Dr. Bennett",
        text: "Some people believe that competition at school, such as ranking students by their grades or giving prizes to the best students, motivates students to work harder. Others think competition creates stress and discourages students who are not at the top. Is competition between students more helpful or harmful? Explain your view.",
      },
      students: [
        { name: "Ruby", text: "Helpful. Competition pushes students to do their best and prepares them for real life, where people compete for jobs and opportunities." },
        { name: "Doruk", text: "Harmful. When students are constantly compared, those who are struggling lose confidence and stop trying. Cooperation teaches more useful skills." },
      ],
      sample: "I think competition between students can be helpful in small amounts, but schools should place greater emphasis on cooperation and personal progress. Ruby makes a fair point that competition can motivate some students to work harder, and activities like science fairs or sports tournaments can be exciting and help students discover their talents. Adult life does involve competition for jobs and opportunities. However, Doruk is right that constant comparison, such as publicly ranking students, can harm those who are struggling. When students feel they can never win, they may lose motivation entirely. Schools could reduce this problem by rewarding improvement and effort as well as top results, and by using group projects that require students to share ideas and support one another. This approach would keep the benefits of competition while protecting students' confidence.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AndrewNeural",
    repeat: {
      scene: "You are a new employee at a sports equipment store. Your manager is telling you what to say to customers.",
      sentences: [
        "Hi there, are you looking for anything special?",
        "Running shoes are on the left wall.",
        "You can try them on over there.",
        "We have a special offer on tennis rackets.",
        "Bicycle helmets are next to the cash register.",
        "If the shoes don't fit, you can exchange them within thirty days as long as they haven't been worn outside.",
        "Members of our running club receive a ten percent discount on all products and are invited to free training sessions every Sunday morning.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's opinions about school and education. The researcher will ask you some questions.",
      questions: [
        {
          text: "Who was your favorite teacher, and why?",
          sample: "My favorite teacher was my high school literature teacher, Mrs. Demir. She made every lesson feel like a conversation rather than a lecture. She encouraged us to share our own opinions about the books we read, even if they were different from hers. She also helped me become more confident in writing by giving detailed feedback on my essays. I think she is the reason I still love reading today.",
        },
        {
          text: "Do you think students should wear school uniforms?",
          sample: "I think school uniforms have some advantages. They can reduce pressure on students to wear expensive, fashionable clothes, and they may help create a sense of belonging to the school. They also make getting ready in the morning easier. However, uniforms can limit students' self-expression, and some are uncomfortable. A good compromise might be a simple dress code that allows some choice while keeping clothes appropriate for school.",
        },
        {
          text: "Should students be allowed to choose the subjects they study?",
          sample: "I think students should have some freedom to choose their subjects, especially in the later years of high school. When students study subjects they're interested in, they're usually more motivated and perform better. However, younger students should still study a broad range of core subjects, like math, languages and science, because these provide important foundations. Choice should increase gradually as students become more mature and understand their interests.",
        },
        {
          text: "What skills do you think schools should teach that they don't teach now?",
          sample: "I think schools should teach more practical life skills, like managing personal finances, cooking healthy meals and understanding basic legal rights, such as reading a rental contract. They should also focus more on digital literacy, teaching students how to identify false information online and protect their privacy. Skills like communication, teamwork and managing stress are also very important for success in life, and they could be included in many subjects.",
        },
      ],
    },
  },
};
