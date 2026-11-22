import type { ToeflTest } from "./types";

/** TOEFL iBT Practice Test 84 (2026 format). Original Netfener content. Listening is added later. */
export const TOEFL_84: ToeflTest = {
  id: "toefl-84",
  no: 84,
  title: "TOEFL iBT Practice Test 84",

  // ================= READING =================
  reading: {
    routeAt: 0.6,
    stage1: {
      minutes: 15,
      tasks: [
        {
          kind: "complete-words",
          title: "Hammocks",
          text: "Hammocks were first developed by Indigenous peoples in Central and South America hundreds of years ago. They were usually woven from the bark of trees or plant fib{{ers}} and hung between two trees. Sleeping above the ground kept people safe from snakes, insects and wet so{{il}}. When European explorers arrived in the Caribbean, they were impressed by these hanging be{{ds}}, and the word \"hammock\" comes from a local lang{{uage}}. Sailors soon began using hammocks on ships, because they took up little sp{{ace}} and swung with the movement of the waves, so sailors were less likely to fall o{{ut}} in rough seas. Hammocks were used on many naval ships until the twentieth cen{{tury}}. Today, people mainly use them for relaxing in gardens or while cam{{ping}}, and some even believe they help people sleep bet{{ter}} at ni{{ght}}.",
        },
        {
          kind: "daily-life",
          genre: "Text message",
          title: "Borrowing hiking boots",
          text: [
            "Hi Murat, I'm going on a weekend hiking trip with my class, but my hiking boots are too small now. We wear the same size, right?",
            "Could I borrow yours from Friday to Sunday? I'll clean them before I give them back. I can pick them up after work on Thursday.",
          ],
          questions: [
            { text: "Why does the writer need to borrow boots?", options: ["The writer's boots are too small.", "The writer lost the boots.", "The writer's boots are broken.", "The writer never had boots."], answer: 0 },
            { text: "When will the writer pick up the boots?", options: ["after work on Thursday", "on Friday morning", "on Sunday", "tonight"], answer: 0 },
          ],
        },
        {
          kind: "daily-life",
          genre: "Notice",
          title: "Approved calculators for exams",
          text: [
            "CALCULATOR RULES FOR FINAL EXAMS",
            "Only simple scientific calculators may be used in mathematics, physics and engineering exams this semester. Calculators that can store text, connect to the internet or draw graphs are not permitted.",
            "A list of approved models is posted on the Exams Office website. Calculators will be checked by exam supervisors before each exam. Students who do not have an approved calculator may borrow one from the Exams Office by showing their student card.",
          ],
          questions: [
            { text: "Which calculators are permitted?", options: ["simple scientific calculators", "calculators that connect to the internet", "graphing calculators", "phone calculators"], answer: 0 },
            { text: "Where can students find the list of approved models?", options: ["on the Exams Office website", "in the library", "on the classroom door", "in their textbooks"], answer: 0 },
            { text: "How can students without an approved calculator get one?", options: ["borrow one from the Exams Office", "buy one at the exam", "share with a friend during the exam", "use their phone"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "How mummies were made in ancient Egypt",
          paragraphs: [
            "The ancient Egyptians believed that a person's body needed to be preserved after death so that the soul could recognize it and live on in the afterlife. To achieve this, they developed the process of mummification, which was practiced for more than two thousand years. Early Egyptians buried their dead in the hot, dry desert sand, which naturally preserved bodies, and this may have inspired the later practice.",
            "Mummification was a long and careful process that could take about seventy days. First, embalmers removed the internal organs, since these decayed most quickly. The brain was usually removed through the nose, while organs such as the lungs, stomach and liver were taken out through a cut in the side of the body and stored in special containers. The heart, however, was often left in place, because Egyptians believed it was the center of a person's intelligence and would be needed in the afterlife.",
            "Next, the body was covered with a type of salt called natron, which absorbed moisture and dried it out over about forty days. After this, the body was cleaned, rubbed with oils and resins, and wrapped in hundreds of meters of linen bandages, often with protective charms placed between the layers. Finally, the mummy was placed in a decorated coffin. Because the process was expensive, the most elaborate mummification was reserved for royalty and wealthy families. Today, scientists use medical scanning technology to study mummies without unwrapping them, learning about ancient diseases, diets and daily life.",
          ],
          questions: [
            { text: "According to paragraph 1, why did the Egyptians preserve bodies?", options: ["so the soul could recognize the body in the afterlife", "to display them in museums", "to frighten enemies", "because burial was illegal"], answer: 0 },
            { text: "According to paragraph 2, why was the heart often left in place?", options: ["It was believed to be the center of intelligence.", "It was too difficult to remove.", "It did not decay.", "It was given to the family."], answer: 0 },
            { text: "The word \"decayed\" in paragraph 2 is closest in meaning to", options: ["broke down", "grew", "dried", "hardened"], answer: 0 },
            { text: "What was the purpose of natron?", options: ["to absorb moisture and dry the body", "to color the bandages", "to make the body smell pleasant", "to preserve the coffin"], answer: 0 },
            { text: "How do scientists study mummies today?", options: ["using medical scanning technology without unwrapping them", "by removing all bandages", "by reading their diaries", "by cutting them open"], answer: 0 },
          ],
        },
      ],
    },
    easier: {
      minutes: 13,
      tasks: [
        {
          kind: "complete-words",
          title: "Flying a kite with Dad",
          text: "Last spring, my father and I made a kite toge{{ther}}. We used thin wooden sticks, colorful pa{{per}} and a long string. It took us the whole after{{noon}}. The next day, it was very wi{{ndy}}, so we took the kite to a big field near our ho{{use}}. My father held the kite, and I ran as fast as I co{{uld}}. At first, it fell to the gro{{und}}. Then the wind caught it, and it flew high into the s{{ky}}! I held the string tightly. We stayed in the field until the sun went do{{wn}}. It was one of the best days of the ye{{ar}}.",
        },
        {
          kind: "daily-life",
          genre: "Advertisement",
          title: "Kids' gardening club",
          text: [
            "GROW YOUR OWN VEGETABLES!",
            "Our gardening club for children aged 6 to 12 meets every Saturday morning from 9 to 11 at Sunny Fields Community Garden, from April to September.",
            "Children will plant seeds, water plants and pick vegetables to take home. Membership costs $30 for the whole season, including gloves and tools. Please dress children in clothes that can get dirty.",
          ],
          questions: [
            { text: "Who is the club for?", options: ["children aged 6 to 12", "adults only", "teenagers", "babies"], answer: 0 },
            { text: "What will children take home?", options: ["vegetables they pick", "a new toy", "a certificate only", "flowers"], answer: 0 },
            { text: "What should children wear?", options: ["clothes that can get dirty", "school uniforms", "their best clothes", "swimsuits"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "Why rabbits have long ears",
          paragraphs: [
            "Rabbits are famous for their long ears. Some kinds of rabbits and hares have ears that are more than ten centimeters long.",
            "Long ears help rabbits hear very well. They can turn each ear in a different direction to listen for sounds all around them. This helps them hear animals like foxes and eagles that want to catch them.",
            "Rabbits' ears also help them stay cool. Their ears have many blood vessels. When it is hot, blood flows through the ears and heat leaves the body. Rabbits that live in hot deserts often have even longer ears than rabbits in cold places.",
          ],
          questions: [
            { text: "How long can some rabbits' ears be?", options: ["more than ten centimeters", "about one centimeter", "one meter", "two centimeters"], answer: 0 },
            { text: "How do rabbits listen to sounds all around them?", options: ["They turn each ear in a different direction.", "They close their eyes.", "They stand on one leg.", "They make loud noises."], answer: 0 },
            { text: "Why is good hearing important for rabbits?", options: ["to hear animals that want to catch them", "to find water", "to talk to people", "to sleep well"], answer: 0 },
            { text: "The phrase \"stay cool\" in paragraph 3 is closest in meaning to", options: ["not become too hot", "stay calm", "stay dry", "stay awake"], answer: 0 },
            { text: "Which rabbits often have longer ears?", options: ["rabbits that live in hot deserts", "rabbits in cold places", "baby rabbits", "pet rabbits"], answer: 0 },
          ],
        },
      ],
    },
    harder: {
      minutes: 14,
      tasks: [
        {
          kind: "complete-words",
          title: "Zero-risk bias",
          text: "When choosing between options, people often prefer to eliminate one small risk completely rather than achieve a larger reduc{{tion}} in overall risk. Researchers call this preference zero-risk bi{{as}}. In one study, participants were asked to choose between two programs for cleaning up polluted si{{tes}}. One program would reduce a small risk to zero, while the other would produce a greater reduc{{tion}} in total harm but leave some risk remai{{ning}}. Many participants chose the first prog{{ram}}, even though it would prevent fewer illne{{sses}}. People seem to value the certainty of complete safety, which makes them feel more comfor{{table}}. However, this bias can lead governments and individuals to spend money inef{{ficiently}}, focusing on rare risks while ignoring more serious dan{{gers}}.",
        },
        {
          kind: "daily-life",
          genre: "Email",
          title: "Call for speakers: research lunch series",
          text: [
            "To: Doctoral students and postdoctoral researchers",
            "From: Graduate Research Network",
            "Subject: Present your research at our lunch talk series",
            "The Graduate Research Network is looking for speakers for its monthly research lunch series next semester. Each session includes two twenty-minute talks followed by questions from an audience of students and faculty from different departments. Free lunch is provided for all attendees.",
            "Because the audience comes from many fields, speakers should explain their research in clear language and avoid technical terms where possible. To apply, send a title and a short summary of no more than 150 words by December 1. Speakers will receive feedback on their presentation skills from a communication specialist.",
          ],
          questions: [
            { text: "What will each session include?", options: ["two twenty-minute talks followed by questions", "one long lecture", "a written exam", "a workshop on writing"], answer: 0 },
            { text: "Why should speakers avoid technical terms?", options: ["The audience comes from many fields.", "Technical terms are not allowed at the university.", "The talks are for children.", "The talks will be translated."], answer: 0 },
            { text: "What will speakers receive?", options: ["feedback on their presentation skills", "a cash prize", "a publication", "course credit"], answer: 0 },
          ],
        },
        {
          kind: "academic",
          title: "The decline of insects",
          paragraphs: [
            "Insects are the most diverse group of animals on Earth, with more than a million described species and possibly millions more yet to be identified. They play essential roles in ecosystems: they pollinate many crops and wild plants, break down dead material and recycle nutrients, control pests, and serve as food for birds, fish, amphibians and many other animals. In recent years, however, a number of studies have reported alarming declines in insect populations in some parts of the world.",
            "One widely discussed study from Germany found that the total weight of flying insects caught in traps in nature reserves had fallen by more than seventy-five percent over twenty-seven years. Other studies have reported declines in butterflies, bees and beetles in various regions. Scientists point to several likely causes, including the loss of natural habitats to agriculture and urban development, the widespread use of pesticides, light pollution, which disrupts the behavior of nocturnal insects, and climate change.",
            "Not all insect populations are declining, and some species have increased. Researchers also caution that long-term data are lacking for many regions, especially in the tropics, where most insect species live, so it is difficult to know how widespread the decline is. Nevertheless, many scientists consider the evidence serious enough to require action. Proposed measures include reducing pesticide use, planting wildflowers along fields and roads, protecting natural habitats and reducing unnecessary outdoor lighting. Even small actions, such as leaving parts of gardens uncut, can provide food and shelter for insects.",
          ],
          questions: [
            { text: "According to paragraph 1, what role do insects play in ecosystems?", options: ["They pollinate plants, recycle nutrients and serve as food for other animals.", "They only damage crops.", "They have no important role.", "They produce oxygen."], answer: 0 },
            { text: "What did the study from Germany find?", options: ["The weight of flying insects had fallen by more than seventy-five percent.", "Insect populations had doubled.", "Insects had disappeared completely.", "Only butterflies had declined."], answer: 0 },
            { text: "The word \"nocturnal\" in paragraph 2 is closest in meaning to", options: ["active at night", "very small", "flying", "colorful"], answer: 0 },
            { text: "According to paragraph 3, why is it difficult to know how widespread the decline is?", options: ["Long-term data are lacking for many regions.", "Insects are too small to count.", "Scientists are not interested.", "Insects move too often."], answer: 0 },
            { text: "Which measure to help insects is mentioned?", options: ["planting wildflowers along fields and roads", "using more pesticides", "adding more outdoor lighting", "cutting all gardens"], answer: 0 },
          ],
        },
      ],
    },
  },

  // ================= WRITING =================
  writing: {
    buildMinutes: 6,
    build: [
      { promptBy: "Serdar", prompt: "Why are you studying on the bus?", chunks: ["I", "have", "an important", "test", "this afternoon"], end: "." },
      { promptBy: "Helen", prompt: "Did you enjoy your weekend in the city?", chunks: ["we", "visited", "three", "museums", "in two days"], end: "." },
      { promptBy: "Ece", prompt: "I'm not sure what to cook tonight.", chunks: ["why don't", "you", "make", "a simple", "pasta dish"], end: "?" },
      { promptBy: "Ben", prompt: "How long have you been learning the piano?", chunks: ["I", "started", "taking", "lessons", "two years ago"], end: "." },
      { promptBy: "Feride", prompt: "When will your brother arrive?", chunks: ["his flight", "lands", "at", "around", "midnight"], end: "." },
      { promptBy: "Dan", prompt: "Why is the market so busy?", chunks: ["it", "is", "the last day", "before", "the holiday"], end: "." },
      { promptBy: "Burcu", prompt: "What did you do at the conference?", chunks: ["I", "presented", "my research", "on", "urban gardens"], end: "." },
      { promptBy: "Owen", prompt: "Where did you get that bicycle?", chunks: ["my uncle", "gave it", "to me", "for", "my birthday"], end: "." },
      { promptBy: "Sena", prompt: "I've lost my student card.", chunks: ["should", "you", "report it", "to", "the office"], end: "?" },
      { promptBy: "Luke", prompt: "Why did you choose to study nursing?", chunks: ["I", "enjoy", "taking care", "of", "other people"], end: "." },
    ],
    emailMinutes: 7,
    email: {
      scenario: "You took a cooking course at a local community college, and your teacher, Chef Romano, was excellent. The college has asked students to nominate teachers for an award. You want to write a nomination email.",
      to: "the community college awards committee",
      subject: "Nomination of Chef Romano for the teaching award",
      tasks: ["Explain which course you took.", "Describe why the teacher was excellent.", "Explain how the course has affected you."],
      sample: "Dear Awards Committee,\n\nI would like to nominate Chef Marco Romano for this year's Outstanding Teacher Award. I took his ten-week evening course, Introduction to Mediterranean Cooking, from February to April.\n\nChef Romano was an excellent teacher for several reasons. He explained every technique clearly and patiently, and he always demonstrated it slowly before asking us to try. He paid attention to each student and gave helpful, encouraging feedback, even when our dishes did not turn out as planned. He also shared fascinating stories about the history and culture behind each recipe, which made the classes not only educational but also very enjoyable. Although the class was large, he made everyone feel welcome, whatever their level.\n\nThe course has had a real impact on my life. Before it, I rarely cooked and often ate fast food. Now I cook healthy meals at home several times a week, and I have even started hosting dinners for my friends. I believe Chef Romano truly deserves this award.\n\nSincerely,\nKübra Şahin",
    },
    discussionMinutes: 10,
    discussion: {
      course: "Business Studies",
      professor: {
        name: "Dr. Russell",
        text: "Some companies give employees bonuses based on individual performance, while others reward the whole team when it meets its goals. Supporters of individual bonuses say they motivate people to work harder. Supporters of team bonuses argue that they encourage cooperation. Which approach is better: individual bonuses or team bonuses? Explain your view.",
      },
      students: [
        { name: "Natalie", text: "Individual bonuses. People who work harder should be rewarded. Otherwise, some team members might rely on others to do the work." },
        { name: "Barış", text: "Team bonuses. Most projects depend on many people working together. Individual bonuses create competition and make people less willing to help each other." },
      ],
      sample: "I believe the best approach depends on the type of work, but in most modern workplaces, team bonuses combined with some individual recognition work best. Barış makes an important point: many projects, from developing software to running a hospital ward, depend on close cooperation. When employees compete for individual bonuses, they may hide information, avoid helping colleagues or focus only on tasks that make them look good. Team bonuses encourage people to share knowledge and support one another. However, Natalie is right that some team members may contribute less while still receiving the same reward. To prevent this, companies could combine a team bonus with smaller individual rewards based on peer feedback or clear personal goals. This approach would encourage cooperation while still recognizing exceptional effort.",
    },
  },

  // ================= SPEAKING =================
  speaking: {
    examiner: "en-US-AriaNeural",
    repeat: {
      scene: "You are a new employee at a museum café. The café manager is telling you what to say to customers.",
      sentences: [
        "Hello, what would you like to order?",
        "Today's soup is tomato and basil.",
        "We have vegan cakes on the left.",
        "Please wait at the end of the counter.",
        "Museum members receive ten percent off.",
        "If you have a food allergy, please tell me before ordering so I can check the ingredients.",
        "The café is open until five o'clock, but the kitchen stops serving hot food at four, so we can only offer sandwiches after that.",
      ],
    },
    interview: {
      topic: "A researcher is studying people's experiences with work and teamwork. The researcher will ask you some questions.",
      questions: [
        {
          text: "Describe a time when you worked successfully as part of a team.",
          sample: "Last year, I worked with three classmates on a project to design a mobile app for students to share textbooks. At first, we had different ideas, but we decided to divide the tasks based on our strengths. I designed the user interface, another student wrote the code, and the others did research and prepared the presentation. We met twice a week to check our progress. In the end, our project won first prize in the department competition.",
        },
        {
          text: "Do you prefer working alone or in a team?",
          sample: "I enjoy both, but I usually prefer working in a team for big projects. Team members bring different skills and ideas, and we can solve problems faster together. It's also more enjoyable to share the work and celebrate success together. However, for tasks that require deep concentration, like writing an essay, I prefer working alone so I can focus without interruptions.",
        },
        {
          text: "What makes a good team leader?",
          sample: "I think a good team leader listens to everyone's ideas and makes each person feel valued. They should communicate clearly, set realistic goals and help team members when they face difficulties. A good leader also knows the strengths of each team member and gives them suitable tasks. Most importantly, they should set a good example by working hard and taking responsibility when things go wrong.",
        },
        {
          text: "How can teams solve disagreements effectively?",
          sample: "Teams can solve disagreements by discussing problems openly and respectfully. It's important that everyone has a chance to explain their opinion without being interrupted. Instead of focusing on who is right, the team should focus on what is best for the project. Sometimes it helps to list the advantages and disadvantages of each idea or to try a compromise. If the problem continues, a manager or mentor can help mediate.",
        },
      ],
    },
  },
};
